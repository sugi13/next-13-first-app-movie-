import Image from "next/image";
import Link from "next/link";

export default async function MovieDetail({params}){
    let { movieDetail} = params;

    const apiKey = "53c12f8854a1b54715b9bbc33df65e3e";
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieDetail}?api_key=${apiKey}`)
    const result = await data.json();
    
     const ImagePath = "https://image.tmdb.org/t/p/original";


    return(
       <div className="container  grid grid-cols-1 p-8 md:grid-cols-2  lg:p-16 lg:grid-cols-2 gap-10">
       <div className="movie-poster flex flex-col items-start">
        <Image
            src={ImagePath + result.backdrop_path}
            width={700}
            height={500}
            className="w-auto"
        />
         <p className="bg-gray-800 my-4 p-2 rounded">{result.status}</p>
       </div>
       <div className="movie-poster-details flex flex-col items-start gap-5">
        <h1 className=" text-2xl font-bold">{result.title}</h1>
        <p className="font-semibold text-gray-400">{result.release_date}</p>
        <p className="max-w-xl font-semibold">{result.overview}</p>
        <Link href={"/"} className="bg-gray-900 text-sm p-1.5 rounded-sm" >back</Link>
       </div>
       </div>
    )
}