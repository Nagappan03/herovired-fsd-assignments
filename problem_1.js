function convertYear(year){
    if(year == 00){
        let newFormattedYear = '20' + year + '0';
        console.log('Formatted year is ' + newFormattedYear);
    } else if(year > 0 && year < 10){
        let newFormattedYear = '200' + year;
        console.log('Formatted year is ' + newFormattedYear);
    } else if(year >= 10 && year < 35){
        let newFormattedYear = '20' + year;
        console.log('Formatted year is ' + newFormattedYear);
    } else if(year >= 35 && year <= 99){
        let newFormattedYear = '19' + year;
        console.log('Formatted year is ' + newFormattedYear);
    } else {
        console.log('Please enetr a valid two digit number between 00 and 99');
    }
}

convertYear(10);