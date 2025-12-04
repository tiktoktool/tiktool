// --- 1. DATA MASTER (DUA BAHASA) ---
const defaultData = {
    id: [
        { 
            id: 'cat_0', 
            title: 'Cek Stok (Ready/Habis)', 
            icon: 'fa-cubes', 
            color: '#3b82f6', 
            items: [
                { id: 'm01', title: 'Barang Ready Stock', text: 'Hai Kak! Produk ini READY STOCK dan siap kirim ya. Selama varian masih bisa diklik, berarti barang tersedia. Silakan langsung di-checkout sebelum kehabisan! 🔥' },
                { id: 'm02', title: 'Stok Habis/Kosong', text: 'Mohon maaf Kak, untuk varian tersebut saat ini sedang habis (Sold Out). 🙏 Kami akan restock secepatnya. Boleh follow toko kami untuk update terbarunya ya. Terima kasih!' },
                { id: 'm03', title: 'Stok Menipis', text: 'Hai Kak, stoknya tinggal sedikit lagi nih. Siapa cepat dia dapat ya Kak. Yuk segera diamankan pesananannya sekarang! 😊' }
            ]
        },
        { 
            id: 'cat_1', 
            title: 'Komplain & Review Buruk', 
            icon: 'fa-triangle-exclamation', 
            color: '#ef4444', 
            items: [
                { id: 'm11', title: 'Minta Maaf & Solusi (Sopan)', text: 'Mohon maaf atas ketidaknyamanannya, Kak. Kepuasan Kakak adalah prioritas kami. Boleh tolong infokan detail kendalanya via chat ini agar kami bisa bantu berikan solusi terbaik? Terima kasih.' },
                { id: 'm12', title: 'Respons Bintang 1 Tanpa Alasan', text: 'Halo Kak, mohon maaf jika produk kami tidak memenuhi ekspektasi. Kami selalu berusaha memberikan yang terbaik. Jika ada cacat produk, mohon chat kami untuk proses klaim garansi/retur ya Kak. 🙏' }
            ]
        },
        { 
            id: 'cat_2', 
            title: 'Balasan Ulasan Bintang 5', 
            icon: 'fa-star', 
            color: '#f59e0b', 
            items: [
                { id: 'm21', title: 'Terima Kasih Standard', text: 'Terima kasih banyak ulasan bintang 5-nya Kak! 😍 Senang sekali Kakak suka dengan produknya. Semoga awet dan ditunggu orderan selanjutnya ya!' },
                { id: 'm22', title: 'Doa Rezeki (Ramah)', text: 'Alhamdulillah, terima kasih Kak sudah belanja di toko kami. Semoga rezekinya lancar terus ya Kak. Ditunggu next ordernya! ❤️' }
            ]
        },
        { 
            id: 'cat_3', 
            title: 'Pengiriman & Logistik', 
            icon: 'fa-truck-fast', 
            color: '#10b981', 
            items: [
                { id: 'm31', title: 'Kapan Dikirim?', text: 'Pesanan yang masuk sebelum jam 15.00 akan dikirim hari ini ya Kak. Resi update otomatis malam hari. Mohon ditunggu update statusnya di aplikasi. Terima kasih! 🚚' },
                { id: 'm32', title: 'Paket Belum Jalan (Stuck)', text: 'Halo Kak, fisik paket sudah kami serahkan ke pihak ekspedisi ya. Saat ini status di sistem mungkin delay update dari pihak kurirnya. Mohon kesediaannya menunggu 1x24 jam kedepan ya Kak. 🙏' },
                { id: 'm33', title: 'Paket Hilang/Lama Sampai', text: 'Mohon maaf atas keterlambatannya Kak. Kami sudah bantu follow-up ke pihak ekspedisi terkait paket Kakak. Jika dalam 2 hari tidak ada pergerakan, silakan ajukan pengembalian dana (paket hilang) via sistem ya Kak.' }
            ]
        },
        { 
            id: 'cat_4', 
            title: 'Paket Tidak Sesuai/Rusak', 
            icon: 'fa-box-open', 
            color: '#6366f1', 
            items: [
                { id: 'm41', title: 'Minta Bukti Video', text: 'Mohon maaf atas kendalanya Kak. 🙏 Bisa tolong lampirkan video unboxing (buka paket) agar bisa kami bantu pengecekan dengan tim packing? Kami akan bertanggung jawab penuh jika ada kesalahan.' },
                { id: 'm42', title: 'Barang Cacat/Rusak', text: 'Waduh, mohon maaf sekali barang sampai dalam kondisi rusak. Jangan selesaikan pesanan dulu ya Kak. Silakan ajukan pengembalian barang/dana via aplikasi, nanti kami approve segera.' }
            ]
        },
        { 
            id: 'cat_5', 
            title: 'Masalah Return (Pengembalian)', 
            icon: 'fa-rotate-left', 
            color: '#a855f7', 
            items: [
                { id: 'm51', title: 'Cara Mengajukan Return', text: 'Halo Kak, untuk proses retur yang aman, silakan klik tombol \'Ajukan Pengembalian\' pada rincian pesanan Kakak. Ikuti instruksi di aplikasi untuk mendapatkan resi pengembalian gratis ongkir.' },
                { id: 'm52', title: 'Return Ditolak (Salah Alasan)', text: 'Halo Kak, pengajuan returnya kami tolak dulu karena alasan yang dipilih kurang tepat. Silakan ajukan ulang dengan memilih alasan "Barang Berubah Pikiran" atau "Produk Tidak Berfungsi" ya Kak agar bisa kami proses.' }
            ]
        },
        { 
            id: 'cat_6', 
            title: 'Barang Tertukar', 
            icon: 'fa-arrow-right-arrow-left', 
            color: '#ec4899', 
            items: [
                { id: 'm61', title: 'Salah Kirim Varian', text: 'Mohon maaf Kak, sepertinya tim packing kami salah menempelkan resi/mengambil barang. 🙏 Kami akan kirimkan barang penggantinya. Silakan ajukan penukaran barang di sistem ya Kak.' }
            ]
        },
        { 
            id: 'cat_7', 
            title: 'Produk Tidak Berfungsi (Trouble)', 
            icon: 'fa-plug', 
            color: '#f97316', 
            items: [
                { id: 'm71', title: 'Panduan Pemakaian', text: 'Halo Kak, untuk produk ini apakah sudah dicoba [Isi Instruksi Singkat, misal: cas dulu 2 jam]? Terkadang produk butuh daya awal. Jika masih tidak menyala, kami siap ganti baru.' }
            ]
        },
        { 
            id: 'cat_8', 
            title: 'Pertanyaan Umum (COD/Asli)', 
            icon: 'fa-circle-question', 
            color: '#06b6d4', 
            items: [
                { id: 'm81', title: 'Apakah Bisa COD?', text: 'Bisa banget Kak! Toko kami support COD (Bayar di Tempat) ke seluruh Indonesia. Pastikan alamat lengkap dan nomor HP aktif ya saat checkout. Ditunggu! 😊' },
                { id: 'm82', title: 'Apakah Produk Original?', text: 'Kami jamin 100% Original Kak. Barang kami ambil langsung dari distributor resmi. Ada garansi uang kembali jika terbukti tidak ori. Silakan diorder dengan tenang. ✨' },
                { id: 'm83', title: 'Minta Realpict', text: 'Foto yang dipajang di etalase sudah foto asli (Real Picture) dari tim kami ya Kak. Apa yang Kakak lihat, itu yang akan Kakak dapatkan. 👌' }
            ]
        }
    ],
    en: [
        { 
            id: 'cat_0', 
            title: 'Check Stock (Ready/Out)', 
            icon: 'fa-cubes', 
            color: '#3b82f6', 
            items: [
                { id: 'm01', title: 'Product Ready Stock', text: 'Hi! This product is READY STOCK and ready to ship. As long as the variant can still be clicked, the item is available. Please checkout immediately before it runs out! 🔥' },
                { id: 'm02', title: 'Out of Stock/Empty', text: 'Sorry, for that variant is currently out of stock (Sold Out). 🙏 We will restock as soon as possible. Please follow our store for the latest updates. Thank you!' },
                { id: 'm03', title: 'Stock Running Low', text: 'Hi, stock is running low. First come first served. Secure your order now! 😊' }
            ]
        },
        { 
            id: 'cat_1', 
            title: 'Complaints & Bad Reviews', 
            icon: 'fa-triangle-exclamation', 
            color: '#ef4444', 
            items: [
                { id: 'm11', title: 'Apology & Solution (Polite)', text: 'We apologize for the inconvenience. Your satisfaction is our priority. Could you please provide details about the issue via this chat so we can help provide the best solution? Thank you.' },
                { id: 'm12', title: 'Response to 1 Star Without Reason', text: 'Hello, we apologize if our product did not meet expectations. We always strive to provide the best. If there is a product defect, please chat us for the warranty/return claim process. 🙏' }
            ]
        },
        { 
            id: 'cat_2', 
            title: '5 Star Review Replies', 
            icon: 'fa-star', 
            color: '#f59e0b', 
            items: [
                { id: 'm21', title: 'Standard Thank You', text: 'Thank you so much for the 5 star review! 😍 We are very happy that you like our product. May it last long and we look forward to your next order!' },
                { id: 'm22', title: 'Blessing Prayer (Friendly)', text: 'Alhamdulillah, thank you for shopping at our store. May your prosperity continue to flow. We await your next order! ❤️' }
            ]
        },
        { 
            id: 'cat_3', 
            title: 'Shipping & Logistics', 
            icon: 'fa-truck-fast', 
            color: '#10b981', 
            items: [
                { id: 'm31', title: 'When Will It Be Shipped?', text: 'Orders placed before 3:00 PM will be shipped today. Tracking number updates automatically in the evening. Please wait for status updates in the app. Thank you! 🚚' },
                { id: 'm32', title: 'Package Not Moving (Stuck)', text: 'Hello, the physical package has been handed over to the expedition party. Currently the status in the system may be delayed update from the courier side. Please wait 1x24 hours ahead. 🙏' },
                { id: 'm33', title: 'Package Lost/Late Arrival', text: 'We apologize for the delay. We have helped follow up with the expedition regarding your package. If there is no movement within 2 days, please submit a refund request (lost package) via the system.' }
            ]
        },
        { 
            id: 'cat_4', 
            title: 'Wrong/Damaged Package', 
            icon: 'fa-box-open', 
            color: '#6366f1', 
            items: [
                { id: 'm41', title: 'Request Video Evidence', text: 'We apologize for the trouble. 🙏 Could you please attach an unboxing video (opening package) so we can help check with the packing team? We will be fully responsible if there is an error.' },
                { id: 'm42', title: 'Defective/Damaged Item', text: 'Oh no, we are very sorry the item arrived damaged. Please do not complete the order yet. Please submit a return/refund request via the application, we will approve immediately.' }
            ]
        },
        { 
            id: 'cat_5', 
            title: 'Return Issues', 
            icon: 'fa-rotate-left', 
            color: '#a855f7', 
            items: [
                { id: 'm51', title: 'How to Submit Return', text: 'Hello, for a safe return process, please click the \'Submit Return\' button in your order details. Follow the instructions in the application to get a free return shipping tracking number.' },
                { id: 'm52', title: 'Return Rejected (Wrong Reason)', text: 'Hello, we rejected the return request because the reason chosen was not appropriate. Please resubmit by selecting the reason "Changed Mind" or "Product Not Working" so we can process it.' }
            ]
        },
        { 
            id: 'cat_6', 
            title: 'Swapped Items', 
            icon: 'fa-arrow-right-arrow-left', 
            color: '#ec4899', 
            items: [
                { id: 'm61', title: 'Wrong Variant Sent', text: 'We apologize, it seems our packing team stuck the wrong tracking number/took the wrong item. 🙏 We will send the replacement item. Please submit an item exchange request in the system.' }
            ]
        },
        { 
            id: 'cat_7', 
            title: 'Product Not Working (Trouble)', 
            icon: 'fa-plug', 
            color: '#f97316', 
            items: [
                { id: 'm71', title: 'Usage Guide', text: 'Hello, for this product, have you tried [Fill Brief Instruction, e.g.: charge for 2 hours first]? Sometimes products need initial power. If it still doesn\'t work, we are ready to replace it with a new one.' }
            ]
        },
        { 
            id: 'cat_8', 
            title: 'Frequently Asked Questions (COD/Original)', 
            icon: 'fa-circle-question', 
            color: '#06b6d4', 
            items: [
                { id: 'm81', title: 'Is COD Available?', text: 'Yes, definitely! Our store supports COD (Cash on Delivery) throughout Indonesia. Make sure your address is complete and your mobile number is active when checking out. We await your order! 😊' },
                { id: 'm82', title: 'Is the Product Original?', text: 'We guarantee 100% Original. Our items are taken directly from official distributors. There is a money back guarantee if proven not original. Please order with peace of mind. ✨' },
                { id: 'm83', title: 'Request Real Photo', text: 'The photos displayed in the showcase are original photos (Real Picture) from our team. What you see is what you will get. 👌' }
            ]
        }
    ]
};

