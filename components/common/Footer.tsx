import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-10">
      <section className="container mx-auto px-6">
        <hr className="mb-6" />
        <div className="grid lg:grid-cols-3 grid-cols-2">
          <div>
            <h1 className="text-xl font-bold">Kyle Ando</h1>
          </div>

          <div className="flex flex-col gap-y-2">
            <h1 className="font-semibold">Pages</h1>
            <Link href={"/"} className="text-xs">Home</Link>
            <Link href={"/about"} className="text-xs">About</Link>
            <Link href={"/projects"} className="text-xs">Projects</Link>
            <Link href={"/contact"} className="text-xs">Contact</Link>
          </div>


          <div className="flex flex-col gap-y-2">
            <h1 className="font-semibold">Connect</h1>
            <Link href={"mailto:ando.kyle404@gmail.com"} className="text-xs">Email</Link>
            <Link href={"https://www.facebook.com/kyle.ando.505"} className="text-xs">Facebook</Link>
            <Link href={"https://www.linkedin.com/in/kyle-ando-942947289/"} className="text-xs">LinkedIn</Link>
          </div>
        </div>
        
        <div className="text-center text-sm mt-12 mb-6">
          <p>© All rights reserved. {new Date().getFullYear()} </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
