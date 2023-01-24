import { useEffect, useState } from "react"
import getGifs from "../services/getGifs"

export default function Gif(){
    
    const [gifs, updateGifs] = useState([])
    
    useEffect(function () {
        getGifs({keyword : "koala"}, {limit : 16}).then(gifs => updateGifs(gifs))
    }, [])

    return(
        <div>
            <div className="images">
                {
                    gifs.map(singleGif => <img src={singleGif} alt="" />)
                }
            </div>
        </div>
    )
}