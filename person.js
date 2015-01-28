/*
 * Danilo Zekovic
 * 1/27/2015
 * Create a Person class that stores a person's name and their gender.
 * Create a list of at least 10 Person objects.
 * Write a function that displays all the people in the list of the same
 * gender.
 */

// define a Person class
function Person (name, gender) {
  this.name = name;
  this.gender = gender;
}

// create a list of 
function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.append = append;
  this.toString = toString;
  this.getElement = getElement;
  this.front = front;
  this.next = next;
  this.oneGender = oneGender;
}
// add a element to the list
function append(element){
  this.dataStore[this.listSize++] = element;
}
// toString function print the content of the list
function toString() {
  return this.dataStore;
}
// getElement, returns element at current position
function getElement() {
  return this.dataStore[this.pos];
}
// front set pos to first element
function front() {
  this.pos = 0;
}
// next moves to the next element
function next() {
  if (this.pos < this.listSize-1) {
    ++this.pos;
  }
}

// function to display either gender
// argument defines which gender will be displayed 
function oneGender(pickGender) {
  this.front();                               // set to first e in list
  for(var i = 0; i<this.listSize; ++i) {      // loop through all e
    //console.log("start loop" + i);
    if(this.getElement().gender == pickGender){ //
      //console.log("foo" + i);
      console.log(this.getElement().name);      // print e 
      this.next();                              // go to next e
    }else{
      this.next();                              // go to next e
    } // end else
  } // end for
} // end oneGender

// create List of people
var listPeople = new List();

// create 10 People objects
var lazar = new Person("Lazar", "Male");
var milica = new Person("Milica", "Female");
var aleksandra = new Person("Aleksandra", "Female");
var marko = new Person("Marko", "Male");
var nemanja = new Person("Nemanja", "Male");
var vanja = new Person("Vanja", "Female");
var milos = new Person("Milos", "Male");
var sandra = new Person("Sandra", "Female");
var tamara = new Person("Tamara", "Female");
var petar = new Person("Petar", "Male");

// add Person objects to the list
listPeople.append(lazar);
listPeople.append(milica);
listPeople.append(aleksandra);
listPeople.append(marko);
listPeople.append(nemanja);
listPeople.append(vanja);
listPeople.append(milos);
listPeople.append(sandra);
listPeople.append(tamara);
listPeople.append(petar);

// display the entire list
console.log(listPeople.toString());

// run the function to display either gender
console.log("\n" + "Ladies first" + "\n");
listPeople.oneGender("Female");
console.log("\n" + "And now gentlemen" + "\n");
listPeople.oneGender("Male");
