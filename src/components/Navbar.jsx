import Logo from "../assets/PRPLogo.png";

export default function Navbar() {
  return (
    <>
      <nav className="w-screen h-fit flex justify-around items-center gap-10  p-4">
        <img src={Logo} alt="" className="w-12 h-12" />
        <div className="w-120 h-fit py-3 bg-white border-2 font-semibold border-black rounded-xl flex gap-5 items-center justify-center">
          <a href="" className="px-3 bg-primary">
            Home
          </a>
          <a href="" className="px-3 ">About</a>
          <a href="" className="px-3">Services</a>
          <a href="" className="px-3">Contact Us</a>
        </div>
        <button className="bg-primary px-8 border-2 rounded-xl  border-black py-2 cursor-pointer " style={{boxShadow:"0px 4px 0px 0px #000"}}>Login</button>
      </nav>
    </>
  );
}
