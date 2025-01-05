import { copyFile } from "fs";

// File destination.txt will be created or overwritten by default.
copyFile("./build/404.html", "./build/index.html", (err) => {
	if (err) throw err;
	console.log("Duplicated 404.html as index.html");
});
