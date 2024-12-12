import { Link } from "react-router";

function Header() {
    return (
        <header className="block w-full h-16 px-6 shadow-md bg-white">
            <div className="flex flex-row justify-between h-14 items-center">
                {/* Search Input */}
                <div className="relative w-1/4 max-w-md">
                    <input
                        className="border-2 border-gray-300 h-10 pl-4 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 w-full text-right"
                        type="text"
                        placeholder="חיפוש"
                    />
                    <button
                        className="absolute top-0 right-0 h-10 w-10 flex items-center justify-center"
                        type="button"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </button>
                </div>

                {/* Logo */}
                <Link to={"/"}>
                    <img
                        className="h-12 p-1 object-contain"
                        src="https://c.animaapp.com/17bVmHgi/img/-----------1@2x.png" // Replace with the actual logo path
                        alt="Logo"
                    />
                </Link>
            </div>
        </header>
    );
}

export default Header;
