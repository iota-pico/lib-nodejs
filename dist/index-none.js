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
__export(require("@iota-pico/pal-nodejs"));
const pal_nodejs_1 = require("@iota-pico/pal-nodejs");
(async function () {
    await pal_nodejs_1.PAL.initialize();
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtbm9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC1ub25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7R0FFRztBQUNILHFDQUFnQztBQUNoQyxxQ0FBZ0M7QUFDaEMsb0NBQStCO0FBQy9CLHVDQUFrQztBQUNsQyx5Q0FBb0M7QUFDcEMsMkNBQXNDO0FBRXRDLHNEQUEwQztBQUUxQyxDQUFDLEtBQUs7SUFDRixNQUFNLGdCQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDM0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyJ9