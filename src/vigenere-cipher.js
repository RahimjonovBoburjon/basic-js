function isAlphabet(char) {
  return char.toUpperCase() !== char.toLowerCase();
}

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }

  #CODE_A = 'A'.charCodeAt(0);

  encrypt(message, key) {
    if (!(message && key)) {
      throw new Error('Incorrect arguments!');
    }

    let messageArr = message.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('').map(v => v.charCodeAt(0) - this.#CODE_A);
    let keyIndex = 0;
    let res = [];

    for (let i = 0; i < messageArr.length; i++) {
      if (isAlphabet(messageArr[i])) {
        res.push(String.fromCharCode(this.#CODE_A + (messageArr[i].charCodeAt(0) - this.#CODE_A + keyArr[keyIndex % keyArr.length]) % 26));
        keyIndex++;
      } else {
        res.push(messageArr[i]);
      }
    }

    return this.type ? res.join('') : res.reverse().join('');
  }

  decrypt(message, key) {
    if (!(message && key)) {
      throw new Error('Incorrect arguments!');
    }

    let messageArr = message.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('').map(v => v.charCodeAt(0) - this.#CODE_A);
    let keyIndex = 0;
    let res = [];

    for (let i = 0; i < messageArr.length; i++) {
      if (isAlphabet(messageArr[i])) {
        res.push(String.fromCharCode(this.#CODE_A + (messageArr[i].charCodeAt(0) - this.#CODE_A - keyArr[keyIndex % keyArr.length] + 26) % 26));
        keyIndex++;
      } else {
        res.push(messageArr[i]);
      }
    }

    return this.type ? res.join('') : res.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
