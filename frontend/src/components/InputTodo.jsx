import React,{Fragment, useState} from 'react'

const onSubmit= async (e)=>{
 e.preventDefault();
 try {
    const body={description};
 } catch (err){
    console.error(err.message);
 }
}
const InputTodo = () => {
   const [description, setDescription]= useState("")
  return (
    <Fragment>
        <h1 className='text-center mt-5'>TODO</h1>
        <form className='d-flex mt-5' >
            <input type="text" className='form-control' value={description}
             onChange={(e)=>setDescription(e.target.value)}/>
            <button className='btn btn-success'> Add Todo</button>
        </form>
    </Fragment>
  )
}

export default InputTodo 