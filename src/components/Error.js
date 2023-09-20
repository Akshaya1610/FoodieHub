import { useRouteError } from "react-router-dom";


const Error = ()=>{
    const err = useRouteError();
        console.log(err)
    
    return (
        <div className="container">
            <h3>OOPS...!</h3>
            <h3>Something went Wrong.</h3>
            <h3>{err.statusText}</h3>
            <h3>{err.data}</h3>

        </div>
    )
}


export default Error ;