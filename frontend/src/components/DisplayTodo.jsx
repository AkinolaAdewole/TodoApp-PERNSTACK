import React,{Fragment, useState, useEffect} from 'react'

const DisplayTodo = () => {

    const [todos, setTodos]=useState([]);
    const getTodos= async ()=>{
        try {
            const response= await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            // console.log(jsonData);
            setTodos(jsonData);
        } catch(err){
            console.error(err);
        }
    }

    useEffect(()=>{
        getTodos()
    },[]);

    console.log(todos);

  return (
    <div>
        <Fragment>
        <table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* <tr>
        <td>Default</td>
        <td>Defaultson</td>
        <td>def@somemail.com</td>
      </tr>      
      <tr class="success">
        <td>Success</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr class="danger">
        <td>Danger</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr class="info">
        <td>Info</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
      <tr class="warning">
        <td>Warning</td>
        <td>Refs</td>
        <td>bo@example.com</td>
      </tr>
      <tr class="active">
        <td>Active</td>
        <td>Activeson</td>
        <td>act@example.com</td>
      </tr> */}


    </tbody>
  </table>
        </Fragment>
    </div>
  )
}

export default DisplayTodo