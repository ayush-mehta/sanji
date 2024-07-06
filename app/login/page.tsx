import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Navbar from "../components/Navbar";

const LoginForm = dynamic(() => import("../components/LoginForm"), { ssr: false });

const LoginPage = (): JSX.Element => {
	return (
		<div>
			<Navbar />
			<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
				<div className="mb-6">
					<Image src="/careuLogin.svg" alt="CareU Login" width={300} height={300} />
				</div>
				<LoginForm />
				<div className="mt-6 text-center text-black">
					<p className="mb-4">If you don not have an account, register with us</p>
					<Link href="/register">
						<button className="btn btn-primary">Register</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
