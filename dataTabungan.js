const daftarTabungan = getData("daftarTabungan") || [];

function getData(Key) {
  return JSON.parse(localStorage.getItem(Key));
}

function setData(Key, Data) {
  return localStorage.setItem(Key, JSON.stringify(Data));
}

const tampilkanTabungan = (filter = "") => {
  const tblTabungan = document.getElementById("tblTabungan");
  tblTabungan.innerHTML =
    "<tr> <th>No</th> <th>NIS</th> <th>Nama</th> <th>Nominal</th> <th>Tanggal</th> <th>Hapus<th> </tr>";

for (let i in daftarTabungan) {
  const tabungan = daftarTabungan[i];
  const nis = tabungan.nis.toString();
  const nama = tabungan.nama.toLowerCase();

  if (nis.includes(filter) || nama.includes(filter.toLowerCase())) {
    tblTabungan.innerHTML += `<tr> <td>${parseInt(i) + 1}</td> <td>${nis}</td> <td>${tabungan.nama}</td> <td>${tabungan.nominal}</td> <td>${tabungan.tanggal}</td> <td><button type="button" class="btn btn-danger" onclick="hapusTabungan('${tabungan.id}')">Delete</button></td> </tr>`;
  }
}
};

const cariIndex = (id) => {
  const index = daftarTabungan.findIndex((item) => item.id == id);
  return index;
};

const hapusTabungan = (id) => {
  const index = cariIndex(id);
  if (index !== -1) {
    daftarTabungan.splice(index, 1);
    setData("daftarTabungan", daftarTabungan);
    tampilkanTabungan();
    console.log("Dihapus");
  }
};


const cancel = () => {
  const EditModal = document.getElementById("editModal");
  const Modal = bootstrap.Modal.getInstance(EditModal);
  Modal.hide()
};

document
  .querySelector('form[role="search"]')
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const searchValue = this.querySelector('input[type="search"]').value;
    tampilkanTabungan(searchValue);
});

tampilkanTabungan();