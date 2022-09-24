import React,  { useState } from 'react'

function Form(props) {
    const [toDo,settoDo]=useState({name:"",completed:false});
    const handleSubmit=(e)=>{
      e.preventDefault();
      props.addToDoCallback(toDo)
      settoDo({name:"",completed:false}
    );

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={toDo.name} placeholder='enter to do' onChange={(e)=>settoDo({name:e.target.value,completed:false})} />
            <button>add</button>
        </form>
        
    </div>
     
  )
}

export default Form;