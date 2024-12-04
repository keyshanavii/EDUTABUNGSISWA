const daftarSiswa = getData("daftarSiswa") ?? [];

//  const isiDropdownSiswa = () => {
//     const dropdownSiswa = document.getElementById('nama');
//     daftarSiswa.forEach(siswa => {
//         const option = document.createElement('option');
//         option.value = siswa.nama;
//         option.textContent = siswa.nama;
//         dropdownSiswa.appendChild(option);
//     })
// }
// isiDropdownSiswa();

window.onload = function(){
    const namaSelect = document.getElementById("nama");
    daftarSiswa.forEach(siswa => {
        const option = document.createElement("option");
        option.value = siswa.nis;
        option.textContent = siswa.nama;
        namaSelect.appendChild(option);
    })
}

document.getElementById("nama").addEventListener("change", function(){
    const selectedNIS = this.value;
    document.getElementById("nis").value = selectedNIS;
});

function getData (Key) {
   return JSON.parse(localStorage.getItem(Key)); 
}

function setData (Key,Data) {
    return localStorage.setItem(Key,JSON.stringify(Data));
}

const daftarTabungan = getData("daftarTabungan") ?? [];

const tambahTabungan = () => {
    const nama = document.getElementById('nama').value;
    const nis = document.getElementById('nis').value;
    const nominal = document.getElementById('nominal').value;
    const tanggal = document.getElementById('tanggal').value;
   
    const id = daftarTabungan[daftarTabungan.length - 1]?.id + 1 || 1;
    const tabunganBaru = {
        id,
        nama : nama,
        nis : nis,
        nominal : nominal,
        tanggal : tanggal,
    }

    daftarTabungan.push(tabunganBaru);
    setData("daftarTabungan",daftarTabungan);

    document.getElementById('nama').value = "";
    document.getElementById('nis').value = "";
    document.getElementById('nominal').value = "";
    document.getElementById('tanggal').value = "";

    window.location.href = "data-tabungan.html";
}

const cancel = () => {
    document.getElementById('nama').value = "";
    document.getElementById('nis').value ="";
    document.getElementById('nominal').value = "";
    document.getElementById('tanggal').value = "";
}

tampilkanTabungan()