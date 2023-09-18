"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.state = void 0;
const react_1 = require("react");
const prepulsar_1 = require("prepulsar");
const state = (initialValue, options = {}) => {
    const reactiveState = (0, prepulsar_1.reactive)(initialValue, options);
    return () => {
        const [, setter] = (0, react_1.useState)(initialValue);
        const { proxy, unsubscribe } = reactiveState((newValue) => setter(() => newValue));
        (0, react_1.useEffect)(() => unsubscribe);
        return proxy;
    };
};
exports.state = state;
