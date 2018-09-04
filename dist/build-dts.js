Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs = tslib_1.__importStar(require("fs"));
const path = tslib_1.__importStar(require("path"));
function buildDts(imports, sourceIndex, outputFilename) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
            const moduleDistPath = path.join("./dist/", sources[i]);
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
    });
}
exports.buildDts = buildDts;
buildDts([
    "/// <reference types=\"node\" />",
    "import { Stats } from \"fs\";",
    "import http from \"http\";",
    "import https from \"https\";",
    "import bigInt from \"big-integer\";"
], "./src/index-all.ts", "./pkg/iota-pico-lib-nodejs.d.ts");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZHRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2J1aWxkLWR0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUF5QjtBQUN6QixtREFBNkI7QUFFN0IsU0FBc0IsUUFBUSxDQUFDLE9BQWlCLEVBQUUsV0FBbUIsRUFBRSxjQUFzQjs7UUFDekYsSUFBSSxZQUFZLEdBQVcsRUFBRSxDQUFDO1FBRTlCLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQy9CLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ2pCLFlBQVksSUFBSSxHQUFHLEVBQUUsSUFBSSxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsWUFBWSxJQUFJLElBQUksQ0FBQztTQUN4QjtRQUVELE1BQU0sT0FBTyxHQUFhLEVBQUUsQ0FBQztRQUM3QixNQUFNLFlBQVksR0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3JFLE1BQU0sYUFBYSxHQUFxQixZQUFZLENBQUMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFFeEYsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbkQsT0FBTyxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2RTtRQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRWhDLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdDLE1BQU0sY0FBYyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBRXpDLE1BQU0sU0FBUyxHQUFXLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUU5RixNQUFNLE9BQU8sR0FBcUIsU0FBUyxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBRS9FLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM3QyxNQUFNLEtBQUssR0FBVywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO2dCQUNoRixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUVyRCxNQUFNLEtBQUssR0FBYSxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUVqRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsRUFBRTt3QkFDbEUsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsUUFBUSxDQUFDLENBQUM7d0JBQ2hELFlBQVksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDO3FCQUMvQjtnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNOO1NBQ0o7UUFFRCxFQUFFLENBQUMsYUFBYSxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQUE7QUE1Q0QsNEJBNENDO0FBRUQsUUFBUSxDQUNKO0lBQ0ksa0NBQWtDO0lBQ2xDLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLHFDQUFxQztDQUN4QyxFQUNELG9CQUFvQixFQUNwQixpQ0FBaUMsQ0FDcEMsQ0FBQyJ9