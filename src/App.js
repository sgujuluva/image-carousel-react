//importing immages
import photo1 from "./images/photo1.png"
import photo2 from "./images/photo2.png"
import photo3 from "./images/photo3.png"
import photo4 from "./images/photo4.png"
import photo5 from "./images/photo5.png"
//styles
import './App.css';
//intialisation images
const images = [
{original : photo1},
{original : photo2},
{original : photo3},
{original : photo4},
{original : photo5}
]
function App() {
  return (
    <div className="App">
     <h1>Image Carousel</h1>
   {  images.map(item => <img src={item.original}/>)}
    
    </div>
  );
}

export default App;
