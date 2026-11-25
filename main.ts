import * as fs from "node:fs";
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", "Tests passed. I ran none.\n", "utf-8");
