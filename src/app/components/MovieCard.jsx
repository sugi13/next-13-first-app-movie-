import Image from "next/image";
import Link from "next/link";

export default function MovieCard({ title, id, poster_path}) {
  const ImagePath = "https://image.tmdb.org/t/p/original";

  return (
    <div className="movie-card flex flex-col items-center justify-center">
      <div className="poster" key={id}>
       <Link href={`/${id}`}>
       <Image 
        src={ImagePath + poster_path} 
        width={210} 
        height={400}
        className="sm: w-52"
        />
       </Link>
      </div>
      <div className="text-center p-4">
        <h3 className= "text-gray-400 font-normal text-sm">{title}</h3>
      </div>
    </div>
  );
}
