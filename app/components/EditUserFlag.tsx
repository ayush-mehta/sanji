"use client";

import React, { useEffect, useState } from "react";
import { FiEdit2 } from "react-icons/fi"; // Using react-icons for the pencil icon

const EditFlagChecker = ({ username }: { username: string }): JSX.Element => {
	const [editFlag, setEditFlag] = useState(false);

	useEffect(() => {
		const authToken = localStorage.getItem("authToken");
		const storedUsername = localStorage.getItem("username");
		if (authToken && storedUsername === username) {
			setEditFlag(true);
		}
	}, [username]);

	return (
		<div className="relative">
			{editFlag ? (
				<div className="absolute top-4 right-4">{editFlag ? <FiEdit2 className="text-blue-500 cursor-pointer" size={24} title="Edit Profile" /> : null}</div>
			) : (
				<p className="text-red-500">You cannot edit this profile.</p>
			)}
		</div>
	);
};

export default EditFlagChecker;
