import * as Actions from "./actions";

import Basket from "./fruit/basket";

export const INITIAL_STATE = {
    baskets: new Array<any>(),
};

export function reducer(state: any, action: any): any {
    if (state) {
        if (action && action.type === Actions.PUT_FRUIT_IN_BASKET) {
            const newState = {...state};
            const fruit = action.payload.fruit;
            const basket: Basket = action.payload.basket;
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
                let replaced: boolean = false;
                for (let i = 0; i < newState.baskets.length; i++) {
                    const stateBasket: Basket = newState.baskets[i];
                    if (stateBasket.Id === basket.Id) {
                        newState.baskets[i] = basket;
                        replaced = true;
                    }
                }
                if (!replaced) {
                    newState.baskets.push(basket);
                }
                return newState;
            } else {
                newState.baskets = new Array<Basket>();
                newState.baskets.push(basket);
            }
        }
        if (action && action.type === Actions.SELECT_BASKET) {
            const newState = {...state};
            const basket: Basket = action.payload.basket;
            if (newState.baskets) {
                newState.selectedBasket = basket.Id;
            }
            return newState;
        }
        if (action && action.type === Actions.DESELECT_BASKET) {
            const newState = {...state};
            const basket: Basket = action.payload.basket;
            if (newState.baskets) {
                if (newState.selectedBasket) {
                    delete newState.selectedBasket;
                }
            }
            return newState;
        }
        return state;
    } else {
        return INITIAL_STATE;
    }
}
