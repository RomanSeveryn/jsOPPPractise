class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFulName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname)
    this.year = year;
  }

  getCourse() {
    let today = new Date().getFullYear();
    let result = today - this.year.getFullYear();
    if (result > 4 || result < 0) {
      throw RangeError('No valid date');
    }
    if (result >= 0 && result <= 4 ) {
      return result + 1;
    } 
  }
}

const student = new Student('Test', 'Testovich', new Date('2021'));
console.log(student);
console.log(student.getCourse());