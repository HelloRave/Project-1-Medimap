// Landing Page search input and search button
document.querySelector('#home-search-input').addEventListener('keydown', async function (event) {

    if (event.key == 'Enter') {

        // Runs the search and display and map
        await main()

        // Hide landing page and display map when search results are rendered 
        document.querySelector('body').style.overflow = 'visible'
        document.querySelector('html').style.overflow = 'visible'
        document.querySelector('#map-container').style.height = '100vh';
        document.querySelector('#landing').style.height = 0;
        document.querySelector('#landing').style.overflow = 'hidden';

        // Set input value to null for search input and button in map to run properly 
        document.querySelector('#home-search-input').value = null

    }
})

document.querySelector('#home-search-btn').addEventListener('click', async function () {

    // Runs the search and display and map
    await main()

    // Hide landing page and display map when search results are rendered
    document.querySelector('body').style.overflow = 'visible'
    document.querySelector('html').style.overflow = 'visible'
    document.querySelector('#map-container').style.height = '100vh';
    document.querySelector('#landing').style.height = 0;
    document.querySelector('#landing').style.overflow = 'hidden';

    // Set input value to null for search input and button in map to run properly
    document.querySelector('#home-search-input').value = null
})

// Landing Page search for Anarex and Dermovate 
document.querySelector('.find-anarex').addEventListener('click', async function () {
    
    // Runs the search and display and map
    await main('anarex')

    // Hide landing page and display map when search results are rendered
    document.querySelector('body').style.overflow = 'visible'
    document.querySelector('html').style.overflow = 'visible'
    document.querySelector('#map-container').style.height = '100vh';
    document.querySelector('#landing').style.height = 0;
    document.querySelector('#landing').style.overflow = 'hidden';

    // Set input value to null for search input and button in map to run properly
    document.querySelector('#home-search-input').value = null

    // Set input value on map to remind user on what they have selected 
    document.querySelector('#map-search-input').value = 'Anarex'
})

document.querySelector('.find-dermovate').addEventListener('click', async function () {

    // Runs the search and display and map
    await main('dermovate')

    // Hide landing page and display map when search results are rendered
    document.querySelector('body').style.overflow = 'visible'
    document.querySelector('html').style.overflow = 'visible'
    document.querySelector('#map-container').style.height = '100vh';
    document.querySelector('#landing').style.height = 0;
    document.querySelector('#landing').style.overflow = 'hidden';

    // Set input value to null for search input and button in map to run properly
    document.querySelector('#home-search-input').value = null;

    // Set input value on map to remind user on what they have selected
    document.querySelector('#map-search-input').value = 'Dermovate'
})

// Display search results when 'Enter' key pressed 
document.querySelector('#map-search-input').addEventListener('keydown', async function (event) {

    if (event.key == 'Enter') {

        await main()

    }
})

// Display search results when search button pressed 
document.querySelector('#map-search-btn').addEventListener('click', async function () {

    await main()

})

// Adjust alert-container based on collapsible tab (beside search button on map)
document.querySelector('#collapse-btn').addEventListener('click', function () {
    if (document.querySelector('#collapse-btn').ariaExpanded) {
        document.querySelector('#alert-container').style.top = '135px'
        document.querySelector('#alert-container-sm').style.top = '54px'
    }
    if (document.querySelector('#collapse-btn').classList.contains('collapsed')) {
        document.querySelector('#alert-container').style.top = '54px'
        document.querySelector('#alert-container-sm').style.top = '54px'
    }
})

// Close the legend container 
document.querySelector('.btn-close-legend').addEventListener('click', function () {
    document.querySelector('#legend-container').style.maxHeight = 0;
    document.querySelector('#legend-container').style.overflow = 'hidden';
    document.querySelector('#legend-container').classList.remove('p-5');
    document.querySelector('.btn-close-legend').classList.remove('mb-4');
    document.querySelector('#legend-container-row').classList.remove('gy-4');
})

// Adjust height of navigation expansion in small screen 
document.querySelector('#legend-icon').addEventListener('click', function () {

    // Close the search result container if opened
    document.querySelector('#expand-search-navigation-sm').style.height = 0;

    // Open/Close the legend container 
    if (document.querySelector('#expand-legend-navigation-sm').style.height != '222px') {
        document.querySelector('#expand-legend-navigation-sm').style.height = '222px'
    } else {
        document.querySelector('#expand-legend-navigation-sm').style.height = 0
    }
})

document.querySelector('#search-icon').addEventListener('click', function () {

    // Close the legend container if opened
    document.querySelector('#expand-legend-navigation-sm').style.height = 0

    // Open/Close the search result container
    if (document.querySelector('#expand-search-navigation-sm').style.height != '222px') {
        document.querySelector('#expand-search-navigation-sm').style.height = '222px'
    } else {
        document.querySelector('#expand-search-navigation-sm').style.height = 0
    }

    // Remove the red circular icon on top right of search navigation bar 
    document.querySelector('.result-alert').classList.add('d-none')
})

// Toggle back to landing page 
document.querySelector('#home-icon').addEventListener('click', function () {

    // Set input value to null for search input and button in landing page to run properly
    document.querySelector('#map-search-input').value = null

    // Hide map and display landing page 
    document.querySelector('#landing').style.height = '100vh';
    document.querySelector('#map-container').style.height = 0
    document.querySelector('#map-container').style.overflow = 'hidden'

    // Hide table when displaying landing page 
    document.querySelector('table').classList.remove('d-sm-table');
    document.querySelector('#toggle').classList.remove('d-sm-flex');

    // Hide legend when displaying landing page 
    document.querySelector('#legend-container').style.maxHeight = 0;
    document.querySelector('#legend-container').style.overflow = 'hidden';
    document.querySelector('#legend-container').classList.remove('p-5')
})

document.querySelector('#search-home-btn').addEventListener('click', function () {

    // Set input value to null for search input and button in landing page to run properly
    document.querySelector('#map-search-input').value = null

    // Hide map and display landing page
    document.querySelector('#landing').style.height = '100vh';
    document.querySelector('#map-container').style.height = 0
    document.querySelector('#map-container').style.overflow = 'hidden'

    // Hide table when displaying landing page
    document.querySelector('table').classList.remove('d-sm-table');
    document.querySelector('#toggle').classList.remove('d-sm-flex');

    // Hide legend when displaying landing page 
    document.querySelector('#legend-container').style.maxHeight = 0;
    document.querySelector('#legend-container').style.overflow = 'hidden';
    document.querySelector('#legend-container').classList.remove('p-5')
})
