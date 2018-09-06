"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sharedApi = require("./shared-api");
const watch_1 = require("./watch");
const actions = require("./actions");
const channels = require("./channels");
const channelSend = require("./channel-send");
const basketLengthWatcher = watch_1.watch(sharedApi.store.getState, "baskets.length", watch_1.defaultCompare);
sharedApi.store.subscribe(basketLengthWatcher((newVal, oldVal, objectPath) => {
    console.log(`${objectPath} changed from ${oldVal} to ${newVal}`);
}));
const selectedBasketWatcher = watch_1.watch(sharedApi.store.getState, "selectedBasket", watch_1.defaultCompare);
sharedApi.store.subscribe(selectedBasketWatcher((newVal, oldVal, objectPath) => {
    console.log(`${objectPath} changed from ${oldVal} to ${newVal}`);
}));
sharedApi.store.dispatch(actions.putFruitInBasket(sharedApi.apple, sharedApi.basket));
sharedApi.store.dispatch(actions.putFruitInBasket(sharedApi.apple, sharedApi.basket));
sharedApi.store.dispatch(actions.putFruitInBasket(sharedApi.banana, sharedApi.basket));
sharedApi.store.dispatch(actions.selectBasket(sharedApi.basket));
sharedApi.store.dispatch(actions.deselectBasket(sharedApi.basket));
sharedApi.store.dispatch(actions.selectBasket(sharedApi.basket));
sharedApi.store.dispatch(actions.selectBasket(sharedApi.basket));
sharedApi.store.dispatch(channelSend.sendChannelAction(channels.BASKET_CHANNEL, actions.putFruitInBasket(sharedApi.banana, sharedApi.basket)));
// sharedApi.unsubscribe();
//# sourceMappingURL=renderer.js.map