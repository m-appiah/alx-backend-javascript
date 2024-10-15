function cleanSet(set, startString) {
  // Check if startString is not a string or is empty
  if (typeof startString !== 'string' || startString === '') return '';
  let result = '';
  for (const item of set) {
    if (item.startsWith(startString)) {
      result += `${item.slice(startString.length)}-`;
    }
  }
  return result.slice(0, -1); // Remove the last '-'
}

export default cleanSet;
