
import { useContext } from "react";
import UsersContext from "./context/UserContext";


export default function Filter() {

    const { setFilter } = useContext(UsersContext);
    
    return (
        <div className="flex flex-col md:flex-row justify-center gap-3 mb-4 mt-4">
            <button
                onClick={() => setFilter("all")}
                className="px-3 py-2 bg-blue-700 hover:bg-gray-600 text-white rounded"
            >
                All
            </button>
            <button
                onClick={() => setFilter("watched")}
                className="px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
            >
                Watched
            </button>
            <button
                onClick={() => setFilter("unwatched")}
                className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
            >
                Unwatched
            </button>
        </div>
    );
}

