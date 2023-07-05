import StaticArray from "./staticArray.js";

const radix = (array = Array, callback = Function) => {
  const length = array.length;
  let max = 0;
  let divisor = 1;
  let indexNum = 0;
  for (let index = 0; index < length; index++) {
    if (callback(array[index]) > max) {
      max = callback(array[index]);
    }
  }
  while (Math.floor(max / divisor) > 0) {
    const bucket = new StaticArray(10);
    for (let index = 0; index < 10; index++) {
      bucket.insert(index, 0);
    }
    const sortedArray = new StaticArray(length);

    for (let index = 0; index < length; index++) {
      indexNum = Math.floor(callback(array[index]) / divisor) % 10;
      bucket.array[indexNum]++;
    }
    for (let index = 1; index < 10; index++) {
      bucket.array[index] = bucket.array[index] + bucket.array[index - 1];
    }
    for (let index = length - 1; index > -1; index--) {
      indexNum = Math.floor(callback(array[index]) / divisor) % 10;
      sortedArray.insert([bucket.array[indexNum] - 1], array[index]);
      bucket.array[indexNum]--;
    }
    array = sortedArray.array;
    divisor = divisor * 10;
  }
  return array;
};

const radixCapacity = (data) => {
  return Number(data.capacity);
};

class T {
  constructor(capacity) {
    this.capacity = capacity;
  }
}

const t1 = new T(1);
const t2 = new T(20);
const t3 = new T(42);
const t4 = new T(12);
const t5 = new T(74);
const t6 = new T(39);
const t7 = new T(5);
const array = [t1, t2, t3, t4, t5, t6, t7];
const a = radix(array, radixCapacity);
for (let index = 0; index < a.length; index++) {
  console.log(a[index].capacity);
}
