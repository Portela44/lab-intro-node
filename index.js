class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if((this.length === 0) || (this.items[this.items.length-1] <= item)) {
      this.items.push(item);
    } else if(this.length === 1) {
      if(this.items[0] <= item) {
        this.items.push(item);
      } else {
        this.items.splice(0, 0, item);
      }
    } else {
      for(let i = 0; i < this.length-1; i++) {
        if((item >= this.items[i]) && (item <= this.items[i+1])) {
          this.items.splice((i+1), 0, item);
        } else if (item <= this.items[i]) {
          this.items.splice(i, 0, item);
          i++;
        }
      }
    }
    this.length = this.items.length;
  }

  get(pos) {
    if(this.items[pos] === undefined) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length-1];
    }
  }

  min() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    let totalSum = 0;
    for(let i = 0; i < this.length; i++) {
      totalSum = totalSum + this.items[i];
    }
    return totalSum;
  }

  avg() {}
}

module.exports = SortedList;
