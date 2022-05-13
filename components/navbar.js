const NavBar = () => {
  return (
    <nav className="container flex justify-around py-8 mx-auto"> 
      <div>
        <h3 className="ext-2xl font-medium text-white">FANCY M</h3>
      </div>
      <div className='space-x-8 text-primary text-lg'> 
          <a href="">1. About Me</a>
          <a href="">2. Experience</a>
          <a href="">3. Projects</a>
          <a href="">4. Contact</a>
          <button className='font-bold border-solid border-2 px-2 py-2 border-slate-50'>Resume</button>
      </div>
    </nav>
  )};
export default NavBar;
