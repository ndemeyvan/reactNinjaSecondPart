import "./404Page.css"
import {Link} from "react-router-dom"
const NotFoundPage = () => {
    return ( 
        <div className="notFound">
            <h3>
                404 Page not found 
            </h3>
            <Link to="/">Back to home page</Link>
        </div>
     );
}
 
export default NotFoundPage;