import React, {useState, useEffect} from "react";

function Contact(){
    //use Effect hook to set title

    useEffect(()=>{
        document.title= 'Contact';
    }, [] );

    //use State hook to track the current value of the user's message
    const [message, setMessage] = useState('');

    //create new statee var fro errorMessage, initalized to empty
    const [errorMessage, setErrorMessage] = useState(null);

    const handleChange = (event) =>{
        setMessage(event.target.value)
        
        //if input has a value, remove any error message displayed
        if(message === ""){
            setErrorMessage('Message is required');
        }
        else{
            setErrorMessage(null);
        }
    }
    const showMessageAlert = () => {
        if(message === ""){
            setErrorMessage('Message is required');
        }
        else{
        alert(message);
        }
    }
    return(
        <section className="container">
            <h1>Contact</h1>
            <p>This is the contact section</p>
            <ul>
                <li><a href="www.twitter.com">Twitter</a></li>
                <li><a href="www.facebook.com">Facebook</a></li>
                </ul>
                <textarea placeholder="Send us a message" onKeyUp={handleChange}></textarea>
                <div id="errorMessage" className="text-danger">{errorMessage}</div>
                <button className="btn btn-info" onClick={showMessageAlert}>Submit</button>
                <p>Your message is: {message}</p>
        </section>

    )
}
export default Contact;