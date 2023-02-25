import logo from "../assets/Images/3-2-troll-face-meme-png-thumb.png"

export default function Navbar(){
    return(
        <nav>
            <div className="logo-container">
                <img src={logo} className="nav--Logo"/>
                <p>Meme Generator</p>
            </div>
            <div className="side-bar">
                <p>React Course - Project 3</p>
            </div>
        </nav>
    )
}