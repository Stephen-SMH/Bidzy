"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function RoleSelection() {
	const [role, setRole] = useState<"artist" | "bidder" | null>(null);
	const [showSignIn, setShowSignIn] = useState(false);
	const [authError, setAuthError] = useState("");
	const searchParams = useSearchParams();
	const handleNext = () => {
		if (role) {
			localStorage.setItem("role", role);
			setShowSignIn(true);
		}
	};

	useEffect(() => {
		const error = searchParams?.get("error");

		if (error) {
			setAuthError("Authentication failed. Please try again.");
		}
	}, [searchParams]);

	const handleSignIn = async () => {
		setAuthError(""); // clear old error
		const result = await signIn("google", { redirect: false });

		if (result?.error) {
			setAuthError("Authentication failed. Please try again.");
			console.log("Google SignIn Result:", result);
		}
	};

	return (
		<div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 md:px-8">
			<div className="w-full max-w-sm text-center">
				{/* Header */}
				<p className="text-sm text-gray-400 font-bold mb-2">WELCOME TO</p>
				<h1 className="text-4xl font-extrabold text-indigo-600 mb-3">BIDZY</h1>

				{/* Step 1: Role selection */}
				{!showSignIn ? (
					<>
						<p className="text-lg font-bold text-black mb-6">คุณคือใคร</p>

						<div className="space-y-3">
							<button
								onClick={() => setRole("bidder")}
								className={`w-full h-12 rounded-lg text-sm font-semibold border transition ${
									role === "bidder" ? "bg-indigo-700 text-white border-indigo-700" : "bg-white text-black border-gray-300 hover:border-indigo-400"
								}`}>
								นักประมูล
							</button>

							<button
								onClick={() => setRole("artist")}
								className={`w-full h-12 rounded-lg text-sm font-semibold border transition ${
									role === "artist" ? "bg-indigo-700 text-white border-indigo-700" : "bg-white text-black border-gray-300 hover:border-indigo-400"
								}`}>
								ศิลปิน
							</button>
						</div>

						<button
							onClick={handleNext}
							disabled={!role}
							className={`mt-6 w-full rounded-full py-2 font-semibold flex items-center justify-center text-sm transition ${
								role ? "bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:to-blue-600" : "bg-gray-200 text-gray-400 cursor-not-allowed"
							}`}>
							Next <span className="ml-1">→</span>
						</button>
					</>
				) : (
					// Step 2: Google Sign-in
					<div className="flex flex-col items-center justify-center w-full space-y-4 mt-10">
						<p className="text-sm text-indigo-500 font-semibold">Connect with us</p>
						{authError && <div className="mb-4 w-full bg-red-100 text-red-700 border border-red-300 px-4 py-2 rounded text-sm">{authError}</div>}
						<button
							onClick={handleSignIn}
							className="flex items-center justify-center border rounded-full py-3 px-4 w-full shadow text-sm font-medium hover:bg-gray-50">
							<Image src="/google_icon.png" alt="G" width={20} height={20} className="mr-2" />
							Continue with Google
						</button>
					</div>
				)}

				{/* Mascot Image */}
				<div className="mt-10">
					<Image src="/bidzy_artist.png" alt="Bidzy character" width={160} height={160} className="mx-auto" />
				</div>
			</div>
		</div>
	);
}
