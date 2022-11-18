import React, {useState} from 'react'

function AddContacts(props) {

  const initVal = {
    name: "",
    email: "",
  };
  const [contact, setContact] = useState(initVal);
  const add = (e) => {
    e.preventDefault();
    if(contact.name === "" || contact.email === ""){
      alert("Fill all the filled");
      return;
    }
    props.addContactHandler(contact);
    setContact({name: "", email: ""});
  }

  return (
    
    <div className="ui main">
      <h2>Add Contacts</h2>
      <form className='ui form' onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input type="text" value={contact.name} name='name' placeholder='Name' onChange={(e) => setContact({...contact ,[e.target.name] :  e.target.value})}/>
        </div>
        <div className="field">
          <label>Email</label>
          <input type="email" value={contact.email} name='email' placeholder='Email' onChange={(e) => setContact({...contact, [e.target.name]: e.target.value})}/>
        </div>
        <button className='ui button blue'>Add</button>
      </form>
    </div>
  )
}

export default AddContacts