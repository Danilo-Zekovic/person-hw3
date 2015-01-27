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
}
// add a element to the list
function append(element){
  this.dataStore[this.listSize++] = element;
}
// toString function print the content of the list
function toString() {
  return this.dataStore;
}

// function to display either gender 
function oneGender() {
  
}




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
