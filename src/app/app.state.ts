import { LoginReducer } from './state/login';
import { AuthState } from './model/login';
import { SharedReducer } from './state/shared';

export interface AppState {
  login: AuthState;
  register: AuthState;
  loading:boolean,
}

export const initialState = {
  user:JSON.parse(localStorage.getItem("userInfo") || '{}')
}

export const appReducer = {
  login: LoginReducer,
  shared: SharedReducer
};
