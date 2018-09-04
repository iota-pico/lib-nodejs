Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * Combined index of all the modules.
 */
tslib_1.__exportStar(require("./core"), exports);
tslib_1.__exportStar(require("./data"), exports);
tslib_1.__exportStar(require("./api"), exports);
tslib_1.__exportStar(require("./crypto"), exports);
tslib_1.__exportStar(require("./business"), exports);
tslib_1.__exportStar(require("./pal-nodejs"), exports);
tslib_1.__exportStar(require("./pow-box"), exports);
tslib_1.__exportStar(require("./pow-js"), exports);
tslib_1.__exportStar(require("./pow-nodejs"), exports);
tslib_1.__exportStar(require("./pow-srvio"), exports);
tslib_1.__exportStar(require("./pow-wasm"), exports);
const pal_nodejs_1 = require("./pal-nodejs");
const crypto_1 = require("./crypto");
const pow_js_1 = require("./pow-js");
const pow_box_1 = require("./pow-box");
const pow_nodejs_1 = require("./pow-nodejs");
const pow_srvio_1 = require("./pow-srvio");
const pow_wasm_1 = require("./pow-wasm");
(function () {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield pal_nodejs_1.PAL.initialize();
        crypto_1.ProofOfWorkFactory.instance().register("js", (...args) => new pow_js_1.ProofOfWorkJs());
        crypto_1.ProofOfWorkFactory.instance().register("ccurl", (...args) => new pow_nodejs_1.ProofOfWorkNodeJs(args[0]));
        crypto_1.ProofOfWorkFactory.instance().register("box", (...args) => new pow_box_1.ProofOfWorkBox(args[0], args[1], args[2]));
        crypto_1.ProofOfWorkFactory.instance().register("srvio", (...args) => new pow_srvio_1.ProofOfWorkSrvIo(args[0], args[1]));
        crypto_1.ProofOfWorkFactory.instance().register("wasm", (...args) => new pow_wasm_1.ProofOfWorkWasm(args[0]));
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtYWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2luZGV4LWFsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztHQUVHO0FBQ0gsaURBQXVCO0FBQ3ZCLGlEQUF1QjtBQUN2QixnREFBc0I7QUFDdEIsbURBQXlCO0FBQ3pCLHFEQUEyQjtBQUMzQix1REFBNkI7QUFDN0Isb0RBQTBCO0FBQzFCLG1EQUF5QjtBQUN6Qix1REFBNkI7QUFDN0Isc0RBQTRCO0FBQzVCLHFEQUEyQjtBQUUzQiw2Q0FBbUM7QUFDbkMscUNBQThDO0FBQzlDLHFDQUF5QztBQUN6Qyx1Q0FBMkM7QUFDM0MsNkNBQWlEO0FBQ2pELDJDQUErQztBQUMvQyx5Q0FBNkM7QUFFN0MsQ0FBQzs7UUFDRyxNQUFNLGdCQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdkIsMkJBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLHNCQUFhLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLDJCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSw4QkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdGLDJCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSx3QkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRywyQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksNEJBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckcsMkJBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLDBCQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RixDQUFDO0NBQUEsQ0FBQyxFQUFFLENBQUMifQ==