// Buatlah sebuah fungsi untuk menghitung jumlah kata dalam satu kalimat dan pastikan    bahwa yang diinput adalah sebuah kata
// Input 1     : cek_kata(“ini adalah sebuah kata”)
// Output 1    : 4/4    

// Input 2     : cek_kata(“2 pasang sandal hilang”)
// Output 2    : 3/4

// Input 3     : cek_kata(33)
// Output 3    : "Parameter harus string!"

// ==================================================================================

function cek_kata(str){
    
    // regex untuk cari angka 0-9
    var reg = /[0-9]/g;
    // tes regex ke parameter str, untuk mendapatkan hasil true/false
    var cek = reg.test(str);
    // deklarasi variabel arr, angka, huruf dan panjang untuk menampung data yang diolah
    var arr;
    var angka = [];
    var huruf = [];
    var panjang;
    
    // jika tipedata str = string, maka
    if (typeof(str) === 'string'){
        // convert arr ke array
        arr = str.split(' ');
        // jika cek = true, maka
        if (cek){
            // i, ulangi dan tambahkan 1 sampai i lebih besar dari panjang arr
            for (var i = 0; i < arr.length; i++){
                // jika indeks arr dari value i, match dengan angka 0-9, maka
                if (arr[i].match(/[0-9]/)){
                    // tambahkan data dari indeks arr[i] kedalam variabel angka
                    angka.push(arr[i]);
                // jika tidak,
                }else{
                // tambahkan data dari indeks arr[i] kedalam variabel huruf
                huruf.push(arr[i]);
                }
                
            }
            // tampung value panjang huruf dan arr kedalam variabel panjang
            panjang = huruf.length + '/' + arr.length;
            //tampilkan hasil panjang
            return panjang;
        
        // jika tidak ada angka, maka
        }else{
            // langsung tampilkan hasil panjang arr.
            return arr.length + '/' + arr.length;
        }
    
    // jika value dari arr tipe datanya int, maka
    }else{
        // tampilkan pesan Parameter harus string
        return 'Parameter harus string!'
    }


}

console.log(cek_kata('ini adalah sebuah kata'));
// 4/4
console.log(cek_kata('2 pasang sandal hilang'));
// 3/4
console.log(cek_kata('satu dua tiga 4 lima enam tujuh'))
// 6/7
console.log(cek_kata('satu dua tiga 4 lima enam 7'))
// 5/7
console.log(cek_kata(33));
// parameter harus string.