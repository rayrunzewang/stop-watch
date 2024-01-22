// utils
export const timeFormatter = (time: number): string => {
  const twoDigitalizer = (number: number): string => {
    return number >= 10 ? number.toString() : '0' + number;
  }

  let hour: string = twoDigitalizer(Math.floor(time / 1000 / 3600));
  let minute: string = twoDigitalizer(Math.floor((time / 1000 % 3600) / 60));
  let second: string = twoDigitalizer(Math.floor(time / 1000 % 3600 % 60));

  return hour + ':' + minute + ':' + second;
}