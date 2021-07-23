import React from 'react';

const Folders = () => {

  function clickHandler(){
    console.log("hoges")
  }

  return (  
    
    <div className="d-flex flex-column w-25">
      <button onClick={clickHandler}>
        <img src="../src/assets/images/cupmen-1.png" />
      </button>
      <button>
      <img src="../src/assets/images/cupmen-2.png" />

      </button>
      {/* <img src="../src/assets/images/cupmen-2.png" />
      <img src="../src/assets/images/cupmen-3.png" />
      <img src="../src/assets/images/cupmen-4.png" /> */}


    </div>
  )
}


export default Folders;
