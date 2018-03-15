/**
 * Combined index of all the modules.
 */
export * from "@iota-pico/core";
export * from "@iota-pico/data";
export * from "@iota-pico/api";
export * from "@iota-pico/crypto";
export * from "@iota-pico/business";
export * from "@iota-pico/pal-nodejs";
export * from "@iota-pico/pow-box";
export * from "@iota-pico/pow-js";
export * from "@iota-pico/pow-nodejs";
export * from "@iota-pico/pow-wasm";

import {PAL} from "@iota-pico/pal-nodejs";

(async function (): Promise<void> {
    await PAL.initialize();
})();