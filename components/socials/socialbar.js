import SocialItem from "./socialitem";

const socialMedias = [
  {
    id: 0,
    name: "Twitter",
    url: "https://twitter.com",
    icon: "/"
  }
]
const SocialBar = () => {
  return (
    <div className="flex flex-col content-center">
      {socialMedias.map((media) => (
        <SocialItem key={media.key} name={media.name} url={media.url} icon={media.icon} />
      ))}

    </div>
  );
};

export default SocialBar;
