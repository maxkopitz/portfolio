const NavBar = () => {
  return (
    <nav className="container flex justify-around py-8 mx-auto"> 
      <div>
        <h3 className="text-2xl font-medium text-white">FANCY M</h3>
      </div>
      <div className="space-x-8 text-primary"> 
          <a href="">About</a>
          <a href="">Experience</a>
          <a href="">Projects</a>
          <a href="">Contact Us</a>
          <button className="font-bold" href="">Resume</button>
      </div>
    </nav>
  )};
export default NavBar;
