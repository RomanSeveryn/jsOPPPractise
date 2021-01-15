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
    let result = today - this.year;
    if (result > 5 || result < 0) {
      throw RangeError('No valid date');
    } else if (result > 0 && result <= 5 ) {
      return result;
    } else if(result === 0) {
      return 1;
    }
  }
}

const student = new Student('Test', 'Testovich', new Date(2021));
console.log(student);
console.log(student.getCourse());