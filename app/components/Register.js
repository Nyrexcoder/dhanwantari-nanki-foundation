'use client';
import { useState } from "react";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Button from '@mui/material/Button';
const names = ["Health Care", "Education", "Welfare"];

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
const Register = () => {

  const [username, setUsername] = useState("");

  const [amount, setAmount] = useState("");

  const [mobile, setMobile] = useState("");

  const [address, setAddress] = useState("");

  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleSubmit = () => {
    console.log('object');
  }

  return (
    <>
      <div className="p-5">
      <h1 className="font-bold text-center">Registration</h1>
      <div className="w-full md:w-1/2 mx-auto">
      <form onSubmit={handleSubmit}>
          <TextField
            label="Enter your name"
            variant="outlined"
            value={username}
            // onChange={handleUsernameChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Enter your Mobile Number"
            variant="outlined"
            value={mobile}
            // onChange={handleUsernameChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Enter your Email Address"
            variant="outlined"
            value={address}
            // onChange={handleUsernameChange}
            fullWidth
            margin="normal"
          />

          <InputLabel id="demo-multiple-checkbox-label">
            Select Services
          </InputLabel>
          <Select
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            // onChange={handleChange}
            input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(", ")}
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
          
          <Button  className="mt-2" variant="outlined">Register</Button>
        </form>
      </div>
    
      </div>
    </>
  );
};

export default Register;
