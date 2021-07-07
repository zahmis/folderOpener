import React, {VFC} from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFolder } from '@fortawesome/free-solid-svg-icons'




const Folder: React.VFC = () => {
  return (  
    <div className="text-center">
      <i className="fa-solid fa-folder">Image folder</i>
      {/* <FontAwesomeIcon icon={faFolder} size={15}/> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/></svg> */}
      <ArrowRight color="royalblue" size={96} />

    </div>
  )
}


export default Folder;
