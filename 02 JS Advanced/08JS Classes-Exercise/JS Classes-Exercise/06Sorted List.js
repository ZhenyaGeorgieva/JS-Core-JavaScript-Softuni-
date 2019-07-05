class List {
    constructor() {
        this.collection = [];
       this.size = 0;
      
    };

    add(element) {
        this.collection.push(element);
        this.size++;
        this.collection = this.collection.sort((a, b) => a - b);
    };

    remove(index) {
        if (index < 0 || index >= this.collection.length) {
            throw new Error('Index out of range!')
        }
        this.size--;
        this.collection.splice(index, 1);
    };

    get(index) {
        if (index < 0 || index >= this.collection.length) {
            throw new Error('Index out of range!')
        };
        return this.collection[index];
    }
}
let list = new List();
list.add(5);
console.log(list)
list.add(6);
console.log(list)
list.add(7);
console.log(list)
console.log(list.get(1));
list.remove(1);
console.log(list)
console.log(list.get(1));
