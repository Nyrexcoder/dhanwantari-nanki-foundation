'use client';
// components/LoginForm.js
import TextField from "@mui/material/TextField";
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

const Donation = () => {
  const [username, setUsername] = useState("");
  const [amount, setAmount] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

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

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="shadow-2xl p-5 m-5 md:mr-5 mx-auto mt-8 rounded-lg md:mt-0">
      <form onSubmit={handleSubmit}>
        <h1 className="text-green-600 font-semibold text-xl">Donation</h1>
        <TextField
          label="Enter Donation Amount"
          variant="outlined"
          value={amount}
          onChange={handleUsernameChange}
          fullWidth
          margin="normal"
        />
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
          label="Enter your Address"
          variant="outlined"
          value={address}
          onChange={handleUsernameChange}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth className="mt-3">
        <InputLabel id="demo-simple-select-label">Service</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Service"
          onChange={handleChange}
        >
          <MenuItem value={'health-care'}>Health Care</MenuItem>
          <MenuItem value={'education'}>Education</MenuItem>
          <MenuItem value={'welfare'}>Welfare</MenuItem>
        </Select>
      </FormControl>
        <button className="bg-[#40572a] text-white w-full md:w-auto p-3 rounded-md mt-3">Donate</button>
      </form>
    </div>
  );
};

export default Donation;
