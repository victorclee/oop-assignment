class Course {
  constructor(courseTitle, courseLength, coursePrice) {
    this.title = courseTitle;
    this.price = coursePrice;
    this.length = courseLength;
  }

  calculateValue() {
    return this.price/this.length;
  }

  printSummary() {
    console.log(`Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`);
  }

}

const jsCourse = new Course('JavaScript - The Complete Guide', 50, 44);
const reactCourse = new Course('React.js - The Complete Guide', 50, 36);

console.log(jsCourse);
console.log(reactCourse);

console.log(jsCourse.calculateValue());
console.log(reactCourse.calculateValue());

jsCourse.printSummary();
reactCourse.printSummary();