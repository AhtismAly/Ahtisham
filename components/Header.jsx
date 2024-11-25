import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* Name styled with Athena font */}
          <Link href="/">
            <h1 className="text-white flex items-center">
              <span
                className="text-6xl font-extrabold"
                style={{ fontFamily: "'Athena', sans-serif" }} // Apply Athena only to Ahtisham
              >
                Ahtisham
              </span>
              <span className="text-4xl font-normal ml-2">Ali Baig</span>
            </h1>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
