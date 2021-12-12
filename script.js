// Get Quotes From API
// won't stop browsers from loading the page

// let statement, set as empty array
let apiQuotes = [];
// only use constatnt if value never change


// Show new quotes
function newQuote(){
  // pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() *  apiQuotes.length)]; // making index

  // const quote = localQuotes[Math.floor(Math.random() *  localQuotes.length)];
  console.log(quote); 
  // math function return 0 or 1
  // return decimals


// wrap  Math.random() inside Math.floor() to make sure in this case it will return less
  // Math.floor() function
 
}



// local array
newQuote()


async function getQuotes(){
  // API url
  const apiUrl = 'https://type.fit/api/quotes';
  try{ 
      // will not populated until we fetch some data from apiUrl
      // if no await, it will set response variable before fetch which will cause errors
      // only set response content, when we have data
      const response = await fetch(apiUrl);
      // only set response, only when we have data

      // use global variable
      apiQuotes = await response.json();
      console.log(apiQuotes[12]); // 13th quotes
      // use index

      // get json from response; and turn response into object
  }catch (error) {
      alert(error) 
      // Catch Error here

  }
}


// Onload as soon as our page load
getQuotes();