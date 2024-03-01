import Link from "next/link";

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
	return (
		<div className="container flex flex-wrap gap-1 justify-between items-center px-4">
			<h1 className="font-bold text-2xl flex-1 text-red-400">
				Next-Docker
			</h1>
			<nav className="flex flex-wrap gap-2 font-medium text-orange-500 underline decoration-red-700">
				<Link href={"/"} prefetch={false}>
					Home
				</Link>
				<Link href={"/file"} prefetch={false}>
					Create File
				</Link>
				<Link href={"/list-files"} prefetch={false}>
					List Files
				</Link>
			</nav>
		</div>
	);
}
