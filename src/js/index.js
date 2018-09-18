
/*
*     Import from base;
*/
import * as searchView from './views/searchView';
import { elements } from './views/base';
import * as database from './models/Database';



/*
*     Rendering all of the Results
*/

const renderResults = (service, page = 1, resPerPage = 2) => {
    // Render results of current page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    service.slice(start, end).forEach(searchView.renderService);

    // Render pagination buttons
    searchView.renderButtons(page, service.length, resPerPage);
};

/*
*     Function to clear previuos results
*/

const clearResults = () => {
  // Sets search results (services) to none;
  elements.searchResList.innerHTML = '';
  // Sets results pagination to none;
  elements.searchResPages.innerHTML = '';
}

/*
*     DATABASE INFORMATION CONTAINER
*/

// Gives you a object of services;

/*
*     Search (filtering the results);
*/

  function filterServices(event) {

// prevents page restart on search button click;
    if (event) {
    event.preventDefault();
  } else {
    // console.log(event);
  }

// empties search result;
  elements.searchResWindow.innerHTML = '';

// Set both arrays to empty; "let" because they gonna change every time function called;
    let services = [];
    let filteredServices = [];

// Input value;
    const keyword = elements.searchInput.value.toLowerCase();

// Push to array every database title
    database.res.forEach((user) => {
      services.push(user.title);

    });

// checks if service title compared to input value and calls indexOf function, if it returns more then -1, returns value;
    const filtered_titles = services.filter(function(service){
            service = service.toLowerCase();
           return service.indexOf(keyword) > -1;
      });

// scrolls through all the Database and if the filtered_titles is equal to title from database it pushes it into filtered array;
   for (var i = 0; i < filtered_titles.length; i++) {
     database.res.forEach((objTitle) => {
      if (filtered_titles[i] == objTitle.title) {
        filteredServices.push(objTitle);
      } else {

        // cycle ends here;
        return;
      }
     });
   };

// gives pagination buttons eventListener for click, clears previuos results and renders new based on the page;
   elements.searchResPages.addEventListener('click', e => {
     const btn = e.target.closest('.btn-inline')
     if (btn) {
       const goToPage = parseInt(btn.dataset.goto, 10);
       clearResults();
       renderResults(filteredServices, goToPage);
     }
   });

   clearResults();
   renderResults(filteredServices);
};

/*
*     onLoad renders Database results;
*/

filterServices();

// EventListener for search;
elements.searchButton.addEventListener('click', filterServices);



// For those who had patience to scroll down till bottom, enter secretCode in ITERN webpage!
const pressed = [];
const secretCode = 'nfq';
window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    alert("Congratulations! You have entered the secret code. Here's a cookie for you 🍪!")
  }
});
