import { BehaviorSubject } from "rxjs";
import useObservable from "../utils/useObservable";

let state = {
  user: null,
};

const authState$ = new BehaviorSubject(state);

const authStore = {
  subscribe(setState) {
    return useObservable(authState$, setState);
  },
  login(user) {
    state = { ...state, user };
    authState$.next(state);
  },
  logout() {
    state = { ...state, user: null };
    authState$.next(state);
  },
};

export default authStore;
