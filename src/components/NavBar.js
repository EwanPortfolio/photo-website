
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Imaginibus</h1>
            <div className="links">
                <CustomLink href="/home" >Home</CustomLink>
                <CustomLink href="/profile" >Profile</CustomLink>
            </div>
        </nav>
    );
}

function CustomLink({ href, children, ...props }) {
    return(
        <ul>
           <a href={href}>{children}</a> 
        </ul>

    )

}

export default Navbar;