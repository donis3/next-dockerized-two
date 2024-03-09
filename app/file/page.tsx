import Link from "next/link";
import FileForm from "./file-form";

type FilePageProps = {};

export default function FilePage({}: FilePageProps) {
	return (
		<main className=" container p-4 ">
			<section>
				<h2 className="font-bold text-lg">File Creator</h2>
				<p className="py-2">
					This form uses useFormStatus and dispatches an action to
					create a file at the /files directory with the given content.
				</p>
			</section>
			<section className="p-4 mt-8 bg-red-500/5 rounded-lg">
				<FileForm />
			</section>
		</main>
	);
}
