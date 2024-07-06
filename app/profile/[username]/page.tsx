// pages/app/profile/[username].tsx

import React from "react";
import config from "../../../urls.json";
import dynamic from "next/dynamic";
import { User } from "../dto";
import "daisyui/dist/full.css"; // Make sure DaisyUI styles are imported
import Navbar from "@/app/components/Navbar";

const EditFlagChecker = dynamic(() => import("../../components/EditUserFlag"), { ssr: false });

type ProfilePageProps = {
	params: {
		username: string;
	};
};

const ProfilePage: React.FC<ProfilePageProps> = async ({ params }: { params: { username: string } }) => {
	const getUserData = async (username: string): Promise<User> => {
		const url = `${config.zoro.baseURL}${config.zoro.paths.fetchUser}/${username}`;
		const response = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (!response.ok) {
			throw new Error("Failed to fetch user data");
		}
		const data = await response.json();
		return data;
	};

	const userData: User = await getUserData(params.username);

	return (
		<div className="relative flex flex-col items-center justify-center min-h-screen bg-base-200">
			<Navbar />
			<div className="card w-full max-w-xl bg-base-100 shadow-xl mt-6 relative">
				<div className="card-body">
					<h2 className="card-title text-3xl font-bold mb-4">Profile Page</h2>
					<div className="flex flex-col space-y-4">
						<div>
							<span className="font-semibold">First Name: </span>
							{userData.firstName}
						</div>
						<div>
							<span className="font-semibold">Last Name: </span>
							{userData.lastName}
						</div>
						<div>
							<span className="font-semibold">Email: </span>
							{userData.email}
						</div>
						<div>
							<span className="font-semibold">Subscription Class: </span>
							{userData.subscriptionClassId}
						</div>
						<div>
							<span className="font-semibold">Primary Research Field: </span>
							{userData.primaryResearchFieldId}
						</div>
						<div>
							<span className="font-semibold">Organization: </span>
							{userData.orgId}
						</div>
						<div>
							<span className="font-semibold">Research Fields: </span>
							{userData.researchFields.join(", ")}
						</div>
						<div>
							<span className="font-semibold">Email Verified: </span>
							{userData.isEmailVerified ? "Yes" : "No"}
						</div>
						<div>
							<span className="font-semibold">Verified: </span>
							{userData.isVerified ? "Yes" : "No"}
						</div>
						<div>
							<span className="font-semibold">Newsletter Subscribed: </span>
							{userData.isNewsletterSubscribed ? "Yes" : "No"}
						</div>
						<div>
							<span className="font-semibold">Active: </span>
							{userData.active ? "Yes" : "No"}
						</div>
					</div>
				</div>
				<EditFlagChecker username={params.username} />
			</div>
		</div>
	);
};

export default ProfilePage;
