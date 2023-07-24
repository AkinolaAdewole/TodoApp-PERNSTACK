import React,{Fragment} from 'react';
import './App.css';
import InputTodo from './components/InputTodo';
import DisplayTodo from './components/DisplayTodo';

function App() {
  return <Fragment>
        <div className="container">
           <h3 className='text-center'>Akinola Adewole</h3>
          <InputTodo/>
          <DisplayTodo/>
        </div>
           
        </Fragment>
}

export default App;
