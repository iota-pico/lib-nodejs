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
tslib_1.__exportStar(require("./pow-nodejs"), exports);
const pal_nodejs_1 = require("./pal-nodejs");
const crypto_1 = require("./crypto");
const pow_nodejs_1 = require("./pow-nodejs");
(function () {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield pal_nodejs_1.PAL.initialize();
        crypto_1.ProofOfWorkFactory.instance().register("ccurl", (...args) => new pow_nodejs_1.ProofOfWorkNodeJs(args[0]));
    });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtY2N1cmwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgtY2N1cmwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7R0FFRztBQUNILGlEQUF1QjtBQUN2QixpREFBdUI7QUFDdkIsZ0RBQXNCO0FBQ3RCLG1EQUF5QjtBQUN6QixxREFBMkI7QUFDM0IsdURBQTZCO0FBQzdCLHVEQUE2QjtBQUU3Qiw2Q0FBbUM7QUFDbkMscUNBQThDO0FBQzlDLDZDQUFpRDtBQUVqRCxDQUFDOztRQUNHLE1BQU0sZ0JBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN2QiwyQkFBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksOEJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRyxDQUFDO0NBQUEsQ0FBQyxFQUFFLENBQUMifQ==