// The function is called a Stainless Functional Component SFC

const Navbar  = () => {
    return ( 
        <nav className="navbar">
            <h2>Personal Blogs</h2>
            <div className="navlinks">
                
                <a href="">Projects</a>
                <a href="/create" style={{
                    backgroundColor:"blue",
                    color:"wheat",
                    borderRadius: '10px',
                    padding:'5px'
                    

                }}>New Blog</a>
                

            </div>

        </nav>
    
     );
}
 
export default Navbar;