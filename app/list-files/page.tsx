import appConfig from "@/lib/app-config";
import { readdir } from "fs/promises";
import DeleteFileBtn from "./delete-file-button";
import { chmodSync, existsSync, mkdirSync } from "fs";

type ListFilePageProps = {};

export default async function ListFilePage({}: ListFilePageProps) {
	const files = await getFiles();

	if (!files) return <NoFiles />;

	return (
		<main className=" container p-4 ">
			<section className="space-y-1">
				<h2 className="font-bold text-lg">
					File List{" "}
					<span className="text-sm font-normal">
						({files.length} files)
					</span>
				</h2>
				<p>
					This route reads the /files directory and lists all created
					files.
				</p>
				<div>
					{files.length === 0 ? (
						<p>Directory is empty. Create a file to start.</p>
					) : (
						<ul className="mt-8 border p-1 border-red-400/20 bg-red-400/5 rounded-md border-dotted flex flex-col gap-2">
							<li className="font-bold">&#128193; /Files</li>
							{files.map((file, i) => {
								return (
									<li
										key={file.name}
										className="flex flex-row items-center gap-1 font-mono font-semibold pl-4">
										<span>{file.name} </span>
										<DeleteFileBtn name={file.name} />
									</li>
								);
							})}
						</ul>
					)}
				</div>
			</section>
		</main>
	);
}

function NoFiles() {
	return (
		<main className=" container p-4 ">
			<section>
				<h2 className="font-bold text-lg">File List</h2>
				<p>An error occurred while reading directory</p>
			</section>
		</main>
	);
}

async function getFiles() {
	const dir = appConfig.getPathTo("files");

	try {
		if (!existsSync(dir)) {
			mkdirSync(dir);
			chmodSync(dir, 0o666);
		}
		const files = await readdir(dir, { withFileTypes: true });
		return files;
	} catch (error) {
		console.log("❌ Unable to read files at: " + dir);
	}
}
