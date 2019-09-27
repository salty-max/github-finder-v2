import React, { Component } from 'react'
import axios from 'axios'

import './App.scss'

import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const res = await axios.get('https://api.github.com/users')
    this.setState({
      users: res.data,
      loading: false
    })
  }

  render() {
    const { users, loading } = this.state;

    return (
      <>
        <Navbar />
        <section className='section'>
          <div className='container'>
            <Users loading={loading} users={users} />
          </div>
        </section>
      </>
    )
  }
}

export default App
