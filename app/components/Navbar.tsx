import Link from "next/link";
import { CiSquarePlus } from 'react-icons/ci';

export default function Navbar() {
    return (
        <div>
            <div className="bg-gray-800 flex items-center gap-4 font-medium text-gray-200 h-12">
                <div className="flex cursor-pointer justify-between w-full h-full">
                    <div className="flex">
                        <Link className="px-4 h-full flex items-center hover:bg-gray-900 hover:text-gray-300 transition-all duration-300" href="/">
                            Home
                        </Link>
                        <Link className="px-4 h-full flex gap-2 items-center hover:bg-gray-900 hover:text-gray-300 transition-all duration-300" href="/CreatePost">
                            New Post <CiSquarePlus className="w-8 h-8" />
                        </Link>
                    </div>
                    <Link className="px-4 h-full flex items-center hover:bg-gray-900 hover:text-gray-300 transition-all duration-300" href="/Profile">
                        Profile
                    </Link>
                </div>
            </div>
        </div>
    )
}