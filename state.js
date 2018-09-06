"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Actions = require("./actions");
exports.INITIAL_STATE = {
    baskets: new Array(),
};
function reducer(state, action) {
    if (state) {
        if (action && action.type === Actions.PUT_FRUIT_IN_BASKET) {
            const newState = Object.assign({}, state);
            const fruit = action.payload.fruit;
            const basket = action.payload.basket;
            if (fruit.Colour === "Green") {
                basket.Apples.push(fruit);
            }
            if (fruit.Colour === "Yellow") {
                basket.Bananas.push(fruit);
            }
            if (fruit.Fruit) {
                basket.Trees.push(fruit);
            }
            if (newState.baskets) {
                let replaced = false;
                for (let i = 0; i < newState.baskets.length; i++) {
                    const stateBasket = newState.baskets[i];
                    if (stateBasket.Id === basket.Id) {
                        newState.baskets[i] = basket;
                        replaced = true;
                    }
                }
                if (!replaced) {
                    newState.baskets.push(basket);
                }
                return newState;
            }
            else {
                newState.baskets = new Array();
                newState.baskets.push(basket);
            }
        }
        if (action && action.type === Actions.SELECT_BASKET) {
            const newState = Object.assign({}, state);
            const basket = action.payload.basket;
            if (newState.baskets) {
                newState.selectedBasket = basket.Id;
            }
            return newState;
        }
        if (action && action.type === Actions.DESELECT_BASKET) {
            const newState = Object.assign({}, state);
            const basket = action.payload.basket;
            if (newState.baskets) {
                if (newState.selectedBasket) {
                    delete newState.selectedBasket;
                }
            }
            return newState;
        }
        return state;
    }
    else {
        return exports.INITIAL_STATE;
    }
}
exports.reducer = reducer;
//# sourceMappingURL=state.js.map