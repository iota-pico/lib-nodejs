import * as fs from "fs";
import * as path from "path";

export async function buildDts(imports: string[], sourceIndex: string, outputFilename: string): Promise<void> {
    let finalContent: string = "";

    if (imports && imports.length > 0) {
        imports.forEach(im => {
            finalContent += `${im}\n`;
        });
        finalContent += `\n`;
    }

    const sources: string[] = [];
    const sourceScript: string = fs.readFileSync(sourceIndex).toString();
    const sourceExports: RegExpMatchArray = sourceScript.match(/export \* from \"(.*)\";/g);

    for (let i: number = 0; i < sourceExports.length; i++) {
        sources.push(/export \* from \"(.*)\";/g.exec(sourceExports[i])[1]);
    }

    for (let i: number = 0; i < sources.length; i++) {
        const moduleDistPath: string = path.join("./node_modules/", sources[i], "dist");
        console.log(`Merging ${moduleDistPath}`);

        const indexFile: string = fs.readFileSync(path.join(moduleDistPath, "index.d.ts")).toString();

        const exports: RegExpMatchArray = indexFile.match(/export \* from \"(.*)\";/g);

        for (let i: number = 0; i < exports.length; i++) {
            const fname: string = /export \* from \"(.*)\";/g.exec(exports[i])[1] + ".d.ts";
            console.log(`\t${path.join(moduleDistPath, fname)}`);

            const lines: string[] = fs.readFileSync(path.join(moduleDistPath, fname)).toString().split("\n");

            lines.forEach(line => {
                if (!line.startsWith("import")) {
                    line = line.replace("export declare", "export");
                    finalContent += `${line}\n`;
                }
            });
        }
    }

    fs.writeFileSync(outputFilename, finalContent);
}

buildDts(
    [
        "import { Stats } from \"fs\";",
        "import http from \"http\";",
        "import https from \"https\";",
        "import bigInt from \"big-integer\";"
    ],
    "./src/index-all.ts",
    "./pkg/iota-pico-lib-nodejs.d.ts"
);
