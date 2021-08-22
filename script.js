//Button Satu mengubah semua warna tag P
const buttonSatu = document.getElementById('buttonSatu');
const semuaParagraph = document.getElementsByTagName('p');

buttonSatu.addEventListener('click', ()=>{
    for(let i = 0; i <= semuaParagraph.length; i++){
        semuaParagraph[i].style.backgroundColor = 'aquamarine';
    }
})


//Button Dua mengubah background color dan warna text button "Dua"
const buttonDua = document.getElementById('buttonDua');

buttonDua.addEventListener('click', ()=>{
    const ubahWarna = document.querySelector('#c ul li:nth-child(2) button');
    ubahWarna.style.backgroundColor = 'black';
    ubahWarna.style.color = 'yellow';
})


//Button Tiga mengubah font-family dan warna text semua paragraph
const buttonTiga = document.getElementById('buttonTiga');

buttonTiga.addEventListener('click', ()=>{    
    for(let i = 0; i <= semuaParagraph.length; i++){
        semuaParagraph[i].style.fontFamily = 'Times New Roman'
        semuaParagraph[i].style.color = 'darkviolet'
    }
})


//Button Empat mengubah font-size tag P
const buttonEmpat = document.getElementById('buttonEmpat');

buttonEmpat.addEventListener('click', ()=>{
    for(let i = 0; i <= semuaParagraph.length; i++){
        semuaParagraph[i].style.fontSize = 'large';
    }
})


//Button Lima mengubah container bg color
const buttonLima = document.getElementById('buttonLima');

buttonLima.addEventListener('click', ()=>{
    const ubahWarnaContainer = document.getElementById('container');
    ubahWarnaContainer.style.backgroundColor = 'orange';
})


//Button Enam mengubah tag P class p1 jadi H2
const buttonEnam = document.getElementById('buttonEnam');
const sectionA = document.getElementById('a');

buttonEnam.addEventListener('click', ()=>{
    const h2 = document.createElement('h2');
    const textH2 = document.createTextNode('selamat datang di dojobox.id');

    h2.appendChild(textH2);

    const p1 = sectionA.querySelector('p');

    sectionA.replaceChild(h2, p1);
})


//Button Tujuh untuk menambahkan satu nama mentor baru dan menghapus nama mentor pertama
const buttonTujuh = document.getElementById('buttonTujuh');

buttonTujuh.addEventListener('click', ()=>{
    const listMentorBaru = document.createElement('li');
    const namaMentorBaru = document.createTextNode('Yasifa');
    
    listMentorBaru.appendChild(namaMentorBaru);
    
    const lokasiList = document.querySelector('#b ul');

    lokasiList.appendChild(listMentorBaru);

    const hapusMentor1 = document.querySelector('#b ul li:nth-child(1)');

    lokasiList.removeChild(hapusMentor1);
})


//Button Delapan untuk mengganti text judul "DOOJOBOX.id" menjadi "Post Test"
const buttonDelapan = document.getElementById('buttonDelapan');

buttonDelapan.addEventListener('click', ()=>{
    const judul = document.getElementById('judul');
    judul.innerHTML = 'Post Test'
})


//Button Sembilan untuk menghapus link
const buttonSembilan = document.getElementById('buttonSembilan');

buttonSembilan.addEventListener('click', ()=>{
    const hapusElement = document.getElementsByTagName('a')[0];
    sectionA.removeChild(hapusElement);
})


//Button Sepuluh untuk menambah link ke github
const buttonSepuluh = document.getElementById('buttonSepuluh');

buttonSepuluh.addEventListener('click', ()=>{
    const elementBaru = document.createElement('a');
    const teksElement = document.createTextNode('Akun Github');
    
    elementBaru.setAttribute('href', 'https://github.com/myrizkyprasetya');
    
    elementBaru.appendChild(teksElement);

    const lokasiElementBaru = document.querySelector('#a');

    lokasiElementBaru.appendChild(elementBaru);
})
