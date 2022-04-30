const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(String(value));
    return this;
  },

  removeLink(position) {
    if (position <= 0 || position > this.chain.length || isNaN(position)) {
      this.chain.length = 0;
      throw new Error('You can\'t remove incorrect link!');
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    const result = this.chain.map(e => `( ${e} )`).join('~~');
    this.chain.length = 0;
    return result;
  }
};

module.exports = {
  chainMaker
};
