import * as fs from "fs";
import * as path from "path";

async function buildDts(imports: string[], outputFilename: string, sources: string[]): Promise<void> {
    let finalContent: string = "";

    if (imports && imports.length > 0) {
        imports.forEach(im => {
            finalContent += `${im}\n`;
        });
        finalContent += `\n`;
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
    path.join("./pkg/", "iota-pico-lib-nodejs.d.ts"),
    [
        "@iota-pico/core",
        "@iota-pico/data",
        "@iota-pico/api",
        "@iota-pico/crypto",
        "@iota-pico/business",
        "@iota-pico/pal-nodejs",
        "@iota-pico/pow-box",
        "@iota-pico/pow-js",
        "@iota-pico/pow-nodejs"
        // "@iota-pico/pow-wasm",
    ]
);