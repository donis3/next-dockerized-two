import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { rubik } from "./fonts/fonts";
import Navbar from "./(common)/Navbar";

export const metadata: Metadata = {
	title: "Next14-Dockerized",
	description: "Dockerized Next 14 app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={rubik.variable}>
			<body className={rubik.className}>
				<header>
					<Navbar />
				</header>
				{children}
			</body>
		</html>
	);
}
