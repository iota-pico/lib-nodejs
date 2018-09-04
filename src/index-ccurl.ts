/**
 * Combined index of all the modules.
 */
export * from "./core";
export * from "./data";
export * from "./api";
export * from "./crypto";
export * from "./business";
export * from "./pal-nodejs";
export * from "./pow-nodejs";

import { PAL } from "./pal-nodejs";
import { ProofOfWorkFactory } from "./crypto";
import { ProofOfWorkNodeJs } from "./pow-nodejs";

(async function (): Promise<void> {
    await PAL.initialize();
    ProofOfWorkFactory.instance().register("ccurl", (...args) => new ProofOfWorkNodeJs(args[0]));
})();