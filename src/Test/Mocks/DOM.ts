import fs from "fs";
import path from "path"

export const indexHtml = fs.readFileSync(path.resolve(__dirname,"../../App/index.html"),"utf-8");