export default function Home() {
	const envs = ["NEXT_PUBLIC_SITE_URL", "NODE_ENV"];

	return (
		<main className=" container p-4 space-y-10 ">
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
			<section>
				<h2 className="font-bold text-lg">Environment</h2>
				<ul className="space-y-2 py-2 text-sm text-orange-900">
					{envs.map((env) => {
						return (
							<li key={env} className="p-1 bg-black/5 rounded-md">
								<span className="pr-2 font-semibold">
									{env}
								</span>
								<span>{process.env?.[env] || "undefined"}</span>
							</li>
						);
					})}
				</ul>
			</section>
			<section>
				<img src="/bg-1.webp" alt="" />
				<img src="/angry.png" alt="" />
			</section>
		</main>
	);
}