// --- 2. LOGIKA UTAMA ---
let appData = [];
const STORAGE_KEY = 'SellerTiktokChatPro_Data'; 
const BANNED_KEYWORDS = ["whatsapp", "wa ", "08", "no hp", "ig", "instagram", "shopee", "tokopedia", "lazada", "tf", "transfer", "bca", "mandiri", "diluar aplikasi", "putih instan", "permanen", "garansi uang kembali", "kw", "ori reject"];

// --- 3. MULTI BAHASA (i18n) ---
const translations = {
    id: {
        // Header
        'app-title': 'Seller Chat Assistant Pro',
        'reset-btn': 'Reset',
        'delete-btn': 'Hapus Semua',
        'info-title': 'INFO PENTING:',
        'info-text': 'Hindari kata sensitif di balasan chat. Mendukung input semua bahasa!',
        'toast-text': '✅ Teks berhasil disalin!',
        
        // Categories
        'category-default': 'Nama Folder Baru',
        'add-message': 'Tambah Pesan',
        'message-title': 'Judul Pesan',
        'message-content': 'Tulis balasan di sini... (Mendukung SEMUA bahasa!)',
        'tap-hint': 'Tap teks di atas untuk menyalin',
        
        // Buttons
        'delete-item': 'Hapus',
        'edit-btn': 'Edit',
        'cancel-btn': 'Batal',
        'save-btn': 'Simpan',
        
        // Confirmation Messages
        'confirm-reset': '⚠️ PERINGATAN: Semua data script Anda akan dihapus dan dikembalikan ke pengaturan awal (pabrik).\n\nApakah Anda yakin?',
        'confirm-delete-all': '⚠️ PERINGATAN KERAS: Menu dan semua script akan dihapus TOTAL!\n\nAnda harus membuatnya lagi dari nol.\nApakah Anda yakin?',
        'confirm-delete-category': 'Hapus kategori folder ini?',
        'confirm-delete-message': 'Hapus pesan ini?',
        'confirm-banned-words': '⚠️ Ada kata terlarang (${violations}). Yakin simpan?',
        
        // Success Messages
        'success-reset': 'Data berhasil dikembalikan ke default.',
        
        // Empty State
        'empty-state': 'Belum ada menu tersimpan.<br>Klik tombol (+) di bawah untuk membuat baru.',
        
        // Warning
        'warning-title': 'PERINGATAN',
        'warning-banned': 'Kata "${words}" dilarang.',
        
        // Language
        'current-lang': 'ID',
        
        // Storage Info
        'storage-title': 'PENYIMPANAN LOKAL:',
        'storage-text': 'Semua data disimpan otomatis di cache browser (LocalStorage) - TANPA KADALUARSA! Data tetap tersedia meski browser ditutup. Mendukung input SEMUA bahasa!',
        'check-storage-btn': 'Cek Storage',
        'clear-storage-btn': 'Bersihkan Semua',
        'confirm-clear-storage': '⚠️ PERINGATAN: Semua data termasuk tema dan bahasa akan dihapus dari cache browser.\n\nAplikasi akan kembali ke pengaturan pabrik.\nApakah Anda yakin?',
        'storage-cleared': '✅ Semua data cache telah dibersihkan.',
        'storage-info': 'Data tersimpan: ${size} KB (Mendukung bahasa tak terbatas!)',
        'storage-empty': 'Tidak ada data tersimpan',
        
        // Modal
        'modal-title': 'Buat Folder Baru',
        'folder-name-label': 'Nama Folder:',
        'folder-name-hint': 'Masukkan nama deskriptif untuk folder baru Anda (contoh: "Pesan Selamat Datang", "Info Pengiriman", dll.)',
        'example-title': '📁 Contoh Folder yang Dibuat:',
        'example-text': 'Setelah dibuat, folder ini akan berisi:<br>1. Contoh pesan yang menunjukkan cara penggunaan<br>2. Anda bisa tambah pesan dengan klik "Tambah Pesan"<br>3. Tap teks pesan apa saja untuk menyalin ke clipboard<br>4. Edit atau hapus pesan menggunakan tombol',
        'cancel-btn-modal': 'Batal',
        'create-btn': 'Buat Folder',
        
        // Ekspor/Impor
        'export-btn': 'Ekspor Data',
        'import-btn': 'Impor Data',
        'export-success': '✅ Semua data berhasil diekspor!',
        'import-success': '✅ Data berhasil diimpor!',
        'export-failed': '❌ Ekspor gagal!',
        'import-failed': '❌ Import gagal!',
        'confirm-import': '⚠️ PERINGATAN: Ini akan menggantikan SEMUA data saat ini.\n\nApakah Anda yakin ingin mengimpor?',
        'invalid-file': '❌ Format file tidak valid!'
    },
    en: {
        // Header
        'app-title': 'Seller Chat Assistant Pro',
        'reset-btn': 'Reset',
        'delete-btn': 'Delete All',
        'info-title': 'IMPORTANT INFO:',
        'info-text': 'Avoid sensitive words in chat replies. Supports all languages input!',
        'toast-text': '✅ Text copied successfully!',
        
        // Categories
        'category-default': 'New Folder Name',
        'add-message': 'Add Message',
        'message-title': 'Message Title',
        'message-content': 'Write reply here... (Supports ALL languages!)',
        'tap-hint': 'Tap text above to copy',
        
        // Buttons
        'delete-item': 'Delete',
        'edit-btn': 'Edit',
        'cancel-btn': 'Cancel',
        'save-btn': 'Save',
        
        // Confirmation Messages
        'confirm-reset': '⚠️ WARNING: All your script data will be deleted and restored to factory settings.\n\nAre you sure?',
        'confirm-delete-all': '⚠️ CRITICAL WARNING: All menus and scripts will be COMPLETELY DELETED!\n\nYou will have to create them again from scratch.\nAre you sure?',
        'confirm-delete-category': 'Delete this category folder?',
        'confirm-delete-message': 'Delete this message?',
        'confirm-banned-words': '⚠️ There are banned words (${violations}). Are you sure you want to save?',
        
        // Success Messages
        'success-reset': 'Data successfully restored to default.',
        
        // Empty State
        'empty-state': 'No menus saved yet.<br>Click the (+) button below to create a new one.',
        
        // Warning
        'warning-title': 'WARNING',
        'warning-banned': 'Words "${words}" are banned.',
        
        // Language
        'current-lang': 'EN',
        
        // Storage Info
        'storage-title': 'LOCAL STORAGE:',
        'storage-text': 'All data saved automatically in browser cache (LocalStorage) - NO EXPIRATION! Data remains available even after closing browser. Supports ANY language input!',
        'check-storage-btn': 'Check Storage',
        'clear-storage-btn': 'Clear All',
        'confirm-clear-storage': '⚠️ WARNING: All data including theme and language will be removed from browser cache.\n\nApp will return to factory settings.\nAre you sure?',
        'storage-cleared': '✅ All cache data has been cleared.',
        'storage-info': 'Data stored: ${size} KB (Supports unlimited languages!)',
        'storage-empty': 'No data stored',
        
        // Modal
        'modal-title': 'Create New Folder',
        'folder-name-label': 'Folder Name:',
        'folder-name-hint': 'Enter a descriptive name for your new folder (e.g., "Welcome Messages", "Shipping Info", etc.)',
        'example-title': '📁 Example Folder Created:',
        'example-text': 'After creating, this folder will contain:<br>1. An example message showing how to use<br>2. You can add more messages by clicking "Add Message"<br>3. Tap any message text to copy it to clipboard<br>4. Edit or delete messages using the buttons',
        'cancel-btn-modal': 'Cancel',
        'create-btn': 'Create Folder',
        
        // Ekspor/Impor
        'export-btn': 'Export Data',
        'import-btn': 'Import Data',
        'export-success': '✅ All data exported successfully!',
        'import-success': '✅ Data imported successfully!',
        'export-failed': '❌ Export failed!',
        'import-failed': '❌ Import failed!',
        'confirm-import': '⚠️ WARNING: This will replace ALL current data.\n\nAre you sure you want to import?',
        'invalid-file': '❌ Invalid file format!'
    }
};

