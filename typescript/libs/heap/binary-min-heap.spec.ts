import { BinaryMinHeap } from './binary-min-heap';

describe('BinaryMinHeap', () => {
  describe('of', () => {
    it('returns an instance of BinaryMinHeap', () => {
      const heap = BinaryMinHeap.of();

      expect(heap).toBeInstanceOf(BinaryMinHeap);
    });
  });

  describe('size', () => {
    it('returns the size of the heap', () => {
      const heap = BinaryMinHeap.of([
        { value: 1, priority: 1 },
        { value: 2, priority: 2 },
        { value: 3, priority: 3 },
      ]);

      expect(heap.size).toBe(3);
    });
  });

  describe('isEmpty', () => {
    it('returns true if the heap is empty', () => {
      const heap = BinaryMinHeap.of();

      expect(heap.isEmpty).toBe(true);
    });

    it('returns false if the heap is not empty', () => {
      const heap = BinaryMinHeap.of([{ value: 1, priority: 1 }]);

      expect(heap.isEmpty).toBe(false);
    });
  });

  describe('push', () => {
    it('pushes a value into the heap', () => {
      const heap = BinaryMinHeap.of();

      heap.push({ value: 1, priority: 1 });

      expect(heap.size).toBe(1);
    });

    it('pushes a value into the heap with priority', () => {
      const heap = BinaryMinHeap.of();

      heap.push({ value: 1, priority: 1 });

      expect(heap.peek()).toBe(1);
    });

    it('pushes multiple values into the heap', () => {
      const heap = BinaryMinHeap.of();

      heap.push({ value: 1, priority: 1 });
      heap.push({ value: 2, priority: 2 });
      heap.push({ value: 3, priority: 3 });

      expect(heap.size).toBe(3);
    });

    it('pushes multiple values into the heap with priority', () => {
      const heap = BinaryMinHeap.of();

      heap.push({ value: 1, priority: 1 });
      heap.push({ value: 2, priority: 2 });
      heap.push({ value: 3, priority: 3 });

      expect(heap.peek()).toBe(1);
    });

    it('pushes multiple values into the heap with priority and reorders them', () => {
      const heap = BinaryMinHeap.of();

      heap.push({ value: 3, priority: 3 });
      heap.push({ value: 1, priority: 1 });
      heap.push({ value: 2, priority: 2 });

      expect(heap.peek()).toBe(1);
    });
  });

  describe('pop', () => {
    it('returns null if the heap is empty', () => {
      const heap = BinaryMinHeap.of();

      expect(heap.pop()).toBeNull();
    });

    it('returns the root value of the heap', () => {
      const heap = BinaryMinHeap.of([
        { value: 3, priority: 3 },
        { value: 2, priority: 2 },
        { value: 1, priority: 1 },
      ]);

      expect(heap.pop()).toBe(1);
    });

    it('returns the root value of the heap and reorders the heap', () => {
      const heap = BinaryMinHeap.of(
        [
          { value: 3, priority: 3 },
          { value: 2, priority: 2 },
          { value: 1, priority: 1 },
        ].reverse(),
      );

      expect(heap.pop()).toBe(1);
      expect(heap.pop()).toBe(2);
      expect(heap.pop()).toBe(3);
    });
  });
});
