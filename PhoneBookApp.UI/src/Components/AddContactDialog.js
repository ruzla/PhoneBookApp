import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useState } from 'react';

export default function AddFormDialog({ openAdd, setOpenAdd, setContacts, setSearchResults }) {
  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: ""
  })

  const closeDialog = () => {
    setOpenAdd(false);
  }

  const clearForm = () => {
    setNewContact(
      {
        firstName: "",
        lastName: "",
        phoneNumber: ""
      }
    )
  }

  const addContact = () => {
    axios({
      method: "post",
      url: "https://localhost:7041/api/phonebook",
      headers: { 'Content-Type': 'application/json' },
      data: newContact
    })
      .then((response) => {
        setContacts(response.data);
        setSearchResults(response.data);
        clearForm();
        setOpenAdd(false);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  const handleChange = (name, value) => {
    const contact = { ...newContact, [name]: value }
    setNewContact(contact);
  }

  return (
    <div>
      <Dialog open={openAdd}>
        <DialogTitle>Add Contact</DialogTitle>
        <DialogContent>
          <TextField
            name="editFirstName"
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => handleChange('firstName', e.target.value)}
            value={newContact.firstName}
          />
          <TextField
            name="lastName"
            autoFocus
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => handleChange('lastName', e.target.value)}
            value={newContact.lastName}
          />
          <TextField
            name="phoneNumber"
            autoFocus
            margin="dense"
            id="phoneNumber"
            label="Phone Number"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => handleChange('phoneNumber', e.target.value)}
            value={newContact.phoneNumber}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button onClick={addContact}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}