/*jshint esnext: true, devel: true*/

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Note - I'm assuming I don't need to fetch and parse the page considering this
//        is to be an array exercise.
const parisBoulevards = ['Boulevard Auguste-Blanqui', 'Boulevard Barbès', 'Boulevard Beaumarchais', 'Boulevard de l\'Amiral-Bruix', 'Boulevard des Capucines', 'Boulevard de la Chapelle', 'Boulevard de Clichy', 'Boulevard du Crime', 'Boulevard Haussmann', 'Boulevard de l\'Hôpital', 'Boulevard des Italiens', 'Boulevard de la Madeleine', 'Boulevard de Magenta', 'Boulevard Montmartre', 'Boulevard du Montparnasse', 'Boulevard Raspail', 'Boulevard Richard-Lenoir', 'Boulevard de Rochechouart', 'Boulevard Saint-Germain', 'Boulevard Saint-Michel', 'Boulevard de Sébastopol', 'Boulevard de Strasbourg', 'Boulevard du Temple', 'Boulevard Voltaire', 'Boulevard de la Zone'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
//const filteredInventors = inventors.filter(function(inventor){
//  if (inventor.year > 1499 && inventor.year < 1600) {
//    return true;
//  }
//});
// More concise way to do it:
const filteredInventors = inventors.filter( (inventor)=> inventor.year > 1499 && inventor.year < 1600 );
console.table(filteredInventors);


// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
// Note - I'm assuming they don't want an array of objects here
//const mappedInventors = inventors.map(function(inventor) {
//  return inventor.first + ' ' + inventor.last;
//});
// Let's do it ES6 style instead:
const mappedInventors = inventors.map( (inventor)=> `${inventor.first} ${inventor.last}` );
console.log(mappedInventors);
// Note - But let's do it again with objects, just in case.
//const mappedInventorsObj = inventors.map(function(inventor){
//  return {
//    first: inventor.first,
//    last: inventor.last
//  };
//});
//console.log(mappedInventorsObj);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
//inventors.sort(function(a, b) {
//  if (a.year < b.year) {
//    return -1;
//  } else if (a.year > b.year) {
//    return 1;
//  } else {
//    return 0;
//  }
//});
// More concise - again
inventors.sort( (a, b)=> a.year < b.year ? -1 : 1 );
console.table(inventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
// Note - should return 861... probably
//var reducedInventors = inventors.reduce(function(total, i) {
//  return total + i.passed - i.year;
//}, 0);
// ES6 style again!
const reducedInventors = inventors.reduce( (total, i)=> {
  return total + i.passed - i.year;
}, 0);
console.log(reducedInventors);

// 5. Sort the inventors by years lived
//inventors.sort(function(a,b){
//  if ((a.passed - a.year) < (b.passed - b.year)) {
//    return -1;
//  } else if ((a.passed - a.year) > (b.passed - b.year)) {
//    return 1;
//  } else {
//    return 0;
//  }
//});
inventors.sort( (a,b)=> a.passed - a.year < b.passed - b.year ? -1 : 1 );
console.table(inventors);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// Note - Using array created above.
const filteredBoulevards = parisBoulevards.filter(function(boulevard){
  return boulevard.includes('de');
});
console.log(filteredBoulevards);

// 7. sort Exercise
// Sort the people alphabetically by last name
// Note - don't technically have to do anything.  The array appears already sorted.
//        But the below should work if it weren't.
people.sort();
console.log(people);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
// Note - not sure what exactly Wes wants from us here; the question is vague
// Note - Okay, the video says he wants an object.  I can do that!
const reducedData = data.reduce(function(total,itm){
  if (!total[itm]) {
    total[itm] = 0;
  }
  total[itm]++;
  return total;
},{});
console.log(reducedData);