import React, {useEffect} from "react";
function Services(){
    //set title with useEffect;
    useEffect(()=>{
        document.title='Services';

    }, [] );
    //define a list of services (normally from db or api)
    let services = ["Web Design", "Programming", "Logo Design", "SEO"]
    
 return(
    <section className="container">
        <h1>Services</h1>
        <p>
            This is our services site.
        </p>
        <ul>
        {
            /*use array.map to loop throuth, creating a list item for each array element */
            services.map((service)=>(
                <li className="list-group-item" key={service}><i className="bi bi-tools"></i> {service}</li>
    ))
        }
        </ul>
    </section>
 )   
}
export default Services;