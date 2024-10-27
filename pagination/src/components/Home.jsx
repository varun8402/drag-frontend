import React from 'react';

import UserList from './List';
const Home = () => {
   
   
  return (
    <div>
     
      <a href='/add-user' className ="add-user-button">Add User</a>
      <UserList/>
    </div>
  );
};
export default Home;