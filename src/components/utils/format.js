/* es-lint disable */
module.exports = {
  numberWithDecimals(value, text = false) {
    const formattedValue = Math.round((value + Number.EPSILON) * 100) / 100;
    return text === true ? formattedValue.toFixed(2) : formattedValue;
  }
}
