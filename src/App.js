import logo from './logo.svg';
import './App.css';
import './Portpolio.js';
import Portpolio from './Portpolio.js';
import  TodoList from './ToDolist.jsx';
 
import Form from  './Component/Form.jsx';

import {BrowserRouter,Routes,Route, Link}  from 'react-router-dom';

function Profile() {
  return (
    <div>
     
      <p className='name'>sukesh
      </p>
    </div>
  )

}

function Skill() {
  return (
    <div>
      <p className='hii'>
     java
      cs
      </p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
   
      <Routes>
        <Route path="/about" element={<About />}> </Route>
        <Route path="/cont" element={<Cont />}></Route>
         <Route path="/team" element={<Team />}></Route>
         <Route path="form" element={<Form />}></Route> 
         <Route path="ToDoList" element={<TodoList />}></Route> 
         </Routes> </BrowserRouter>

    </div>
  );
}
function NavBar() {
  return(
    <div>
      <Link to="/about">About</Link>
      <Link to="/cont">Cont</Link>
      <Link to="/team">Team</Link>
      <Link to ="/form">Form</Link>
      <Link to="/ToDoList">TodoList</Link>
    </div>
  )
  
}
function About(){
  return(
    <div>
      this is abt component
    </div>
  )
}
function Cont() {
  return(
    <div>
      mhy conct
    </div>
  )
  
}
function Team() {
  return(
    <div  className="bat">
     
      <table>
        <tr>
          <th>name</th>
          <th>age</th>
        </tr>
        <tr>
          <td>
            rohith
          </td>
          <td>20

          </td>
        </tr>
      </table>
      this is my team and memebers are 1,2,3
    </div>
  )
  
}

export default App;



