import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
    const [bg, setBg] = useState("bg-transparent");
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setBg("bg-[#9d7dbae8] shadow-lg");
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
            <div className="text-xl font-bold"><span className="text-yellow-400">.</span>رحلاتي</div>

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
                <div className="fixed top-0 left-0 w-1/4 h-full bg-[#9d7dbae8] p-6 md:hidden">
                    <button
                        className="absolute top-3 right-4 text-white text-md mb-2"
                        onClick={toggleMenu}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <ul className="flex flex-col gap-5 text-white mt-5">
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
                        <div className="flex justify-center bg-gray-100 text-black p-2 w-[50px] rounded-2xl hover:bg-gray-300">
                            <span>
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </span>
                        </div>
                    </ul>

                </div>
            )}

            {/* Action Button */}
            <div className="hidden md:flex justify-center bg-gray-100 text-black p-2 w-[50px] rounded-2xl hover:bg-gray-300">
                <span>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                </span>
            </div>
        </nav>
    );
};

export default Navbar;
