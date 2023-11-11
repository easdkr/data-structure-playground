export class HelloWorld<T> {
  constructor(public data: T[]) {}

  public push(item: T): void {
    this.data.push(item);
  }

  public pop(): T {
    return this.data.pop();
  }
}
