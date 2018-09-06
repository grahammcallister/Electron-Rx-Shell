import * as sharedApi from "./shared-api";

import { defaultCompare, watch } from "./watch";

import * as actions from "./actions";

import * as channels from "./channels";

import * as channelSend from "./channel-send";

const basketLengthWatcher = watch(sharedApi.store.getState, "baskets.length", defaultCompare);

sharedApi.store.subscribe(basketLengthWatcher((newVal: any, oldVal: any, objectPath: any) => {
        console.log(`${objectPath} changed from ${oldVal} to ${newVal}`);
    },
));

const selectedBasketWatcher = watch(sharedApi.store.getState, "selectedBasket", defaultCompare);

sharedApi.store.subscribe(selectedBasketWatcher((newVal: any, oldVal: any, objectPath: any) => {
        console.log(`${objectPath} changed from ${oldVal} to ${newVal}`);
    },
));

sharedApi.store.dispatch(actions.putFruitInBasket(sharedApi.apple, sharedApi.basket));
sharedApi.store.dispatch(actions.putFruitInBasket(sharedApi.apple, sharedApi.basket));
sharedApi.store.dispatch(actions.putFruitInBasket(sharedApi.banana, sharedApi.basket));
sharedApi.store.dispatch(actions.selectBasket(sharedApi.basket));
sharedApi.store.dispatch(actions.deselectBasket(sharedApi.basket));
sharedApi.store.dispatch(actions.selectBasket(sharedApi.basket));
sharedApi.store.dispatch(actions.selectBasket(sharedApi.basket));

sharedApi.store.dispatch(channelSend.sendChannelAction(channels.BASKET_CHANNEL,
    actions.putFruitInBasket(sharedApi.banana, sharedApi.basket)));

// sharedApi.unsubscribe();


