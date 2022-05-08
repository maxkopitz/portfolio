
const NavBar = () => {
  return (
    <nav class="container flex justify-around py-8 mx-auto"> 
      <div>
        <h3 class="text-2xl font-medium text-white">FANCY M</h3>
      </div>
      <div class="space-x-8 text-primary"> 
          <a href="">About</a>
          <a href="">Experience</a>
          <a href="">Projects</a>
          <a href="">Contact Us</a>
          <button class="font-bold" href="">Resume</button>
      </div>
    </nav>
  )};
export default NavBar;
