import { useState } from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';


const names = [
  "Health Care",
  "Education",
  "Welfare"
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const RegistrationModal = ({ status, funcClose }) => {
  const [open, setOpen] = useState(status);

  const [username, setUsername] = useState("");
  const [amount, setAmount] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  
  const [personName, setPersonName] = useState([]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your form submission logic here
    console.log("Username:", username);
    console.log("Amount:", amount);
  };

  const handleClose = () => {
    funcClose(false);
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Registration Form"}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Enter your name"
              variant="outlined"
              value={username}
              onChange={handleUsernameChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Enter your Mobile Number"
              variant="outlined"
              value={mobile}
              onChange={handleUsernameChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Enter your Email Address"
              variant="outlined"
              value={address}
              onChange={handleUsernameChange}
              fullWidth
              margin="normal"
            />
           
        <InputLabel id="demo-multiple-checkbox-label">Select Services</InputLabel>
        <Select
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          fullWidth
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Submit</Button>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RegistrationModal;
