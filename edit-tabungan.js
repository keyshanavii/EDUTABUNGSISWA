const daftarSiswa = [
    {
        nis: "11111111",
        nama: "Keysha Navi'azkiya",
        kelas: "XI RPL 1",
        jenKel: "Perempuan",
        noHp: "081234567890",
    },
    {
        nis: "22222222",
        nama: "Aiswatun Kholifah",
        kelas: "XI RPL 1",
        jenKel: "Perempuan",
        noHp: "082345678901",
    },
    {
        nis: "3333333",
        nama: "Muhammad Fakhri Bintang Pratama",
        kelas: "XI RPL 1",
        jenKel: "Laki-Laki",
        noHp: "083456789012",
    },
]

let mode = 'tambah'
// READ
// arrow function
const tampilkanSiswa = () => {
    // mengakses dom
    const tblSiswa = document.getElementById('tblSiswa')

    // tblSiswa.innerHTML = "<tr> <th>No</th> <th>NIS</th> <th>Nama</th> <th>Kelas</th> <th>No. Telepon</th> <th>Saldo</th> <th>Edit</th> <th>Hapus<th> </tr>";
    // for (let i in daftarSiswa){
    //     tblSiswa.innerHTML += `<tr> <td>${parseInt(i)+1}</td> <td>${daftarSiswa[i].nis}</td> <td>${daftarSiswa[i].nama}</td> <td>${daftarSiswa[i].kelas}</td> <td>${daftarSiswa[i].noHp}</td> <td>${daftarSiswa[i].saldo}</td> <td><button type="button" class="btn btn-warning" onclick = "editSiswa('${daftarSiswa[i].nis}')">Edit</button></td> <td><button type="button" class="btn btn-danger" onclick = "hapusSiswa('${daftarSiswa[i].nis}')">Delete</button> </td> </tr>`
    // }
}
tampilkanSiswa()

// CREATE
const tambahSiswa = () => {
    const kodeTab = document.getElementById('kodeTab').value
    const nama = document.getElementById('nama').value
    const kelas = document.getElementById('kelas').value
    const tanggal = document.getElementById('tanggal').value
    const saldo = document.getElementById('saldo').value
    const siswaBaru = {
        kodeTab: kodeTab,
        nama: nama,
        kelas: kelas,
        tanggal: tanggal,
        saldo: saldo,
    }

    // jika tambah 
    if (mode == 'tambah') {
        daftarSiswa.push(siswaBaru)
    } else {
        // jika edit
        daftarSiswa[mode] = siswaBaru
    }
    document.getElementById('kodeTab').value=""
    document.getElementById('nama').value=""
    document.getElementById('kelas').value=""
    document.getElementById('tanggal').value=""
    document.getElementById('saldo').value=""

    simpanSiswaKeLocalStorage();
    
    mode = 'tambah'
    tampilkanSiswa()
}

// CARI atau MENENTUKAN
const cariIndex = (nama) => {
    for(let i=0; i < daftarSiswa.length; i++){
        if(daftarSiswa[i].nama === nama){
            return i;
        }
    }
    return -1;
}

// DELETE
const hapusSiswa = (target) => {
    const indexDihapus = cariIndex(target);
    if (indexDihapus !== -1){
        daftarSiswa.splice(indexDihapus, 1);
        tampilkanSiswa()
    }
}

// EDIT
const editSiswa = (target) => {
    const indexEdit = cariIndex(target);
    const siswaDiedit = daftarSiswa[indexEdit];

    document.getElementById('kodeTab').value = siswaDiedit.kodeTab;
    document.getElementById('nama').value = siswaDiedit.nama;
    document.getElementById('kelas').value = siswaDiedit.kelas;
    document.getElementById('tanggal').value = siswaDiedit.tanggal;
    document.getElementById('saldo').value = siswaDiedit.saldo;

    console.log(target);
    console.log(indexEdit);
    console.log(daftarSiswa[indexEdit]);

    mode = indexEdit;

}

const cancel = (target) => {
    document.getElementById('kodeTab').value=""
    document.getElementById('nama').value=""
    document.getElementById('kelas').value=""
    document.getElementById('tanggal').value=""
    document.getElementById('saldo').value=""
    mode = 'tambah'
}

const simpanSiswaKeLocalStorage = () => {
    localStorage.setItem('daftarSiswa',  JSON.stringify(daftarSiswa));
}

const ambilSiswaDariLocalStorage = () => {
    const data = localStorage.getItem('daftarSiswa');
    if (data) {
        return JSON.parse(data);
    }
    return [];
} 

window.onload = () => {
    daftarSiswa.push(...ambilSiswaDariLocalStorage());
    tampilkanSiswa();
}