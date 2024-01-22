// timerLogic.ts 模块
import { timeFormatter } from './helper.js'; // 引入格式化时间模块
import { state, setState } from "./model.js";
const timerStatus = document.querySelector('.timer-status');
const message = document.querySelector('.message');
const timeRecord = document.querySelector('.record');
function render() {
    message.innerHTML = state.messageMsg;
    timeRecord.innerHTML = state.timeRecordMsg;
    timerStatus.innerHTML = state.timerStatusMsg;
}
function runningTimer(httpElement) {
    state.timer = setInterval(() => {
        let currentTime = Date.now() - state.startTime;
        httpElement.innerHTML = timeFormatter(currentTime);
    }, 1000);
}
// timer logic
const start = () => {
    if (!state.timerRunning) {
        setState({
            startTime: Date.now(),
            timerRunning: true,
            recordTime: [],
            messageMsg: "",
            timeRecordMsg: "",
            timerStatusMsg: "",
        });
        render();
        if (timerStatus instanceof HTMLElement) {
            runningTimer(timerStatus);
        }
        else {
            console.error("timerStatus not found");
        }
    }
    else {
        setState({
            messageMsg: "Can not start again",
        });
        render();
    }
};
const stop = () => {
    if (state.timerRunning) {
        clearInterval(state.timer);
        const newState = {
            timerRunning: false,
            stopTime: Date.now(),
            timer: 0,
            messageMsg: "",
            timerStatusMsg: "Timer Stopped!",
        };
        newState.timeRecordMsg = `stopped time: ${timeFormatter(newState.stopTime - state.startTime)}`,
            setState(newState);
        render();
    }
    else {
        setState({
            messageMsg: "start timer first",
        });
        render();
    }
};
const elapse = () => {
    if (state.timerRunning) {
        const newState = {
            elapsedTime: Date.now() - state.startTime,
            messageMsg: "",
            timerStatusMsg: ""
        };
        newState.timeRecordMsg = `elapsed time: ${timeFormatter(newState.elapsedTime)}`,
            setState(newState);
        render();
    }
    else {
        setState({
            messageMsg: "start timer first",
        });
        render();
    }
};
const record = () => {
    if (state.timerRunning) {
        const newRecord = Date.now() - state.startTime;
        const newState = {
            recordTime: [...state.recordTime, newRecord],
            messageMsg: "time recorded",
            timeRecordMsg: `recorded time: ${timeFormatter(newRecord)}`,
        };
        console.log(newState.recordTime);
        setState(newState);
        render();
    }
    else {
        setState({
            messageMsg: "start timer first",
        });
        render();
    }
};
const showRecord = () => {
    if (state.recordTime.length !== 0) {
        const recordTimeDisplay = state.recordTime.map((item, index) => {
            return `<br>record ${index + 1}: ${timeFormatter(item)}`;
        });
        setState({
            messageMsg: "",
            timeRecordMsg: recordTimeDisplay.join(" "),
        });
        render();
    }
    else {
        setState({
            messageMsg: "no time record",
        });
        render();
    }
};
const reset = () => {
    clearInterval(state.timer);
    setState({
        stopTime: 0,
        elapsedTime: 0,
        timerRunning: false,
        recordTime: [],
        timerStatusMsg: "Timer Ready",
        messageMsg: "",
        timeRecordMsg: "",
    });
    render();
};
export { start, stop, elapse, record, showRecord, reset };
