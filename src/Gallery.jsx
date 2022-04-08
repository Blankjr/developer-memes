import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
// import img1 from './img/img1.jpg'


function Gallery() {
  const [toggler, setToggler] = useState(false);
  const i = '/images/'
return (
<>
<button onClick={() => setToggler(!toggler)} class="button-slider faq-button"><span class="text">FAQ</span><span>Click me</span></button>
<FsLightbox
toggler={toggler}
sources={[
  i + 'img1.jpg',
  i + 'img2.jpg',
  i + 'img3.jpg',
  i + 'img4.jpg',
  i + 'img5.jpg',
  i + 'img6.jpg',
  i + 'img7.jpg',
  i + 'img8.jpg',
  i + 'img9.jpg',
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

]}
/>
</>
);
}

export default Gallery; 