// console.log("Let's Play with type in TypeScript")
// function sayname(name: string):void{
//     console.log(name)
// }
// sayname(hello)
// var test
// console.log(test)
// function addNumber(a:number, b:number):number {
//     return a + b
// }
// addNumber(2,4)
// function wrapInArray<T>(value: T): T[] {
//     return [value]
// }
// console.log( wrapInArray(324))
// class Animal {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
// }
// class Dog extends Animal {
//     // constructor(name:string){
//     //     super(name)
//     // }
//     bark() {
//         console.log(this.name + " barks!");
//     }
// }
// let dog = new Dog('tike');
// dog.bark();
// type User = {
//   id: string,
//   name:string,
//   email?: string
// }
// const user1: User = {id:"123"}
// console.log(user1)
// interface Vehicle {
//     brand:string,
//     speed:number,
//     drive():void
// }
// class Car <Vehicle> {
//     brand
//     speed
//     constructor(brand:string, speed:number){
//         this.brand = brand
//         this.speed = speed
//     }
//     drive(){
//         console.log( `${this.brand} is Drive at ${this.speed}Km/h`)
//     }
// }
// const car1 = new Car("Toyota", 240)
// car1.drive()
// class Book {
//     title:string
//     author:string
//     isBn:string
//     isAvailable:boolean
//     constructor(title:string, author:string, isBn:string, isAvailable:boolean) {
//         this.title = title
//         this.author = author
//         this.isBn = isBn
//         this.isAvailable = isAvailable
//     }
//     get isAvailableBook(): boolean{
//         return this.isAvailable
//     }
//     set setisAvailableBook(bool:boolean) {
//         this.isAvailable = bool
//     }    
// }
// class Library{
//     books: Book[]
//     constructor(books:Book[]){
//         this.books = books
//     }
//     addBook(book:Book){
//         this.books.push(book)
//     }
//     listBook(){
//         return this.books
//     }
//     borrowBook(isBn: string){
//         for (const book of this.books) {
//             if(book.isBn === isBn){
//                 if(book.isAvailable){
//                     book.setisAvailableBook = false
//                     return `You Have Given ${book.title} Book for 2 days`
//                 }else {
//                     return `This ${book.title} Book is not Available`
//                 }
//             } 
//         }
//         return 'Invalid Book'
//     }
// }
// const book1 = new Book('JS', 'XYZ', '001', true)
// const book2 = new Book('TS', 'XYZ', '002', false)
// const book3 = new Book('Java', 'XYZ', '003', true)
// const myLib = new Library([book1,book2])
// myLib.addBook(book3)
// console.log(myLib.borrowBook('004'))
