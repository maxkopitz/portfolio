const NavBar = () => {
  return (
    <nav className="container flex justify-around py-8 mx-auto"> 
      <div>
        <h3 className="ext-2xl font-medium text-white">FANCY M</h3>
      </div>
      <div className='group space-x-8 text-primary hover:text-white'> 
          <a className='hover:text-white' href="">About</a>
          <a className='hover:text-white hover:bg-purple-600 hover:border-gray-300' href="">Experience</a>
          <a href="">Projects</a>
          <a href="">Contact Me</a>
          <button className='font-bold hover:text-red-600' href="">Resume</button>
      </div>
    </nav>
  )};
export default NavBar;
