/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start

const TrieNode = function (val) {
  this.map = new Map();
  this.isEnd = false;
  this.val = val;
};
var Trie = function () {
  this.r = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let temp = this.r;
  let hasFound = false;
  while (word.length != 0 && temp) {
    if (temp.map.has(word[0])) {
      if (word.length === 1) {
        const n = temp.map.get(word[0]);
        n.isEnd = true;
        temp.map.set(word[0], n);
      }
      temp = temp.map.get(word[0]);
      word = word.substring(1);
    } else {
      while (word.length != 0) {
        const n = new TrieNode(word[0]);
        if (word.length === 1) {
          n.isEnd = true;
        }
        temp.map.set(word[0], n);
        temp = temp.map.get(word[0]);
        word = word.substring(1);
      }
    }
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let temp = this.r;

  while (word) {
    if (temp.map.has(word[0])) {
      if (word.length === 1) {
        return temp.map.get(word[0]).isEnd;
      }
      temp = temp.map.get(word[0]);
      word = word.substring(1);
    } else return false;
  }
  return true;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let temp = this.r;
  while (prefix && temp) {
    if (temp.map.has(prefix[0])) {
      if (prefix.length === 1) {
        return temp.isEnd;
      }
      temp = temp.map.get(prefix[0]);
      prefix = prefix.substring(1);
    } else return false;
  }
  return false;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
