
import React,{useState} from 'react';
function Form( ) {
    const [name,setName]=useState('sukesh');
    const [ename,setEmail]=useState('sukesh@gamil.com')
    const [usn,setUsn]=useState('')
    const [sem,setSem]=useState('sem')
    const [phone,setPhone]=useState('phone')
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data = {
            name:name,
            enmae:ename,
            usn:usn,
            sem:sem,
            phone:phone
        }
       console.log(data)
    };
    return (
        <div>
 my student details:
 <form  onSubmit={handleSubmit}> 
    <input type="text" value={name} 
    placeholder="student name" onChange={(e)=>
    setName(e.target.value)}></input>
    <input type="Email" value={ename} placeholder="student ename" 
    onChange={(e)=> setEmail(e.target.value)}></input>
    <input type="usn" value={usn} placeholder="student usn"
    onChange={(e)=>setUsn(e.target.value) }></input>
    <input type="sem" value={sem} placeholder="student sem"
    onChange={(e)=>setSem(e.target.value) }></input>
    <input type="num" value={phone} placeholder="student phone"
    onChange={(e)=>setPhone(e.target.value) }></input>
    <button>submit</button> 
 </form>
 <p>{name}</p>
 <p>{ename}</p>
 <p>{usn}</p>
 <p>{sem}</p>
 <p>{phone}</p>

        </div>
    )
    
}
export default Form