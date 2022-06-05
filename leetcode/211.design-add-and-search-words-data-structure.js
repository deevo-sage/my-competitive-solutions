const TrieNode = function (val) {
  this.map = new Map();
  this.isEnd = false;
  this.val = val;
};
var WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let temp = this.root;
  while (word.length != 0 && temp) {
    if (temp.map.has(word[0])) {
      if (word.length === 1) {
        const x = temp.map.get(word[0]);
        x.isEnd = true;
        temp.map.set(word[0], x);
      }
    } else {
      const node = new TrieNode(word[0]);
      if (word.length === 1) {
        node.isEnd = true;
      }
      temp.map.set(word[0], node);
    }
    temp = temp.map.get(word[0]);
    word = word.substring(1);
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  let temp = this.root;

  const func = (node, word) => {
    if (word[0] === ".") {
      let t = false;
      if (word.length === 1) {
        node.map.forEach((val, key) => {
          t = t || val.isEnd;
        });
        return t;
      }
      node.map.forEach((val, key) => {
        t = t || func(val, word.substring(1));
      });
      return t;
    } else if (node.map.has(word[0])) {
      if (word.length === 1) {
        return node.map.get(word[0]).isEnd;
      }
      return func(node.map.get(word[0]), word.substring(1));
    } else return false;
  };

  return func(temp, word);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
