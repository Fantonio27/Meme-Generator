import { useState } from "react";

export default function Form(props) {

    return(
        <form>
            <div className="form-container">
                <input 
                    type="text" 
                    className="con-1" 
                    placeholder="Top Text"
                    name="Toptext"
                    value={props.Data.Toptext}
                    onChange={props.handleChange}
                    maxLength="18"
                />
                <input 
                    type="text" 
                    className="con-2"
                    placeholder="Bottom Text"
                    name="Bottomtext"
                    value={props.Data.Bottomtext}
                    onChange={props.handleChange}
                    maxLength="18"
                />           
                <button className="con-3" onClick={props.handleClick}>Get a new meme image</button>
            </div>  
        </form>
    )
}
//onClick={props.handleClick}