let currentLanguage = 'id'; // DEFAULT BAHASA INDONESIA
const LANGUAGE_KEY = 'SellerTiktokChatPro_Language';

// Fungsi untuk mengubah bahasa
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem(LANGUAGE_KEY, lang);
    applyLanguage();
    
    // Update dropdown
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        }
    });
    
    // Close dropdown
    document.getElementById('lang-dropdown').classList.remove('show');
    
    // Update modal text if it's open
    updateModalText();
    
    // Show language change notification
    const message = lang === 'en' 
        ? '🌐 Language changed to English' 
        : '🌐 Bahasa diubah ke Indonesia';
    showToast(message, 2000);
}

// Fungsi untuk menerapkan terjemahan
function applyLanguage() {
    const lang = currentLanguage;
    const t = translations[lang];
    
    // Update semua elemen dengan data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            element.textContent = t[key];
        }
    });
    
    // Update elemen khusus
    document.getElementById('app-title').textContent = t['app-title'];
    document.getElementById('reset-btn').textContent = t['reset-btn'];
    document.getElementById('delete-btn').textContent = t['delete-btn'];
    document.getElementById('info-title').textContent = t['info-title'];
    document.getElementById('info-text').textContent = t['info-text'];
    document.getElementById('toast-text').textContent = t['toast-text'];
    document.getElementById('current-lang').textContent = t['current-lang'];
    document.getElementById('storage-title').textContent = t['storage-title'];
    document.getElementById('storage-text').textContent = t['storage-text'];
    document.getElementById('check-storage-btn').textContent = t['check-storage-btn'];
    document.getElementById('clear-storage-btn').textContent = t['clear-storage-btn'];
    
    // Update tombol ekspor/impor
    document.getElementById('export-btn').textContent = t['export-btn'];
    document.getElementById('import-btn').textContent = t['import-btn'];
    
    // Update document title
    document.title = t['app-title'];
    
    // Render ulang untuk update teks dinamis
    if (document.getElementById('app-container').innerHTML !== '') {
        render();
    }
}

