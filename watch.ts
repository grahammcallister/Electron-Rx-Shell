import { get as getValue } from "object-path";

export function defaultCompare(a: any, b: any): boolean {
    return a === b;
}

export function watch(getState: any, objectPath: any, compare: any): any {
    compare = compare || defaultCompare;

    let currentValue = getValue(getState(), objectPath);

    return function w(fn: any) {
      return function a(): void {
        const newValue = getValue(getState(), objectPath);
        if (!compare(currentValue, newValue)) {
          const oldValue = currentValue;
          currentValue = newValue;
          fn(newValue, oldValue, objectPath);
        }
      };
    };
}
