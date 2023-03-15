function repeater(str, options) {
   let string = String(str);
   let arr = [];

   if (options) {
    let repeatTimes = options.repeatTimes || 1;
    let separator = options.separator || '+';
    let addition = String(options.addition) || '';
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    let additionSeparator = options.additionSeparator || '|';

    let substr = string + ((String(options.addition) !== 'undefined' ? addition + additionSeparator : '')).repeat(additionRepeatTimes);
    if (String(options.addition) !== 'undefined') {
      substr = substr.slice(0, substr.length - additionSeparator.length);
    }

    for (let i = 0; i < repeatTimes; i++) {
      arr.push(substr);
    }
    return arr.join(separator);
  }

}

module.exports = {
  repeater
};
