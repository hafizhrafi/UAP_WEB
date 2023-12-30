var dataBarang = [
	{ kode: "001", barang: "Barang A", harga: 10000 },
	{ kode: "002", barang: "Barang B", harga: 20000 },
	{ kode: "003", barang: "Barang C", harga: 30000 },
];

function transaksi(){
    var kodeBarang = document.getElementById("kodeBarang").value;
    var banyakBarang = parseInt(document.getElementById("banyakBarang").value);
    var cariBarang = dataBarang.find((item) => item.kode === kodeBarang);
    
    if (cariBarang) {
        var harga = cariBarang.harga;
        var total = harga * banyakBarang;
        window.alert("total pembayaran adalah: "+ total);
        var uangBayar = window.prompt("masukkan uang: ");
        var kembalian = uangBayar - total;
        window.alert("total kembalian: "+ kembalian);
    } else {
        window.alert("kode barang tidak di temukan")
    }
}