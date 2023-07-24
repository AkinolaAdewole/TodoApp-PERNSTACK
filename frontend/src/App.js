import React,{Fragment} from 'react';
import './App.css';
import InputTodo from './components/InputTodo';
import DisplayTodo from './components/DisplayTodo';

function App() {
  return <Fragment>
        <div className="container">
          <InputTodo/>
          <DisplayTodo/>
        </div>
           
        </Fragment>
}

export default App;
