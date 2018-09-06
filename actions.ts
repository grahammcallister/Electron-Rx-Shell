export const PUT_FRUIT_IN_BASKET = "PUT_FRUIT_IN_BASKET";
export function putFruitInBasket(aFruit: any, aBasket: any): any {
    return {
                payload: {
                    basket: aBasket,
                    fruit: aFruit,
                },
                type: PUT_FRUIT_IN_BASKET,
            };
}

export const SELECT_BASKET = "SELECT_BASKET";
export function selectBasket(aBasket: any): any {
    return {
        payload: {
            basket: aBasket,
        },
        type: SELECT_BASKET,
    };
}

export const DESELECT_BASKET = "DESELECT_BASKET";
export function deselectBasket(aBasket: any): any {
    return {
        payload: {
            basket: aBasket,
        },
        type: DESELECT_BASKET,
    };
}
