import { INC_COUNT } from "./actionType.js";
import { DEC_COUNT } from "./actionType.js";

export const incCount = (data) =>{
   return { type: INC_COUNT, payload: data };
}

export const decCount = (data) =>{
    return { type: DEC_COUNT, payload: data};
}