import { useEffect, useState } from "react";
import navLogo from "../assets/icons/Logo.svg";
import { navLinks } from "../constants/public";
import notificationIcon from "../assets/icons/notification-icon.svg";
import searchIcon from "../assets/icons/search-icon.svg";
import hamburger from "../assets/icons/hamburger-icon.svg";
import heroBg from "../assets/images/hero-bg.png";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  // prevent scroll when navbar is open
  useEffect(() => {
    if (openNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openNav]);

  return (
    <header>
      {/* NAV LOGO */}
      <nav
        className={`
        flex justify-between items-center py-4 wrapper ${openNav ? "bg-sub-12" : ""}
        `}
      >
        <img
          className="w-[clamp(7.25rem,5.063rem+5.833vw,10.313rem)]"
          src={navLogo}
          alt="Logo"
        />

        {/* NAV LINKS IMPORTING FROM CONSTANTS FOLDER */}
        <ul
          className={`
            hidden md:flex justify-between items-center gap-4 mr-30 bg-sub-06 px-4 py-3 rounded-lg border-3 border-sub-12
            `}
        >
          {navLinks.map((nav) => (
            <li className="text-14 text-white" key={nav}>
              <a href="#">{nav}</a>
            </li>
          ))}
        </ul>

        {/* SEARCH AND NOTIFICATION ICONS */}
        <div className="hidden md:flex justify-between items-center gap-4">
          <img src={searchIcon} alt="" />
          <img src={notificationIcon} alt="Notifications" />
        </div>

        {/* HAMBURGER ICON */}
        <button
          className={`
          flex ${openNav ? "" : "bg-sub-15 py-3 px-3 border-sub-30 rounded-lg border-2"}   md:hidden`}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <span className="w-6 text-2xl text-brand-80 font-medium">X</span>
          ) : (
            <img className="w-6" src={hamburger} alt="Hamburger Menu" />
          )}
        </button>
      </nav>

      {/* MOBILE NAV DIALOG */}
      <div
        className={`
          bg-sub-12 
          h-[calc(100dvh-52px)] 
          md:hidden 
          ${openNav ? "block" : "hidden"}`}
        style={{
          background: `url(${heroBg}) no-repeat bottom center`,
          backgroundSize: "cover",
        }}
      >
        <div
          className="h-[90%]"
          style={{
            background:
              "linear-gradient(180deg, #1f1f1f 30%, transparent 100%)",
          }}
        ></div>

        <ul
          className={`
            fixed inset-0 flex justify-start items-start flex-col mt-[25%] px-4 gap-3
            `}
        >
          {navLinks.map((nav) => (
            <li
              className="text-xl text-white border-b border-dashed w-full pb-3 border-brand-80/0.4"
              key={nav}
            >
              <a href="#">{nav}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
