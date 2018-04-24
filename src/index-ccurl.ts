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
export * from "@iota-pico/pow-nodejs";

import { PAL } from "@iota-pico/pal-nodejs";
import { ProofOfWorkFactory } from "@iota-pico/crypto";
import { ProofOfWorkNodeJs } from "@iota-pico/pow-nodejs";

(async function (): Promise<void> {
    await PAL.initialize();
    ProofOfWorkFactory.instance().register("ccurl", (...args) => new ProofOfWorkNodeJs(args[0]));
})();