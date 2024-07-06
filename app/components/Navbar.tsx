import Link from "next/link";
import React from "react";

const Navbar = (): JSX.Element => {
	return (
		<div className="navbar bg-gray-300 flex justify-between items-center px-4 text-black">
			<Link href="/" className="btn btn-ghost text-xl">
				CAREU
			</Link>
			<div className="flex space-x-4">
				<Link href="/contact" className="btn btn-ghost">
					Contact Us
				</Link>
				<Link href="/register" className="btn btn-ghost">
					Register
				</Link>
				<Link href="/login" className="btn btn-ghost">
					Login
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
