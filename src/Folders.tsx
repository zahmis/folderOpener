import React,{useState} from 'react';

const Folders = () => {

  const [target, setTarget] = useState(1)

  function clickHandler(target:number){
    setTarget(target)
    console.log(target)
  }

  return (  
    <>
    <div className="d-flex flex-column w-25">
      <button onClick={()=>clickHandler(1)}><img src="../src/assets/images/cupmen-1.png" /></button>
      <button onClick={()=>clickHandler(2)}><img src="../src/assets/images/cupmen-2.png" /></button>
      <button onClick={()=>clickHandler(3)}><img src="../src/assets/images/cupmen-3.png" /></button>
      <button onClick={()=>clickHandler(4)}><img src="../src/assets/images/cupmen-4.png" /></button>
    </div>
    <div>
      <img src="../src/assets/images/cupmen-1.png"/>
    </div>
    </>
  )
}


export default Folders;
