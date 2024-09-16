import { useState } from "react";

function CommentsForm(){
    let [formData,setFormData]=useState({
        username:"",
        remark:"",
        rating:5
    });

    let handleInputChange=(event)=>{
        setFormData((currData)=>{
            return{...currData,[event.target.name]:event.target.value}

        })
        

    }

    let handleSubmit=(event)=>{
        event.preventDefault();

    }

    return(
        <div>
            <h4>give a comment </h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input placeholder="username" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username"></input>
                <br></br><br></br>
                <label htmlFor="remark">Remark</label>
                <textarea value={formData.remark} placeholder=" Add forremarks" onChange={handleInputChange} id="remark" name="remark"></textarea>
                <br></br><br></br>
                <label htmlFor="ratinf">Rating</label>
                <input placeholder="rating" type="number" min={1} max={5} value={formData.rating} onChange={handleInputChange} id="rating" name="rating"></input>
                <br></br>
                <button>Add comment</button>

            </form>
        </div>

    )

}

export default CommentsForm;