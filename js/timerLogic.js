// timerLogic.ts 模块
// 引入格式化时间模块
import { timeFormatter } from './timeFormatter.js';
// 获取 用于显示信息的 div 元素
const timerStatus = document.querySelector('.timer-status');
const message = document.querySelector('.message');
const timeRecord = document.querySelector('.record');
// 初始化数据
let startTime = 0;
let stopTime = 0;
let elapsedTime = 0;
let timerRunning = false;
let recordTime = [];
let timer = 0;
// 秒表函数
const runningTimer = () => {
    timer = setInterval(() => {
        let currentTime = Date.now() - startTime;
        timerStatus.innerHTML = timeFormatter(currentTime);
    }, 1000);
};
// timer logic
const start = () => {
    if (!timerRunning) {
        startTime = Date.now();
        timerRunning = true;
        message.innerHTML = '';
        recordTime = [];
        timeRecord.innerHTML = '';
        runningTimer();
    }
    else {
        message.innerHTML = 'Can not start again';
    }
};
const stop = () => {
    if (timerRunning) {
        clearInterval(timer);
        timer = 0;
        stopTime = Date.now();
        timerRunning = false;
        message.innerHTML = '';
        timerStatus.innerHTML = 'timer stopped!';
        timeRecord.innerHTML = `stopped time: ${timeFormatter(stopTime - startTime)}`;
    }
    else {
        message.innerHTML = 'start timer first';
    }
};
const elapse = () => {
    if (timerRunning) {
        message.innerHTML = '';
        elapsedTime = Date.now() - startTime;
        timeRecord.innerHTML = `elapsed time: ${timeFormatter(elapsedTime)}`;
    }
    else {
        message.innerHTML = 'start timer first';
    }
};
const record = () => {
    if (timerRunning) {
        message.innerHTML = '';
        const newRecord = Date.now() - startTime;
        recordTime.push(newRecord);
        recordTime.length === 1 ? message.innerHTML = 'a time recorded' : message.innerHTML = 'another time recorded';
        timeRecord.innerHTML = `recorded time: ${timeFormatter(newRecord)}`;
    }
    else {
        message.innerHTML = 'start timer first';
    }
};
const showRecord = () => {
    if (recordTime.length !== 0) {
        message.innerHTML = '';
        const recordTimeDisplay = recordTime.map((item, index) => {
            return `<br>record ${index + 1}: ${timeFormatter(item)}`;
        });
        timeRecord.innerHTML = recordTimeDisplay.join(' ');
    }
    else {
        message.innerHTML = 'no time record';
    }
};
const reset = () => {
    clearInterval(timer);
    startTime = 0;
    stopTime = 0;
    elapsedTime = 0;
    timerRunning = false;
    recordTime = [];
    timerStatus.innerHTML = 'Timer Ready';
    message.innerHTML = '';
    timeRecord.innerHTML = '';
};
export { start, stop, elapse, record, showRecord, reset };
