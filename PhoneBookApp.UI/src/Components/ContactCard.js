import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import './ContactCard.css'
import axios from 'axios';

export const ContactCard = ({ contact, setContacts, setSearchResults, handleEditContact }) => {
  const deleteContact = (id) => {
    axios.delete(`https://localhost:7041/api/PhoneBook/${id}`)
      .then((response) => {
        setContacts(response.data);
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <>
      <div className='detailsContainer'>
        <div className='nameContainer'>{contact.firstName} {contact.lastName}</div>
        <a href={contact.phoneNumber} className='phoneNumberContainer'><FontAwesomeIcon className='phoneIcon' icon={faPhone} /> {contact.phoneNumber}</a>
      </div>
      <div className='buttonsContainer'>
        <button onClick={() => handleEditContact(contact)} className='editButton'>
          <FontAwesomeIcon className='editIcon' icon={faPenToSquare} />
        </button>
        <button onClick={() => deleteContact(contact.id)} className='deleteButton'>
          <FontAwesomeIcon className='deleteIcon' icon={faTrash} />
        </button>
      </div>
    </>
  )
}
