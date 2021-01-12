import React, { useState, useEffect } from "react";

const AllTodos = () => {
    const [allTodos, setAllTodos] = useState([])
  const getTodos = async() => {
      try {
       const response = await fetch('http://localhost:5000/todos')
        const jsonData = await response.json();
        setAllTodos(jsonData)

      } catch (err) {
          console.error(err.message)
      }
  };

  const deleteTodo = async(id)=>{
      try {
         const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,
         {
          method:"DELETE"   
         }) 
          console.log(deleteTodo)
      } catch (err) {
       console.error(err.message)   
      }
  }
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <>
      <table className="table table-striped mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
      
      {allTodos.map(({todo_id, description}) => 
      <tr key={todo_id}>
          <td>{description}</td>
           <td>Edit</td>
            <td><button className='btn btn-danger' onClick={()=> deleteTodo(todo_id)}>Delete</button></td>
      </tr>)}
        </tbody>
      </table>
    </>
  );
};

export default AllTodos;