import React, { useState } from 'react';
import axios from 'axios';

import UserCard from '../UserCard/UserCard.js';

const SearchUser = () => {
    
    const [ newName, setNewName ] = useState('');
    const [ newUserData, setNewUserData ] = useState({});
    
    console.log(newUserData);
    
    const searchUser = name => {
      axios.get(`https://api.github.com/users/${name}`)
        .then(res => {
            console.log(res.data)
            setNewUserData(res.data)
        })
    };

    const handleChange = event => {
        setNewName(event.target.value)
        console.log(newName)
    }

    const handleSubmit = event => {
        event.preventDefault();
        searchUser(newName);
    }
    
    return(
        <div>
            <h1>Search for Github user</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' 
                       placeholder='search by github handle'
                       value={newName}
                       onChange={handleChange}


                />
                <button type='submit'>Search</button>
            </form>
            <div>
                <UserCard userData={newUserData} />
            </div>
        </div>
    )
}

export default SearchUser;