class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? 1 + arr.reduce((max, item) => Math.max(max, this.calculateDepth(item)), 0) : 0;
  }
}

module.exports = {
  DepthCalculator
};
