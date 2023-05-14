
import { useRouteError } from "react-router-dom"

const Error = ()=>{
 
    const err = useRouteError()
   
    
    return (
        <>
        <div className="error-page-div">
            <h1 className="oops-head" >Oops!  {err?.statusText}</h1>
            <h2 className="something-went-wrong">Something went wrong!!</h2>
            <h3 className="error">{err?.data}</h3>
        </div>
        </>
    )
}

export default Error