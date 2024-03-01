import Link from "next/link";

export default function Home() {
	return (
		<main className=" container p-4 ">
			<section>
				<h2 className="font-bold text-lg">Welcome to Next- Docker</h2>
				<div>
					<p>
						This project explores running an app router next.js
						application with file system actions on a docker
						container.
					</p>
				</div>
			</section>
		</main>
	);
}
