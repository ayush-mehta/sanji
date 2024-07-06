"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import config from "../../urls.json";
import { GetAuthTokenResponse } from "./dto";

const LoginForm = (): JSX.Element => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const router = useRouter();

	const handleLogin = async (): Promise<void> => {
		try {
			const url = config.zoro.baseURL + config.zoro.paths.getUserAuthToken + `/${username}`;
			console.log(url);
			const response = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ password: password }),
			});

			if (!response.ok) {
				const errorData = await response.json();
				setErrorMessage(errorData.message || response.statusText);
				return;
			}

			const data: GetAuthTokenResponse = await response.json();
			const authToken = data.authToken;
			localStorage.setItem("authToken", authToken);
			localStorage.setItem("username", username);
			router.push(`/profile/${username}`);
		} catch (error) {
			console.error("Login error:", error);
			setErrorMessage("An unexpected error occurred.");
		}
	};

	return (
		<div className="w-80">
			<label className="input input-bordered flex items-center gap-2 mb-4 text-black">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
					<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
				</svg>
				<input type="text" className="grow" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
			</label>
			<label className="input input-bordered flex items-center gap-2 mb-4 text-black">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
					<path
						fillRule="evenodd"
						d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
						clipRule="evenodd"
					/>
				</svg>
				<input type="password" className="grow" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
			</label>
			{errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
			<button className="btn btn-primary w-full" onClick={handleLogin}>
				Login
			</button>
		</div>
	);
};

export default LoginForm;
