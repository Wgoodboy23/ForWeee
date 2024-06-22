function cekKhodam() {
    const nama = document.getElementById('name').value.trim();
    if (nama === '') {
        alert('Silakan masukkan nama Anda');
        return;
    }

    const khodams = [
        "Khodam Macan Putih",
        "Khodam Harimau Jawa",
        "Khodam Ular Emas",
        "Khodam Garuda Sakti",
        "Khodam Naga Hitam",
        "Khodam Keris Pusaka",
        "Khodam Pendekar Satria",
        "Khodam Raja Jin",
        "Khodam Pengawal Pribadi",
        "Khodam Dewa Penolong"
    ];

    const randomIndex = Math.floor(Math.random() * khodams.length);
    const khodam = khodams[randomIndex];

    document.getElementById('result').innerText = `Halo ${nama}, khodam Anda adalah: ${khodam}`;
}