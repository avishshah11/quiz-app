import React from 'react'

const JoinScreen = (props) => {
  return (
    <div className='join-screen'>
        <h2>
            Join Quiz
        </h2>
        <button onClick={props.start}>Start</button>
    </div>
  )
}

export default JoinScreen