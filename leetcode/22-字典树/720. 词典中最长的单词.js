/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
    /* 生成字典树 */
    const trie = new Trie()
    words.map(word => {
        trie.insert(word)
    })

    let res = ''

    const helper = (nodes, path) => {
        if (path.length > res.length || (path.length === res.length && path < res)) { // path 最长 || path < res（字典序较小）
            res = path 
        }

        for (const [key, value] of Object.entries(nodes)) {
            if (value.isEnd) {
                helper(value, path + key)
            }
        }
    }

    helper(trie.children, '')
    return res
};

// 构建字典树
function Trie() {
    this.children = {}
}

Trie.prototype.insert = function (word) {
    let nodes = this.children

    for (const ch of word) {
        if (!nodes[ch]) {
            nodes[ch] = {}
        }
        nodes = nodes[ch]
    }

    nodes.isEnd = true
}