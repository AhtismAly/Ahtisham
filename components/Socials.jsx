import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
  RiLinkedinLine, // Import LinkedIn icon
} from "react-icons/ri";

export const socialData = [
  {
    name: "LinkedIn", // LinkedIn first
    link: "https://www.linkedin.com/in/ahtisham-ali-baig-b5769814a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    Icon: RiLinkedinLine,
  },
  {
    name: "Instagram", // Instagram second
    link: "https://www.instagram.com/alyahtism/profilecard/?igsh=NzdtZGlmZTF1cWx1",
    Icon: RiInstagramLine,
  },
  {
    name: "Website", // Your Website third
    link: "https://ahtishamportfolio-tau.vercel.app/",
    Icon: RiDribbbleLine, // Placeholder icon for Website (you can replace this)
  },
  {
    name: "Pinterest", // Pinterest fourth
    link: "https://pin.it/6nEuMs5DB",
    Icon: RiPinterestLine,
  },
  {
    name: "YouTube", // YouTube fifth
    link: "https://youtube.com/@ahtism?si=HAtjDpx8jlp20Q7q",
    Icon: RiYoutubeLine,
  },
  {
    name: "Facebook", // Facebook sixth
    link: "https://www.facebook.com/profile.php?id=61556592519414&mibextid=ZbWKwL",
    Icon: RiFacebookLine,
  },
  {
    name: "GitHub", // GitHub last
    link: "https://github.com/AhtismAly", // Your GitHub account link
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "GitHub"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
