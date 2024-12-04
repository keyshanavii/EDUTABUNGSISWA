const daftarTabungan = getData("daftarTabungan") || [];
const daftarSiswa = getData("daftarSiswa") || [];

function getData(Key) {
  return JSON.parse(localStorage.getItem(Key));
}

function setData(Key, Data) {
  return localStorage.setItem(Key, JSON.stringify(Data));
}

const tampilkanSaldo = (filter = "") => {
  const tblTabungan = document.getElementById("tblTabungan");
  tblTabungan.innerHTML = 
  "<tr> <th>No</th> <th>NIS</th> <th>Nama</th> <th>Total Saldo</th> </tr>";

  const totalSaldo = {}

  daftarTabungan.forEach(tabungan => {
    const nis = tabungan.nis;
    const nominal = parseFloat(tabungan.nominal) || 0;

    if (!totalSaldo[nis]) {
      totalSaldo[nis] = 0;
    }
    totalSaldo[nis] += nominal;
  });


  daftarSiswa.forEach((siswa, index) => {
    const nis = siswa.nis;
    const nama = siswa.nama.toLowerCase();
    const saldo = totalSaldo[nis] || 0;

    if (nis.includes(filter) || nama.includes(filter.toLowerCase())) {
    tblTabungan.innerHTML += `<tr> <td>${index + 1}</td> <td>${nis}</td> <td>${nama}</td> <td>${saldo}</td> </tr>`;
    }
  });

};

const cariIndex = (id) => {
  const index = daftarTabungan.findIndex((item) => item.id == id);
  return index;
};

document
  .querySelector('form[role="search"]')
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const searchValue = this.querySelector('input[type="search"]').value;
    tampilkanSaldo(searchValue);
});

document.addEventListener("DOMContentLoaded",() => {
  tampilkanSaldo();
});