function getName(node){
  return node.name;
}

function headNode(key, collection){
  return collection[key];
}

function next(node, collection){
  return collection[node.next];
}

function nodeAt(index, key, collection){
  let node = headNode(key, collection);
  for( let i = 0 ; i < index ; i ++){
    node = next(node, collection);
  }
  return node;
}

function addressAt(index, key, collection){
  if (index === 0) return key;
  let prev = nodeAt(index-1, key, collection);
  return prev.next;
}

function indexAt(node, collection, key){
  let curr = headNode(key, collection);
  let index = 0;
  while(curr !== node){
    curr = next(curr,collection);
    index ++;
  }
  return index;
}

function insertNodeAt(index, newKey, firstKey, collection){
  let prevAddress = addressAt(index-1, firstKey, collection);
  let nextAddress = addressAt(index, firstKey, collection);

  collection[newKey].next = nextAddress;
  collection[prevAddress].next = newKey;
}


function deleteNodeAt(index, key, collection){
  let prev = addressAt(index-1, key, collection);
  let next = addressAt(index+1, key, collection);
  collection[prev].next = next;
}
