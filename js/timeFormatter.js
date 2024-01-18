// timeFormatter.ts 时间格式化函数模块
export const timeFormatter = (time) => {
    const twoDigitalizer = (number) => {
        return number >= 10 ? number.toString() : '0' + number;
    };
    let hour = twoDigitalizer(Math.floor(time / 1000 / 3600));
    let minute = twoDigitalizer(Math.floor((time / 1000 % 3600) / 60));
    let second = twoDigitalizer(Math.floor(time / 1000 % 3600 % 60));
    return hour + ':' + minute + ':' + second;
};
