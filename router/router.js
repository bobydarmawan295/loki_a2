const express = require("express");
const router = express.Router();
const data = require("../data.json");

router.use(express.json())

//request halaman depan
router.get("/", (req, res) => {
  res.send("Selamat Datang (> <)");
});

//request halaman login
router.get("/login", (req, res) => {
  const login = {
    "messagge" : "login sukses",
    "code_error" : 200
  }
  res.json(login)
});

//halaman log out
router.get("/logout", (req, res) => {
  const logout = {
    "messagge" : "logout sukses",
    "code_error" : 200
  }
  res.json(logout);
});

//Tambah RPS
router.post('/admin/buatRPS',(req, res) => {
  const rps = {
    id_rps : data.rps.length + 1,
    matkul : req.body.matkul,
    nip : req.body.nip,
    nama_dosen : req.body.nama_dosen
  }
  data.rps.push(rps);
  res.send(data.rps);
});

// Ubah/Edit RPS
router.put('/admin/ubahRPS/:id', (req, res)=>{
  const ubah_rps = data.rps.find(c => c.id_rps === parseInt(req.params.id));
  ubah_rps.matkul =  req.body.matkul;
  ubah_rps.nip =  req.body.nip;
  ubah_rps.nama_dosen =  req.body.nama_dosen;
  res.send(ubah_rps);
});

//request halaman homepage (beranda)
router.get("/home", (req, res) => {
  res.send("Ini adalah Halaman Home");
});

//request halaman about
router.get("/about", (req, res) => {
  res.send("Ini Adalah Halaman about");
});

//request halaman profil
router.get("/profile", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Halooo");
});

//request halaman salam, nama, nim
router.get("/salam/:nama/:nim", function (req, res) {
  res.send("Selamat Sore " + req.params.nama + " <br>nim anda " + req.params.nim);
});

router.post('/admin/CPLtoCPMK', (req, res)=>{
  const cp = {
    kode_cpmk : req.body.kode_cpmk,
    cpmk : req.body.cpmk,
    cpps : req.body.cpps
  }
  data.cp.push(cp);
  res.send(data.cp);
});

router.post('/admin/viewLaporan/RPS', (req, res)=>{
  res.send("<h1>Ini adalah list rps beserta jumlah revisinya</h1>")
});

router.get('/dosen/lihatCPMK', (req, res)=>{
  res.send(data.cp);
});

router.put('/dosen/ubahCPMK/:id', (req, res)=>{
  const ubahCPMK = data.cp.find(c => c.kode_cpmk === parseInt(req.params.id));
  ubahCPMK.cpmk =  req.body.cpmk;
  ubahCPMK.cpps =  req.body.cpps;
  res.send(ubahCPMK);
});

router.delete('/dosen/hapusCPMK/:id', (req, res)=>{
  const hapusCPMK = data.cp.find(c => c.kode_cpmk === parseInt(req.params.id));
  const index = data.cp.indexOf(hapusCPMK);
  data.cp.splice(index, 1);
  res.send(hapusCPMK);
});

router.post('/dosen/cetakLaporan', (req, res)=>{
  res.send("<h1>Ini adalah halaman Cetak laporan</h1>")
});

router.get('/dosen/lihatRef', (req, res)=>{
  res.send(data.ref);
});

router.put('/dosen/ubahRef/:id', (req, res)=>{
  const ubahRef = data.ref.find(c => c.kode_ref === req.params.id);
  ubahRef.judul_ref =  req.body.judul_ref;
  res.send(ubahRef);
});

router.delete('/dosen/hapusRef/:id', (req, res)=>{
  const hapusRef = data.ref.find(c => c.kode_ref === req.params.id);
  const index = data.ref.indexOf(hapusRef);
  data.ref.splice(index, 1);
  res.send(hapusRef);
});

router.post('/dosen/tambahKomPen/:id', (req, res)=>{
  const komponen = {
    id : req.body.id,
    persentase : req.body.persentase,
  }
  data.komponen_penilaian.push(komponen);
  res.send(data.komponen_penilaian);
});

module.exports = router;
