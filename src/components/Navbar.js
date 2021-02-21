import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="flex justify-center px-4 py-1 border-b border-gray-600 shadow-2xl">
            <div className="grid grid-cols-12 border-2 border-red-300 space-x-3">
                <Link to="/" className="col-span-6 border-red-300 border-r-2 p-2">Home </Link>
                <Link to="/about" className="col-span-2 border-red-300 border-r-2 p-2">About</Link>
                <Link to="/create" className="col-span-2 border-red-300 border-r-2 p-2">Create</Link>
                <Link to="/detail" className="col-span-2 border-red-300 p-2">link ke detail</Link>
            </div>
            <div className="px-32 bg-red-800">
                <div>search</div>

            </div>
        </div>
     );
}
 
export default Navbar;