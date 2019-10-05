import React from 'react';
import axios from 'axios';
import './App.scss';

import UserCard from './components/UserCard/UserCard.js';
import FollowersList from './components/Followers/FollowersList.js';
import FindUser from './components/SearchUser/FindUser.js';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      userData: {},
      followersData: []
    }

  }

  componentDidMount(){
    axios.get('https://api.github.com/users/74ultra')
      .then(res => {
        let userApiData = res.data;
        let followersUrl = res.data.followers_url
        
        console.log('User data', userApiData)
        
        this.setState({
          userData: userApiData
        })

        axios.get(`${followersUrl}`)
          .then(res => {
            let followersApiData = res.data;
            this.setState({
              followersData: followersApiData
            })
          })

      })
      .catch(error => {
        console.log('There was a problem', error)
      })
  }

  

  render(){
    return (
      <div className='main-wrapper'>
        <h1>74ultra Github User Card</h1>
        <UserCard userData={this.state.userData} />
        <FindUser />
        <h1>My Followers</h1>
        <FollowersList followersData={this.state.followersData} />
        
      </div>
      
    )
  }
}

export default App;
