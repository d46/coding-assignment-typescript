export default class MyArray<T extends number | string> extends Map {
  add(item: T): void {
    this.set(item, item);
  }

  remove(item: T): void {
    this.delete(item);
  }

  getvalues(): T[] {
    const values: T[] = [];
    for (const keyValue of this.entries()) {
      values.push(keyValue[0]);
    }
    return values;
  }
}
