import { writable,readable} from "svelte/store";
export const score = writable(0);
export const showScorePage = writable(false);
export const disablePreviousBtn = writable(false);

export const timerRunning = writable(true);