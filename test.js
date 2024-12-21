// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
/*test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});*/

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expectedDollars = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(dollars).toBe(expectedDollars); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 146.26 Yen", function() {  
    const { fromDollarToYen } = require('./app.js');  
    const Yen = fromDollarToYen(3.5);   
    const expectedYen = 3.5 * 146.26;     
   expect(Yen).toBe(expectedYen); 
})

test("One Poun should be 0.00556 Yen", function() {  
    const { fromYenToPound } = require('./app.js');  
    const Pound = fromYenToPound(3.5);   
    const expectedPound = 3.5 * 0.00556;     
   expect(Pound).toBe(expectedPound); 
})