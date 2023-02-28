// VARIABLES

let miles;
let gallons;
let mpg;
let again = 'y';

do {
        miles = parseFloat(prompt('Enter the number of miles driven'));
        gallons = parseFloat(prompt('Enter the gallon capacity of your vehicle'));
        if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons >0) {
            mpg = miles/gallons;
            console.log(`Your vehicle gets ${mpg.toFixed(2)} miles per gallon.`);
        } else {
            alert('One or both of your entries are invalid');
        } 
        
        do {
         again = prompt('Do you want to run this application again? (y/n)', 'y');
            if(again !== 'y' || again !== 'n'){
                alert('Please, check your entry. Only \'y\' and \'n\' are accepted');
            } else {
                break;
            }
        } while(true);
       
    //     if (again !== 'y' || again !== 'n') {
    //         again = prompt('Do you want to run this application again? (y/n)', 'y');
    //         break;
    //     } else {
    //         again = prompt('Do you want to run this application again? (y/n)', 'y');
    //     }
    // }
        } while (again === 'y');

console.log('Application has ended');