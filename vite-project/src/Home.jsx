import { useState } from "react";
const Home = () => {
    // let name = 'favor';
    const [name, setName] = useState('favor');

    const  [age, setAge] = useState('40')
    // using array destructuring to obtain two values, one for the name and the other one to a  function that's used to reset/update the name value

    const handleclicks = () =>{
        // name = 'musti';
        // console.log(name);
        setName('gurdian');
        setAge('46');

        
    }
    //to accept parameter

    const clickAgain = (name) =>{
        console.log("Hello", name);
    }
 
    return ( 
        <div className="Homediv">
            <h3>Home page</h3>
            <p>{name} is {age} years old</p>
            <button onClick={handleclicks}>click me</button>
            <button onClick={() => clickAgain('James')}>click me again</button>
        </div>


        
    );

    
}
 
export default Home;