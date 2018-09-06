"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_path_1 = require("object-path");
function defaultCompare(a, b) {
    return a === b;
}
exports.defaultCompare = defaultCompare;
function watch(getState, objectPath, compare) {
    compare = compare || defaultCompare;
    let currentValue = object_path_1.get(getState(), objectPath);
    return function w(fn) {
        return function a() {
            const newValue = object_path_1.get(getState(), objectPath);
            if (!compare(currentValue, newValue)) {
                const oldValue = currentValue;
                currentValue = newValue;
                fn(newValue, oldValue, objectPath);
            }
        };
    };
}
exports.watch = watch;
//# sourceMappingURL=watch.js.map