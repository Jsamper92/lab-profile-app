import React, { Component } from 'react'

export default class authService extends Component {
  constructor() {
    let service = axios.create({
      baseURL: 'http://localhost:5000/api/auth',
      withCredentials: true
    });
    this.service = service;
  }
  signup = (username, password) => {
    return this.service.post('/auth/signup', {
        username,
        password
      })
      .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login/signup', {
        username,
        password
      })
      .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/auth/loggedin', )
      .then(response => response.data)
  }

  logout = () => {
    return this.service.get('/auth/logout',)
      .then(response => response.data)
  }
  
}