// Update modal text
function updateModalText() {
    const t = translations[currentLanguage];
    const modal = document.getElementById('createFolderModal');
    
    if (modal && modal.classList.contains('active')) {
        document.getElementById('modal-title').textContent = t['modal-title'];
        document.getElementById('folder-name-label').textContent = t['folder-name-label'];
        document.getElementById('folder-name-hint').innerHTML = t['folder-name-hint'];
        document.getElementById('example-title').textContent = t['example-title'];
        document.getElementById('example-text').innerHTML = t['example-text'];
        document.getElementById('cancel-btn-modal').textContent = t['cancel-btn-modal'];
        document.getElementById('create-btn').textContent = t['create-btn'];
        
        // Update placeholder
        const input = document.getElementById('newFolderName');
        input.placeholder = t['category-default'];
        if (input.value === 'Nama Folder Baru' || input.value === 'New Folder Name') {
            input.value = t['category-default'];
        }
    }
}

// Fungsi untuk mendapatkan terjemahan
function t(key, variables = {}) {
    let text = translations[currentLanguage][key] || translations['id'][key] || key;
    
    // Replace variables
    Object.keys(variables).forEach(variable => {
        text = text.replace(`\${${variable}}`, variables[variable]);
    });
    
    return text;
}

// Toggle dropdown bahasa
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('lang-dropdown');
    dropdown.classList.toggle('show');
}

// Tutup dropdown saat klik di luar
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('lang-dropdown');
    const langBtn = document.querySelector('.lang-btn');
    
    if (dropdown && !dropdown.contains(event.target) && !langBtn.contains(event.target)) {
        dropdown.classList.remove('show');
    }
});

