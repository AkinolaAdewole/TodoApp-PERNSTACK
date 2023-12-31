import React,{Fragment, useState} from 'react'

const EditTodo = ({todo}) => {
    const [description, setDescription]=useState(todo.description);
    // console.log(todo);

    const updateTodo= async (e)=>{
        e.preventDefault()
        try {
            const body = {description};
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,
            {
                method :"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            })
            //  console.log(response);
            window.location="/";
            } catch (err) {
                console.error(err.message);
            }
    }
  return (
    <Fragment>

        <button type="button" className="btn btn-warning" 
         data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
         Edit
        </button>

        <div className="modal fade" id={`id${todo.todo_id}`} onClick={()=>setDescription(todo.description)} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setDescription(todo.description)}></button>
            </div>

                <div className="modal-body">
                    <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className='form-control'/>
                </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>setDescription(todo.description)} >Close</button>
                <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={(e)=>updateTodo(e)}>Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </Fragment>
  )
}

export default EditTodo