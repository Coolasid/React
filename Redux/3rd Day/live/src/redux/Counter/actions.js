import { DEC_COUNT, INC_COUNT } from "./actionType";


export const incCount = (payload) => ({
  type: INC_COUNT,
  payload
});

export const decCount = (payload) => ({
  type: DEC_COUNT,
  payload
});
