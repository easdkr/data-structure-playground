import { HeapNode } from './type';

export class BinaryMinHeap<T> {
  #datas: HeapNode<T>[];

  private constructor() {
    this.#datas = [];
  }

  public static of<T>(initialDatas?: HeapNode<T>[]): BinaryMinHeap<T> {
    const heap = new BinaryMinHeap<T>();
    if (initialDatas) initialDatas.forEach((data) => heap.push(data));
    return heap;
  }

  public get size(): number {
    return this.#datas.length;
  }

  public get isEmpty(): boolean {
    return this.size === 0;
  }

  public push(node: HeapNode<T>): void {
    this.#datas.push(node);
    this.#bubbleUp();
  }

  public pop(): T | null {
    if (this.isEmpty) return null;

    const root = this.#datas[0];
    const last = this.#datas.pop();

    this.#datas[0] = last;
    this.#bubbleDown();

    return root.value;
  }

  public peek(): T | null {
    return this.isEmpty ? null : this.#datas[0].value;
  }

  #bubbleUp(): void {
    let currentIndex = this.size - 1;

    while (currentIndex > 0 && this.#isPriorityHigher(currentIndex, this.#getParentIndex(currentIndex))) {
      this.#swap(currentIndex, this.#getParentIndex(currentIndex));
      currentIndex = this.#getParentIndex(currentIndex);
    }
  }

  #bubbleDown(): void {
    let currentIndex = 0;

    while (this.#hasLeftChild(currentIndex)) {
      const priorityHigherChildIndex = this.#getPriorityHigherChildIndex(currentIndex);

      if (this.#isPriorityHigher(currentIndex, priorityHigherChildIndex)) break;

      this.#swap(currentIndex, priorityHigherChildIndex);
      currentIndex = priorityHigherChildIndex;
    }
  }

  #hasLeftChild(index: number): boolean {
    return this.#getLeftChildIndex(index) < this.size;
  }

  #getPriorityHigherChildIndex(index: number): number {
    const leftChildIndex = this.#getLeftChildIndex(index);
    const rightChildIndex = leftChildIndex + 1;

    return rightChildIndex < this.size && this.#isPriorityHigher(rightChildIndex, leftChildIndex)
      ? rightChildIndex
      : leftChildIndex;
  }

  #getLeftChildIndex(index: number): number {
    return index * 2 + 1;
  }

  #isPriorityHigher(index1: number, index2: number): boolean {
    return this.#datas[index1].priority < this.#datas[index2].priority;
  }

  #getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  #swap(index1: number, index2: number): void {
    [this.#datas[index1], this.#datas[index2]] = [this.#datas[index2], this.#datas[index1]];
  }
}
