let state = {
    startTime: 0,
    stopTime: 0,
    elapsedTime: 0,
    timerRunning: false,
    recordTime: [],
    timer: 0,
    messageMsg: "",
    timeRecordMsg: "",
    timerStatusMsg: "Timer Ready!",
};
const setState = function (newState) {
    state = Object.assign(Object.assign({}, state), newState);
};
export { state, setState };
