import { useState } from "react"

function LikeButton(){
    let [isLiked,setIsLiked]=useState(false);

    let toggleLike=()=>{
        setIsLiked(!isLiked);

    }
    let style={color:"red"}
   
 
    return(
        <div>
            <p onClick={toggleLike}>
               {
                isLiked ? <i className="fa-solid fa-heart" style={style}></i> :<i className="fa-regular fa-heart"></i>
               }
                
              </p>
        </div>
    )
}

export default LikeButton