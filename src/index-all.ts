/**
 * Combined index of all the modules.
 */
export * from "@iota-pico/core";
export * from "@iota-pico/data";
export * from "@iota-pico/api";
export * from "@iota-pico/crypto";
export * from "@iota-pico/business";
// export * from "@iota-pico/storage";
export * from "@iota-pico/pal-nodejs";
export * from "@iota-pico/pow-box";
export * from "@iota-pico/pow-js";
export * from "@iota-pico/pow-nodejs";
export * from "@iota-pico/pow-wasm";

import { PAL } from "@iota-pico/pal-nodejs";
import { ProofOfWorkFactory } from "@iota-pico/crypto";
import { ProofOfWorkJs } from "@iota-pico/pow-js";
import { ProofOfWorkBox } from "@iota-pico/pow-box";
import { ProofOfWorkNodeJs } from "@iota-pico/pow-nodejs";
import { ProofOfWorkWasm } from "@iota-pico/pow-wasm";

(async function (): Promise<void> {
    await PAL.initialize();
    ProofOfWorkFactory.instance().register("js", (...args) => new ProofOfWorkJs());
    ProofOfWorkFactory.instance().register("ccurl", (...args) => new ProofOfWorkNodeJs(args[0]));
    ProofOfWorkFactory.instance().register("box", (...args) => new ProofOfWorkBox(args[0], args[1], args[2]));
    ProofOfWorkFactory.instance().register("wasm", (...args) => new ProofOfWorkWasm(args[0]));
})();