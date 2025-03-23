import { NavLink } from "react-router";
import { navLinks } from "./paths";

const Navbar = () => {
    const links = navLinks();
    return (

        <nav className="flex items-center justify-between bg-linear-to-r from-[#54AE7A] to-[#299574] px-4 py-2 text-white">
            <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                <h2>Mindfulcare</h2>
            </div>
            <ul className="flex items-center justify-between gap-6 text-slate-900">
                {
                    links.map((link, index) => <li key={index} className="cursor-pointer  rounded-full  font-normal px-6 py-2 text-white ">
                        <NavLink
                            to={link.path}
                            className={({ isActive }) => (isActive ? 'text-[#EB744A] font-bold' : 'text-white font-normal')}
                        >
                            {link.pathName}
                        </NavLink>
                    </li>)
                }
            </ul>
            <div>
                <li className="cursor-pointer flex gap-2 list-none rounded-full px-6 py-2 font-bold text-white bg-[#EB744A]">
                    Contact Us
                </li>
            </div>
        </nav>

    )
}

export default Navbar