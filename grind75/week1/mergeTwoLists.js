var mergeTwoLists = function(list1, list2) {
    // Initialize empty list to merge into
    const head = new ListNode(null);
    let current = head;

    while (list1 || list2) {
        if (list1 && list2) {
            if (list1.val >= list2.val) {
                current.next = list2;
                current = current.next;
                list2 = list2.next;
            } else {
                current.next = list1;
                current = current.next;
                list1 = list1.next;
            }
        } else if (list2 === null) {
            current.next = list1;
            list1 = list1.next;
            break;
        } else if (list1 === null) {
            current.next = list2;
            list2 = list2.next;
            break;
        }
    }

    return head.next
};