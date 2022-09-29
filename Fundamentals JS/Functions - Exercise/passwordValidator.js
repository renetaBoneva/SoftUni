function passwordValidator(password) {

    let passwordL = password.length;
    let digitCount = 0;
    let isLetterAndDigits = false;
    let isValid = true;

    if (passwordL < 6 || passwordL > 10) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }
    for (let i = 0; i < passwordL; i++) {
        let charNum = password.charCodeAt(i);
        if (charNum >= 48 && charNum <= 57) {
            digitCount++;
        }
        if (charNum < 48 || (charNum > 57 && charNum < 65) || 
                (charNum > 90 && charNum < 97) || (charNum > 122)) {
            isLetterAndDigits = true;
            isValid = false;
        }
    }
    if(isLetterAndDigits){        
        console.log('Password must consist only of letters and digits');
    }
    if (digitCount < 2) {
        console.log('Password must have at least 2 digits');
        isValid = false
    }
    if (isValid) {
        console.log('Password is valid');
    }

}
passwordValidator('Pa$s$s')