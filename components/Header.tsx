import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2 ">
        <Link href="/">
          <Image src="/logo.webp" height={50} width={50} alt="Brand Logo" />
        </Link>
        <h1>Kultura</h1>
          </div>
          
          <div>
              <Link href='/' className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full">Sign up to Kultura</Link>
          </div>
    </header>
  );
};

export default Header;
