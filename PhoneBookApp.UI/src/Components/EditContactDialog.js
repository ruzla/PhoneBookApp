import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function EditFormDialog({ openEdit, setOpenEdit, setContacts, setSearchResults, selectedEditContact }) {
  const [editContact, setEditContact] = useState({ selectedEditContact })

  useEffect(() => {
    setEditContact(selectedEditContact);
  }, [selectedEditContact]);

  const closeDialog = () => {
    setOpenEdit(false);
  }

  const saveContact = () => {
    axios({
      method: "put",
      url: "https://localhost:7041/api/phonebook",
      headers: { 'Content-Type': 'application/json' },
      data: editContact
    })
      .then((response) => {
        setContacts(response.data);
        setSearchResults(response.data);
        setOpenEdit(false);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  const handleChange = (name, value) => {
    const contact = { ...editContact, [name]: value }
    setEditContact(contact);
  }

  return (
    <div>
      <Dialog open={openEdit}>
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          <TextField
            name="editFirstName"
            autoFocus
            margin="dense"
            id="editFirstName"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => handleChange('firstName', e.target.value)}
            value={editContact?.firstName}
          />
          <TextField
            name="editLastName"
            autoFocus
            margin="dense"
            id="editLastName"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => handleChange('lastName', e.target.value)}
            value={editContact?.lastName}
          />
          <TextField
            name="editPhoneNumber"
            autoFocus
            margin="dense"
            id="editPhoneNumber"
            label="Phone Number"
            type="number"
            fullWidth
            variant="standard"
            onChange={(e) => handleChange('phoneNumber', e.target.value)}
            value={editContact?.phoneNumber}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button onClick={saveContact}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}