// --- 4. FUNGSI EKSPOR & IMPOR DATA ---
function exportData() {
    try {
        // Siapkan data untuk diekspor
        const exportData = {
            appData: appData,
            language: currentLanguage,
            theme: localStorage.getItem('theme') || 'dark',
            exportDate: new Date().toISOString(),
            version: '1.0'
        };
        
        // Konversi ke string JSON dengan format rapi
        const dataStr = JSON.stringify(exportData, null, 2);
        
        // Buat blob dan link download
        const dataBlob = new Blob([dataStr], { type: 'text/plain' });
        const downloadUrl = URL.createObjectURL(dataBlob);
        
        // Buat elemen link untuk download
        const downloadLink = document.createElement('a');
        downloadLink.href = downloadUrl;
        downloadLink.download = `SellerChatAssistant_Backup_${new Date().toISOString().split('T')[0]}.txt`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        
        // Bersihkan URL
        URL.revokeObjectURL(downloadUrl);
        
        // Tampilkan notifikasi
        const message = currentLanguage === 'en' 
            ? '✅ All data exported successfully!'
            : '✅ Semua data berhasil diekspor!';
        showToast(message, 3000);
        
    } catch (error) {
        console.error('Export error:', error);
        const message = currentLanguage === 'en'
            ? '❌ Export failed! Please try again.'
            : '❌ Ekspor gagal! Silakan coba lagi.';
        showToast(message, 3000);
    }
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Validasi ekstensi file
    if (!file.name.toLowerCase().endsWith('.txt')) {
        const message = currentLanguage === 'en'
            ? '❌ Invalid file format! Please select a .txt file.'
            : '❌ Format file tidak valid! Silakan pilih file .txt.';
        showToast(message, 3000);
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        try {
            const content = e.target.result;
            
            // Parse data JSON
            const importedData = JSON.parse(content);
            
            // Validasi struktur data
            if (!importedData.appData || !Array.isArray(importedData.appData)) {
                throw new Error('Invalid data format');
            }
            
            // Konfirmasi sebelum import
            const confirmMessage = currentLanguage === 'en'
                ? '⚠️ WARNING: This will replace ALL current data.\n\nAre you sure you want to import?'
                : '⚠️ PERINGATAN: Ini akan menggantikan SEMUA data saat ini.\n\nApakah Anda yakin ingin mengimpor?';
            
            if (!confirm(confirmMessage)) {
                // Reset input file
                event.target.value = '';
                return;
            }
            
            // Update data aplikasi
            appData = importedData.appData;
            
            // Update bahasa jika ada
            if (importedData.language && (importedData.language === 'id' || importedData.language === 'en')) {
                changeLanguage(importedData.language);
            }
            
            // Update tema jika ada
            if (importedData.theme) {
                document.documentElement.setAttribute('data-theme', importedData.theme);
                localStorage.setItem('theme', importedData.theme);
                document.getElementById('checkbox').checked = (importedData.theme === 'dark');
            }
            
            // Simpan data
            saveData();
            render();
            
            // Tampilkan notifikasi sukses
            const successMessage = currentLanguage === 'en'
                ? `✅ Data imported successfully! (${importedData.appData.length} categories)`
                : `✅ Data berhasil diimpor! (${importedData.appData.length} kategori)`;
            showToast(successMessage, 3000);
            
        } catch (error) {
            console.error('Import error:', error);
            const errorMessage = currentLanguage === 'en'
                ? '❌ Import failed! Invalid backup file.'
                : '❌ Import gagal! File backup tidak valid.';
            showToast(errorMessage, 3000);
        } finally {
            // Reset input file
            event.target.value = '';
        }
    };
    
    reader.onerror = function() {
        const errorMessage = currentLanguage === 'en'
            ? '❌ Failed to read file!'
            : '❌ Gagal membaca file!';
        showToast(errorMessage, 3000);
        event.target.value = '';
    };
    
    reader.readAsText(file);
}

// --- 5. INITIALIZATION & STORAGE ---
function init() {
    // Dark Mode
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.getElementById('checkbox').checked = true;
    } else {
        document.documentElement.setAttribute('data-theme', savedTheme);
        if(savedTheme === 'dark') document.getElementById('checkbox').checked = true;
    }

    // Load Language - Default to Indonesian
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    } else {
        currentLanguage = 'id'; // DEFAULT ID
        localStorage.setItem(LANGUAGE_KEY, 'id');
    }

    // Load Data
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        appData = JSON.parse(savedData);
    } else {
        // Use default data based on current language
        appData = JSON.parse(JSON.stringify(defaultData[currentLanguage]));
    }
    
    // Apply language
    applyLanguage();
    render();
    
    // Tampilkan notifikasi penyimpanan lokal saat pertama kali
    setTimeout(() => {
        showStorageNotification();
    }, 1000);
}

function saveData() { 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    showSaveNotification();
}

function resetToDefault() {
    const confirmReset = confirm(t('confirm-reset'));
    if (confirmReset) {
        // Reset to default data for current language
        appData = JSON.parse(JSON.stringify(defaultData[currentLanguage]));
        saveData();
        render();
        showToast('🔄 ' + t('success-reset'), 3000);
    }
}

function deleteAll() {
    const confirmDel = confirm(t('confirm-delete-all'));
    if (confirmDel) {
        appData = [];
        saveData();
        render();
        showToast('🗑️ ' + (currentLanguage === 'en' ? 'All data has been deleted!' : 'Semua data telah dihapus!'), 3000);
    }
}

// --- FUNGSI PENYIMPANAN LOKAL BARU ---
function checkStorageUsage() {
    let totalSize = 0;
    
    // Hitung ukuran semua data di localStorage
    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const size = (value.length * 2) / 1024; // Ukuran dalam KB
        totalSize += size;
    }
    
    if (totalSize > 0) {
        showToast('💾 ' + t('storage-info', {size: totalSize.toFixed(2)}), 3000);
    } else {
        showToast('💾 ' + t('storage-empty'), 2000);
    }
}

function clearAllStorage() {
    const confirmClear = confirm(t('confirm-clear-storage'));
    if (confirmClear) {
        // Hapus semua data localStorage untuk aplikasi ini
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(LANGUAGE_KEY);
        localStorage.removeItem('theme');
        
        // Reset aplikasi dengan bahasa default (id)
        currentLanguage = 'id';
        appData = JSON.parse(JSON.stringify(defaultData[currentLanguage]));
        
        // Terapkan ulang
        applyLanguage();
        render();
        
        // Tampilkan notifikasi
        showToast('🧹 ' + t('storage-cleared'), 3000);
        showToast('🔄 ' + (currentLanguage === 'en' ? 'App has been reset to factory settings!' : 'Aplikasi telah direset ke pengaturan pabrik!'), 3000);
    }
}

function showStorageNotification() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const dataSize = (savedData.length * 2) / 1024; // Ukuran dalam KB
        showToast('💾 ' + t('storage-info', {size: dataSize.toFixed(2)}), 4000);
    }
}

function showSaveNotification() {
    const message = currentLanguage === 'en' 
        ? '💾 Data saved to browser cache (NO EXPIRATION!)' 
        : '💾 Data tersimpan di cache browser (TANPA KADALUARSA!)';
    showToast(message, 2000);
}

// Fungsi toast yang dapat dikustomisasi dengan animasi
function showToast(message, duration = 2000) {
    const toast = document.getElementById('toast');
    const toastText = document.getElementById('toast-text');
    
    toastText.textContent = message;
    toast.classList.add('copy-success');
    toast.className = "show";
    
    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
        toast.classList.remove('copy-success');
    }, duration);
}

// --- 6. RENDER SYSTEM ---
function render() {
    const container = document.getElementById('app-container');
    container.innerHTML = '';

    if (appData.length === 0) {
        container.innerHTML = `<div class="empty-state">${t('empty-state')}</div>`;
        return;
    }

    // Buat dua kolom untuk desktop
    if (window.innerWidth >= 768) {
        const leftColumn = document.createElement('div');
        leftColumn.className = 'left-column';
        const rightColumn = document.createElement('div');
        rightColumn.className = 'right-column';

        // Bagi data menjadi dua bagian untuk dua kolom
        const midPoint = Math.ceil(appData.length / 2);
        const leftData = appData.slice(0, midPoint);
        const rightData = appData.slice(midPoint);

        // Render kolom kiri
        leftData.forEach((cat, catIndex) => {
            const catDiv = createCategoryItem(cat, catIndex);
            leftColumn.appendChild(catDiv);
        });

        // Render kolom kanan
        rightData.forEach((cat, catIndex) => {
            const actualIndex = catIndex + midPoint;
            const catDiv = createCategoryItem(cat, actualIndex);
            rightColumn.appendChild(catDiv);
        });

        container.appendChild(leftColumn);
        container.appendChild(rightColumn);
    } else {
        // Untuk mobile, render semua dalam satu kolom
        appData.forEach((cat, catIndex) => {
            const catDiv = createCategoryItem(cat, catIndex);
            container.appendChild(catDiv);
        });
    }

    // Inisialisasi Sortable
    initializeSortable();
}

