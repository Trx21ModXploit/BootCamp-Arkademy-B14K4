// Buatlah function untuk mencetak gambar seperti dibawah ini, yang mempunyai sebuah parameter sebagai panjang lebar/tinggi gambar. Parameter harus merupakan angka dan merupakan bilangan ganjil. Jika tidak maka akan keluar output "Parameter harus angka dan ganjil!"
// Input:
// cetak_gambar(5);
// Output:
// --- panjang ---


// *   =   =   =   *

// *   =   =   =   *

// *   *   *   *   *

// *   =   =   =   *

// *   =   =   =   *


// =================================================================================

function cetakGambar(num){

   // deklarasi variabel str, nilaiBulat untuk pembulatan value num kebawah suatu angka
   var str = '';
   var nilaiBulat = Math.floor(num/2);

   // jika parameter num mod 2 == 0, maka 
   if (num % 2 == 0){
       // tampilkan pesan Parameter harus bilangan ganjil!
       return 'Parameter harus bilangan ganjil!';
   }
   
   // i, ulangi dan tambahkan 1 sampai value i lebih besar dari num
   for (var i = 0; i < num; i++){
       // j, ulangi dan tambahkan 1 sampai value j lebih besar dari num
       for (var j = 0; j < num; j ++){
           //jika j = 0 atau i = nilaiBulat atau j = num -1, maka
           if (j == 0 || i == nilaiBulat || j == num - 1){
               // masukkan simbol bintang ke str sebanyak perulangan j
               str += '* ';
            // jika tidak ada yang cocok dengan kondisi if tadi, maka
           }else {
               // masukkan simbol equal ke str
               str += '= ';
           }
       }
       // tambahkan baris baru ke str
       str += '\n';
   }
   // tampilkan str
   return str;
}

console.log(cetakGambar(5));
// * = = = * 
// * = = = * 
// * * * * * 
// * = = = * 
// * = = = *

console.log(cetakGambar(2));
// Parameter harus bilangan ganjil!