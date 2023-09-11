import React, { useState } from 'react'
import { useAddUserMutation, useGetUsersQuery } from '../../../api/userApi';
import './UserForm.scss';
import {Button} from '../../../assets/Button';

type AddUserProps = {
  setAddOpen : React.Dispatch<React.SetStateAction<boolean>>
}
const AddUser = ({setAddOpen}:AddUserProps) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");

  const {data = []} = useGetUsersQuery();
  //const { refetch } = useGetUsersQuery();

  const [addUser] = useAddUserMutation();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = data.length ? data[data.length - 1].id + 1 : 1;
    console.log('Submitting user data:', {
      id: id,
      name: name,
      username: username,
      email: email,
      phone: phone,
      address: {
        street: address,
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: '',
        },
      },
      company: {
        name: companyName,
        catchPhrase: '',
        bs: '',
      },
      website: website,
    });

    try {
      await addUser({
        id:id,
        name: name,
        username: username,
        email: email,
        phone: phone,
        address: {
          street: address,
          suite: '',
          city: '',
          zipcode: '',
          geo: {
            lat: '',
            lng: '',
          },
        },
        company: {
          name: companyName,
          catchPhrase: '',
          bs: '',
        },
        website: website,
      });
     // refetch();
      // Reset the form fields
      setName('');
      setUsername('');
      setEmail('');
      setPhone('');
      setAddress('');
      setCompanyName('');
      setWebsite('');

      // Close the form after successful submission
      setAddOpen(false);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className='addUser'>
      <h3>Add New User</h3>
      <form className='addUserForm' onSubmit={handleSubmit}>
        <div className='adduserInput'>
          <label htmlFor='name'>Name</label>
          <input 
          type="text"
          required
          name="name"
          value={name} 
          onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className='adduserInput'>
          <label htmlFor='username'>Username</label>
          <input 
          type="text"
          required
          name="username"
          value={username} 
          onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className='adduserInput'>
          <label htmlFor='email'>Email</label>
          <input 
          type="email"
          required
          name="email"
          value={email} 
          onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='adduserInput'>
          <label htmlFor='phone'>Phone</label>
          <input 
          type="text"
          required
          name="phone"
          value={phone} 
          onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        <div className='adduserInput'>
          <label htmlFor='address'>address</label>
          <input 
          type="text"
          required
          name="address"
          value={address} 
          onChange={(e)=>setAddress(e.target.value)}/>
        </div>
        <div className='adduserInput'>
          <label htmlFor='companyName'>companyName</label>
          <input 
          type="text"
          required
          name="companyName"
          value={companyName} 
          onChange={(e)=>setCompanyName(e.target.value)}/>
        </div>
        <div className='adduserInput'>
          <label htmlFor='website'>website</label>
          <input 
          type="url"
          required
          name="website"
          value={website} 
          onChange={(e)=>setWebsite(e.target.value)}/>
        </div>
        <Button 
        type="submit"
         className="custom-class" 
         color="green"
          >Add user</Button>
      </form>
    </div>
  )
}

export default AddUser