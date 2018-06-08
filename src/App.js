import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterUpdate, fetchClientsIfNeeded } from './actions'
import SearchBar from './components/SearchBar'
import FilterableClientTable from './components/FilterableClientTable'
import './App.css'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchClientsIfNeeded())
  }

  handleChange = filterText => {
    this.props.dispatch(filterUpdate(filterText))
  }

  render() {
    const { filterText, clients, isFetching } = this.props
    let displayRows = clients.rows
    let isEmpty = clients.count === 0
    if (filterText && clients.filteredRows.length) {
      displayRows = clients.filteredRows
    } else if (filterText && clients.filteredRows.length === 0) {
      displayRows = []
      isEmpty = true
    }
    return (
      <div className='App'>
        <div className='App-header'>
          <SearchBar value={filterText} onChange={this.handleChange} />
        </div>
        {isEmpty ? (
          isFetching ? (
            <h3>Loading...</h3>
          ) : (
            <h3>No results.</h3>
          )
        ) : (
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <FilterableClientTable rows={displayRows} />
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { clients, dispatch, filterText } = state

  return { clients, dispatch, filterText }
}

export default connect(mapStateToProps)(App)
