import React from 'react';
import axios from 'axios';

import UserCard from '../UserCard/UserCard.js';
import './FindUser.scss';

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
          <div className='find-user-wrapper'>
            <h1>Search For User By Github Handle</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="enter user handle"
                name='newName'
                value={this.state.newName}
                onChange={this.handleChange}
              />
              <button type="submit">Search</button>
            </form>
            <div>
                {(this.state.newUserData.login ? <UserCard userData={this.state.newUserData} /> : null)}
                
            </div>
          </div>
        );
    }
}

export default FindUser;