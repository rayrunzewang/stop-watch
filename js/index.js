// View
import { start, stop, elapse, record, showRecord, reset } from './timerLogic.js';
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const elapsedButton = document.querySelector('.elapsed-button');
const recordButton = document.querySelector('.record-button');
const showRecordButton = document.querySelector('.show-record-button');
const resetButton = document.querySelector('.reset-button');
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
// 问题：
// 1. runningTimer是否应该是状态的一部分 还是提取出来作为一个函数
// 2. setState与类型any
// 3. 划分模块是否合理
// 4. timerLogic是否需要写在Object里
// 这段代码已经相对简洁，但你可以考虑以下几点来提高其可读性和可维护性：
// 事件委托： 如果所有按钮都在一个父容器内，你可以考虑使用事件委托，将事件处理程序附加到父容器上，从而减少事件处理程序的数量。
// 使用对象字面量简化事件处理程序： 为了减少重复代码，你可以将事件处理程序的创建和绑定放在一个对象字面量中。
// 使用模块化设计： 如果你的应用规模增大，可以考虑使用模块化的设计，将功能划分为更小的模块，以提高可维护性。
// 基于上述建议，下面是稍作修改的代码：
// // timerButtons.js 模块
// import { start, stop, elapse, record, showRecord, reset } from './timerLogic.js';
// const buttonsContainer = document.querySelector('.buttons-container');
// const buttonHandlers = {
//   '.start-button': start,
//   '.stop-button': stop,
//   '.elapsed-button': elapse,
//   '.record-button': record,
//   '.show-record-button': showRecord,
//   '.reset-button': reset,
// };
// buttonsContainer?.addEventListener('click', (event) => {
//   const targetButton = event.target as HTMLElement;
//   const buttonHandler = buttonHandlers[targetButton.classList[0]];
//   if (buttonHandler) {
//     buttonHandler();
//   }
// });
// 在这个例子中，我将按钮的点击事件委托给了父容器 buttonsContainer。在 buttonHandlers 对象中，每个按钮类别都映射到相应的处理函数。这样，你只需在对象中添加新的按钮处理程序，而不必修改事件监听逻辑。这样的设计使代码更容易扩展和维护。
