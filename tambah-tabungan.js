const daftarTabungan = getData("daftarTabungan") ?? [];


function getData (Key) {
   return JSON.parse(localStorage.getItem(Key)); 
}

function setData (Key,Data) {
    return localStorage.setItem(Key,JSON.stringify(Data));
}

const tambahTabungan = () => {
    const kodeTab = document.getElementById('kodeTab').value
    const nis = document.getElementById('nis').value
    const nama = document.getElementById('nama').value
    const kelas = document.getElementById('kelas').value
    const tanggal = document.getElementById('tanggal').value
    const saldo = document.getElementById('saldo').value
   
    const id = daftarTabungan[daftarTabungan.length - 1]?.id + 1 || 1;
    const tabunganBaru = {
        id,
        kodeTab : kodeTab,
        nis : nis,
        nama : nama,
        kelas : kelas,
        tanggal : tanggal,
        saldo : saldo,
    }

    daftarTabungan.push(tabunganBaru);

    setData("daftarTabungan",daftarTabungan);

    document.getElementById('kodeTab').value = ""
    document.getElementById('nis').value = ""
    document.getElementById('nama').value = ""
    document.getElementById('kelas').value = ""
    document.getElementById('tanggal').value = ""
    document.getElementById('saldo').value = ""

    window.location.href = "data-tabungan.html";
}

const cancel = () => {
    document.getElementById('kodeTab').value = "";
    document.getElementById('nis').value = "";
    document.getElementById('nama').value = "";
    document.getElementById('kelas').value = "";
    document.getElementById('tanggal').value = "";
    document.getElementById('saldo').value = "";

}