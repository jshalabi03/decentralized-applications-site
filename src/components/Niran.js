import React, {useState} from "react"

import countryImg from "../assets/kingdom.png"
import rulerImg from "../assets/ruler.JPG"

const Niran = () => {

    const [source, setSource] = useState(countryImg);

    const handleClick = () => {
        setSource(
            source === countryImg
                ? rulerImg
                : countryImg
        )
    }
    
    const label = source === countryImg
        ? "See king." : "See kingdom.";
    
    
    return (
        <div>
            <img src={source} alt="" style={{width: "500px"}} />
            <button onClick={handleClick}>{label}</button>
        </div>
    )
}

export default Niran;