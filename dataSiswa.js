const daftarSiswa = getData("daftarSiswa") || [];

function getData(Key) {
    return JSON.parse(localStorage.getItem(Key));
}
  
function setData(Key, Data) {
    return localStorage.setItem(Key, JSON.stringify(Data));
}

const tampilkanSiswa = (filter = "") => {
    const tblSiswa = document.getElementById("tblSiswa");
    tblSiswa.innerHTML = 
        "<tr> <th>No</th> <th>NIS</th> <th>Nama</th> <th>Kelas</th> <th>Jenis Kelamin</th> <th>No. Telepon</th> <th>Edit</th> <th>Hapus<th> </tr>";
    for (let i in daftarSiswa){
        if (daftarSiswa[i].nis.includes(filter)){
            tblSiswa.innerHTML += `<tr> 
            <td>${parseInt(i)+1}</td> <td>${daftarSiswa[i].nis}</td>
            <td>${daftarSiswa[i].nama}</td> 
            <td>${daftarSiswa[i].kelas}</td> <td>${daftarSiswa[i].jenKel}</td>
            <td>${daftarSiswa[i].noHp}</td>
            <td><button type="button" class="btn btn-warning" onclick = "handleEditSiswa('${daftarSiswa[i].id}')">Edit</button></td>
            <td><button type="button" class="btn btn-danger" onclick = "hapusSiswa('${daftarSiswa[i].id}')">Delete</button>
</td> </tr>`;
        }
    }
};

const cariIndex = (id) => {
    const index = daftarSiswa.findIndex((item) => item.id == id);
    return index;
};

const hapusSiswa = (id) => {
    const index = cariIndex(id);
    if (index !== -1) {
      daftarSiswa.splice(index, 1);
      setData("daftarSiswa", daftarSiswa);
      tampilkanSiswa();
      console.log("Dihapus");
    }
};


const handleEditSiswa = (id) => {
    const EditModal = document.getElementById("editModal");
  
    const Modal = new bootstrap.Modal(EditModal);
    Modal.show();
  
    const indexEdit = cariIndex(id);
    const siswaDiedit = daftarSiswa[indexEdit];
    const idModal = document.getElementById("id");
    const nis = document.getElementById("nis");
    const nama = document.getElementById("nama");
    const kelas = document.getElementById("kelas");
    const jenKel = document.getElementById("jenKel");
    const noHp = document.getElementById("noHp");
    idModal.value = siswaDiedit.id;
    nis.value = siswaDiedit.nis;
    nama.value = siswaDiedit.nama;
    kelas.value = siswaDiedit.kelas;
    jenKel.value = siswaDiedit.jenKel;
    noHp.value = siswaDiedit.noHp;
};

const editSiswa = () => {
    const EditModal = document.getElementById("editModal");
    const Modal = bootstrap.Modal.getInstance(EditModal);
    const id = document.getElementById("id");
    const indexEdit = cariIndex(id.value);
    const nis = document.getElementById("nis");
    const nama = document.getElementById("nama");
    const kelas = document.getElementById("kelas");
    const jenKel = document.getElementById("jenKel");
    const noHp = document.getElementById("noHp");
    daftarSiswa[indexEdit].nis = nis.value;
    daftarSiswa[indexEdit].nama = nama.value;
    daftarSiswa[indexEdit].kelas = kelas.value;
    daftarSiswa[indexEdit].jenKel = jenKel.value;
    daftarSiswa[indexEdit].noHp = noHp.value;
  
    Modal.hide();
    setData("daftarSiswa", daftarSiswa);
    tampilkanSiswa();
};

const cancel = () => {
    const EditModal = document.getElementById("editModal");
    const Modal = bootstrap.Modal.getInstance(EditModal);
    Modal.hide()
};

document.querySelector('form[role="search"]').addEventListener('submit', function (event){
    event.preventDefault();
    const searchValue = this.querySelector('input[type="search"]').value
    tampilkanSiswa(searchValue);
});

tampilkanSiswa();