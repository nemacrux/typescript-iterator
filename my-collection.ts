import { Iterable } from './iterable';
import { Iterator } from './iterator'
import { BasicIterator } from './basic-iterator';
import { ReverseIterator } from './reverse-iterator';

export class MyCollection implements Iterable {
  private data: number[];

  constructor(data: number[]){
    this.data = data;
  }

  getItems(): number[] {
    return this.data;
  }

  /** ... some other methods of the collection */

  iterator(): Iterator<number> {
    return new BasicIterator(this);
  }

  reverseIterator(): Iterator<number> {
    return new ReverseIterator(this);
  }
}
