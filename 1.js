// Buatlah sebuah method/function yang menerima dua parameter yakni String (untuk nama) dan angka (untuk umur) lalu me-return biodata asli Anda, dengan ketentuan sebagai berikut:
// name (String, diambil dari parameter pertama)
// age (Number, diambil dari parameter ke dua)
// address (String)
// hobbies (Array)
// is_married (Boolean)
// list_school (Array of Object) with key name, year_in, year_out, and major (if any, if no set “null” )
// skills (Array of Obj) with key skill_name and level (beginner, advanced, expert)
// interest_in_coding (Boolean)
//     Return value harus berformat JSON dan sesuai ketentuan di atas.
// Pada readme sebutkan kegunaan JSON pada REST API.
// Berikut adalah contoh dari JSON format: https://api.bukalapak.com/v2/products/f3vi.json

//====================================================================================

function Biodata(nama, umur){
    
    return {
        name: nama,
        age: umur,
        address: 'JL. TGK ABD RAHMAN NO.36 A DUSUN BUNGONG JEUMPA',
        hobbies: ['Coding', 'Membaca', 'Musik', 'Sepak Bola', 'Futsal', 'Riding'],
        is_married: false,
        list_school: [
            {'name' : 'TK-Kartika Banda Aceh',         'year_in' : 2003, 'year_out' : 2004, 'major' : null},
            {'name' : 'MIN Teladan Banda Aceh',        'year_in' : 2004, 'year_out' : 2010, 'major' : null},
            {'name' : 'SMPN 7 Banda Aceh',             'year_in' : 2010, 'year_out' : 2013, 'major' : null},
            {'name' : 'SMAN 9 Tunas Bangsa Banda Aceh','year_in' : 2013, 'year_out' : 2016, 'major' : 'IPA'}            
        ],
        skills: [
            {'skill_name' : 'HTML',      'level' : 'advanced'},
            {'skill_name' : 'CSS',       'level' : 'advanced'},
            {'skill_name' : 'JAVASCRIPT','level' : 'beginner'},
            {'skill_name' : 'JAVA',      'level' : 'beginner'},
            {'skill_name' : 'PHP',       'level' : 'beginner'},
            {'skill_name' : 'PYTHON',    'level' : 'beginner'}
        ],
        interest_in_coding: true
    };
}

console.log(Biodata('Teuku Rizky Meutuah Ariefansyah', 21));