import Link from "next/link";

type NavbarProps = {};

export default function Navbar({}: NavbarProps) {
	return (
		<div className="container flex flex-wrap gap-1 justify-between items-center px-4 ">
			<Link href={"/"}>
				<h1 className="font-bold text-2xl flex-1 text-indigo-700 flex gap-1 items-center">
					🐳 Next-Docker-Two
				</h1>
			</Link>
			<nav className="flex flex-wrap gap-2 font-medium text-indigo-600 underline decoration-cyan-400">
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
