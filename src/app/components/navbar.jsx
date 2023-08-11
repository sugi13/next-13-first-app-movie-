import Link from "next/link";
import "../globals.css"

export default function Navbar(){
    return (
        <nav className="flex lg:justify-around lg:m-10 sm:flex justify-between m-10 items-center">
            <div className="brand">
                <h1 className="font-bold text-xl">GetMovies</h1>
            </div>
            <ul className="flex lg:gap-16 sm:flex gap-4">
                <Link href={"/about"}>About</Link>
            </ul>
        </nav>
    )
}