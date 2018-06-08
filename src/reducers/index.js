import { combineReducers } from 'redux'
import { FILTER_UPDATE, RECEIVE_CLIENTS } from '../actions'

const initialClientsState = {
  count: 0,
  isFetching: false,
  rows: [],
  filteredRows: []
}

const filterText = (state = '', action) => {
  switch (action.type) {
    case FILTER_UPDATE:
      return action.filterText.toLowerCase()
    default:
      return state
  }
}

const hashMap = objArr => {
  if (Array.isArray(objArr)) {
    return new Map(objArr.map(obj => [obj.id, obj]))
  } else {
    return new Map()
  }
}

const clients = (state = initialClientsState, action) => {
  switch (action.type) {
    case FILTER_UPDATE:
      if (state.count) {
        const filteredRows = state.rows.filter(row => {
          const inviteStatus = row.pendingInvite ? 'unregistered' : ''
          const searchString = row.companyName + row.emails + row.names + row.relType + inviteStatus
          return searchString.toLowerCase().includes(action.filterText) ? true : false
        })
        return {
          ...state,
          filteredRows: filteredRows
        }
      } else {
        return state
      }
    case RECEIVE_CLIENTS:
      const apiRes = action.apiResult
      if (!apiRes || !apiRes.data || apiRes.data.length === 0) {
        return state
      }
      const rows = []
      const relationshipsById = hashMap(apiRes.data)
      const membersById = hashMap(apiRes.included.filter(obj => obj.type === 'Member'))
      const companiesById = hashMap(apiRes.included.filter(obj => obj.type === 'Company'))
      relationshipsById.forEach(relObj => {
        const company = companiesById.get(relObj.relationships.partner.data.id)
        const names = []
        const emails = []
        if (company && company.relationships.members.meta.count) {
          company.relationships.members.data.forEach(member => {
            const memberObj = membersById.get(member.id)
            if (memberObj) {
              emails.push(memberObj.attributes.email)
              const nameArr = []
              const fName = memberObj.attributes.first_name
              const lName = memberObj.attributes.last_name
              if (fName) {
                nameArr.push(fName)
              }
              if (lName) {
                nameArr.push(lName)
              }
              if (nameArr.length) {
                names.push(nameArr.join(' '))
              }
            }
          })
        }
        rows.push({
          id: relObj.id,
          names: names.join(', '),
          emails: emails.join(', '),
          created: relObj.attributes.created,
          relType: relObj.attributes.type_relationship,
          companyName: company.attributes.name,
          pendingInvite: company.attributes.pending_invite
        })
      })
      return {
        ...state,
        rows,
        count: rows.length,
        isFetching: false
      }
    default:
      return state
  }
}

const apiResult = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CLIENTS:
      const apiResult = action.apiResult
      return {
        ...state,
        ...apiResult
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  apiResult,
  clients,
  filterText
})

export default rootReducer
