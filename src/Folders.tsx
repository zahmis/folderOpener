import React, {VFC} from 'react';
// import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Folders: React.VFC = () => {

  function handleClick(){
    console.log("hoge")
  }
  
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
