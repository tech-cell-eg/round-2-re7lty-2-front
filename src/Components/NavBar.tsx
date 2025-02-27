import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
    const [bg, setBg] = useState("bg-transparent");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setBg("bg-[#9d7dba] shadow-lg");
            } else {
                setBg("bg-transparent");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className={`flex flex-row-reverse fixed top-0 left-0 w-full ${bg} p-6 text-white justify-between items-center transition-all duration-300 z-10`}>
            {/* Logo */}
            <Link
                to="hero"
                smooth={true}
                duration={500}
            >
                <div className="text-xl font-bold cursor-pointer"><span className="text-yellow-400">.</span>رحلاتي</div>
            </Link>

            {/* Menu Items (Desktop view) */}
            <ul className="hidden md:flex flex-row-reverse gap-6 text-white">
                {[
                    { name: "الرحلات", to: "trips" },
                    { name: "الخدمات", to: "services" },
                    { name: "الأسعار", to: "pricing" },
                    { name: "آراء العملاء", to: "testimonials" },
                    { name: "اتصل بنا", to: "contact" },
                ].map((item, index) => (
                    <li className="hover:text-yellow-400 active:text-yellow-400 cursor-pointer" key={index}>
                        <Link
                            to={item.to}
                            smooth={true}
                            duration={500}
                            style={{ color: "inherit", textDecoration: "none" }}
                            className="text-white cursor-pointer hover:text-yellow-400 transition"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Hamburger Icon */}
            <div className="md:hidden flex items-center" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} className="text-2xl" /> {/* FontAwesome Icon */}
            </div>

            {/* Aside Menu for Mobile */}
            {menuOpen && (
                <div className="fixed top-15 left-0 w-1/4 bg-[#9d7dba] p-6 md:hidden ">
                    <ul className="flex flex-col gap-5 text-white mt-5 justify-center items-center">
                        {[
                            { name: "الرحلات", to: "trips" },
                            { name: "الخدمات", to: "services" },
                            { name: "الأسعار", to: "pricing" },
                            { name: "آراء العملاء", to: "testimonials" },
                            { name: "اتصل بنا", to: "contact" },
                        ].map((item, index) => (
                            <li className=" flex justify-center text-center rhover:text-yellow-400 active:text-yellow-400 cursor-pointer" key={index}>
                                <Link
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    style={{ color: "inherit", textDecoration: "none" }}
                                    className="text-white cursor-pointer hover:text-yellow-400 transition"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                        {/* youtube btn */}
                        <div className="flex justify-between">
                            <div className="flex justify-center bg-[#f3f4f6] text-black p-2 w-[50px] rounded-2xl hover:bg-gray-300">
                                <span>
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </ul>

                </div>
            )}

            {/* Action Button */}
            <div className="hidden md:flex items-center justify-center gap-5">
                <div className=" flex items-center justify-center bg-[#f3f4f6] text-black p-2 w-[50px] rounded-2xl hover:bg-gray-300">
                    <span>
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </span>
                </div>
                <h1 className="font-semibold text-xl">يوتيوب</h1>
            </div>
        </nav>
    );
};

export default Navbar;
