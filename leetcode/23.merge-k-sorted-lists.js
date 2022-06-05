function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode[]} t
 * @return {ListNode}
 */
var mergeKLists = function (t) {
  let head = new ListNode();
  let temp = head;
  // loop until all lists are empty
  while (true) {
      // [index , value]
    let min = [-1, 100000];
    let b = false;
    // traverse through all listnodes to find the small head
    for (let i = 0; i < t.length; i++) {
      if (t[i]) {
        b = true;
        if (t[i].val < min[1]) {
          min[0] = i;
          min[1] = t[i].val;
        }
      } 
      //if t[i] is undefined therefore list empty so pop out t[i]
      else {
        t[i] = t[t.length - 1];
        i--;
        t.length -= 1;
      }
    }
    // if all list empty break the loop
    if (!b) break;
    // add smallest val to the list 
    temp.next = new ListNode(t[min[0]].val);
    // move head to next element of the list
    t[min[0]] = t[min[0]].next;
    temp = temp.next;
  }
  return head.next;
};
