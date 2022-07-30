var Trie = function () {
    this.children = {}
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let nodes = this.children

    for (const ch of word) {
        if (!nodes[ch]) { // 当前字符不在子节点中，就创建一个子节点到 children 的相应位置
            nodes[ch] = {}
        }
        nodes = nodes[ch] // 指针移到下一个字符子节点
    }

    nodes.isEnd = true // 字符是否结束
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let nodes = this.children

    for (const ch of word) {
        if (!nodes[ch]) {
            return false
        }
        nodes = nodes[ch]
    }

    return nodes !== undefined && nodes.isEnd !== undefined
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let nodes = this.children

    for (const ch of prefix) {
        if (!nodes[ch]) {
            return false
        }
        nodes = nodes[ch]
    }

    return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */