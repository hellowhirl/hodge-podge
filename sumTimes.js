function sumTimes(times) {
  // Initialize variables to hold the total minutes and seconds
  let totalMinutes = 0;
  let totalSeconds = 0;

  // Loop through each time in the array
  for (let i = 0; i < times.length; i++) {
    // Split the time into minutes and seconds
    const [minutes, seconds] = times[i].split(':').map(Number);

    // Add the minutes and seconds to the total variables
    totalMinutes += minutes;
    totalSeconds += seconds;
  }

  // Convert excess seconds to minutes
  totalMinutes += Math.floor(totalSeconds / 60);
  totalSeconds = totalSeconds % 60;

  // Format the total time as "mm:ss"
  const formattedMinutes = totalMinutes.toString();
  const formattedSeconds = totalSeconds.toString().padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}

// Example usage
const times = ['1:09', '2:45', '0:45'];
const totalTime = sumTimes(times);
console.log(totalTime); // Output: "4:39"

const myTimes = ['0:01', '0:02']

sumTimes(myTimes)
