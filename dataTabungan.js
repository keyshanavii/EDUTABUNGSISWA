const daftarTabungan = [
    {
        kodeTab : '1234',
        nis : '1111',
        nama : 'Re Dirgantara',
        kelas : 'XI RPL 1',
        tanggal : '12/2/2024',
        saldo: 'Rp500.000,00'
    },
    {
        kodeTab : '2345',
        nis : '2222',
        nama : 'Kalypso Dirgantari',
        kelas : 'XI RPL 1',
        tanggal : '12/2/2024',
        saldo: 'Rp150.000,00'
    },
    {
        kodeTab : '3456',
        nis : '3333',
        nama : 'Kenan Aditya',
        kelas : 'XI RPL 1',
        tanggal : '12/2/2024',
        saldo: 'Rp300.000,00'
    },
    {
        kodeTab : '4567',
        nis : '4444',
        nama : 'Adinda Aletheia',
        kelas : 'XI RPL 1',
        tanggal : '12/2/2024',
        saldo: 'Rp200.000,00'
    },
    {
        kodeTab : '5678',
        nis : '5555',
        nama : 'Aurora Calista',
        kelas : 'XI RPL 1',
        tanggal : '12/2/2024',
        saldo: 'Rp750.000,00'
    },
]

let mode = 'tambah';

const tampilkanTabungan = (filter = '') => {
    const tblTabungan = document.getElementById('tblTabungan')
    tblTabungan.innerHTML = "<tr> <th>No</th> <th>Kode Tabungan</th> <th>NIS</th> <th>Nama</th> <th>Kelas</th> <th>Tanggal</th> <th>Saldo</th> <th>Edit</th> <th>Hapus<th> </tr>";
    for (let i in daftarTabungan){
        if (daftarTabungan[i].nis.includes(filter)){
        tblTabungan.innerHTML += `<tr> <td>${parseInt(i)+1}</td> <td>${daftarTabungan[i].kodeTab}</td> <td>${daftarTabungan[i].nis}</td> <td>${daftarTabungan[i].nama}</td> <td>${daftarTabungan[i].kelas}</td> <td>${daftarTabungan[i].tanggal}</td> <td>${daftarTabungan[i].saldo}</td> <td><button type="button" class="btn btn-warning" onclick = "editTabungan('${daftarTabungan[i].nis}')">Edit</button></td> <td><button type="button" class="btn btn-danger" onclick = "hapusTabungan('${daftarTabungan[i].nis}')">Delete</button>
</td> </tr>`
        }
    }
}

const tambahTabungan = () => {
    const kodeTab = document.getElementById('kodeTab').value
    const nis = document.getElementById('nis').value
    const nama = document.getElementById('txtNama').value
    const kelas = document.getElementById('kelasSiswa').value
    const tanggal = document.getElementById('tanggal').value
    const saldo = document.getElementById('saldo').value
   
    const tabunganBaru = {
        kodeTab : kodeTab,
        nis : nis,
        nama : nama,
        kelas : kelas,
        tanggal : tanggal,
        saldo : saldo,
    }

    if (mode == 'tambah'){
        daftarTabungan.push(tabunganBaru)
    } else {
        daftarTabungan[mode] = tabunganBaru;
    }

    document.getElementById('kodeTab').value = ""
    document.getElementById('nis').value = ""
    document.getElementById('txtNama').value = ""
    document.getElementById('kelasSiswa').value = ""
    document.getElementById('tanggal').value = ""
    document.getElementById('saldo').value = ""

    mode = 'tambah';

    tampilkanTabungan()
}

const cariIndex = (nis) => {
    for (let i = 0; i < daftarTabungan.length; i++){
        if (daftarTabungan[i].nis === nis){
            return i;
        }
    }
    return -1;
}

const hapusTabungan = (target) => {
    const index = cariIndex(target);
    if (index !== -1){
        daftarTabungan.splice(index, 1)
        tampilkanTabungan()
        console.log('Dihapus');}
}

const editTabungan = (target) => {
    const indexEdit = cariIndex(target);
    const tabunganDiedit = daftarTabungan[indexEdit];
    document.getElementById('kodeTab').value = tabunganDiedit.kodeTab;
    document.getElementById('nis').value = tabunganDiedit.nis;
    document.getElementById('txtNama').value = tabunganDiedit.nama;
    document.getElementById('kelasSiswa').value = tabunganDiedit.kelas;
    document.getElementById('tanggal').value = tabunganDiedit.tanggal;
    document.getElementById('saldo').value = tabunganDiedit.saldo;

    mode = indexEdit;


    console.log(target)
    console.log(indexEdit)

    console.log(daftarTabungan[indexEdit])
    
}

const cancel = (target) => {
    document.getElementById('kodeTab').value = ""
    document.getElementById('nis').value = ""
    document.getElementById('txtNama').value = ""
    document.getElementById('kelasSiswa').value = ""
    document.getElementById('tanggal').value = ""
    document.getElementById('saldo').value = ""
    mode = 'tambah'
}

document.querySelector('form[role="search"]').addEventListener('submit', function (event){
    event.preventDefault();
    const searchValue = this.querySelector('input[type="search"]').value
    tampilkanTabungan(searchValue);
});

window.onload = tampilkanTabungan();