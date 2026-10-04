solution1.js
function deepEqual(objA, objB) {
  if (Object.is(objA, objB)) return true;

  if (
    objA === null ||
    objB === null ||
    typeof objA !== "object" ||
    typeof objB !== "object"
  ) {
    return false;
  }

  if (Array.isArray(objA) !== Array.isArray(objB)) return false;

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  return keysA.every(
    (key) =>
      Object.prototype.hasOwnProperty.call(objB, key) &&
      deepEqual(objA[key], objB[key])
  );
}

problem 2
function diffObjects(oldObj, newObj) {
  const added = {};
  const removed = {};
  const changed = {};

  for (const key of Object.keys(newObj)) {
    if (!Object.prototype.hasOwnProperty.call(oldObj, key)) {
      added[key] = newObj[key];
    } else if (!Object.is(oldObj[key], newObj[key])) {
      changed[key] = { from: oldObj[key], to: newObj[key] };
    }
  }

  for (const key of Object.keys(oldObj)) {
    if (!Object.prototype.hasOwnProperty.call(newObj, key)) {
      removed[key] = oldObj[key];
    }
  }

  return { 


    problem 3
 solution3.js
function deepEqual(objA, objB) {
  if (Object.is(objA, objB)) return true;

  if (
    objA === null ||
    objB === null ||
    typeof objA !== "object" ||
    typeof objB !== "object"
  ) {
    return false;
  }

  if (Array.isArray(objA) !== Array.isArray(objB)) return false;

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  return keysA.every(
    (key) =>
      Object.prototype.hasOwnProperty.call(objB, key) &&
      deepEqual(objA[key], objB[key])
  );
}

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
console.log(deepEqual({ a: 1 }, { a: 1, b: 2 })); // false
````
   

problem 4

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get value() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.decrement();

console.log(counter.value); // 1
console.log(counter.count); // undefined



problem5
````javascript
function validateSchema(obj, schema) {
  const errors = [];

  for (const [key, expectedType] of Object.entries(schema)) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
      errors.push(`${key}: missing property`);
    } else {
      const actualType = typeof obj[key];

      if (actualType !== expectedType) {
        errors.push(`${key}: expected ${expectedType}, got ${actualType}`);
      }
    }
  }

  return errors;
}

const schema = { name: "string", age: "number", isAdmin: "boolean" };

console.log(validateSchema({ name: "Ada", age: 21, isAdmin: false }, schema));
// []

console.log(validateSchema({ name: "Ada", age: "21" }, schema));
// ["age: expected number, got string", "isAdmin: missing property"]
````