/**
 * @param {number} w Weight,
 * @param {number} r Reps.
 * @returns {number}
 */
function mayhew(w, r) {
  return 100 * w / (52.2 + 41.9 * Math.exp(-0.055 * r));
}

module.exports = mayhew;
