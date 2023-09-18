import { ReactiveOptions } from "prepulsar";
export declare const state: <T>(initialValue: T, options?: ReactiveOptions<T>) => () => {
    value: T;
};
