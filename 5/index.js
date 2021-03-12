function passwordVerifier(password) {
    const symbol = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+']
    const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let symbolCounter = 0
    let numberCounter = 0
    let lowercaseCounter = 0
    let uppercaseCounter = 0

    for(let i = 0 ; i < password.length; i++) {
        for(let j = 0 ; j < symbol.length; j++) {
            if(password[i] == symbol[j]){
                symbolCounter++
            }
        }
        for(let j = 0 ; j < number.length; j++) {
            if(password[i] == number[j]){
                numberCounter++
            }
        }
    }

    console.log(numberCounter);
}

passwordVerifier('njsldak584ew9ion@!j')