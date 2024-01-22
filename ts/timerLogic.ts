// Controller: 
import { timeFormatter } from './timeFormatter.js'; // 引入格式化时间模块
import { state, setState } from "./model.js"

const timerStatus = document.querySelector('.timer-status');
const message = document.querySelector('.message');
const timeRecord = document.querySelector('.record');

function render() {
  message!.innerHTML = state.messageMsg;
  timeRecord!.innerHTML = state.timeRecordMsg;
  timerStatus!.innerHTML = state.timerStatusMsg;
}

function runningTimer(httpElement: HTMLElement ){
  state.timer = setInterval(() => {
    let currentTime: number = Date.now() - state.startTime;
    httpElement!.innerHTML = timeFormatter(currentTime);
  }, 1000)
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
    })
    render();
    if(timerStatus instanceof HTMLElement){
      runningTimer(timerStatus);
    } else {
      console.error("timerStatus not found")
    }
  } else {
    setState({
      messageMsg: "Can not start again",
    })
    render();
  }
}

const stop = () => {
  if (state.timerRunning) {
    clearInterval(state.timer);
    const newState:any = {
      timerRunning: false,
      stopTime: Date.now(),
      timer: 0,
      messageMsg: "",
      timerStatusMsg: "Timer Stopped!",
    }
    newState.timeRecordMsg = `stopped time: ${timeFormatter(
      newState.stopTime - state.startTime)}`, 
    setState(newState)
    render();
  } else {
    setState({
      messageMsg: "start timer first",
    })
    render();
  }
}

const elapse = () => {
  if (state.timerRunning) {
    const newState: any = {
      elapsedTime: Date.now() - state.startTime,
      messageMsg: "",
      timerStatusMsg: ""
    }
    newState.timeRecordMsg = `elapsed time: ${timeFormatter(
      newState.elapsedTime)}`,
      setState(newState)
    render();
  } else {
    setState({
      messageMsg: "start timer first",
    })
    render();
  }
}

const record = () => {
  if (state.timerRunning) {
    const newRecord: number = Date.now() - state.startTime;
    const newState = {
      recordTime: [...state.recordTime, newRecord],
      messageMsg: "time recorded",
      timeRecordMsg: `recorded time: ${timeFormatter(
        newRecord)}`,
    }
    console.log(newState.recordTime)
    setState(newState)
    render()
  } else {
    setState({
      messageMsg: "start timer first",
    })
    render();
  }
}

const showRecord = () => {
  if (state.recordTime.length !== 0) {
    const recordTimeDisplay = state.recordTime.map((item, index) => {
      return `<br>record ${index + 1}: ${timeFormatter(
        item)}`;
    })

    setState({
      messageMsg: "",
      timeRecordMsg: recordTimeDisplay.join(" "),
    })
    render()

  } else {
    setState({
      messageMsg: "no time record",
    })
    render();
  }
}

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
  })
  render()
}

export {
  start,
  stop,
  elapse,
  record,
  showRecord,
  reset
};

// 代码的解耦性可以通过一些设计模式和最佳实践来提高。以下是一些建议：

// 分离模块：确保模块之间的职责清晰。你已经将 timerLogic 模块分离出来，这是一个良好的做法。进一步考虑是否可以将一些逻辑进一步拆分成更小的模块，每个模块专注于一个特定的功能。

// 事件驱动：使用事件来通信，而不是直接调用函数。这样可以降低模块之间的耦合度。在 JavaScript 中，你可以使用事件监听器来实现这一点。

// 回调函数：如果一个模块需要在另一个模块发生变化时执行某些操作，考虑使用回调函数。这样，模块之间的依赖性就不会直接显现在代码中，而是通过回调来实现。

// 依赖注入：通过依赖注入，你可以将一个模块的依赖项注入到另一个模块中，而不是在模块内部直接引用。这可以降低模块之间的耦合。

// 使用观察者模式：观察者模式是一种常见的模式，其中一个对象（主题）维护一组依赖于它的对象（观察者）并在状态发生变化时通知它们。这可以用来实现一种松散的耦合。

// 下面是一个简单的示例，演示如何使用事件监听器和回调函数来提高模块之间的解耦：

// // model.js
// class TimerModel {
//   constructor() {
//     this.listeners = [];
//     this.state = {
//       // ... initial state
//     };
//   }

//   addListener(listener) {
//     this.listeners.push(listener);
//   }

//   setState(newState) {
//     this.state = { ...this.state, ...newState };
//     this.notifyListeners();
//   }

//   notifyListeners() {
//     this.listeners.forEach(listener => listener.update(this.state));
//   }
// }

// // controller.js
// class TimerController {
//   constructor(model) {
//     this.model = model;
//     this.view = new TimerView();
//     this.model.addListener(this.view);
//   }

//   start() {
//     // ... logic to start the timer
//     this.model.setState({ timerRunning: true });
//   }

//   // ... other controller methods
// }

// // view.js
// class TimerView {
//   update(state) {
//     // ... update the view based on the state
//   }
// }

// // index.js
// const timerModel = new TimerModel();
// const timerController = new TimerController(timerModel);
// // ... setup event listeners or UI interactions to trigger controller methods
