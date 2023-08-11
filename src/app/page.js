import MovieCard from "./components/MovieCard";
import "./globals.css";

export default async function Home() {

  let api_key = "53c12f8854a1b54715b9bbc33df65e3e";
  const movieData = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`)
  const resultData = await movieData.json();
  

  return (
    <div className="container p-10 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5 gap-20">
      {
        resultData.results.map((result)=> (
          <div >
          <MovieCard 
            title={result.title}
            id={result.id}
            poster_path={result.poster_path}
          />
          </div>
        ))
      }
    </div>
  )
}
