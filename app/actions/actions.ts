"use server";

import appConfig from "@/lib/app-config";
import { readdir, unlink, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import path from "path";

type createFileState = { result: string; success?: boolean };

export async function createFileAction(
	previousState: createFileState,
	formData: FormData,
): Promise<createFileState> {
	const name = formData.get("filename")?.toString().trim();
	const data = formData.get("filebody")?.toString().trim();

	if (!name || name.length < 3 || name.length > 50)
		return { result: "❌ Filename must be 3-50 characters long" };
	if (!data || data.length < 3 || data.length > 2000)
		return { result: "❌ File contents must be 3-2000 characters long" };

	await sleep(500);
	const count = await fileCount();
	if (count > 20)
		return {
			result: "❌ Max file count (20) reached. Please delete some before creating a new one.",
		};

	//const filepath = path.join(appConfig.path.root, "files", name);

	const filepath = path.join("/app", "files", name);

	try {
		await writeFile(filepath, data, { encoding: "utf-8" });

		revalidatePath("/list-files");
		return { result: "✅File created successfully!", success: true };
	} catch (error) {
		console.log("❌ Unable to write file: " + filepath);
		return { result: "❌ Failed to create file " };
	}
}

export async function deleteFileAction(name: string) {
	if (!name || name.length < 3) return { result: "❌ Invalid Filename" };

	const filepath = path.join("/app", "files", name);

	try {
		await unlink(filepath);
		revalidatePath("/list-files");
		return { result: "✅File deleted successfully!", success: true };
	} catch (error) {
		return { result: "❌ Delete file failed. " };
	}
}

async function fileCount() {
	const dir = path.join("/app", "files");

	try {
		const files = await readdir(dir, { withFileTypes: true });
		return files.length;
	} catch (error) {
		console.log("❌ Unable to read files at: " + dir);
	}
	return 0;
}

async function sleep(delay: number = 1000): Promise<void> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(undefined);
		}, delay);
	});
}
