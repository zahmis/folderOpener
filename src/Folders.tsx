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
        <div className="d-flex flex-column col-4">
          <div onClick={()=>clickHandler(1)}>
            <div>picture-angle-1</div>
            <img className="w-75" src="../src/assets/images/cupmen-1.png" />
          </div>
          <div>
            <div>picture-angle-2</div>
            <div onClick={()=>clickHandler(2)}>
            <img className="w-75"  src="../src/assets/images/cupmen-2.png" /></div>
          </div>
          <div>
            <div>picture-angle-3</div>
            <div onClick={()=>clickHandler(3)}>
            <img className="w-75" src="../src/assets/images/cupmen-3.png" /></div>
          </div>
          <div>
            <div>picture-angle-4</div>
            <div onClick={()=>clickHandler(4)}>
            <img className="w-75" src="../src/assets/images/cupmen-4.png" /></div>
          </div>
       </div>
       <div className="col-8 text-align-center">
         <div>picture-angle-{target}</div>
         <img className="w-100" src={src} />
      </div>
     </div>
    </div>
    </>
  )
}


export default Folders;
