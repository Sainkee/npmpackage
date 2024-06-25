let num = [1, 2, 2, 22, 22, [5, 5, 5, 5, 5]];

// Extend Array prototype with the required methods

Array.prototype.sum = function () {
  return this.reduce((acc, curr) => acc + curr, 0);
};

Array.prototype.min = function () {
  return Math.min(...this);
};

Array.prototype.max = function () {
  return Math.max(...this);
};

Array.prototype.average = function () {
  return this.sum() / this.length;
};

Array.prototype.rm_dupli = function () {
  return [...new Set(this)];
};

Array.prototype.sortAsc = function () {
  return this.sort((a, b) => a - b);
};

Array.prototype.sortDesc = function () {
  return this.sort((a, b) => b - a);
};

Array.prototype.countfreq = function () {
  return this.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
};

Array.prototype.median = function () {
  if (!this.length) return 0;
  const sorted = this.sort((a, b) => a - b);
  const mid = Math.floor(this.length / 2);
  return this.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
};

Array.prototype.flatten = function () {
  return this.reduce(
    (acc, curr) => acc.concat(Array.isArray(curr) ? curr.flatten() : curr),
    []
  );
};

// Example usage
console.log(num.flatten()); // Output: [1, 2, 2, 22, 22, 5, 5, 5, 5, 5]
console.log(num.flatten().sum()); // Output: 64
console.log(num.flatten().min()); // Output: 1
console.log(num.flatten().max()); // Output: 22
console.log(num.flatten().average()); // Output: 6.4
console.log(num.flatten().rm_dupli()); // Output: [1, 2, 22, 5]
console.log(num.flatten().sortAsc()); // Output: [1, 2, 2, 5, 5, 5, 5, 5, 22, 22]
console.log(num.flatten().sortDesc()); // Output: [22, 22, 5, 5, 5, 5, 5, 2, 2, 1]
console.log(num.flatten().countfreq()); // Output: { '1': 1, '2': 2, '5': 5, '22': 2 }
console.log(num.flatten().median()); // Output: 5

// Exporting functions for use in other modules
module.exports = {
  sum: Array.prototype.sum,
  min: Array.prototype.min,
  max: Array.prototype.max,
  average: Array.prototype.average,
  rm_dupli: Array.prototype.rm_dupli,
  sortAsc: Array.prototype.sortAsc,
  sortDesc: Array.prototype.sortDesc,
  countfreq: Array.prototype.countfreq,
  median: Array.prototype.median,
  flatten: Array.prototype.flatten,
};
