function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Combined index of all the modules.
 */
__export(require("@iota-pico/core"));
__export(require("@iota-pico/data"));
__export(require("@iota-pico/api"));
__export(require("@iota-pico/crypto"));
__export(require("@iota-pico/business"));
// export * from "@iota-pico/storage";
__export(require("@iota-pico/pal-nodejs"));
__export(require("@iota-pico/pow-nodejs"));
const pal_nodejs_1 = require("@iota-pico/pal-nodejs");
const crypto_1 = require("@iota-pico/crypto");
const pow_nodejs_1 = require("@iota-pico/pow-nodejs");
(async function () {
    await pal_nodejs_1.PAL.initialize();
    crypto_1.ProofOfWorkFactory.instance().register("ccurl", (...args) => new pow_nodejs_1.ProofOfWorkNodeJs(args[0]));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtY2N1cmwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgtY2N1cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztHQUVHO0FBQ0gscUNBQWdDO0FBQ2hDLHFDQUFnQztBQUNoQyxvQ0FBK0I7QUFDL0IsdUNBQWtDO0FBQ2xDLHlDQUFvQztBQUNwQyxzQ0FBc0M7QUFDdEMsMkNBQXNDO0FBQ3RDLDJDQUFzQztBQUV0QyxzREFBNEM7QUFDNUMsOENBQXVEO0FBQ3ZELHNEQUEwRDtBQUUxRCxDQUFDLEtBQUs7SUFDRixNQUFNLGdCQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkIsMkJBQWtCLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLDhCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyJ9