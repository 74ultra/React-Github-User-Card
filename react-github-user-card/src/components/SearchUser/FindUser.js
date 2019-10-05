import React from 'react';
import axios from 'axios';

import UserCard from '../UserCard/UserCard.js';

class FindUser extends React.Component {
    constructor(){
        super();
        this.state = {
            newName: '',
            newUserData: {}
        }
    }

    searchUser = (name) => {
        axios.get(`https://api.github.com/users/${name}`)
          .then(res => {
              console.log(res.data)
              this.setState({
                  newUserData: res.data
              })
          })
      };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state.newName);
        
    }

    handleSubmit = event => {
        event.preventDefault();
        this.searchUser(this.state.newName);
        this.setState({
            newName: ''
        })
    }

    render(){
        return (
          <div>
            <h1>Search for Github user II</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="search by github handle"
                name='newName'
                value={this.state.newName}
                onChange={this.handleChange}
              />
              <button type="submit">Search</button>
            </form>
            <div>
                <UserCard userData={this.state.newUserData} />
            </div>
          </div>
        );
    }
}

export default FindUser;