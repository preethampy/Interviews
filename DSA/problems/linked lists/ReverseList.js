/* ListNode = {
 *             val = 0;
 *             next = ListNode = {
 *                                  val = 1;
 *                                  next = ListNode = {
 *                                                      val = 2;
 *                                                      next = null;
 *                                                    }
 *                                }
 *            }
*/
function reverseList(head) {
    var headCopy = head;
    var prev = null;

    while (headCopy !== null) {
        const nextToHead = headCopy.next;
        headCopy.next = prev;
        prev = headCopy;
        headCopy = nextToHead;
    }
    return prev;
}

/**
 * Loop 1
 * headCopy = ListNode{val: 0, next: ListNode{val: 1, next: ListNode{val: 2, next: null}}}
 * prev = null
 * nextToHead = ListNode{val: 1, next: ListNode{val: 2, next: null}}
 * headCopy.next = null
 * prev = ListNode{val: 0, next: null}
 * headCopy = ListNode{val: 1, next: ListNode{val: 2, next: null}}
 * 
 * Loop 2
 * headCopy = ListNode{val: 1, next: ListNode{val: 2, next: null}}
 * prev = ListNode{val: 0, next: null}
 * nextToHead = ListNode{val: 2, next: null}
 * headCopy.next = ListNode{val: 0, next: null}
 * prev = ListNode{val: 1, next: ListNode{val: 0, next: null}}
 * headCopy = ListNode{val: 2, next: null}
 * 
 * Loop 3
 * headCopy = ListNode{val: 2, next: null}
 * prev = ListNode{val: 1, next: ListNode{val: 0, next: null}}
 * nextToHead = null
 * headCopy.next = ListNode{val: 1, next: ListNode{val: 0, next: null}}
 * prev = ListNode{val: 2, next: ListNode{val: 1, next: ListNode{val: 0, next: null}}}
 * headCopy = null
 *
 */