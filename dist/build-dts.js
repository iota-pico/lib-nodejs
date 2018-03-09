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
async function buildDts(imports, outputFilename, sources) {
    let finalContent = "";
    if (imports && imports.length > 0) {
        imports.forEach(im => {
            finalContent += `${im}\n`;
        });
        finalContent += `\n`;
    }
    for (let i = 0; i < sources.length; i++) {
        const moduleDistPath = path.join("./node_modules/", sources[i], "dist");
        console.log(`Checking in ${moduleDistPath}`);
        const indexFile = fs.readFileSync(path.join(moduleDistPath, "index.d.ts")).toString();
        const exports = indexFile.match(/export \* from \"(.*)\";/g);
        for (let i = 0; i < exports.length; i++) {
            const fname = /export \* from \"(.*)\";/g.exec(exports[i])[1] + ".d.ts";
            console.log(`\t${path.join(moduleDistPath, fname)}`);
            const lines = fs.readFileSync(path.join(moduleDistPath, fname)).toString().split("\n");
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
buildDts([
    "import { Stats } from \"fs\";",
    "import http from \"http\";",
    "import https from \"https\";",
    "import bigInt from \"big-integer\";"
], path.join("./pkg/", "iota-pico-lib-nodejs.d.ts"), [
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
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQtZHRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2J1aWxkLWR0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHVDQUF5QjtBQUN6QiwyQ0FBNkI7QUFFN0IsS0FBSyxtQkFBbUIsT0FBaUIsRUFBRSxjQUFzQixFQUFFLE9BQWlCO0lBQ2hGLElBQUksWUFBWSxHQUFXLEVBQUUsQ0FBQztJQUU5QixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDakIsWUFBWSxJQUFJLEdBQUcsRUFBRSxJQUFJLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxZQUFZLElBQUksSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUM5QyxNQUFNLGNBQWMsR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsY0FBYyxFQUFFLENBQUMsQ0FBQztRQUU3QyxNQUFNLFNBQVMsR0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFOUYsTUFBTSxPQUFPLEdBQXFCLFNBQVMsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUUvRSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM5QyxNQUFNLEtBQUssR0FBVywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDO1lBQ2hGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7WUFFckQsTUFBTSxLQUFLLEdBQWEsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVqRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNqQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztvQkFDaEQsWUFBWSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUM7Z0JBQ2hDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7SUFDTCxDQUFDO0lBRUQsRUFBRSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUVELFFBQVEsQ0FDSjtJQUNJLCtCQUErQjtJQUMvQiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLHFDQUFxQztDQUN4QyxFQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLDJCQUEyQixDQUFDLEVBQ2hEO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIseUJBQXlCO0NBQzVCLENBQ0osQ0FBQyJ9