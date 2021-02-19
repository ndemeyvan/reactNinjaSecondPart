import "./NavBar.css";
import {Link} from 'react-router-dom'

const NavBar = () => {
     
    return ( 
        <div>
            <nav className='navbar'>
            <h1>Ndeme Blog</h1>
                <div className='links'>
                    <Link to="/">Home</Link>
                    <Link to="/create" style={{color:'white' ,backgroundColor:'#f1356d',borderRadius:'8px'}}>Nouveaux blog</Link>
                </div>
            </nav>
        </div>
     );
}
 
export default NavBar;