import path from "path";

type Envs = typeof process.env.NODE_ENV;
type AppPaths = "root" | "files";
type AppConfig = {
	path: {
		[key in Envs]: {
			[pathkey in AppPaths]?: string;
		};
	};
	getPathTo: (target: AppPaths, filename?: string) => string;
};

const rootdir = path.resolve("./");

const appConfig: AppConfig = {
	path: {
		production: {
			files: path.join("/", "app", "files"),
			root: path.join("/", "app"),
		},
		development: {
			root: rootdir,
			files: path.join(rootdir, "files"),
		},
		test: {
			files: path.join(rootdir, "files"),
		},
	},
	getPathTo(target, filename) {
		const result = this.path[process.env.NODE_ENV][target];
		if (result !== undefined) {
			return filename == undefined ? result : path.join(result, filename);
		}
		const fallback = this.path.development[target];
		if (fallback !== undefined) {
			return filename == undefined
				? fallback
				: path.join(fallback, filename);
		}
		throw new Error(`Unable to resolve path for ${target}`);
		return "";
	},
};

export default appConfig;
