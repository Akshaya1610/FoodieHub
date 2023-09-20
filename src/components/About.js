import React from "react";



const About = () => {
    return (
        <div className="container-about">
            <div className="center">
                <div className="about-card">
                    <div className="logo-card">
                    <img src= {require('/assets/logo.png')} className="app-logo"
                alt="logo"  />
                    <p>We build innovative products that deliver Every bit of your work at Foodie hub 
                        <br></br> will help elevate the lives of our users across the World.</p>
                    <div className="nav-link">
                        <h2 className="link-heading">Support</h2>
                        <p className="link-heading">support@foodiehub.com</p>
                    
                    <h3 className="link-heading">Social Links</h3>
                    <ul>
                        <li>
                            <img src= {require('/assets/twitter.png')} className="social-logo"
                            alt="social-media-icons"  />
                        </li>
                        <li>
                            <img src= {require('/assets/youtube.png')} className="social-logo"
                            alt="social-media-icons"  />
                        </li>
                        <li>
                            <img src= {require('/assets/insta.jpg')} className="social-logo"
                            alt="social-media-icons"  />
                        </li>
                    </ul>
                    </div>
                 </div>
                    
        
                
              </div>
            </div>
           
        </div>
       
    )
}

// class About extends React.Component {
//     constructor(){
//         super()
//         console.log("parent constructor class called ")
//     }
//     componentDidMount(){
//         console.log(" Parent componentDidMount called");
//     }
//     render(){
//         console.log(" Parent Render called");
//         return (
//             <div className="">
//                 <h1>About page</h1>
//                 <ExampleClass  name= {"First Child"}/>
//                 <ExampleClass  name= {"Second Child"}/>
//                 <ExampleClass  name= {"Third Child"}/>
                
//             </div>
           
//         )
//     }
    
// }

export default About;


