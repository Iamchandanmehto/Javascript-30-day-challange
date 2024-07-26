//Activity - 1 : Object creation and access
//task - 1: create an object representing a book  with properties like title, author and year, and log the object to the console.

let selfHelpBook = {
    title:"Perfect Combination",
    author:"Jamillah and David Lamb",
    yearOfPublishing:2012
}

console.log(selfHelpBook);

//task -2: access and log the title and author properties of the book objec.
console.log(` Title of book : ${selfHelpBook.title} ,  Author : ${selfHelpBook.author }`);

//Activity - 2: Object methods
//task - 3: add a method to the book object that returns a string with the book's title and author and log the result of calling this method.

   selfHelpBook : function mylibrary( ) {
    return console.log(`Book title is: ${selfHelpBook.title} and author :${selfHelpBook.author}`);
    
 }
 mylibrary()


 // task - 4: add a method to the book object that takes a parameter(year) and update's the book year property, then log the updated object.
 
 let myselfHelpBook = {
    title:"The Master Key System",
    author:"Charles F. Haanel",
    year: 1916,
    updateYear: function(newYear) {
        this.year = newYear;
        console.log(this.year);
    }
}
myselfHelpBook.updateYear(2000)

//Activity -3: nested objects
/* task-5: create a nested object  representing  a library with properties  like name and books and (array of book objects),
 and log the library object tp the console.*/

const library = {
 name:"VillageLib",
 books:[
    {   YearofPublish: 	1998,
        name:"Robert Greene",
        title:"The 48 Laws of Power"
    },
    {   YearofPublish: 		2009,
        name:"Steve Harvey",
        title:"Act like a Lady, Think like a Man"
    },
    {   	YearofPublish: 2007,
        name:"	Alisa Smith and J.B. MacKinnon",
        title:"The 100-Mile Diet"
    },
    {   YearofPublish: 2009,
        name:"Ramit Sethi",
        title:"I Will Teach You To Be Rich"
    },
    
]
}
console.log(library);

//task -6: access and log thw name of the library and the title of all the books in library.

library.books.forEach((book) => {
   return console.log(`Title : ${book.title}`);
})


//Activity -4: the this keyword

// task 7 : add a method to the book object that uses the  this keyword to return a string
//   with the book's title and year, and log the result of the calling this method .

let seclibrary = {
    name: 'City Library',
    books: [
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        yearPublished: 1960,
        getTitleAndYear: function() {
          return `${this.title} (${this.yearPublished})`;
        }
      },
      {
        title: '1984',
        author: 'George Orwell',
        yearPublished: 1949,
        getTitleAndYear: function() {
          return `${this.title} (${this.yearPublished})`;
        }
      },
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        yearPublished: 1925,
        getTitleAndYear: function() {
          return ` Title : ${this.title}, Year : ${this.yearPublished}`;
        }
      }
    ]
  };

  seclibrary.books.forEach((getdDetail) =>{
return console.log(getdDetail.getTitleAndYear());
  })
  

  //Activity -5: object iteration
  //task - 8: use for in loop to iterate over the properties of the book object and log each  property and its value.

  for (const title in seclibrary) {
    if (seclibrary.hasOwnProperty.call(seclibrary, title)) {
      const element = seclibrary[title];
      console.log(element);
    }
  }

  //task - 9: use object.keys and object.values method to log all the keys and value of the book object.


  console.log(  Object.keys(seclibrary.books));
  console.log(Object.values(seclibrary.books));

  