// Fungsi untuk membuat item kategori
function createCategoryItem(cat, catIndex) {
    const catDiv = document.createElement('div');
    catDiv.className = 'category-item';
    catDiv.id = `cat-item-${cat.id}`;
    catDiv.dataset.index = catIndex;
    catDiv.style.setProperty('--color-cat', cat.color || 'var(--color-cat-default)');

    // Panel awalnya TERTUTUP (tidak ada class 'open')
    catDiv.innerHTML = `
        <div class="category-header">
            <div class="drag-handle cat-handle"><i class="fas fa-grip-lines"></i></div>
            <div class="header-content" onclick="togglePanel('panel-${cat.id}', 'cat-item-${cat.id}', event)">
                <i class="fas ${cat.icon || 'fa-folder'}" style="color:var(--color-cat)"></i>
                <span id="txt-cat-${cat.id}">${cat.title}</span>
            </div>
            <div style="display:flex; gap:4px;">
                <button class="btn-icon btn-top" id="btn-edit-cat-${cat.id}" onclick="editCatMode('${cat.id}', ${catIndex}, event)"><i class="fas fa-pen"></i></button>
                <button class="btn-icon btn-top hidden" id="btn-save-cat-${cat.id}" onclick="saveCat('${cat.id}', ${catIndex}, event)" style="color:var(--success); border-color:var(--success)"><i class="fas fa-check"></i></button>
                <button class="btn-icon btn-top" onclick="deleteCat(${catIndex}, event)" style="color:var(--danger); border-color:var(--danger)"><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>
        
        <div class="panel" id="panel-${cat.id}"> <!-- Tidak ada class 'open' di sini -->
            <div class="list-scripts" data-cat-index="${catIndex}"></div>
            <button class="btn" style="width:100%; justify-content:center; margin-top:10px; border-style:dashed;" onclick="addNewItem(${catIndex})">
                <i class="fas fa-plus"></i> ${t('add-message')}
            </button>
        </div>
    `;

    const listContainer = catDiv.querySelector('.list-scripts');
    cat.items.forEach((item, itemIndex) => {
        const card = document.createElement('div');
        card.className = 'script-card';
        card.innerHTML = `
            <div class="card-header">
                <div class="card-title">${item.title}</div>
                <div class="drag-handle card-handle"><i class="fas fa-bars"></i></div>
            </div>

            <div id="view-${item.id}">
                <div class="card-body" onclick="copyText('${item.text.replace(/'/g, "\\'")}', '${item.title.replace(/'/g, "\\'")}')">${item.text}</div>
                <div class="tap-hint">${t('tap-hint')}</div>
                
                <div class="btn-group" id="act-${item.id}" style="margin-top:8px;">
                    <button class="btn btn-danger" onclick="deleteItem(${catIndex}, ${itemIndex}, event)"><i class="fas fa-trash-alt"></i> ${t('delete-item')}</button>
                    <button class="btn" onclick="toggleEditItem('${item.id}', event)"><i class="fas fa-pen"></i> ${t('edit-btn')}</button>
                </div>
            </div>

            <div id="edit-${item.id}" class="edit-area hidden">
                <div id="alert-${item.id}" class="risk-alert hidden"></div>
                <input type="text" id="inp-title-${item.id}" class="form-input" value="${item.title}" placeholder="${t('message-title')}">
                <textarea id="inp-text-${item.id}" class="form-input" onkeyup="handleInputCheck('${item.id}')" placeholder="${t('message-content')}">${item.text}</textarea>
                <div class="btn-group">
                    <button class="btn btn-danger" onclick="deleteItem(${catIndex}, ${itemIndex})"><i class="fas fa-trash-alt"></i> ${t('delete-item')}</button>
                    <button class="btn" onclick="toggleEditItem('${item.id}')">${t('cancel-btn')}</button>
                    <button class="btn btn-primary" onclick="saveItem('${item.id}', ${catIndex}, ${itemIndex})"><i class="fas fa-save"></i> ${t('save-btn')}</button>
                </div>
            </div>
        `;
        listContainer.appendChild(card);
    });

    return catDiv;
}

// Inisialisasi Sortable
function initializeSortable() {
    // Inisialisasi Sortable untuk script cards dalam setiap kategori
    document.querySelectorAll('.list-scripts').forEach(listContainer => {
        if (listContainer.children.length > 0) {
            new Sortable(listContainer, { 
                group: 'shared', 
                animation: 150, 
                handle: '.card-handle', 
                onEnd: rebuildData,
                ghostClass: 'sortable-ghost',
                chosenClass: 'sortable-chosen'
            });
        }
    });

    // Inisialisasi Sortable untuk kategori di setiap kolom
    if (window.innerWidth >= 768) {
        // Untuk desktop, kita punya dua kolom
        document.querySelectorAll('.left-column, .right-column').forEach(column => {
            if (column.children.length > 0) {
                new Sortable(column, { 
                    animation: 150, 
                    handle: '.cat-handle', 
                    onEnd: function(evt) {
                        // Rebuild data berdasarkan urutan baru
                        rebuildCategoryOrder();
                    },
                    ghostClass: 'sortable-ghost',
                    chosenClass: 'sortable-chosen'
                });
            }
        });
    } else {
        // Untuk mobile, semua kategori dalam satu container
        const container = document.getElementById('app-container');
        if (container.children.length > 0) {
            new Sortable(container, { 
                animation: 150, 
                handle: '.cat-handle', 
                onEnd: function(evt) {
                    // Rebuild data berdasarkan urutan baru
                    rebuildCategoryOrder();
                },
                ghostClass: 'sortable-ghost',
                chosenClass: 'sortable-chosen'
            });
        }
    }
}

// Rebuild urutan kategori
function rebuildCategoryOrder() {
    const newAppData = [];
    
    if (window.innerWidth >= 768) {
        // Untuk desktop, gabungkan kembali data dari kedua kolom
        const leftColumn = document.querySelector('.left-column');
        const rightColumn = document.querySelector('.right-column');
        
        if (leftColumn) {
            leftColumn.querySelectorAll('.category-item').forEach(catEl => {
                const index = parseInt(catEl.dataset.index);
                if (index < appData.length) {
                    newAppData.push(appData[index]);
                }
            });
        }
        
        if (rightColumn) {
            rightColumn.querySelectorAll('.category-item').forEach(catEl => {
                const index = parseInt(catEl.dataset.index);
                if (index < appData.length) {
                    newAppData.push(appData[index]);
                }
            });
        }
    } else {
        // Untuk mobile
        const container = document.getElementById('app-container');
        container.querySelectorAll('.category-item').forEach(catEl => {
            const index = parseInt(catEl.dataset.index);
            if (index < appData.length) {
                newAppData.push(appData[index]);
            }
        });
    }
    
    appData = newAppData;
    saveData();
}

