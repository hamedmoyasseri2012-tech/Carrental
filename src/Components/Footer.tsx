import { Link } from "react-router";
const Footer = () => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-4 justify-start items-start p-4">
          <img src="./public/logo.svg" alt="" />
          <p className="text-[#6a7282] w-80 h-15 text-[14px] font-medium">
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your driving needs.
          </p>
          <div className="flex gap-2">
            <img className="w-5 h-5" src="/public/face.svg" alt="" />
            <img className="w-5 h-5" src="/public/ig.svg" alt="" />
            <img className="w-5 h-5" src="/public/tw.svg" alt="" />
            <img className="w-5 h-5" src="/public/em.svg" alt="" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="uppercase text-[16px] font-medium">Quick Links</h1>
            <ul className="flex flex-col gap-2 text-[#6a7282] text-[14px] font-medium">
              <Link to="/">Home</Link>
              <Link to="/">Browse Cars</Link>
              <Link to="/">List Your Car</Link>
              <Link to="/">About Us</Link>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="uppercase text-[16px] font-medium">Resources</h1>
            <ul className="flex flex-col gap-2 text-[#6a7282] text-[14px] font-medium">
              <Link to="/">Help Center</Link>
              <Link to="/">Terms of Service</Link>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Insurance</Link>
            </ul>
          </div>
          <div className="flex flex-col gap-2 mb-2">
            <h1 className="uppercase text-[16px] font-medium">Contact</h1>
            <ul className="flex flex-col gap-2 text-[#6a7282] text-[14px] font-medium">
              <li>1234 Luxury Drive</li>
              <li>San Francisco, CA 94107</li>
              <li>+1 234 567890</li>
              <li>info@example.com</li>
            </ul>
          </div>
          <div className="border-b  border-[#c4c7d2] h-1 w-85"></div>
        </div>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="text-[#6a7282] gap-2 flex flex-col justify-center items-center text-center">
            <p>© 2026 Brand. All rights reserved.</p>
            <div className="mb-5">
              <ul className="flex gap-5 text-[14px] text-[#6a7282]">
                <Link to="/">Privacy</Link>
                <li>|</li>
                <Link to="/">Terms</Link>
                <li>|</li>
                <Link to="/">Cookies</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
