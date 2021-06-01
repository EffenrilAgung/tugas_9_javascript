const danaBos = function () {
    var anggaransekolah = {
        kursi: "500 Kursi",
        meja: "250 meja",
        komputer: "50 Unit",
        bell: "1 Unit",
        Kerusakan: {
            kursi: "10",
            bangku: "50",
            komputer: "2 Unit"
        }
    }
    for (var danasekolah in anggaransekolah)
        console.log(anggaransekolah[danasekolah])
}
danaBos()