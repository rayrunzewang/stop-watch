// Model
type StopWatch = {
  startTime: number;
  stopTime: number;
  elapsedTime: number;
  timerRunning: boolean;
  recordTime: number[];
  timer: number;
  messageMsg: string;
  timeRecordMsg: string;
  timerStatusMsg: string,}

let state: StopWatch = {
  startTime: 0,
  stopTime: 0,
  elapsedTime: 0,
  timerRunning: false,
  recordTime: [],
  timer: 0,
  messageMsg: "",
  timeRecordMsg: "",
  timerStatusMsg: "Timer Ready!",
}

const setState = function (newState: Partial<StopWatch>) {
  state = {
    ...state,
    ...newState
  }
}

export {state, setState}