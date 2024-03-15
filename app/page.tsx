export default function Home() {
	const envs = ["NEXT_PUBLIC_SITE_URL", "NODE_ENV"];

	return (
		<main className=" container px-4 py-20">
			<section className="flex gap-10 justify-between items-start">
				<div className="flex-1">
					<h2 className="text-[3rem] font-bold text-blue-500">
						Self hosting Next.js
					</h2>
					<p className="text-xl leading-relaxed tracking-wide">
						Lets explore self hosting a next.js app on a virtual
						private server (vps) using nginx and docker
					</p>
				</div>
				<div>
					<img src="/whale.jpg" alt="" className="h-36" />
				</div>
			</section>
			<section className="mt-5">
				<p className="text-lg font-thin bg-white/20 rounded-md p-1 flex flex-col items-center">
					<span className="text-2xl">😊</span>
					<span className="max-w-sm">
						This app is running in a docker container on the starter
						ovh cloud vps.
					</span>
				</p>
				<p className="text-lg font-thin bg-white/20 rounded-md p-1 flex flex-col items-center mt-2">
					<span className="text-2xl">🤯</span>
					<span className="max-w-sm">
						This is cloned from a public repository which means the
						vps doesn't need github account access ssh key.
					</span>
				</p>
			</section>
			<section className="mt-20">
				<h3 className="text-3xl font-bold text-blue-500">Features</h3>
				<ul className="space-y-2 py-3 text-lg px-2">
					<li>Dockerized next.js app</li>
					<li>Easy to set up</li>
					<li>
						Ability to host multiple sites and domains in a single
						vps
					</li>
					<li>
						Free and auto renewing SSL certificates using Lets
						Encrypt and Certbot
					</li>
					<li>
						Access to filesystem which means we can use sqlite
						database if needed.
					</li>
				</ul>
			</section>
			<section className="mt-20">
				<h3 className="text-3xl font-bold text-blue-500">
					Setup overview
				</h3>
				<p className="text-lg py-2 tracking-wide leading-relaxed">
					Here is an overview of the setup process. For details, read
					the blog post here
				</p>
				<ul className="mt-6 space-y-2 opacity-80 list-decimal list-inside">
					<li>Obtain a linux server and setup ssh access.</li>
					<li>
						Go to your domain provider and add the required dns
						records so your domain is pointing at your vps' ip
					</li>
					<li>
						Connect to your server via ssh and install dependencies:
						docker, docker-compose, nginx, certbot
					</li>
					<li>
						Clone your web application (next.js project) to the
						server and run docker build or docker-compose up.
					</li>
					<li>
						Setup nginx conf so anyone can access the application
						using your domain over http (port 80)
					</li>
					<li>
						Configure certbot for this domain to enable ssl
						connection.
					</li>
					<li>Test auto renewal of the ssl certificate</li>
				</ul>
			</section>
		</main>
	);
}
