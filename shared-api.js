"use strict";
// It should not matter where this api is called; main, renderer, browserwindow etc.
Object.defineProperty(exports, "__esModule", { value: true });
const Redux = require("redux");
const redux_thunk_1 = require("redux-thunk");
const state = require("./state");
const basket_1 = require("./fruit/basket");
const fruit_apple_1 = require("./fruit/fruit-apple");
const fruit_banana_1 = require("./fruit/fruit-banana");
exports.store = Redux.createStore(state.reducer, Redux.applyMiddleware(redux_thunk_1.default));
exports.apple = new fruit_apple_1.default();
exports.banana = new fruit_banana_1.default();
exports.basket = new basket_1.default("random-1");
// export const unsubscribe = store.subscribe((): void => {
//     const latestState: any = store.getState();
//     console.log(`State changed to ${JSON.stringify(latestState)}`);
//     return;
// });
//# sourceMappingURL=shared-api.js.map