import React,{useState} from 'react';

const Folders = () => {

  const [target, setTarget] = useState(1)

  function clickHandler(target:number){
    setTarget(target)
  }

  let src = `../src/assets/images/cupmen-${target}.png`

  return (  
    <>
    <div className="container">
      <div className="row">
        <div className="d-flex flex-column col-6">
          <span onClick={()=>clickHandler(1)}><img src="../src/assets/images/cupmen-1.png" />picture-angle-1</span>
          <span onClick={()=>clickHandler(2)}><img src="../src/assets/images/cupmen-2.png" />picture-angle-2</span>
          <span onClick={()=>clickHandler(3)}><img src="../src/assets/images/cupmen-3.png" />picture-angle-3</span>
          <span onClick={()=>clickHandler(4)}><img src="../src/assets/images/cupmen-4.png" />picture-angle-4</span>
       </div>
       <div className="col-6">
         <img src={src} />picture-angle-{target}
      </div>
     </div>
    </div>
    </>
  )
}


export default Folders;
