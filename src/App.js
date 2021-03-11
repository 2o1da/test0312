import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component{
  state={
    isLoading:true,
    movies:[]
  };

  getMovies=async()=>{
    const{
      data:{
        data:{movies}
      }
    }=await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({movies,isLoading:false});
  };

  componentDidMount(){
    this.getMovies();
  }

  render(){
    const{isLoading}=this.state;
    return (
       <div>
         {isLoading ? "Loading..."
         : movies.map(movie=>(
           <Movie
           key={movie.id}
           id={movie.id}
           year={movie.year}
           title={movie.title}
           summary={movie.summary}
           poster={movie.medium_cover_image}
           />
         ))}
         </div>
    );
  }
 }
 
class App extends React.Component{
  state={
    count:0
  };
  add=()=>{
    this.setState(current=>({count:current.count+1}));
  };
  minus=()=>{
    this.setState(current=>({count:current.count-1}));
  };
  render(){
    <div>
      <h1>The number is: {this.staste.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}


function Food({name,picture}){
  //return <h3>I like {name}!</h3>;
  return <div>
    <h2>I like {name}.</h2>
    <img src={picture}/>
  </div>
}

const foodILike=[
  {
    name:"Kimchi",
    images:"http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating:5
  }
]   



function App() {
  return (
    <div>
      <h1>김다솔</h1>
      안녕하세요.
      {foodILike.map(dish=> (
      <Food name={dish.name} picture={dish.images}/>
      ))} 
    </div>
  );
}

export default App;