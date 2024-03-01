"use client";

import { useFormState } from "react-dom";
import { createFileAction } from "../actions/actions";
import { FormEvent, useState } from "react";

type FileFormProps = {};

export default function FileForm({}: FileFormProps) {
	const [pending, setPending] = useState(false);
	const [state, dispatch] = useFormState(createFileAction, { result: "" });
	const [message, setMessage] = useState("");

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setPending(true);
		if (!e.target) return;
		const formRef = e.currentTarget; //Capture the ref
		const formData = new FormData(e.currentTarget);
		const { result, success } = await createFileAction(state, formData);

		//Reset form
		if (success) {
			formRef.reset();
		}
		setPending(false);

		//Display result
		setMessage(result);
		setTimeout(() => {
			setMessage("");
		}, 5000);
	}

	return (
		<form action={dispatch} onSubmit={handleSubmit} id="file_form">
			<div className="grid grid-cols-4 gap-y-10 gap-x-2">
				<label htmlFor="name">filename</label>
				<input
					type="text"
					name="filename"
					id="name"
					className="col-span-3 p-1"
					minLength={3}
					required
				/>

				<label htmlFor="content">Content</label>
				<textarea
					id="content"
					name="filebody"
					rows={3}
					className="col-span-3 resize-none p-1"
					minLength={3}
					required
				/>
				<div className="col-span-3 col-start-2">
					<button
						disabled={pending}
						type="submit"
						form="file_form"
						className="block w-full  bg-blue-500 p-2 rounded-sm active:bg-blue-600 hover:bg-purple-500 text-white font-medium disabled:opacity-30 disabled:hover:bg-blue-500">
						Create File
					</button>
				</div>
				<div className="col-span-3 col-start-2 font-bold">
					{state.result || ""}
					{message}
				</div>
			</div>
		</form>
	);
}
