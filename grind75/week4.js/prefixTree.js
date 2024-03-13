class TrieNode {
    children: Map<string, TrieNode>;
    isEnd: boolean;

    constructor() {
        this.children = new Map<string, TrieNode>();
        this.isEnd = false;

    }
}

class Trie {
    root: TrieNode

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let currentNode = this.root;
        for (const char of word) {
            if (!currentNode.children.has(char)) {
                currentNode.children.set(char, new TrieNode());
            }
            currentNode = currentNode.children.get(char);
        }
        currentNode.isEnd = true;
    }

    search(word: string): boolean {
        let currentNode = this.root;
        for (const char of word) {
            if (currentNode.children.has(char)) {
                currentNode = currentNode.children.get(char);
            } else {
                return false
            }
        }
        return currentNode.isEnd
    }

    startsWith(prefix: string): boolean {
        let currentNode = this.root;
        for (const char of prefix) {
            if (!currentNode.children.has(char)) {
                return false
            }
            currentNode = currentNode.children.get(char);
        }
        return true
    }
}