import React from 'react';
import '../App.css'
function MyButton({ children}) {
function handleClick(){
  console.log('Button clicked');
}

  return (
    <button className='my-button' onClick={handleClick}>
      {children}
    </button>
  );
}

export default MyButton;
