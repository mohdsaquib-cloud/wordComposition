const getLongestString = (arr) => {
  if (arr.length === 0) return "";
  const longestString = arr.reduce((a, b) => (a.length > b.length ? a : b));
  return longestString;
};

export default getLongestString;
