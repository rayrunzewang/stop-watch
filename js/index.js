// index.ts 入口文件 负责DOM视图修改
// 引入 timer functions
import { start, stop, elapse, record, showRecord, reset } from './timerLogic.js';
// 获取DOM timer Buttons
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const elapsedButton = document.querySelector('.elapsed-button');
const recordButton = document.querySelector('.record-button');
const showRecordButton = document.querySelector('.show-record-button');
const resetButton = document.querySelector('.reset-button');
// 为 buttons 添加 单击响应函数
startButton === null || startButton === void 0 ? void 0 : startButton.addEventListener('click', () => {
    start();
});
stopButton === null || stopButton === void 0 ? void 0 : stopButton.addEventListener('click', () => {
    stop();
});
elapsedButton === null || elapsedButton === void 0 ? void 0 : elapsedButton.addEventListener('click', () => {
    elapse();
});
recordButton === null || recordButton === void 0 ? void 0 : recordButton.addEventListener('click', () => {
    record();
});
showRecordButton === null || showRecordButton === void 0 ? void 0 : showRecordButton.addEventListener('click', () => {
    showRecord();
});
resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener('click', () => {
    reset();
});
// 知识点：
// 不要用 any type
// 基本上 Number(new Date()) 和 new Date().getTime() 是等价的，它们都用于获取当前时间的时间戳。
// Date.now() 返回当前时间的时间戳，是一个 number。
// new Date() 创建一个包含当前日期和时间的 Date 对象。
// new Date().getTime() 和  Date.now() 返回的结果是等效的，都是当前时间的时间戳。
