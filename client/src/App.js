import React from 'react';
import './App.css';

import FormikForm from './components/Form.js'
import User from './components/User.js'

class App extends React.Component {
  constructor(){
    super()
  }

  render(){
  return (
    <div>
      <FormikForm/>
      <User/>
    </div>
  );}
}

export default App;