// --- 7. INTERACTION LOGIC ---
function toggleTheme(e) {
    const theme = e.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    const message = theme === 'dark' 
        ? '🌙 Dark mode activated' 
        : '☀️ Light mode activated';
    showToast(message, 2000);
}

// PERBAIKAN: Variabel untuk melacak panel yang sedang terbuka PER KOLOM
// Untuk mobile (satu kolom) dan desktop (dua kolom)
let currentlyOpenPanels = { left: null, right: null };

function togglePanel(panelId, parentId, e) {
    // Cek apakah yang diklik adalah input field (saat mode edit)
    if (e && e.target.tagName === 'INPUT') return; 

    const panel = document.getElementById(panelId);
    const parentDiv = document.getElementById(parentId);
    
    // Tentukan kolom mana (kiri atau kanan)
    let column = 'left';
    if (window.innerWidth >= 768) {
        // Untuk desktop dengan dua kolom
        const leftColumn = document.querySelector('.left-column');
        const rightColumn = document.querySelector('.right-column');
        
        if (leftColumn && leftColumn.contains(parentDiv)) {
            column = 'left';
        } else if (rightColumn && rightColumn.contains(parentDiv)) {
            column = 'right';
        }
    } else {
        // Untuk mobile (hanya satu kolom), semua panel dianggap di kolom 'left'
        column = 'left';
    }
    
    // Jika panel ini sudah terbuka, tutup saja
    if (panel.classList.contains('open')) {
        panel.classList.remove('open');
        parentDiv.classList.remove('active-parent');
        currentlyOpenPanels[column] = null;
        return;
    }
    
    // PERBAIKAN: Hanya tutup panel di kolom yang sama (kiri hanya tutup kiri, kanan hanya tutup kanan)
    if (currentlyOpenPanels[column] && currentlyOpenPanels[column] !== panel) {
        currentlyOpenPanels[column].classList.remove('open');
        const previousParent = currentlyOpenPanels[column].parentElement;
        if (previousParent) {
            previousParent.classList.remove('active-parent');
        }
    }
    
    // Buka panel yang baru diklik
    panel.classList.add('open');
    parentDiv.classList.add('active-parent');
    currentlyOpenPanels[column] = panel;
}

function checkContent(text) {
    return BANNED_KEYWORDS.filter(word => text.toLowerCase().includes(word));
}

function handleInputCheck(itemId) {
    const text = document.getElementById(`inp-text-${itemId}`).value;
    const alertBox = document.getElementById(`alert-${itemId}`);
    const violations = checkContent(text);
    if (violations.length > 0) {
        alertBox.classList.remove('hidden');
        alertBox.innerHTML = `<i class="fas fa-exclamation-triangle"></i> <b>${t('warning-title')}:</b> ${t('warning-banned', {words: violations.join(', ')})}`;
    } else {
        alertBox.classList.add('hidden');
    }
}

// --- MODAL FUNCTIONS ---
function showCreateFolderModal() {
    const modal = document.getElementById('createFolderModal');
    const input = document.getElementById('newFolderName');
    
    // Update modal text
    updateModalText();
    
    // Show modal
    modal.classList.add('active');
    
    // Focus on input
    setTimeout(() => {
        input.focus();
        input.select();
    }, 100);
}

function hideCreateFolderModal() {
    const modal = document.getElementById('createFolderModal');
    modal.classList.remove('active');
}

function createNewFolderFromModal() {
    const input = document.getElementById('newFolderName');
    const folderName = input.value.trim();
    
    if (!folderName) {
        showToast('❌ ' + (currentLanguage === 'en' ? 'Please enter a folder name!' : 'Harap masukkan nama folder!'), 2000);
        return;
    }
    
    const newId = Date.now();
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    
    // Example item based on current language
    const exampleItem = {
        id: 'example_' + Date.now(),
        title: currentLanguage === 'en' ? 'Example Message' : 'Contoh Pesan',
        text: currentLanguage === 'en' 
            ? 'Hi! This is an example message. Click on this text to copy it to clipboard. You can edit this message or add new ones using the "Add Message" button below. 😊'
            : 'Hai! Ini adalah contoh pesan. Klik teks ini untuk menyalin ke clipboard. Anda bisa mengedit pesan ini atau menambah yang baru menggunakan tombol "Tambah Pesan" di bawah. 😊'
    };
    
    const newCategory = {
        id: newId,
        title: folderName,
        icon: 'fa-folder',
        color: randomColor,
        items: [exampleItem] // Add example item
    };
    
    appData.push(newCategory);
    saveData();
    render();
    
    // Hide modal
    hideCreateFolderModal();
    
    // Reset input
    input.value = t('category-default');
    
    // Show success message
    const message = currentLanguage === 'en'
        ? `📁 Folder "${folderName}" created with example message!`
        : `📁 Folder "${folderName}" dibuat dengan contoh pesan!`;
    showToast(message, 3000);
    
    // Auto-open the new folder
    setTimeout(() => {
        const panel = document.getElementById(`panel-${newId}`);
        const parentDiv = document.getElementById(`cat-item-${newId}`);
        
        if (panel && parentDiv) {
            panel.classList.add('open');
            parentDiv.classList.add('active-parent');
            
            // Determine column
            let column = 'left';
            if (window.innerWidth >= 768) {
                const leftColumn = document.querySelector('.left-column');
                const rightColumn = document.querySelector('.right-column');
                
                if (leftColumn && leftColumn.contains(parentDiv)) {
                    column = 'left';
                } else if (rightColumn && rightColumn.contains(parentDiv)) {
                    column = 'right';
                }
            }
            
            currentlyOpenPanels[column] = panel;
        }
        
        // Scroll to new folder
        window.scrollTo(0, document.body.scrollHeight);
    }, 100);
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const modal = document.getElementById('createFolderModal');
    const modalContent = document.querySelector('.modal');
    
    if (modal.classList.contains('active') && !modalContent.contains(event.target) && 
        !event.target.classList.contains('fab') && 
        !event.target.closest('.fab')) {
        hideCreateFolderModal();
    }
});

// --- CRUD ACTIONS ---

