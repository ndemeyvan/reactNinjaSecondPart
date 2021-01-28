import "./Home.css";
import {useState } from "react";

const Home = () => {
    const [name, setName] = useState("Mario")

    const handleClick = ()=>{
        console.log("This is click");
       
    }

    
    const handleClickAgain = (name)=>{
        console.log("This is click " + name);
        setName(name)
    }
    return ( 
        <div className="Home">
            <h2>Hellomy name is {name}</h2>
            <button onClick={handleClick}>Click me bro</button>
            <button onClick={()=>{handleClickAgain("Luigi")}}>Click me again bro</button>
        </div>
     );
}
 
export default Home;