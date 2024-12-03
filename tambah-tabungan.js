const daftarTabungan = getData("daftarTabungan") ?? [];


function getData (Key) {
   return JSON.parse(localStorage.getItem(Key)); 
}

function setData (Key,Data) {
    return localStorage.setItem(Key,JSON.stringify(Data));
}

const tambahTabungan = () => {
    const nama = document.getElementById('nama').value
    const nominal = document.getElementById('nominal').value
    const tanggal = document.getElementById('tanggal').value
   
    const id = daftarTabungan[daftarTabungan.length - 1]?.id + 1 || 1;
    const tabunganBaru = {
        id,
        nama : nama,
        nominal : nominal,
        tanggal : tanggal,
    }

    daftarTabungan.push(tabunganBaru);

    setData("daftarTabungan",daftarTabungan);

    document.getElementById('nama').value = ""
    document.getElementById('nominal').value = ""
    document.getElementById('tanggal').value = ""

    window.location.href = "data-tabungan.html";
}

const cancel = () => {
    document.getElementById('nama').value = "";
    document.getElementById('nominal').value = "";
    document.getElementById('tanggal').value = "";
}