"use client";

import { useState } from "react";
import { deleteFileAction } from "../actions/actions";

type DeleteFileBtnProps = {
	name: string;
};

export default function DeleteFileBtn({ name }: DeleteFileBtnProps) {
	const [deleted, setDeleted] = useState(false);
	const [msg, setMsg] = useState("");
	async function handleClick() {
		const { result, success } = await deleteFileAction(name);
		if (success) {
			setDeleted(true);
		}
		setMsg(result);
	}

	if (deleted) {
		return "...deleted";
	}

	return (
		<>
			<button
				type="button"
				onClick={handleClick}
				className="font-bold px-2 py-0.5 text-white bg-red-500 rounded-md text-sm hover:bg-red-600 active:translate-y-0.5">
				×
			</button>
			{msg.length > 0 && <span>{msg}</span>}
		</>
	);
}
