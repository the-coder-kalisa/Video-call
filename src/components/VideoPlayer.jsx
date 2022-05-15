import React, { useContext } from 'react'
import {socketContext} from '../socketContext'

function VideoPlayer() {
    const {name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(socketContext);
  return (
      <div className='flex gap-3 mt-8 justify-center w-full'>
          {stream && 
          <div className={`${!stream ? 'w-1/3' : 'w-full' } relative h-[20rem] border-2 border-solid border-black bg-white`}>
              <div className='absolute'>{name || 'name'}</div>
              <video className="w-full h-full" ref={myVideo} muted playsInline autoPlay/>
          </div>}
          {
              callAccepted && !callEnded &&
              <div className={`w[1/3] h-[20rem] border-2 border-solid border-black bg-white`}>
              <div>{call.name || 'name'}</div>
              <video ref={userVideo} className="w-full h-full" muted playsInline autoPlay/>
          </div>
        }
      </div>
  )
}

export default VideoPlayer