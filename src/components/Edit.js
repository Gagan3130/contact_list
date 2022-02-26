import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Edit = () => {
const {id}=useParams();
const history = useHistory();
// console.log(id);

const [editname,setEditName]=useState('');
const [editemail,setEditEmail]=useState('');
const [editcontact,setEditContact]=useState('');

useEffect(()=>{
    const mycontactlist_repeat=JSON.parse(localStorage.getItem('ContactDetails')) || [];
    console.log(mycontactlist_repeat);
    const newarray=mycontactlist_repeat.filter(e=>e.id==id)
    console.log(newarray)
    setEditName(newarray[0].name);
    setEditEmail(newarray[0].email);
    setEditContact(newarray[0].contact)
},[])

const updateContact=()=>{
    const mycontactlist_repeat1=JSON.parse(localStorage.getItem('ContactDetails')) || [];
   const newarr1=mycontactlist_repeat1.map((elem)=>{
       if(elem.id==id){
        elem.name=editname;
        elem.email=editemail;
        elem.contact=editcontact;
        return elem;
       }
       else{
           return elem
       }
    })
    console.log(newarr1)
    localStorage.setItem('ContactDetails', JSON.stringify(newarr1))
    history.push('/')
}

  return (
    <div className='container'>
    <div className='row'>
     <h1 className='display-3 text-center'>Edit Contact</h1>
     <div className='col-md-6 shadow mx-auto p-5'>
<form>
    <div className='form-group'>
        <input type="text" value={editname} onChange={e=>setEditName(e.target.value)} placeholder="Name" className='form-control my-2'/>
    </div>
    <div className='form-group'>
        <input type="email" value={editemail} onChange={e=>setEditEmail(e.target.value)} placeholder="Email" className='form-control my-2'/>
    </div>
    <div className='form-group'>
        <input type="number" value={editcontact} onChange={e=>setEditContact(e.target.value)} placeholder="Contact No" className='form-control my-2'/>
    </div>
    <div className='form-group'>
        <input type="submit" onClick={updateContact} value="Update" className='btn btn-dark my-2'/>
        <Link to="/" className="btn btn-danger mx-3">Cancel</Link>
    </div>
</form>
     </div>
    </div>
  </div>
  )
}

export default Edit