//importing immages
import photo1 from "./images"
//styles
import './App.css';
//intialisation images
const images = [
{
original : "photo1.png"
}
]
function App() {
  return (
    <div className="App">
     <h1>Image Carousel</h1>
   {  images.map(item => <div>{item.original}</div>)}
    
    </div>
  );
}

export default App;
