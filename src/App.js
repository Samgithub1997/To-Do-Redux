import React from 'react';
import './App.css';
import ToDo from './components/ToDo'


function App() {


  return (
    <div className="App">
        Redux To Do List
        <br/><br/>
        <div className="ToDoContainer">
          <ToDo />
        </div>
    </div>
  );
}

export default App;
