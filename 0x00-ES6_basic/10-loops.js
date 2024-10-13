export default function appendToEachArrayValue(array, appendString) {
  const newArray = []; // Initialize a new array
  for (const value of array) { // Iterate over each value
    newArray.push(appendString + value); // Concatenate and push
  }
  return newArray; // Return the new array
}
