import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  
const [newContactlist,setNewContactList]=useState([])

useEffect(()=>{
  const mycontactlist=JSON.parse(localStorage.getItem('ContactDetails')) || [];
  setNewContactList(mycontactlist);
   console.log(mycontactlist);
   console.log(newContactlist);

},[])

const deleteContact=(id)=>{
console.log(id);
let confirm=window.confirm("Are you sure you want to delete this contact ");
if(confirm==true){
  const mycontactlist_repeat2=JSON.parse(localStorage.getItem('ContactDetails')) || [];
  const afterDeletelist=mycontactlist_repeat2.filter(e=>e.id!=id);
  console.log(afterDeletelist);
  localStorage.setItem('ContactDetails', JSON.stringify(afterDeletelist));
  setNewContactList(afterDeletelist);
}

}

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-right">
            <Link to="/add" className="btn btn-outline-dark">Add Contact</Link>
            </div>
          <div className="col-md-10 mx-auto">
            <table className="table table-hover">
              <thead className="text-white bg-dark text-center">
                <tr>
                <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact No</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
               {
               newContactlist.map((e,id)=>(
               <tr key={id}>
                 <td>{id+1}</td>
                 <td>{e.name}</td>
                 <td>{e.email}</td>
                 <td>{e.contact}</td>
                 <td>
                   <Link to={`/edit/${e.id}`} className="btn btn-small btn-primary ">Edit</Link>
                   <button type="button" onClick={()=>deleteContact(e.id)} className="btn btn-small btn-danger mx-2">Delete</button>
                 </td>
               </tr>
               ))
               }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
  );
};

export default Home;
