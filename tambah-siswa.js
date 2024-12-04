const daftarSiswa = getData("daftarSiswa") ?? [];


function getData (Key) {
   return JSON.parse(localStorage.getItem(Key)); 
}

function setData (Key,Data) {
    return localStorage.setItem(Key,JSON.stringify(Data));
}

const tambahSiswa = () => {
    const nis = document.getElementById('nis').value
    const nama = document.getElementById('nama').value
    const kelas = document.getElementById('kelas').value
    const jenKel = document.getElementById('jenKel').value
    const noHp = document.getElementById('noHp').value
   
    const id = daftarSiswa.length ? daftarSiswa[daftarSiswa.length - 1].id + 1 : 1;
    const siswaBaru = {
        id,
        nis : nis,
        nama : nama,
        kelas : kelas,
        jenKel : jenKel,
        noHp : noHp,
    }

    daftarSiswa.push(siswaBaru);
    setData("daftarSiswa",daftarSiswa);

    const daftarTabungan = getData("daftarTabungan") || [];

    document.getElementById('nis').value = ""
    document.getElementById('nama').value = ""
    document.getElementById('kelas').value = ""
    document.getElementById('jenKel').value = ""
    document.getElementById('noHp').value = ""

    window.location.href = "data-siswa.html";
}

const cancel = () => {
    document.getElementById('nis').value = "";
    document.getElementById('nama').value = "";
    document.getElementById('kelas').value = "";
    document.getElementById('jenKel').value = "";
    document.getElementById('noHp').value = "";
}

