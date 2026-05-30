import { Link } from "react-router-dom";
import navLogo from "../assets/icons/Logo.svg";

const Navbar = () => {
  return (
    <header>
      {/* NAV LOGO */}
      <nav
        className={`
        flex justify-between items-center py-4 wrapper
        `}
      >
        <img
          className="w-[clamp(7.25rem,5.063rem+5.833vw,10.313rem)]"
          src={navLogo}
          alt="Logo"
        />

        <Link
          className="bg-brand-45 rounded-sm py-2 px-3 text-brand-95"
          to="/SignIn"
        >
          Sign in
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
