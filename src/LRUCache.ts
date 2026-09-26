class LRUCache {
  private capacity: number;
  private cache: Map<string, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key: string): number {
    const value = this.cache.get(key);

    if (value === undefined) {
      return -1;
    }

    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
  }

  put(key: string, value: number): void {
    const isExistingKey = this.cache.has(key);

    if (!isExistingKey && this.cache.size === this.capacity) {
      const oldestKey = this.cache.keys().next().value!;

      this.cache.delete(oldestKey);
    }

    this.cache.delete(key);
    this.cache.set(key, value);
  }
}

// Example
const cache = new LRUCache(2);

console.log("\n1. Adding A and B");
cache.put("A", 10);
cache.put("B", 20);

console.log("\n2. Getting A");
console.log("get(A) ->", cache.get("A"));

console.log("\n3. Adding C");
cache.put("C", 30);

console.log("\n4. Checking values after eviction");
console.log("get(B) ->", cache.get("B"));
console.log("get(C) ->", cache.get("C"));
console.log("get(A) ->", cache.get("A"));
