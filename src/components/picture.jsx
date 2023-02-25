export default function Picture(props){
    return(
        <div className="Picture-container">
            <div>
                <img src={props.image} className="picture-meme"/>
                <h1 className="top">{props.Data.Toptext}</h1>
                <h1 className="bottom">{props.Data.Bottomtext}</h1>
            </div>
        </div>
    )
}
