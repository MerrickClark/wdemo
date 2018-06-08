import React, { Component } from 'react'
import timespan from 'readable-timespan'

const ClientRow = ({ id, companyName, relType, pendingInvite, names, emails, created, dateNowMs }) => {
  let tags = [relType]
  if (pendingInvite) {
    tags.push('unregistered')
  }
  return (
    <tr key={id}>
      <td className='coName'>{companyName}</td>
      <td className='tags'>{tags.map(tag => (<span>{tag}</span>))}</td>
      <td>{names}</td>
      <td>{emails}</td>
      <td>{timespan.parse(dateNowMs - Date.parse(created))} ago</td>
    </tr>
  )
}

class ClientTable extends Component {
  render() {
    const rows = []
    if (this.props.tableRows && this.props.tableRows.length) {
      this.props.tableRows.forEach(client => {
        client.dateNowMs = this.props.dateNowMs
        rows.push(ClientRow(client))
      })
    }
    return (
      <table>
        <thead>
          <tr>
            <th>COMPANY NAME</th>
            <th></th>
            <th>REPRESENTATIVE</th>
            <th>EMAIL</th>
            <th>INVITED</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

class FilterableClientTable extends Component {
  render() {
    return (
      <div className='FilterableClientTable'>
        <ClientTable tableRows={this.props.rows} dateNowMs={Date.now()} />
      </div>
    )
  }
}

export default FilterableClientTable
