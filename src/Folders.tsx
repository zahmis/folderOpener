import React from 'react';


const Folders = () => {

  function handleClick(){
    console.log("hoge")
  }
  console.log('hoge1')
  
  return (  
    <div className="text-center">
      <button
         type="button"
         className="btn btn-primary"
         onClick={() => handleClick()}       
      >
        openfolder
      </button>
    </div>
  )
}


export default Folders;
