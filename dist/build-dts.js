var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
async function buildDts(imports, sourceIndex, outputFilename) {
    let finalContent = "";
    if (imports && imports.length > 0) {
        imports.forEach(im => {
            finalContent += `${im}\n`;
        });
        finalContent += `\n`;
    }
    const sources = [];
    const sourceScript = fs.readFileSync(sourceIndex).toString();
    const sourceExports = sourceScript.match(/export \* from \"(.*)\";/g);
    for (let i = 0; i < sourceExports.length; i++) {
        sources.push(/export \* from \"(.*)\";/g.exec(sourceExports[i])[1]);
    }
    console.log("Sources", sources);
    for (let i = 0; i < sources.length; i++) {
        const moduleDistPath = path.join("./node_modules/", sources[i], "dist");
        console.log(`Merging ${moduleDistPath}`);
        const indexFile = fs.readFileSync(path.join(moduleDistPath, "index.d.ts")).toString();
        const exports = indexFile.match(/export \* from \"(.*)\";/g);
        for (let i = 0; i < exports.length; i++) {
            const fname = /export \* from \"(.*)\";/g.exec(exports[i])[1] + ".d.ts";
            console.log(`\t${path.join(moduleDistPath, fname)}`);
            const lines = fs.readFileSync(path.join(moduleDistPath, fname)).toString().split("\n");
            lines.forEach(line => {
                if (!line.startsWith("import") && !line.startsWith("/// <reference")) {
                    line = line.replace("export declare", "export");
                    finalContent += `${line}\n`;
                }
            });
        }
    }
    fs.writeFileSync(outputFilename, finalContent);
}
exports.buildDts = buildDts;
buildDts([
    "/// <reference types=\"node\" />",
    "import { Stats } from \"fs\";",
    "import http from \"http\";",
    "import https from \"https\";",
    "import bigInt from \"big-integer\";"
], "./src/index-all.ts", "./pkg/iota-pico-lib-nodejs.d.ts");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZHRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2J1aWxkLWR0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHVDQUF5QjtBQUN6QiwyQ0FBNkI7QUFFdEIsS0FBSyxtQkFBbUIsT0FBaUIsRUFBRSxXQUFtQixFQUFFLGNBQXNCO0lBQ3pGLElBQUksWUFBWSxHQUFXLEVBQUUsQ0FBQztJQUU5QixJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUMvQixPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2pCLFlBQVksSUFBSSxHQUFHLEVBQUUsSUFBSSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsWUFBWSxJQUFJLElBQUksQ0FBQztLQUN4QjtJQUVELE1BQU0sT0FBTyxHQUFhLEVBQUUsQ0FBQztJQUM3QixNQUFNLFlBQVksR0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3JFLE1BQU0sYUFBYSxHQUFxQixZQUFZLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFFeEYsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkQsT0FBTyxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN2RTtJQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBRWhDLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzdDLE1BQU0sY0FBYyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBRXpDLE1BQU0sU0FBUyxHQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU5RixNQUFNLE9BQU8sR0FBcUIsU0FBUyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRS9FLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdDLE1BQU0sS0FBSyxHQUFXLDJCQUEyQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7WUFDaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVyRCxNQUFNLEtBQUssR0FBYSxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWpHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUNsRSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDaEQsWUFBWSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUM7aUJBQy9CO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtLQUNKO0lBRUQsRUFBRSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQTVDRCw0QkE0Q0M7QUFFRCxRQUFRLENBQ0o7SUFDSSxrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIscUNBQXFDO0NBQ3hDLEVBQ0Qsb0JBQW9CLEVBQ3BCLGlDQUFpQyxDQUNwQyxDQUFDIn0=