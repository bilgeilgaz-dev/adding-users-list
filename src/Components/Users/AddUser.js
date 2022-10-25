import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [age, setAge] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault();
    if(age.trim().length === 0 || username.trim().length === 0){
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age'
      })
      return;
    }

    if(+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age.(> 0)'
      })
      return;
    }
    props.onAddUser(username, age);
    setUsername('');
    setAge('');
  }

  const errorHandler = () => {
    setError(null);
  }

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} buttonText="Okay" onConfirm={errorHandler}/>}
      <Card className={classes.input} >
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={usernameChangeHandler} value={username}/>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" onChange={ageChangeHandler} value={age}/>
          <Button buttonText="Add user" type="submit"></Button>
        </form>
      </Card>
    </div>
    );
};

export default AddUser;
