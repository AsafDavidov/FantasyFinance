import { SET_USER } from "../types";

export const generateUpdateMessageAction = payload => ({
  type: SET_USER,
  payload
});
