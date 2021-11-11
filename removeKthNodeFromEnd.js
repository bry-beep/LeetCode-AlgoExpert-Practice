/* write a function that takes in the head of a singly linked list and an integer k and removes the kth node from the end of the list. The removal should be done in place and the input head of the linked list should remain the head of the linked list after removal is done. */

function removeKthNodeFromEnd(head, k) {
	let remove = head;
	let ahead = head;
	//count out to k
	for (let i = 1; i <= k; i++) {
		ahead = ahead.next;
	}
	//if the head is the kth node
	if (ahead === null) {
		head.value = head.next.value;
		head.next = head.next.next;
		return head;
	}
	//reverse count using ahead
	while (ahead.next !== null) {
		ahead = ahead.next;
		remove = remove.next;
	}
	remove.next = remove.next.next;
  //adding return to play with jest testing
  return head;
}

module.exports = removeKthNodeFromEnd;
