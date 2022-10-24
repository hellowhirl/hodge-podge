const testing = ["3:29", "5:51", "6:14"];
const minutes = [3, 5, 6, 3, 5, 2, 4, 2, 4, 7, 3, 4, 3, 2, 4, 3, 4];
const seconds = [
  29, 51, 14, 54, 32, 22, 34, 22, 53, 22, 50, 48, 55, 03, 49, 25, 33,
];

let addUpTimes = (times) => {
  debugger;
  let minutes = 0;
  let seconds = 0;

  for (let i = 0; i < times.length; i++) {
    minutes += Number(times[i][times[i].length - 5] * 10);
    minutes += Number(times[i][times[i].length - 4] * 10);
  }

  for (let i = 0; i < times.length; i++) {
    seconds += Number(times[i][times[i].length - 2] * 10);
    seconds += Number(times[i][times[i].length - 1]);
  }

  let convertedSeconds = Math.floor(seconds / 60);
  seconds = seconds % 60;
  minutes += convertedSeconds;

  console.log(`${minutes}:${seconds}`);
};

addUpTimes(testing);
