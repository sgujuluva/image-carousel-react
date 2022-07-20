//importing immges
import photo1 from "./images/photo1.png";
import photo2 from "./images/photo2.png";
import photo3 from "./images/photo3.png";
import photo4 from "./images/photo4.png";
import photo5 from "./images/photo5.png";
//lib
import { useState } from "react";
//styles
import "./App.css";
//intialisation images
const images = [
  { original: photo1, id: 1 },
  { original: photo2, id: 2 },
  { original: photo3, id: 3 },
  { original: photo4, id: 4 },
  { original: photo5, id: 5 },
];
function App() {
  const [currentImage, setCurrentImage] = useState(images[0].original);
  let index = 0;
  const handleNext = () => {
    if (index < images.length) {
      index = index + 1;
      setCurrentImage(images[index].original);
    }
    //setCurrentImage(images[0].original);
  };
  const handlePrevious = () => {
    if (index < images.length && index > 0) {
      index = index - 1;
      console.log(index)
      setCurrentImage(images[index].original);
      
    }
  };
  return (
    <div className="App">
      <h1>Image Carousel</h1>
      {<img src={currentImage} />}
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrevious}>Previous</button>
    </div>
  );
}

export default App;
