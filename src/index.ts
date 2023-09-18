
import { reactive, ReactiveOptions } from "prepulsar";
import { useEffect, useState } from "react";

export const state = <T>(
  initialValue: T, 
  options: ReactiveOptions<T> = {}
) => {
  const reactiveState = reactive<T>(initialValue, options);

  return () => {
    const [, setter] = useState<T>(initialValue);
    const { proxy, unsubscribe } = reactiveState((newValue) => setter(() => newValue));

    useEffect(() => unsubscribe, []);

    return proxy;
  }
}