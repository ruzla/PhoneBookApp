import { useState, useEffect } from 'react';
import axios from 'axios';
import './PhoneBookPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { ContactCard } from '../Components/ContactCard';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TextField from "@mui/material/TextField";
import AddFormDialog from '../Components/AddContactDialog';
import EditFormDialog from '../Components/EditContactDialog';

export default function PhoneBookPage() {
  const [contacts, setContacts] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedEditContact, setSelectedEditContact] = useState({});

  const handleAddContact = () => {
    !openAdd ? setOpenAdd(true) : setOpenAdd(false);
  };

  const handleEditContact = (contact) => {
    if (!openAdd) {
      setSelectedEditContact(contact);
      setOpenEdit(true);
    } else {
      setOpenEdit(false);
      setSelectedEditContact({});
    }
  };

  const getContacts = () => {
    axios.get(`https://localhost:7041/api/phonebook`)
      .then((response) => {
        setContacts(response.data);
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      })
  }

  const handleSearchChange = (e) => {
    if (!searchResults) return searchResults(contacts);

    const search = contacts.filter(contact => contact.lastName.toLowerCase().includes(e.target.value.toLowerCase()));

    setSearchResults(search);
  }

  useEffect(() => {
    getContacts();
  }, [])

  return (
    <div className="phoneBookPageContainer">
      <h1 className='page-title'>
        <FontAwesomeIcon icon={faAddressBook} />  Phone Book App
      </h1>
      <div className='pageHeadingContainer'>
        <div className='pageHeading'>
          <h1>Contacts</h1>
        </div>
        <div className='addContactButton'>
          <button onClick={handleAddContact} className='addButton'>
            <FontAwesomeIcon icon={faPlus} /> Add Contact
          </button>
        </div>
      </div>
      <div className='searchContainer'>
        <TextField
          className='searchBar'
          placeholder='Search for contact by last name...'
          onChange={handleSearchChange}
        />
      </div>
      <div className='contactCardContainer'>
        {searchResults?.map((contact) =>
          <div className='cardContainer' key={contact.id}>
            <ContactCard 
              contact={contact} 
              handleEditContact={handleEditContact} 
              setContacts={setContacts} 
              setSearchResults={setSearchResults} 
              setOpenAdd={setOpenAdd} 
              setSelectedEditContact={setSelectedEditContact} 
            />
          </div>)}
      </div>
      <AddFormDialog 
        openAdd={openAdd} 
        setOpenAdd={setOpenAdd} 
        setContacts={setContacts} 
        setSearchResults={setSearchResults} 
      />
      <EditFormDialog 
        openEdit={openEdit} 
        setOpenEdit={setOpenEdit} 
        setContacts={setContacts} 
        setSearchResults={setSearchResults} 
        selectedEditContact={selectedEditContact} 
        contacts={contacts} 
      />
    </div>
  );
}
