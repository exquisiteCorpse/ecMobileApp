import React, { Component } from 'react'
import AppNav from './AppNav'
import App from './App'
import {connect} from 'react-redux'
import { getUserApp } from '../store'
class Data extends Component {
  componentDidMount () {
    this.props.fetchData()
  }
  render () {
    return (
      <AppNav>
        <App />
      </AppNav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dbUser: state.dbUser
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => {
    dispatch(getUserApp())
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Data)
