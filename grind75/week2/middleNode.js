var middleNode = function(head) {
    // Find list length;
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }

    current = head;
    const middle = Math.floor(length / 2);
    for (let i = 0; i < middle; i++) {
        current = current.next;
    }

    return current
};