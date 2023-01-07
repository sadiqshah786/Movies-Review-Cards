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
            <div className="col-lg-3 col-md-4 col-md-4 col-sm-6 col-xs-6" key={i}>
              <MovieCards Title={data.Title} Poster={data.Poster} Year = {data.Year} feature={data.feature} />
              
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
