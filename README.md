# LRU Cache

A simple LRU (Least Recently Used) Cache implementation using TypeScript and JavaScript's built-in `Map`.

## Data Structure

The implementation uses a JavaScript `Map`.

`Map` provides average O(1) lookup, insertion, and deletion while maintaining insertion order.

The order represents usage:

```text
First entry → Least Recently Used
Last entry  → Most Recently Used
```

When a key is accessed or updated, it is deleted and inserted again so it moves to the end of the `Map`.

When the cache is full, the first key is removed.

## Complexity

- **Time:** O(1) average for `get()` and `put()`
- **Space:** O(capacity)

## Project Structure

```text
lru-cache/
├── src/
│   └── LRUCache.ts
├── README.md
├── package.json
├── tsconfig.json
├── package-lock.json
└── .gitignore
```

## Run

Install dependencies:

```bash
npm install
```

Build:

```bash
npm run build
```

Run:

```bash
node dist/src/LRUCache.js
```

## Example

```text
1. Adding A and B

2. Getting A
get(A) -> 10

3. Adding C

4. Checking values after eviction
get(B) -> -1
get(C) -> 30
get(A) -> 10
```
