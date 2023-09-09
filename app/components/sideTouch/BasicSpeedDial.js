import React, { useState } from 'react';
import { SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const actions = [
  { icon: <WhatsAppIcon className='text-green-500' />, name: 'WhatsApp', link: 'https://api.whatsapp.com/send?phone=8851643209&text=Hello Savita Paint' },
  { icon: <MailOutlineIcon className='text-red-500' />, name: 'Mail', link: 'https://web.whatsapp.com/' },
  { icon: <CallIcon className='text-blue-500'  />, name: 'Call', link: 'tel:8851643209' },
];

export default function BasicSpeedDial() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      icon={<SupportAgentIcon className='text-blue-500' />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      sx={{
        position: 'fixed',
        bottom: 30, // Adjust the distance from the bottom as needed
        right: 16, // Adjust the distance from the right as needed
        zIndex: 1000, // Adjust the z-index value as needed
      }}
      direction="up"
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          href={action.link}
          onClick={handleClose}
        />
      ))}
    </SpeedDial>
  );
}
