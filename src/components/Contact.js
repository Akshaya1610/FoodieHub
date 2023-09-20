const Contact = () => {
    return (
        <div className="contact-page">
            <div className="">
                <h2>Contact Information</h2>
                <p>Thank you for the interest in connecting with us, We have value your feedback, <br></br>
                    <p>questions and comments. Please use the following information 
                    to get in touch with us.</p>
                </p>
                <div className='nav-social-link'>
                <ul>
                    <li>
                        <img src= {require('/assets/twitter.png')} className="social-icon"
                            alt="social-media-icons"  />
                    </li>
                    <li>
                        <img src= {require('/assets/youtube.png')} className="social-icon"
                            alt="social-media-icons"  />
                    </li>
                    <li>
                        <img src= {require('/assets/insta.jpg')} className="social-icon"
                            alt="social-media-icons"  />
                    </li>
                    <li>
                        <img src= {require('/assets/fb.png')} className="social-icon"
                            alt="social-media-icons"  />
                    </li>
                    <li>
                        <img src= {require('/assets/linkedin.png')} className="social-icon1"
                            alt="social-media-icons"  />
                    </li>
                    <li>
                        <img src= {require('/assets/whatsapp.jpg')} className="social-icon"
                            alt="social-media-icons"  />
                    </li>
                    <li>
                        <img src= {require('/assets/glassdoor.png')} className="social-icon"
                            alt="social-media-icons"  />
                    </li>
                </ul>
                </div>
                <h2 className="link-heading">Support</h2>
                <p className="link-heading">support@foodiehub.com</p>
                    
                
               

                <div className=''>
                    <h2>Response Time</h2>
                    <p className='res-time'>We strive to respond all queries with in 48 hours, during our Business hours. </p>
                </div>
                
            </div>


        </div>
    )
}


export default Contact;