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

    // console.log(todos);

    const deleteTodo= async(id)=>{
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,{
                method:"DELETE"
            });
            // console.log(deleteTodo);
            setTodos(todos.filter(todo=>todo.todo_id !== id))
        } catch (err) {
            console.error(err.message);
        }
    };

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
      */}
      {todos.map((todo)=>(
        <tr key={todo.todo_id}>
            <td>{todo.description}</td>
            <td>Edit</td>

            <td>
                <button 
                    className='btn btn-danger'
                    onClick={()=>deleteTodo(todo.todo_id)}>Delete</button>
            </td>
        </tr>
      ))}


    </tbody>
  </table>
        </Fragment>
    </div>
  )
}

export default DisplayTodo