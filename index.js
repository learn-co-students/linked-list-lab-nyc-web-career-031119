function getName(node) {
  return node["name"];
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(node, collection) {
  let nextAddress = node.next;
  return collection[nextAddress];
}

function nodeAt(index, linkedList, collection) {
  let node = headNode(linkedList, collection);
  for (var i = 0; i < index; i++) {
    node = next(node, collection);
  }

  return node;
}


function addressAt(index, linkedList, collection) {
  if (index === 0) {
    return linkedList;
  } else {
    let node = nodeAt(index - 1, linkedList, collection)
    return node.next;
  }
}

function indexAt(node, collection, linkedList) {
  let currentNode = headNode(linkedList, collection);
  let currentIdx = 0;
  while (currentNode != node) {
    currentIdx++
    currentNode = next(currentNode, collection)
  }
  return currentIdx;
}
