import React, { useContext } from 'react';
import { Button } from '@mui/material';

import { socketContext } from '../socketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(socketContext);
  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>{call.name} is calling:</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;