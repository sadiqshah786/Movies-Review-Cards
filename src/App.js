import './App.css';
import MovieCards from './Components/MovieCards';
import MovieData from "./Components/MovieData.json"
function App() {
  return (
    <div className="App">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className='text-center p-4'>Movie Reviews Cards</h1>
        </div>
      </div>
    <div className="row">
      {
        MovieData.map((data,i)=>{
           return(
            <div className="col-md-3">
              <MovieCards Title={data.Title} Poster={data.Poster} Year = {data.Year}/>
            </div>
           )
        })
      }
     </div>
    </div>
    </div>
  );
}

export default App;
