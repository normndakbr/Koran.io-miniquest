function passwordVerifier(password) {
    const symbol = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+']
    const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let symbolCounter = 0
    let numberCounter = 0
    let lowercaseCounter = 0
    let uppercaseCounter = 0
    let duplicateCounter = 0

    for (let i = 0; i < password.length; i++) {
        for (let j = 0; j < symbol.length; j++) {
            if (password[i] == symbol[j]) {
                symbolCounter++
            }
        }
        for (let j = 0; j < number.length; j++) {
            if (password[i] == number[j]) {
                numberCounter++
            }
        }
        for (let j = 0; j < uppercase.length; j++) {
            if (password[i] == uppercase[j]) {
                uppercaseCounter++
            }
        }
        for (let j = 0; j < lowercase.length; j++) {
            if (password[i] == lowercase[j]) {
                lowercaseCounter++
            }
        }
        for (let j = 0; j < password.length; j++) {
            if (password[i] == password[j]) {
                duplicateCounter++
            }
        }
        if (duplicateCounter - 1 < 2) {
            duplicateCounter = 0
        }
    }

    if(password.length <=10 || password.length >20){
        console.log("Password must have at least 10 characters and below 20 characters");
    }else if (symbolCounter < 1) {
        console.log("Your password must have at least one of these symbols ( @ # $ % ^ & * ( ) _ + ) ")
    } else if (numberCounter < 2) {
        console.log("Your password must have at least 2 numbers")
    } else if (lowercaseCounter < 5) {
        console.log("Your password must have at least 5 lowercase letter")
    } else if (uppercaseCounter < 2) {
        console.log("Your password must have at least 2 uppercase letter")
    } else if (duplicateCounter > 2) {
        console.log("Duplicate character only allowed twice")
    } else {
        console.log("Strong Password");
    }
}

passwordVerifier('GoW0gle12#4dd')
passwordVerifier('17FebruAri2021!$%')
passwordVerifier('Lar1P4g!')
passwordVerifier('KompasS1702!@')
passwordVerifier('B4nD3R Ja!Luio874kshje$*#')
// 17Februari2021! -> Salah karena angka 2 berulang lebih dari 2x
// Lar1P4g! -> Salah karena kurang dari 10 karakter
// Kompas1702! -> benar
// B4nD3R Ja!L -> benar