// Logika Edit Kategori Menu (Langsung)
function editCatMode(id, index, e) {
    e.stopPropagation();
    
    const contentDiv = document.getElementById(`txt-cat-${id}`).parentNode;
    const spanTitle = document.getElementById(`txt-cat-${id}`);
    
    // 1. Buat input field baru
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = `inp-cat-${id}`;
    inputField.value = spanTitle.innerText;
    inputField.onclick = (e) => e.stopPropagation(); // Cegah toggle panel saat klik input
    
    // 2. Ganti span dengan input
    contentDiv.replaceChild(inputField, spanTitle);

    // 3. Ganti tombol aksi
    document.getElementById(`btn-edit-cat-${id}`).classList.add('hidden');
    document.getElementById(`btn-save-cat-${id}`).classList.remove('hidden');
    inputField.focus();
}

// Logika Simpan Kategori Menu (Langsung)
function saveCat(id, index, e) {
    e.stopPropagation();
    const inputField = document.getElementById(`inp-cat-${id}`);
    
    if (inputField) {
        appData[index].title = inputField.value;
        saveData(); 
        // Render ulang untuk mengembalikan ke tampilan span yang baru
        render(); 
    }
}

function deleteCat(index, e) {
    e.stopPropagation();
    if(confirm(t('confirm-delete-category'))) { 
        appData.splice(index, 1); 
        saveData(); 
        render(); 
    }
}

function toggleEditItem(itemId, e) {
    if(e) e.stopPropagation();
    const view = document.getElementById(`view-${itemId}`);
    const edit = document.getElementById(`edit-${itemId}`);
    
    if(edit.classList.contains('hidden')){
        view.classList.add('hidden'); 
        edit.classList.remove('hidden');
        handleInputCheck(itemId);
    } else {
        view.classList.remove('hidden'); 
        edit.classList.add('hidden');
    }
}

function saveItem(itemId, catIndex, itemIndex) {
    const text = document.getElementById(`inp-text-${itemId}`).value;
    const violations = checkContent(text);
    if (violations.length > 0 && !confirm(t('confirm-banned-words', {violations: violations.join(', ')}))) return;
    
    appData[catIndex].items[itemIndex].title = document.getElementById(`inp-title-${itemId}`).value;
    appData[catIndex].items[itemIndex].text = text;
    saveData(); 
    
    // Dapatkan ID kategori sebelum render
    const catId = appData[catIndex].id;
    
    render();
    // Re-open panel
    setTimeout(() => {
        const panel = document.getElementById(`panel-${catId}`);
        const parentDiv = document.getElementById(`cat-item-${catId}`);
        
        if (panel && parentDiv) {
            panel.classList.add('open');
            parentDiv.classList.add('active-parent');
            
            // Update currentlyOpenPanels
            let column = 'left';
            if (window.innerWidth >= 768) {
                const leftColumn = document.querySelector('.left-column');
                const rightColumn = document.querySelector('.right-column');
                
                if (leftColumn && leftColumn.contains(parentDiv)) {
                    column = 'left';
                } else if (rightColumn && rightColumn.contains(parentDiv)) {
                    column = 'right';
                }
            }
            
            currentlyOpenPanels[column] = panel;
        }
    }, 50);
}

function deleteItem(catIndex, itemIndex, e) {
    if(e) e.stopPropagation();

    if(confirm(t('confirm-delete-message'))) {
        const catId = appData[catIndex].id;
        appData[catIndex].items.splice(itemIndex, 1);
        saveData(); 
        
        if (appData[catIndex].items.length > 0) {
             render();
            setTimeout(() => {
                const panel = document.getElementById(`panel-${catId}`);
                const parentDiv = document.getElementById(`cat-item-${catId}`);
                
                if (panel && parentDiv) {
                    panel.classList.add('open');
                    parentDiv.classList.add('active-parent');
                    
                    // Update currentlyOpenPanels
                    let column = 'left';
                    if (window.innerWidth >= 768) {
                        const leftColumn = document.querySelector('.left-column');
                        const rightColumn = document.querySelector('.right-column');
                        
                        if (leftColumn && leftColumn.contains(parentDiv)) {
                            column = 'left';
                        } else if (rightColumn && rightColumn.contains(parentDiv)) {
                            column = 'right';
                        }
                    }
                    
                    currentlyOpenPanels[column] = panel;
                }
            }, 50);
        } else {
            render();
        }
    }
}

function addNewItem(catIndex) {
    appData[catIndex].items.push({ 
        id: Date.now(), 
        title: t('message-title'), 
        text: t('message-content') 
    });
    saveData(); 
    render();
    setTimeout(() => {
        const catId = appData[catIndex].id;
        const panel = document.getElementById(`panel-${catId}`);
        const parentDiv = document.getElementById(`cat-item-${catId}`);
        
        if (panel && parentDiv) {
            panel.classList.add('open');
            parentDiv.classList.add('active-parent');
            
            // Update currentlyOpenPanels
            let column = 'left';
            if (window.innerWidth >= 768) {
                const leftColumn = document.querySelector('.left-column');
                const rightColumn = document.querySelector('.right-column');
                
                if (leftColumn && leftColumn.contains(parentDiv)) {
                    column = 'left';
                } else if (rightColumn && rightColumn.contains(parentDiv)) {
                    column = 'right';
                }
            }
            
            currentlyOpenPanels[column] = panel;
        }
    }, 50);
}

function rebuildData() {
    const newAppData = [];
    document.querySelectorAll('.category-item').forEach(catEl => {
        const oldIndex = catEl.dataset.index;
        if (oldIndex < appData.length) {
            const baseCat = appData[oldIndex];
            const newItems = [];
            catEl.querySelectorAll('.script-card').forEach(itemEl => {
                const title = itemEl.querySelector('.card-title').innerText;
                const body = itemEl.querySelector('.card-body').innerText;
                newItems.push({ id: 'm'+Math.random().toString(36).substr(2,9), title: title, text: body });
            });
            baseCat.items = newItems;
            newAppData.push(baseCat);
        }
    });
    appData = newAppData;
    saveData();
}

function copyText(txt, title = '') {
    // Fallback untuk perangkat mobile
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(txt).then(() => {
            showCopySuccess(title);
        }).catch(err => {
            fallbackCopyText(txt, title);
        });
    } else {
        fallbackCopyText(txt, title);
    }
}

function fallbackCopyText(txt, title = '') {
    const textArea = document.createElement("textarea");
    textArea.value = txt;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        document.execCommand('copy');
        showCopySuccess(title);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        showToast('❌ Copy failed!', 2000);
    }
    document.body.removeChild(textArea);
}

function showCopySuccess(title = '') {
    const toastText = document.getElementById('toast-text');
    const successMessage = title 
        ? `✅ Copied: "${title}"`
        : t('toast-text');
    
    showToast(successMessage, 2000);
}

// Init App
document.addEventListener('DOMContentLoaded', init);
