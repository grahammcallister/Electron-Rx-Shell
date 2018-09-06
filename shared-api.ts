// It should not matter where this api is called; main, renderer, browserwindow etc.

import * as Redux from "redux";
import thunk from "redux-thunk";

import * as state from "./state";

import Basket from "./fruit/basket";
import Apple from "./fruit/fruit-apple";
import Banana from "./fruit/fruit-banana";
import Tree from "./fruit/tree";

export const store = Redux.createStore(state.reducer, Redux.applyMiddleware(thunk));

export const apple: any = new Apple();
export const banana: any = new Banana();
export const basket: any = new Basket("random-1");

// export const unsubscribe = store.subscribe((): void => {
//     const latestState: any = store.getState();
//     console.log(`State changed to ${JSON.stringify(latestState)}`);
//     return;
// });


