import { DEC_COUNT, INC_COUNT } from "./actionType";


export const CounterReducer = (store = 0, {type, payload}) => {

    switch (type) {
      case INC_COUNT:
        return { ...store, count: store.count + payload };
      case DEC_COUNT:
        return { ...store, count: store.count - payload };
    }

}