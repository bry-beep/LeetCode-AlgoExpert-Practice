const removeKthNodeFromEnd = require('./removeKthNodeFromEnd')

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  add(value) {
    const newNode = new Node(value);
    this.next = newNode;
    return newNode;
  }
}

const head = new Node(0);
head.add(1).add(2).add(3).add(4).add(5);

test('removes kth node', () => {
  expect(removeKthNodeFromEnd(head, 2)).toEqual({value: 0, next: {value: 1, next: {value: 2, next: {value: 3, next: {value: 5, next: null}}}}});
  expect(removeKthNodeFromEnd(head, 5)).toEqual({value: 1, next: {value: 2, next: {value: 3, next: {value: 5, next: null}}}});
})
