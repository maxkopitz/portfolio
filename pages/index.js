import NavBar from '../components/navbar';
import SocialBar from '../components/socials/socialbar';
import Sections from '../components/sections/sections';

export default function Home() {
  return (
    <>
      <header>
        <title>maxwell.dev | about</title>
      </header>
      <div className="flex flex-col text-primary w-screen h-screen">
        <NavBar />
        <div className="flex space-x-4 flex-row">
          <div>
            <SocialBar />
          </div>
          <div>
            <Sections />
          </div>
        </div>
      </div>
    </>
  );
}
