class StaticArray {
  constructor(length = Number) {
    this.length = length;
    this.StoredNumber = 0;
    this.array = new Array(this.length);
  }
  insert(index = Number, data) {
    if (index >= 0 && index < this.length) {
      if (this.array[index] == null) {
        this.StoredNumber++;
      }
      this.array[index] = data;
    } else {
      throw new Error("Invalid Index!");
    }
  }

  delete(index) {
    if (index >= 0 && index < this.length) {
      if (this.array[index] != null) {
        this.StoredNumber--;
      }
      this.array[index] = null;
    } else {
      throw new Error("Invalid Index!");
    }
  }
}
export default StaticArray;
