const express = require("express");
const router = express.Router();
const data = require("../data.json");

router.use(express.json())

router.get("/", (req, res) => {
  res.send("Selamat Datang (> <)");
});

router.get("/login", (req, res) => {
  const login = {
    "messagge" : "login sukses",
    "code_error" : 200
  }
  res.json(login)
});

router.get("/logout", (req, res) => {
  const logout = {
    "messagge" : "logout sukses",
    "code_error" : 200
  }
  res.json(logout);
});

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

router.put('/admin/ubahRPS/:id', (req, res)=>{
  const ubah_rps = data.rps.find(c => c.id_rps === parseInt(req.params.id));
  ubah_rps.matkul =  req.body.matkul;
  ubah_rps.nip =  req.body.nip;
  ubah_rps.nama_dosen =  req.body.nama_dosen;
  res.send(ubah_rps);
});

router.post('/admin/tambahDosen', (req, res)=>{
  const rps = {
    nip : req.body.nip,
    nama : req.body.nama
  }
  data.dosen.push(rps);
  res.send(data.dosen);
});

router.get('/admin/lihatLaporan', (req, res)=>{
  res.send("<h1>Ini adalah halaman laporan</h1>")
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

router.put('/dosen/ubahKomPen/:id', (req, res)=>{
  const ubahKomPen = data.komponen_penilaian.find(c => c.id === req.params.id);
  ubahKomPen.persentase =  req.body.persentase
  res.send(ubahKomPen);
});

router.delete('/dosen/hapusKomPen/:id', (req, res)=>{
  const hapusKomPen = data.komponen_penilaian.find(c => c.id === req.params.id);
  const index = data.komponen_penilaian.indexOf(hapusKomPen);
  data.komponen_penilaian.splice(index, 1);
  res.send(hapusKomPen);
});

router.post('/dosen/buatRPS',(req, res) => {
  const rps = {
    id_rps : data.rps.length + 1,
    matkul : req.body.matkul,
    nip : req.body.nip,
    nama_dosen : req.body.nama_dosen
  }
  data.rps.push(rps);
  res.send(data.rps);
});

router.put('/dosen/ubahRPS/:id', (req, res)=>{
  const ubah_rps = data.rps.find(c => c.id_rps === parseInt(req.params.id));
  ubah_rps.matkul =  req.body.matkul;
  ubah_rps.nip =  req.body.nip;
  ubah_rps.nama_dosen =  req.body.nama_dosen;
  res.send(ubah_rps);
});

//request halaman homepage (beranda)
router.get("/dosen/lihatPertemuan", (req, res) => {
  res.send(data.pertemuan_mingguan);
});

module.exports = router;
