

const Filter = () => {
    return (
        <div className="flex justify-center gap-3 mt-3">
            <button className="text-white bg-gray-600 p-2 rounded-sm">All</button>
            <button className="bg-green-700 p-2 rounded-sm">Watched</button>
            <button className="bg-blue-500 rounded-sm ">Unwatched</button>

        </div>
    );
};

export default Filter;