//importing immges
import photo1 from "./images/photo1.png";
import photo2 from "./images/photo2.png";
import photo3 from "./images/photo3.png";
import photo4 from "./images/photo4.png";
import photo5 from "./images/photo5.png";
import photo6 from "./images/photo6.png";
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
  { original: photo6, id: 6 },
];
function App() {
  const [currentId, setCurrentId] = useState(1);

  let currentImage = images.find((photos) => photos.id === currentId);

  const handleNext = () => {
    if (currentId < images.length) {
      setCurrentId(currentId + 1);
    } else {
      setCurrentId(1);
    }
  };

  const handlePrevious = () => {
    if (currentId >1){
      setCurrentId(currentId - 1);
    }else{
      setCurrentId(5);
    }
  }
  return (
    <div className="App">
      <h1>Image Carousel</h1>
      {<img width="500" height="500" src={currentImage.original} alt="" />}
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrevious}>Previous</button>
    </div>
  );
}

export default App;
