import React from 'react';
import './App.css';

import FormikForm from './components/Form.js'

class App extends React.Component {
  constructor(){
    super()
  }

  render(){
  return (
    <div>
      <FormikForm/>
    </div>
  );}
}

export default App;
