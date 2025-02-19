import Link from "next/link";
import { CiSquarePlus } from 'react-icons/ci';
import { userLogged } from "../services/userService";

export default async function Navbar() {
    const logged = userLogged();

    return (
        <div>
            <div className="bg-gray-800 flex items-center gap-4 font-medium text-gray-200 h-12">
                <div className="flex cursor-pointer justify-between w-full h-full">
                    <div className="flex">
                        <Link className="px-4 h-full flex items-center hover:bg-gray-900 hover:text-gray-300 transition-all duration-300" href="/">
                            Home
                        </Link>
                        <Link className="px-4 h-full flex gap-2 items-center hover:bg-gray-900 hover:text-gray-300 transition-all duration-300" href="/createPost">
                            New Post <CiSquarePlus className="w-6 h-6" />
                        </Link>
                    </div>
                    <Link className="px-4 h-full flex items-center hover:bg-gray-900 hover:text-gray-300 transition-all duration-300" href="/profile">
                        { logged ? '' : 'Sign Up/In' }
                    </Link>
                </div>
            </div>
        </div>
    )
}