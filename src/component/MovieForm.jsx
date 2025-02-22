import { useState } from "react";
import PropTypes from "prop-types";

const MovieForm = ({getMovi}) => {
    const [movieData, setMovieData] = useState({
        title:"",
        ott:"",
    });



    function handleChange(e){
        console.log(e.target.name);
        const key = e.target.name;
        const value = e.target.value;
        setMovieData({...movieData, [key]:value });

    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(movieData);
        if(!movieData?.title.trim() || !movieData?.ott.trim()) return;
        getMovi(movieData);
        setMovieData({...movieData, title:"", ott:""});
}

    return (
        
            <form className="flex justify-center gap-2" onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Enter movie name...." 
                className="bg-gray-500 w-[50%] rounded-sm p-1 text-white"
                name="title"
                value={movieData?.title}
                onChange={handleChange}
                
                />

                <select 
                className="border rounded-sm text-white bg-blue-950"
                name="ott"
                value={movieData?.ott}
                onChange={handleChange}

                >
                    <option value="">Select an OTT</option>
                    <option value="Netfilx">Netfilx</option>
                    <option value="Amazon Prime">Amazon Prime</option>
                    <option value="Hotstar">Hotstar</option>
                    <option value="SonyLIV">SonyLIV</option>
                    <option value="Hoichoi">Hoichoi</option>
                    <option value="Other">Others</option>
                </select>
                <button type="submit" className="bg-blue-400 px-2 rounded">Add</button>
            </form>
    
    );
};

MovieForm.propTypes = {
    getMovi: PropTypes.func.isRequired,
};

export default MovieForm;