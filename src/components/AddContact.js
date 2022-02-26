import React, { useState } from 'react'
var contactlist=[];  
const AddContact = () => {
    
const [name,setName]=useState('');
const [email,setEmail]=useState("");
const [contact,setContact]=useState('');


const saveContact=(e)=>{
e.preventDefault();
if(name && email && contact){

    const mycontactlist_repeat=JSON.parse(localStorage.getItem('ContactDetails')) || [];
    if(mycontactlist_repeat){
        contactlist=mycontactlist_repeat;
    }

const newcontact={'id':Date.now(), 'name':name, 'email':email, 'contact':contact}
// setContactlist([...contactlist,newcontact]);
console.log(contactlist);
contactlist.push(newcontact)
console.log(contactlist);
localStorage.setItem('ContactDetails', JSON.stringify(contactlist))
console.log(contactlist);
setName('');
setEmail('');
setContact('');
}
else{
    window.alert("Please fill in all details")
}


}


  return (
    <div className='container'>
    <div className='row'>
     <h1 className='display-3 text-center'>Add Contact</h1>
     <div className='col-md-6 shadow mx-auto p-5'>
<form>
    <div className='form-group'>
        <input type="text" placeholder="Name" value={name} className='form-control my-2' onChange={e=>setName(e.target.value)}/>
    </div>
    <div className='form-group'>
        <input type="email" placeholder="Email" value={email} className='form-control my-2' onChange={e=>setEmail(e.target.value)}/>
    </div>
    <div className='form-group'>
        <input type="number" placeholder="Contact No" value={contact} className='form-control my-2' onChange={e=>setContact(e.target.value)}/>
    </div>
    <div className='form-group'>
        <input type="submit" value="Save Contact" onClick={saveContact} className='btn btn-block btn-dark my-2'/>
    </div>
</form>
     </div>
    </div>
  </div>
  )
}

export default AddContact