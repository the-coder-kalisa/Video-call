import React, { useContext, useState } from 'react'
import {Button, TextField,Grid, Typography, Container, Paper} from '@mui/material'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { Assignment, Phone, PhoneDisabled } from '@mui/icons-material'
import {socketContext} from '../socketContext'
function Options({children}) {
  const {me, callAccepted,callEnded,  name, setName, leaveCall, callUser} = useContext(socketContext);
  const [idToCall, setIdToCall] = useState("");
  return (
  <div className='mt-5 py-5 rounded-md border-2 border-solid border-black bg-white w-full flex flex-col items-start'>
    <form noValidate className='ml-2 flex justify-between'>
      <div>
        <h1 className='text-xl font-semibold pl-3'>Account info</h1>
        <input type="text" className="outline-none px-2 py-2 border-2 border-solid w-[90%]" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
        <CopyToClipboard text={me}>
        <Button variant='contained' style={{width: '15rem', marginTop: '10px'}} color="primary" startIcon={<Assignment fontSize="large"/>}>Copy Your Id</Button>
        </CopyToClipboard>
      </div>
      <div>
        <h1 className='text-xl font-semibold pl-3'>Make a call</h1>
        <input type="text" className="outline-none px-2 py-2 border-2 border-solid w-[90%]" placeholder='ID to call' value={idToCall} onChange={(e) => setIdToCall(e.target.value)}/>
        {callAccepted && !callEnded ? (
          <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large"/>} onClick={leaveCall} >Hang up</Button>
        ) : <Button variant="contained" color="primary" startIcon={<Phone fontSize="large"/>} onClick={()=> callUser(idToCall)}>Call</Button> }
      </div>
      
    </form>
    {children}
  </div>
  )
}

export default Options