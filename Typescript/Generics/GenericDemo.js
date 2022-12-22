// Array : generic
// Set : generic
//Map : generic
let arr1 = [67, "hi", true, 34, "hello"];
let arr2 = new Array(67, 5, 23, 78, 56);
let arr3 = new Array("hi", "helo", "welcome", "bye");
let arr4 = new Array(3);
arr4[0] = "hi";
arr4[1] = 67;
arr4[2] = "hello";
arr4.push(56);
arr4.push("Welcome");
console.log(arr4);
arr4.pop();
console.log(arr4);
let arr5 = new Array();
console.log(arr5.length);
let stringStack = new Array();
stringStack.push("hello");
stringStack.push("hello");
stringStack.push(new String("hi"));
console.log(stringStack);
let numberStack = new Array();
numberStack.push(456);
numberStack.push(456.45);
console.log(numberStack);
let empSet = new Set();
empSet.add("Hari");
empSet.add("Hari");
empSet.add("Pooja");
empSet.add("Parinita");
console.log(empSet);
class Book {
    constructor(id, name) {
        this.bookId = id;
        this.booName = name;
    }
}
let bookList = new Array();
bookList.push(new Book(12, "Java"));
bookList.push(new Book(11, "Java Web"));
bookList.push(new Book(13, "Web"));
bookList.push(new Book(11, "Python"));
bookList.push(new Book(12, "Java"));
let bookList2 = new Set();
bookList2.add(new Book(12, "Java"));
bookList2.add(new Book(11, "Java Web"));
bookList2.add(new Book(13, "Web"));
bookList2.add(new Book(11, "Python"));
bookList2.add(new Book(12, "Java"));
console.log(bookList2);
let map = new Map();
map.set("sun", "planet which gives energy to other planets");
map.set("mobile", "planet which gives energy to other planets");
map.set("earth", "planet which gives energy to other planets");
map.set("book", "planet which gives energy to other planets");
map.set("book", "the thing where contents stored");
console.log(map);
