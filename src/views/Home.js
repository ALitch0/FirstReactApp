import React, { useState, useEffect } from "react";
//reference gloabl CounterContext from Home so we can set th global stare var
import {useContext} from "react";
import { CounterContext } from "../App"

//add User prop to this page; a user should be passed any time this loads
function Home(User) {
    //use the Effect Hook to set the page title
    useEffect(() =>{
        document.title = 'Home';
        console.log('Home loaded');
    }, [])
    //reference counterfunction in global context
    const { handleIncrement, resetSession } = useContext(CounterContext);
    //setup the useState hook to maintain a count variable
    /*count: is our variable tracking the number of button clicks
    setCount: the method used to update the count variable
    0: is the default value of the count variable */
    const [count, setCount] = useState(0);
    const updateCount = () => {
        setCount (count + 1 );
        //update session var too by calling the function in the App.js context
        handleIncrement();
    }
    const resetCounter = () =>{
        setCount (0);
        resetSession();
    }
    return (
        <section className="container">
            <h1>Welcome to our First React App {User.displayName}</h1>
            <p>We're building this for COMP2112.</p>
            <p>Your Username is {User.username}</p>
            <div>
                <p>Count: <span>{count}</span></p>
                <button className="btn btn-primary" onClick={updateCount}>Click Me</button>
                <button className="btn btn-danger" onClick={resetCounter}>Reset</button>
            </div>
        </section>
    );
}

export default Home;