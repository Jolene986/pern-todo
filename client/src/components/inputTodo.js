import React,{useState} from 'react'

const InputTodo = () => {
    const[description, setDescription] = useState('')
    const onSubmit = async(e)=>{
        e.preventDefault();
        try {
            const body = {description}
            const response = await fetch('http://localhost:5000/todos', {
                method:'POST',
                headers:{"Content-type": "application/json"},
                body: JSON.stringify(body)
            })
           window.location = '/'
        } catch (err) {
            console.error(err.message)
        }
    }
    return (
        <>
          <h1 className='text-center mt-5'> To do list</h1>
          <form className='d-flex mt-5' onSubmit={onSubmit}>
              <input type='text'
              value={description} 
              className='form-control'
              onChange={e=>setDescription(e.target.value)}
              />
              <button type='submit' className='btn btn-success' >Add</button>
              </form>  
        </>
    )
}

export default InputTodo
