import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import APIHandler from './api-handler'
let idArray = [];
let theAPI = new APIHandler('http://localhost:8000')
class App extends React.Component {
  render (){
    // theAPI.getFullList().then(res => {
    //   console.log(res.data)
    // })
    // theAPI.getOneRegister(2).then(res => {
    //   console.log(res.data);
    // })
    // theAPI.createOneRegister('Iggy Bello', 'Student', '100', 'Life');
    // theAPI.updateOneRegister (4, 'Ignacious Bellomitis', 'Estudiante', 'Gun', 'Real World' );
    
    return (
      <div>
        Can't get any of this API data to display on the page
      </div>
    );
  }

}




export default App;
