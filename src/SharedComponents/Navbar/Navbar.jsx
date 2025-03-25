import { NavLink } from "react-router";
import { navLinks } from "./paths";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const links = navLinks();
    return (

        <nav className="bg-gradient-to-r from-[#54AE7A] to-[#299574] text-white">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo - Always visible */}
                    <div className="flex-shrink-0 scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                        <h2>Mindfulcare</h2>
                    </div>

                    {/* Desktop Navigation - Hidden on mobile */}
                    <div className="hidden 2xl:block lg:block xl:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <ul className="flex items-center space-x-2 lg:space-x-6">
                                {links.map((link, index) => (
                                    <li key={index} className="cursor-pointer rounded-full px-3 py-2 text-sm font-normal text-white lg:px-6 lg:text-base">
                                        <NavLink
                                            to={link.path}
                                            className={({ isActive }) =>
                                                isActive ? 'text-[#EB744A] font-bold' : 'text-white hover:text-[#EB744A] transition-colors'
                                            }
                                        >
                                            {link.pathName}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="ml-4 hidden 2xl:block xl:block lg:block">
                        <button className="flex items-center gap-2 rounded-full bg-[#EB744A] px-4 py-2 text-sm font-bold text-white hover:bg-[#d1663e] transition-colors lg:px-6 lg:text-base">
                            Contact Us
                        </button>
                    </div>

                    {/* Mobile menu button - Visible only on mobile */}
                    <div className="flex 2xl:hidden xl:hidden lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#3a8d65] focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Only shows when menu is open */}
            {isMenuOpen && (
                <div className="block 2xl:hidden xl:hidden lg:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {links.map((link, index) => (
                            <NavLink
                                key={index}
                                to={link.path}
                                className={({ isActive }) =>
                                    `block rounded-md px-3 py-2 text-base font-medium ${isActive ? 'bg-[#3a8d65] text-[#EB744A]' : 'text-white hover:bg-[#3a8d65]'
                                    }`
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.pathName}
                            </NavLink>
                        ))}
                        <button className="mt-2 block w-full rounded-md bg-[#EB744A] px-3 py-2 text-base font-bold text-white hover:bg-[#d1663e]">
                            Contact Us
                        </button>
                    </div>
                </div>
            )}
        </nav>

    )
}

export default Navbar