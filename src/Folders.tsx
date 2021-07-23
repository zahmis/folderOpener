import React from 'react';
import ImageGallery from 'react-image-gallery';



const images = [
  {
    original: '/Users/sy/imageOpener/src/assets/images/cupmen-1.png',
    thumbnail: '/Users/sy/imageOpener/src/assets/images/cupmen-1.png',
    thumbnailTitle: "cupmen-1"
  },
  {
    original: '/Users/sy/imageOpener/src/assets/images/cupmen-2.png',
    thumbnail: '/Users/sy/imageOpener/src/assets/images/cupmen-2.png',
    thumbnailTitle: "cupmen-2"

  },
  {
    original: '/Users/sy/imageOpener/src/assets/images/cupmen-3.png',
    thumbnail: '/Users/sy/imageOpener/src/assets/images/cupmen-3.png',
    thumbnailTitle: "cupmen-3"
  },
  {
    original: '/Users/sy/imageOpener/src/assets/images/cupmen-4.png',
    thumbnail: '/Users/sy/imageOpener/src/assets/images/cupmen-4.png',
    originalTitle: "cupmen-4"

  }
]


const Folders = () => {

  return (  
    <div className="text-center">
      <ImageGallery 
        items={images} 
        thumbnailPosition='top'
        showIndex={true}
      />
      {/* <button className="btn btn-primary" onClick={() => handleClick()}>openfolder</button> */}

    </div>
  )
}


export default Folders;
