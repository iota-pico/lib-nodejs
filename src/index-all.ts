/**
 * Combined index of all the modules.
 */
export * from "./core";
export * from "./data";
export * from "./api";
export * from "./crypto";
export * from "./business";
export * from "./pal-nodejs";
export * from "./pow-box";
export * from "./pow-js";
export * from "./pow-nodejs";
export * from "./pow-srvio";
export * from "./pow-wasm";

import { PAL } from "./pal-nodejs";
import { ProofOfWorkFactory } from "./crypto";
import { ProofOfWorkJs } from "./pow-js";
import { ProofOfWorkBox } from "./pow-box";
import { ProofOfWorkNodeJs } from "./pow-nodejs";
import { ProofOfWorkSrvIo } from "./pow-srvio";
import { ProofOfWorkWasm } from "./pow-wasm";

(async function (): Promise<void> {
    await PAL.initialize();
    ProofOfWorkFactory.instance().register("js", (...args) => new ProofOfWorkJs());
    ProofOfWorkFactory.instance().register("ccurl", (...args) => new ProofOfWorkNodeJs(args[0]));
    ProofOfWorkFactory.instance().register("box", (...args) => new ProofOfWorkBox(args[0], args[1], args[2]));
    ProofOfWorkFactory.instance().register("srvio", (...args) => new ProofOfWorkSrvIo(args[0], args[1]));
    ProofOfWorkFactory.instance().register("wasm", (...args) => new ProofOfWorkWasm(args[0]));
})();