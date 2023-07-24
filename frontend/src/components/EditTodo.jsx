import React,{Fragment} from 'react'

const EditTodo = () => {
  return (
    <Fragment>

        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
         Edit
        </button>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

                <div className="modal-body">
                    <input type="text" placeholder='Edit Todo' className='form-control'/>
                </div>

            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Save changes</button>
            </div>
            </div>
        </div>
        </div>
    </Fragment>
  )
}

export default EditTodo