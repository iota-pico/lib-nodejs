var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZHRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2J1aWxkLWR0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHVDQUF5QjtBQUN6QiwyQ0FBNkI7QUFFdEIsS0FBSyxtQkFBbUIsT0FBaUIsRUFBRSxXQUFtQixFQUFFLGNBQXNCO0lBQ3pGLElBQUksWUFBWSxHQUFXLEVBQUUsQ0FBQztJQUU5QixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDakIsWUFBWSxJQUFJLEdBQUcsRUFBRSxJQUFJLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxZQUFZLElBQUksSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxNQUFNLE9BQU8sR0FBYSxFQUFFLENBQUM7SUFDN0IsTUFBTSxZQUFZLEdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyRSxNQUFNLGFBQWEsR0FBcUIsWUFBWSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBRXhGLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzlDLE1BQU0sY0FBYyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1FBRXpDLE1BQU0sU0FBUyxHQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUU5RixNQUFNLE9BQU8sR0FBcUIsU0FBUyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1FBRS9FLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzlDLE1BQU0sS0FBSyxHQUFXLDJCQUEyQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7WUFDaEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVyRCxNQUFNLEtBQUssR0FBYSxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWpHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ25FLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO29CQUNoRCxZQUFZLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQztnQkFDaEMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNMLENBQUM7SUFFRCxFQUFFLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBMUNELDRCQTBDQztBQUVELFFBQVEsQ0FDSjtJQUNJLGtDQUFrQztJQUNsQywrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5QixxQ0FBcUM7Q0FDeEMsRUFDRCxvQkFBb0IsRUFDcEIsaUNBQWlDLENBQ3BDLENBQUMifQ==