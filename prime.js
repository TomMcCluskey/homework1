function prime(number) {
    var divisor = 2;
    for (var max = number; max >= divisor; divisor++) {
        if(number % divisor == 0) {
            console.log(number + ' is not prime; it is divisible by ' + divisor);
            return false;
        }
        max = Math.floor(number/divisor);
    }
    console.log(number + ' is prime!')
    return true
}