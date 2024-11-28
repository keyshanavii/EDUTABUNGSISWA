const daftarSiswa = [
    {
        nis : '1111',
        nama : 'Re Dirgantara',
        kelas : 'XI RPL 1',
        jenKel : 'Laki-laki',
        noHp : '089455390909'
    },
    {
        nis : '2222',
        nama : 'Kalypso Dirgantari',
        kelas : 'XI RPL 1',
        jenKel : 'Perempuan',
        noHp : '089455390909'
    },
    {
        nis : '3333',
        nama : 'Kenan Aditya',
        kelas : 'XI RPL 1',
        jenKel : 'Laki-laki',
        noHp : '089455390909'
    },
    {
        nis : '4444',
        nama : 'Adinda Aletheia',
        kelas : 'XI RPL 1',
        jenKel : 'Perempuan',
        noHp : '089455390909'
    },
    {
        nis : '5555',
        nama : 'Aurora Calista',
        kelas : 'XI RPL 1',
        jenKel : 'Perempuan',
        noHp : '089455390909'
    },
]

let mode = 'tambah';

const tampilkanSiswa = (filter = '') => {
    const tblSiswa = document.getElementById('tblSiswa')
    tblSiswa.innerHTML = "<tr> <th>No</th> <th>NIS</th> <th>Nama</th> <th>Kelas</th> <th>Jenis Kelamin</th> <th>No. Telepon</th> <th>Edit</th> <th>Hapus<th> </tr>";
    for (let i in daftarSiswa){
        if (daftarSiswa[i].nis.includes(filter)){
        tblSiswa.innerHTML += `<tr> <td>${parseInt(i)+1}</td> <td>${daftarSiswa[i].nis}</td> <td>${daftarSiswa[i].nama}</td> <td>${daftarSiswa[i].kelas}</td> <td>${daftarSiswa[i].jenKel}</td> <td>${daftarSiswa[i].noHp}</td> <td><button type="button" class="btn btn-warning" onclick = "editSiswa('${daftarSiswa[i].nis}')">Edit</button></td> <td><button type="button" class="btn btn-danger" onclick = "hapusSiswa('${daftarSiswa[i].nis}')">Delete</button>
</td> </tr>`
        }
    }
}

const tambahSiswa = () => {
    const nis = document.getElementById('nis').value
    const nama = document.getElementById('txtNama').value
    const kelas = document.getElementById('kelasSiswa').value
    const jenKel = document.getElementById('jenKel').value
    const noHp = document.getElementById('noTelp').value
   
    const siswaBaru = {
     nis : nis,
     nama : nama,
     kelas : kelas,
     jenKel : jenKel,
     noHp : noHp
    }

    if (mode == 'tambah'){
        daftarSiswa.push(siswaBaru)
    } else {
        daftarSiswa[mode] = siswaBaru;
    }

    document.getElementById('nis').value = ""
    document.getElementById('txtNama').value = ""
    document.getElementById('kelasSiswa').value = ""
    document.getElementById('jenKel').value = ""
    document.getElementById('noTelp').value = ""

    mode = 'tambah';

    tampilkanSiswa()
}

const cariIndex = (nis) => {
    for (let i = 0; i < daftarSiswa.length; i++){
        if (daftarSiswa[i].nis === nis){
            return i;
        }
    }
    return -1;
}

const hapusSiswa = (target) => {
    const index = cariIndex(target);
    if (index !== -1){
        daftarSiswa.splice(index, 1)
        tampilkanSiswa()
        console.log('Dihapus');}
}

const editSiswa = (target) => {
    const indexEdit = cariIndex(target);
    const siswaDiedit = daftarSiswa[indexEdit];
    document.getElementById('nis').value = siswaDiedit.nis;
    document.getElementById('txtNama').value = siswaDiedit.nama;
    document.getElementById('kelasSiswa').value = siswaDiedit.kelas;
    document.getElementById('jenKel').value = siswaDiedit.jenKel;
    document.getElementById('noTelp').value = siswaDiedit.noHp;

    mode = indexEdit;


    console.log(target)
    console.log(indexEdit)

    console.log(daftarSiswa[indexEdit])
    
}

const cancel = (target) => {
    document.getElementById('nis').value = ""
    document.getElementById('txtNama').value = ""
    document.getElementById('kelasSiswa').value = ""
    document.getElementById('jenKel').value = ""
    document.getElementById('noTelp').value = ""
    mode = 'tambah'
}

document.querySelector('form[role="search"]').addEventListener('submit', function (event){
    event.preventDefault();
    const searchValue = this.querySelector('input[type="search"]').value
    tampilkanSiswa(searchValue);
});

window.onload = tampilkanSiswa();