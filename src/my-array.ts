export default class MyArray {
  private stack: (string | number)[] = [];

  add(item: string | number): void {
    this.stack.push(item);
  }

  remove(item: string | number): void {
    this.stack = this.stack.filter((_item) => _item !== item);
  }

  getvalues(): (string | number)[] {
    return this.stack;
  }
}
