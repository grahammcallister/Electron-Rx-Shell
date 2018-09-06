"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUT_FRUIT_IN_BASKET = "PUT_FRUIT_IN_BASKET";
function putFruitInBasket(aFruit, aBasket) {
    return {
        payload: {
            basket: aBasket,
            fruit: aFruit,
        },
        type: exports.PUT_FRUIT_IN_BASKET,
    };
}
exports.putFruitInBasket = putFruitInBasket;
exports.SELECT_BASKET = "SELECT_BASKET";
function selectBasket(aBasket) {
    return {
        payload: {
            basket: aBasket,
        },
        type: exports.SELECT_BASKET,
    };
}
exports.selectBasket = selectBasket;
exports.DESELECT_BASKET = "DESELECT_BASKET";
function deselectBasket(aBasket) {
    return {
        payload: {
            basket: aBasket,
        },
        type: exports.DESELECT_BASKET,
    };
}
exports.deselectBasket = deselectBasket;
//# sourceMappingURL=actions.js.map