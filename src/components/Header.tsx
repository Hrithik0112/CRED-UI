function Header() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center">
        <img
          src="/assets/cred-logo.png"
          alt="logo"
          width={40}
          height={53}
          className="xl:w-[50px] xl:h-[66px]"
        />
      </div>
      <button className="w-8 h-8 flex flex-col md:hidden space-y-1 items-end">
        <div className="w-8 h-1 bg-gray-400"></div>
        <div className="w-7 h-1 bg-gray-400"></div>
        <div className="w-8 h-1 bg-gray-400"></div>
      </button>
      <div className="hidden md:flex md:items-center">
        <div className="py-1">
          <a href="/" className="text-white opacity-80 mr-5 ml-9 text-lg leading-9 font-semibold">
            credit score check
          </a>
        </div>
        <div className="py-1">
          <a href="/" className="text-white opacity-80 ml-5 mr-9 text-lg leading-9 font-semibold">
            CRED pay
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
