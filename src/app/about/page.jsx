import Link from "next/link"

export default function About(){
    return(
        <div className="about container flex items-center justify-center flex-col my-52">
            <h1 className="text-3xl font-bold">About this App</h1>
            <p className="p-10 text-gray-500 text-center">Learning by watching tut is not enough. By doing, gives you more clarify about what you learn. </p>
            <Link href={"/"} className="bg-teal-300 p-1.5 rounded">Back</Link>
        </div>
    )
}