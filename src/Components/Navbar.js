function Navbar() {
  return (
    <nav className="flex justify-evenly w-full items-center bg-[#03203C] h-[50px] text-white">
      <div className="logo flex justify-center items-center cursor-pointer">
        <img
          className="w-8"
          src={process.env.PUBLIC_URL + "./assets/logo.png"}
        />
        <p>Quriarbox</p>
      </div>
      <div className="flex list-none gap-6">
        <li className="cursor-pointer">Home </li>
        <li className="cursor-pointer">Our Services</li>
        <li className="cursor-pointer">About Us</li>
        <li className="cursor-pointer">Whats new</li>
        <div className="flex gap-2 items-center bg-red">
          <div className="p-[5px] bg-[#FFEDC9] rounded-md cursor-pointer">
            <img src={process.env.PUBLIC_URL + "./assets/serach.png"} />
          </div>
          <div className="bg-[#FFE4D9] p-[5px] rounded-md text-black cursor-pointer">
            <p>Contact us</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
