// Pada sebuah form, terdapat 2 buah field yaitu: Username dan Password. Buatlah method/function untuk memvalidasi field-field tersebut, dengan requirement sebagai berikut:
// ●       Disarankan menggunakan REGEX
// Format Username:  Username harus diawali huruf kecil, tidak boleh menggunakan special character kecuali ‘_’, minimal 5 karakter dan maksimal 12 karakter
// ●       Format Password: merupakan 7 digit karakter dengan kombinasi 1 simbol, 1 angka dan 5 huruf besar.
// Clue:
// Peserta hanya diminta membuat function validasi, tidak boleh membuat form HTML.
// Examples:
// -       usernameValidity(“fiona_mareta”)
//     return true
// -       usernameValidity("fionamareta99”)
//     return false
// -       passwordValidity(“FIONA-mareta”)
//     return true

// ====================================================================================


function validasiUsername(username){

    // regular expression untuk mencari huruf a-z
    var checkUsr1 = /[a-z_]/g; 
    // regular expression untuk mencari huruf A-Z dan symbol selain _
    var checkUsr2 = /[A-Z!@#$%&*]/g; 
    // jika checkUsr1 = true dan checkUsr2 = true, maka 
    if (checkUsr1.test(username) && checkUsr2.test(username)){
    // tampilkan false 
        return false;
    // jika panjang username kurang dari 5 atau lebih dari 12 maka 
    }else if(username.length < 5 || username.length > 12){ 
    // tampilkan false
        return false; 
    // jika tidak ada yang cocok
    } 
    // tampilkan true
    return true; 
}

function validasiPassword(pass){
    // regular expression untuk mencari symbol
    var symbol = /[!@#$%&_-]/g;
    // regular expression untuk mencari angka 
    var angka = /[0-9]/;        
    // regular expression untuk mencari huruf A-Z
    var huruf = /[A-Z]/g;      
    // jika symbol = true dan angka = true dan huruf = true & panjang password >= 7 maka
    if (symbol.test(pass) && angka.test(pass) && huruf.test(pass) && pass.length >= 7){
        // tampilkan true 
        return true;
    }
    // jika tidak ada yg cocok maka tampilkan false
    return false;
}

console.log(validasiUsername('fiona_mareta')); 
// true
console.log(validasiUsername('fionamareta99'));
//false
console.log(validasiUsername('FIONA-mareta'));
//false
console.log(validasiPassword('1WORLD!'));
//true


