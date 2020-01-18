// Buatlah sebuah fungsi yang membuat deret bilangan dengan ketentuan sebagai berikut:
// a. Menerima parameter berupa x dan y yang bertipe data            number dengan syarat x > y
// b. Ax = y adalah bilangan pertama dari deret bilangan             tersebut
// c. Untuk bilangan-bilangan berikutnya bernilai
//      Ax+1 = Ax2 mod x, 
//      Ax+2 = Ax+12 mod (x+1),
//      dst.
// d. Deret ini akan berakhir jika ditemukan angka 0 atau 1
// e. Contohnya jika x = 5 dan y = 3, maka 3 bilangan pertama        adalah 
//      A5 = 3, 
//      A6 = 32 mod 5 = 4,
//      A7 = 42 mod 6 = 4, dst.
// f. Memberikan keluaran berupa array yang berisi deret             bilangan dengan ketentuan yang telah diberikan dan             panjang deret bilangan tersebut.


// Input        : sequence(5,3)
// Output       : array : [3, 4, 4, 2, 4, 7, 9, 4, 4, 3, 9, 6, 4, 16, 4, 16, 16, 4, 16, 3, 9, 6,                              10, 19, 25, 16, 16, 8, 0]
//                count    : 29

// Input        : sequence(16,5)
// Output       : array : [5, 9, 13, 7, 11, 1]
//                count    : 6

// Input        : sequence(3,5)
// Output       : parameter x harus lebih besar dibanding y


//=====================================================================================

function sequence(x,y){
    
    // jika x lebih kecil dari y, maka
    if (x < y){
        // tampilkan pesan Parameter x harus lebih besar dibanding y
        return 'Parameter x harus lebih besar dibanding y'
    }

    // jika x lebih besar dari y, maka
    if (x > y){
        // assign var hasil = [y], dan var i = 0
        var hasil = [y];
        var i = 0;

        // jika hasil terakhir lebih besar dari 1, maka ulangi terus proses nya
        while(hasil[hasil.length -1] > 1){
            // jika hasil akhir belum 1 atau 0, maka tambahkan 1 nilai ke index paling belakang
            hasil.push((hasil[i]**2) % (x+i));
            // jumlahkan i tambah 1
            i += 1;
        }
        // tampilkan hasil dengan format ini.
        return('array: [' + hasil + ']\n' + 'count: ' + hasil.length);
    }
}

console.log(sequence(2,4));
//Parameter x harus lebih besar dibanding y

console.log(sequence(5,3));
//array: [3,4,4,2,4,7,9,4,4,3,9,6,4,16,4,16,16,4,16,3,9,6,10,19,25,16,16,8,0]
//count: 29

console.log(sequence(16,5));
//array: [5,9,13,7,11,1]
//count: 6

console.log(sequence(3,5));
//Parameter x harus lebih besar dibanding y
