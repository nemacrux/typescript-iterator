/** Based on https://refactoring.guru/design-patterns/iterator */

// Import stylesheets
import './style.css';

import { Iterator } from './iterator';
import { Iterable } from './iterable';
import { MyCollection } from './my-collection';

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Iterator example</h1>
                    Open the console to test!`;

// example starts here 
const data: number[] = [1,2,3,4,5,6,7,8,9,10];
// use iterable interface to depend only on abstractions
const collection: Iterable = new MyCollection(data);
// of course you can use the concrete collection
// const collection: MyCollection = new MyCollection(data); 

// get and use the iterator
let iterator: Iterator<number> = collection.iterator();

while(iterator.hasNext()){
  console.log(iterator.next())
}

// throws error if no more elements
try {
  iterator.next()
} catch (e) {
  console.log(e.message);
}

// reverse iterator
iterator = collection.reverseIterator();

while(iterator.hasNext()){
  console.log(iterator.next())
}

// throws error if no more elements
try{
  iterator.next()
} catch(e) {
  console.log(e.message);
}
