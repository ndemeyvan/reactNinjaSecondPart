import "./NavBar.css";

const NavBar = () => {
     
    return ( 
        <div>
            <nav className='navbar'>
            <h1>Ndeme Blog</h1>
                <div className='links'>
                    <a href="/">Home</a>
                    <a href="/create" style={{color:'white' ,backgroundColor:'#f1356d',borderRadius:'8px'}}>New Blogs</a>
                </div>
            </nav>
        </div>
     );
}
 
export default NavBar;