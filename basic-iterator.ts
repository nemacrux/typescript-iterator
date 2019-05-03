import { Iterator } from './iterator';
import { MyCollection } from './my-collection';

/** Concrete iterator for MyCollection */
export class BasicIterator implements Iterator<number> {

  private collection: MyCollection;
  private position: number = 0;

  constructor(collection: MyCollection){
    this.collection = collection;
  }
  
  next(): number {
    if(!this.hasNext()){
      throw new Error("No more elements");
    }

    const item = this.collection.getItems()[this.position];
    this.position++;
    return item;
  }

  hasNext(): boolean {
    return this.position < this.collection.getItems().length;
  }

}