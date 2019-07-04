let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
    masjdrandm: {name: 'Kirstin', next: 'ntrandm'},
    ntrandm: {name: 'Juliet', next: null}
  }

// let firstNode = ['cameron', 123]
// let secondNode = ['sloane', 132]
// let thirdNode = ['ferris', null]

let head = collection[0];

function getName(node){
  return node.name
}

function headNode(linkedList, collection){
  return collection[linkedList]
}

function next(node, collection){
  let nextAddress = node.next
    return collection[nextAddress]
  }

function nodeAt(index, linkedList, collection){
  let currentNode = headNode(linkedList, collection)
  for(let i = 0; i<index; i++){
    currentNode = next(currentNode, collection)
  }
  return currentNode
}

function addressAt(index, linkedList, collection){
  if(index === 0){
    return linkedList
  }else {
    let node = nodeAt(index-1, linkedList, collection)
    return node.next
  }
}

function indexAt(node, collection, linkedList){
  let currentNode = headNode(linkedList, collection)
  let currentIndex = 0
  while (currentNode != node){
    currentIndex++
    currentNode = next(currentNode, collection)
  }
  return currentIndex
}

function insertNodeAt(index, newNodeAddress, linkedList, collection){
  let previousNode = nodeAt(index-1, linkedList, collection)
  let followingNode = nodeAt(index, linkedList, collection)

  let pNIndex = indexAt(previousNode, collection, linkedList)
  let fNIndex = indexAt(followingNode, collection, linkedList)

  let pNAddress = addressAt(previousNode, linkedList, collection)
  let fNAddress = addressAt(followingNode,linkedList, collection)

  previousNode.next = newNodeAddress
  let newNode = collection[newNodeAddress]
  newNode.next = fNAddress
}

function deleteNodeAt(index, linkedList, collection){
  let previousNode
  let currentNode = headNode(linkedList, collection)

  for(let i = 0; i<index; i++){
    previousNode = currentNode
    currentNode = next(currentNode, collection)
  }
  previousNode.next = currentNode.next
}
