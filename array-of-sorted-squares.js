// Array of sorted negatives and positive integers squared and sorted

function sortingSquares(arr) {
  const positives = [];
  const negatives = [];
  const combined = [];

  // separate negative and positive integers
  for (let i = 0; i < arr.length; i++) {
    if (arr[0] > 0) {
      positives.push(arr[0] * arr[0]);
      arr.shift();
    }
    if (arr[0] < 0) {
      negatives.push(arr[0] * arr[0]);
      arr.shift();
    }
    i--;
  }

  // compare last item in negatives with first item in positives and add smallest number to combined
  count = positives.length;
  negativesPointer = negatives.length - 1;

  for (let i = 0; i < count; i++) {
    if (negatives[negativesPointer] <= positives[0]) {
      combined.push(negatives.pop());
      negativesPointer--;
    } else if (positives[0] <= negatives[negativesPointer]) {
      combined.push(positives.shift());
      i--;
      count++;
    } else {
      break;
    }
  }

  // add remaining integer(s) from positives or negatives array to combined array
  while (positives.length !== 0) {
    combined.push(positives.shift());
  }
  while (negatives.length !== 0) {
    combined.push(negatives.pop());
  }

  return combined;
}

const testCase = [-7, -4, -2, -1, 3, 5, 6];
sortingSquares(testCase);
