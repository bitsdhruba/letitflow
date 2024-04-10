const Footer = () => {
  return (
    <footer className="bg-[#003049] rounded-md shadow  m-2">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            flow
          </span>

          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 ">
            <li className="hover:underline me-4 md:me-6">About</li>
            <li className="hover:underline me-4 md:me-6">Privacy Policy</li>
            <li className="hover:underline me-4 md:me-6">Licensing</li>
            <li className="hover:underline">Contact</li>
          </ul>
        </div>
        <hr className="my-6 border-white sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-white sm:text-center ">
          © 2024 blogSpot™ . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
