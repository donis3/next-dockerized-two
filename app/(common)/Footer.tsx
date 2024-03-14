import Link from "next/link";

export default function Footer() {
	return (
		<>
			<div className="container px-4 text-xs">
				<p className="opacity-20">
					NODE_ENV: <span>{process.env.NODE_ENV || "undefined"}</span>
				</p>
			</div>
			<div className="container flex flex-wrap gap-1 justify-between items-center px-4 text-sm mt-2">
				<p>
					&copy;2024{" "}
					<Link href={"https:/www.donis.dev"} className="underline">
						Deniz Özkan
					</Link>
				</p>
				<p>
					<Link
						href={"https://github.com/donis3/next-dockerized"}
						className="underline">
						Github
					</Link>
				</p>
			</div>
		</>
	);
}
