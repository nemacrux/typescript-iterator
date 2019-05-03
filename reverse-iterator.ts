import { Iterator } from './iterator';
import { MyCollection } from './my-collection';

/** Concrete iterator for MyCollection */
export class ReverseIterator implements Iterator<number> {

  private collection: MyCollection;
  private position: number;

  constructor(collection: MyCollection){
    this.collection = collection;
    this.position = this.collection.getItems().length - 1;
  }
  
  next(): number {
    if(!this.hasNext()){
      throw new Error("No more elements");
    }

    const item = this.collection.getItems()[this.position];
    this.position--;
    return item;
  }

  hasNext(): boolean {
    return this.position >= 0;
  }

}