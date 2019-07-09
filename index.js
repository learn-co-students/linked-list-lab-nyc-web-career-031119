function getName(node) {
  return node['name']
}

function headNode(firstNodeKey, collection) {
  return collection[firstNodeKey]
}

function next(node, collection) {
  return collection[node['next']]
}

function nodeAt(index, firstNodeKey, collection) {
  let node = headNode(firstNodeKey, collection)
  for (let i = 0; i < index; i++ ) {
    node = next(node, collection)
  }
  return node
}

function addressAt(index, firstNodeKey, collection) {
  if (index === 0) {
    return firstNodeKey
  } else {
    let previousNode = nodeAt(index-1, firstNodeKey, collection)
    return previousNode['next']
  }
}

function indexAt(node, collection, firstNodeKey) {
  let currentNode = headNode(firstNodeKey, collection)
  let index = 0
  while (currentNode !== node) {
    currentNode = next(currentNode, collection)
    index += 1
  }
  return index
}

function insertNodeAt(index, newNodeKey, firstNodeKey, collection) {
  // console.log("BEFORE INSERTION", collection)
  let previousNodeAddress = addressAt(index-1, firstNodeKey, collection)

  // nextNode = next(collection[previousNodeAddress], collection)

  // nextNodeIndex = indexAt(nextNode, collection, firstNodeKey)

  let nextNodeAddress = addressAt(index, firstNodeKey, collection)

  collection[newNodeKey]['next'] = nextNodeAddress
  collection[previousNodeAddress]['next'] = newNodeKey

  // console.log("PREVIOUS NODE ADDRESS IS", previousNodeAddress)
  // console.log("NEXT NODE ADDRESS IS", nextNodeAddress)
  // console.log("AFTER INSERTION",collection)
}

function deleteNodeAt(index, firstNodeKey, collection) {
  let previousNodeAddress = addressAt(index-1, firstNodeKey, collection)
  let nextNodeAddress = addressAt(index+1, firstNodeKey, collection)
  collection[previousNodeAddress]['next'] = nextNodeAddress
   
}
