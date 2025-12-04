// ===================== 12 GLOBAL LANGUAGES DATA =====================
const LANGUAGES = {
    'en': { name: 'English', flag: '🇺🇸', native: 'English' },
    'id': { name: 'Indonesian', flag: '🇮🇩', native: 'Bahasa Indonesia' },
    'zh': { name: 'Chinese', flag: '🇨🇳', native: '中文' },
    'es': { name: 'Spanish', flag: '🇪🇸', native: 'Español' },
    'ru': { name: 'Russian', flag: '🇷🇺', native: 'Русский' },
    'ar': { name: 'Arabic', flag: '🇸🇦', native: 'العربية' },
    'pt': { name: 'Portuguese', flag: '🇵🇹', native: 'Português' },
    'fr': { name: 'French', flag: '🇫🇷', native: 'Français' },
    'ja': { name: 'Japanese', flag: '🇯🇵', native: '日本語' },
    'de': { name: 'German', flag: '🇩🇪', native: 'Deutsch' },
    'ko': { name: 'Korean', flag: '🇰🇷', native: '한국어' },
    'tl': { name: 'Filipino', flag: '🇵🇭', native: 'Filipino' }
};

// ===================== TRANSLATIONS =====================
const translations = {
    'en': {
        'app-title': 'Seller Chat Assistant Pro',
        'reset-btn': 'Reset',
        'delete-btn': 'Delete All',
        'info-title': 'IMPORTANT INFO:',
        'info-text': 'Supports 12 languages! Works for eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy and more!',
        'toast-text': '✅ Text copied successfully!',
        'category-default': 'New Folder Name',
        'add-message': 'Add Message',
        'message-title': 'Message Title',
        'message-content': 'Write reply here... (Supports ALL languages!)',
        'tap-hint': 'Tap text above to copy',
        'delete-item': 'Delete',
        'edit-btn': 'Edit',
        'cancel-btn': 'Cancel',
        'save-btn': 'Save',
        'confirm-reset': '⚠️ WARNING: All your script data will be deleted and restored to factory settings.\n\nAre you sure?',
        'confirm-delete-all': '⚠️ CRITICAL WARNING: All menus and scripts will be COMPLETELY DELETED!\n\nYou will have to create them again from scratch.\nAre you sure?',
        'confirm-delete-category': 'Delete this category folder?',
        'confirm-delete-message': 'Delete this message?',
        'confirm-banned-words': '⚠️ There are banned words (${violations}). Are you sure you want to save?',
        'success-reset': 'Data successfully restored to default.',
        'empty-state': 'No menus saved yet.<br>Click the (+) button below to create a new one.',
        'warning-title': 'WARNING',
        'warning-banned': 'Words "${words}" are banned.',
        'current-lang': 'EN',
        'storage-title': 'LOCAL STORAGE:',
        'storage-text': 'All data saved automatically in browser - NO EXPIRATION! Works offline. Supports 12 languages!',
        'check-storage-btn': 'Check Storage',
        'clear-storage-btn': 'Clear All',
        'confirm-clear-storage': '⚠️ WARNING: All data including theme and language will be removed from browser cache.\n\nApp will return to factory settings.\nAre you sure?',
        'storage-cleared': '✅ All cache data has been cleared.',
        'storage-info': 'Data stored: ${size} KB (Supports 12 languages!)',
        'storage-empty': 'No data stored',
        'modal-title': 'Create New Folder',
        'folder-name-label': 'Folder Name:',
        'folder-name-hint': 'Enter a descriptive name for your new folder (e.g., "Welcome Messages", "Shipping Info", etc.)',
        'example-title': '📁 Example Folder Created:',
        'example-text': 'After creating, this folder will contain:<br>1. An example message showing how to use<br>2. You can add more messages by clicking "Add Message"<br>3. Tap any message text to copy it to clipboard<br>4. Edit or delete messages using the buttons',
        'cancel-btn-modal': 'Cancel',
        'create-btn': 'Create Folder',
        'platforms': 'Works for: eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy'
    },
    'id': {
        'app-title': 'Seller Chat Assistant Pro',
        'reset-btn': 'Reset',
        'delete-btn': 'Hapus Semua',
        'info-title': 'INFO PENTING:',
        'info-text': 'Mendukung 12 bahasa! Cocok untuk eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy dan lainnya!',
        'toast-text': '✅ Teks berhasil disalin!',
        'category-default': 'Nama Folder Baru',
        'add-message': 'Tambah Pesan',
        'message-title': 'Judul Pesan',
        'message-content': 'Tulis balasan di sini... (Mendukung SEMUA bahasa!)',
        'tap-hint': 'Tap teks di atas untuk menyalin',
        'delete-item': 'Hapus',
        'edit-btn': 'Edit',
        'cancel-btn': 'Batal',
        'save-btn': 'Simpan',
        'confirm-reset': '⚠️ PERINGATAN: Semua data script Anda akan dihapus dan dikembalikan ke pengaturan awal.\n\nApakah Anda yakin?',
        'confirm-delete-all': '⚠️ PERINGATAN KERAS: Menu dan semua script akan dihapus TOTAL!\n\nAnda harus membuatnya lagi dari nol.\nApakah Anda yakin?',
        'confirm-delete-category': 'Hapus kategori folder ini?',
        'confirm-delete-message': 'Hapus pesan ini?',
        'confirm-banned-words': '⚠️ Ada kata terlarang (${violations}). Yakin simpan?',
        'success-reset': 'Data berhasil dikembalikan ke default.',
        'empty-state': 'Belum ada menu tersimpan.<br>Klik tombol (+) di bawah untuk membuat baru.',
        'warning-title': 'PERINGATAN',
        'warning-banned': 'Kata "${words}" dilarang.',
        'current-lang': 'ID',
        'storage-title': 'PENYIMPANAN LOKAL:',
        'storage-text': 'Semua data disimpan otomatis di browser - TANPA KADALUARSA! Bekerja offline. Mendukung 12 bahasa!',
        'check-storage-btn': 'Cek Storage',
        'clear-storage-btn': 'Bersihkan Semua',
        'confirm-clear-storage': '⚠️ PERINGATAN: Semua data termasuk tema dan bahasa akan dihapus dari cache browser.\n\nAplikasi akan kembali ke pengaturan pabrik.\nApakah Anda yakin?',
        'storage-cleared': '✅ Semua data cache telah dibersihkan.',
        'storage-info': 'Data tersimpan: ${size} KB (Mendukung 12 bahasa!)',
        'storage-empty': 'Tidak ada data tersimpan',
        'modal-title': 'Buat Folder Baru',
        'folder-name-label': 'Nama Folder:',
        'folder-name-hint': 'Masukkan nama deskriptif untuk folder baru Anda (contoh: "Pesan Selamat Datang", "Info Pengiriman", dll.)',
        'example-title': '📁 Contoh Folder yang Dibuat:',
        'example-text': 'Setelah dibuat, folder ini akan berisi:<br>1. Contoh pesan yang menunjukkan cara penggunaan<br>2. Anda bisa tambah pesan dengan klik "Tambah Pesan"<br>3. Tap teks pesan apa saja untuk menyalin ke clipboard<br>4. Edit atau hapus pesan menggunakan tombol',
        'cancel-btn-modal': 'Batal',
        'create-btn': 'Buat Folder',
        'platforms': 'Cocok untuk: eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy'
    },
    'zh': {
        'app-title': '卖家聊天助手专业版',
        'reset-btn': '重置',
        'delete-btn': '删除所有',
        'info-title': '重要信息:',
        'info-text': '支持12种语言！适用于eBay、Amazon、TikTok Shop、Shopee、Lazada、AliExpress、Mercari、Etsy等平台！',
        'toast-text': '✅ 文本复制成功！',
        'category-default': '新文件夹名称',
        'add-message': '添加消息',
        'message-title': '消息标题',
        'message-content': '在此处写回复... (支持所有语言！)',
        'tap-hint': '点击上方文本复制',
        'delete-item': '删除',
        'edit-btn': '编辑',
        'cancel-btn': '取消',
        'save-btn': '保存',
        'confirm-reset': '⚠️ 警告：您的所有脚本数据将被删除并恢复为出厂设置。\n\n您确定吗？',
        'confirm-delete-all': '⚠️ 严重警告：所有菜单和脚本将被完全删除！\n\n您必须从头开始重新创建。\n您确定吗？',
        'confirm-delete-category': '删除此类别文件夹？',
        'confirm-delete-message': '删除此消息？',
        'confirm-banned-words': '⚠️ 存在违禁词 (${violations})。确定要保存吗？',
        'success-reset': '数据已成功恢复为默认值。',
        'empty-state': '尚未保存任何菜单。<br>点击下方的 (+) 按钮创建一个新菜单。',
        'warning-title': '警告',
        'warning-banned': '词语 "${words}" 被禁止。',
        'current-lang': '中文',
        'storage-title': '本地存储:',
        'storage-text': '所有数据自动保存在浏览器中 - 永不过期！离线工作。支持12种语言！',
        'check-storage-btn': '检查存储',
        'clear-storage-btn': '清除所有',
        'confirm-clear-storage': '⚠️ 警告：所有数据（包括主题和语言）将从浏览器缓存中删除。\n\n应用程序将恢复为出厂设置。\n您确定吗？',
        'storage-cleared': '✅ 所有缓存数据已被清除。',
        'storage-info': '已存储数据: ${size} KB (支持12种语言！)',
        'storage-empty': '无存储数据',
        'modal-title': '创建新文件夹',
        'folder-name-label': '文件夹名称:',
        'folder-name-hint': '输入新文件夹的描述性名称（例如："欢迎消息"、"发货信息"等）',
        'example-title': '📁 示例文件夹创建:',
        'example-text': '创建后，此文件夹将包含：<br>1. 显示使用方法的示例消息<br>2. 您可以通过点击"添加消息"添加更多消息<br>3. 点击任何消息文本将其复制到剪贴板<br>4. 使用按钮编辑或删除消息',
        'cancel-btn-modal': '取消',
        'create-btn': '创建文件夹',
        'platforms': '适用于: eBay、Amazon、TikTok Shop、Shopee、Lazada、AliExpress、Mercari、Etsy'
    }
    // Note: Add other languages similarly...
};

// ===================== DEFAULT DATA =====================
const defaultData = {
    'en': [
        { 
            id: 'cat_0', 
            title: 'Stock Availability', 
            icon: 'fa-cubes', 
            color: '#3b82f6', 
            items: [
                { id: 'm01', title: 'In Stock - Ready to Ship', text: 'Hi! This item is IN STOCK and ready to ship immediately. All listed variants are available. Please place your order now before it sells out! 🔥' },
                { id: 'm02', title: 'Out of Stock / Sold Out', text: 'I apologize, but this item is currently OUT OF STOCK. We expect to restock within [timeframe]. Would you like me to notify you when it\'s available again? 🙏' },
                { id: 'm03', title: 'Limited Stock Remaining', text: 'Quick update: Only a few pieces of this item remain in stock! I recommend ordering soon to secure your purchase. 😊' }
            ]
        },
        { 
            id: 'cat_1', 
            title: 'Shipping & Delivery', 
            icon: 'fa-truck-fast', 
            color: '#10b981', 
            items: [
                { id: 'm11', title: 'Shipping Time Estimate', text: 'Orders are processed within 1-2 business days. Delivery typically takes 3-7 business days depending on your location. Tracking will be provided once shipped. 🚚' },
                { id: 'm12', title: 'International Shipping', text: 'Yes, we ship internationally! Shipping costs and delivery times vary by country. Please provide your country for a specific shipping quote. 🌍' },
                { id: 'm13', title: 'Tracking Not Updated', text: 'Sometimes tracking information takes 24-48 hours to update in the system after shipment. Please check again tomorrow. If still no update, let me know! 🙏' }
            ]
        }
        // Add more categories...
    ]
};

// Generate default data for other languages
function generateDefaultDataForAllLanguages() {
    const languageTemplates = {
        'id': {
            'Stock Availability': 'Ketersediaan Stok',
            'Shipping & Delivery': 'Pengiriman & Pengantaran',
            'Returns & Refunds': 'Pengembalian & Refund',
            'Product Information': 'Informasi Produk',
            'Order Issues': 'Masalah Pesanan',
            'Discounts & Bundles': 'Diskon & Paket',
            'Customer Appreciation': 'Apresiasi Pelanggan',
            'Platform Specific': 'Khusus Platform'
        },
        'zh': {
            'Stock Availability': '库存状态',
            'Shipping & Delivery': '运输与交付',
            'Returns & Refunds': '退货与退款',
            'Product Information': '产品信息',
            'Order Issues': '订单问题',
            'Discounts & Bundles': '折扣与捆绑',
            'Customer Appreciation': '客户感谢',
            'Platform Specific': '平台特定'
        }
    };

    for (const langCode in LANGUAGES) {
        if (langCode === 'en') continue;
        
        defaultData[langCode] = JSON.parse(JSON.stringify(defaultData['en']));
        
        if (languageTemplates[langCode]) {
            defaultData[langCode].forEach(category => {
                if (languageTemplates[langCode][category.title]) {
                    category.title = languageTemplates[langCode][category.title];
                }
            });
        }
    }
}

// ===================== APP CONFIGURATION =====================
let appData = [];
const STORAGE_KEY = 'SellerChatAssistantPro_Data';
const BANNED_KEYWORDS = ["whatsapp", "wa ", "08", "no hp", "ig", "instagram", "shopee", "tokopedia", "lazada", "tf", "transfer", "bca", "mandiri", "diluar aplikasi", "external platform", "outside app"];
let currentLanguage = 'en';
const LANGUAGE_KEY = 'SellerChatAssistantPro_Language';
let currentlyOpenPanels = { left: null, right: null };

// ===================== DOM ELEMENTS =====================
const DOM = {
    appContainer: document.getElementById('app-container'),
    langDropdown: document.getElementById('lang-dropdown'),
    currentLang: document.getElementById('current-lang'),
    langCount: document.getElementById('lang-count'),
    checkbox: document.getElementById('checkbox'),
    newFolderName: document.getElementById('newFolderName'),
    createFolderModal: document.getElementById('createFolderModal'),
    toast: document.getElementById('toast'),
    toastText: document.getElementById('toast-text')
};

// ===================== INITIALIZATION =====================
function init() {
    generateDefaultDataForAllLanguages();
    setupLanguageDropdown();
    loadTheme();
    loadLanguage();
    loadData();
    applyLanguage();
    render();
    attachEventListeners();
    
    setTimeout(() => {
        showStorageNotification();
    }, 1000);
    
    console.log('Seller Chat Assistant Pro initialized!');
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (DOM.checkbox) DOM.checkbox.checked = (savedTheme === 'dark');
}

function loadLanguage() {
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    const browserLang = navigator.language.split('-')[0];
    
    if (savedLanguage && LANGUAGES[savedLanguage]) {
        currentLanguage = savedLanguage;
    } else if (LANGUAGES[browserLang]) {
        currentLanguage = browserLang;
    } else {
        currentLanguage = 'en';
    }
    localStorage.setItem(LANGUAGE_KEY, currentLanguage);
}

function loadData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        appData = JSON.parse(savedData);
    } else {
        appData = JSON.parse(JSON.stringify(defaultData[currentLanguage] || defaultData['en']));
    }
}

function setupLanguageDropdown() {
    DOM.langDropdown.innerHTML = '';
    Object.keys(LANGUAGES).forEach(langCode => {
        const lang = LANGUAGES[langCode];
        const option = document.createElement('div');
        option.className = 'lang-option';
        option.dataset.lang = langCode;
        option.innerHTML = `<span>${lang.flag} ${lang.native}</span>`;
        option.onclick = () => changeLanguage(langCode);
        DOM.langDropdown.appendChild(option);
    });
}

// ===================== LANGUAGE FUNCTIONS =====================
function changeLanguage(lang) {
    if (!LANGUAGES[lang]) return;
    
    currentLanguage = lang;
    localStorage.setItem(LANGUAGE_KEY, lang);
    applyLanguage();
    
    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.toggle('active', option.dataset.lang === lang);
    });
    
    DOM.langDropdown.classList.remove('show');
    DOM.currentLang.textContent = LANGUAGES[lang].name.substring(0, 3).toUpperCase();
    updateModalText();
    
    showToast(`🌐 Switched to ${LANGUAGES[lang].name}`, 2000);
}

function applyLanguage() {
    const t = translations[currentLanguage] || translations['en'];
    
    // Update all translatable elements
    document.getElementById('app-title').textContent = t['app-title'];
    document.querySelectorAll('#reset-btn span, #delete-btn span').forEach((el, i) => {
        el.textContent = i === 0 ? t['reset-btn'] : t['delete-btn'];
    });
    document.getElementById('info-title').textContent = t['info-title'];
    document.getElementById('info-text').textContent = t['info-text'];
    document.getElementById('toast-text').textContent = t['toast-text'];
    document.getElementById('storage-title').textContent = t['storage-title'];
    document.getElementById('storage-text').textContent = t['storage-text'];
    document.querySelectorAll('#check-storage-btn span, #clear-storage-btn span').forEach((el, i) => {
        el.textContent = i === 0 ? t['check-storage-btn'] : t['clear-storage-btn'];
    });
    
    document.title = t['app-title'] + ' | MultiLanguage Chat Templates for Sellers';
    
    if (DOM.appContainer.innerHTML !== '') {
        render();
    }
}

function t(key, variables = {}) {
    const lang = currentLanguage;
    let text = (translations[lang] || translations['en'])[key] || key;
    
    Object.keys(variables).forEach(variable => {
        text = text.replace(`\${${variable}}`, variables[variable]);
    });
    
    return text;
}

// ===================== STORAGE FUNCTIONS =====================
function saveData() { 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    showSaveNotification();
}

function resetToDefault() {
    if (confirm(t('confirm-reset'))) {
        appData = JSON.parse(JSON.stringify(defaultData[currentLanguage] || defaultData['en']));
        saveData();
        render();
        showToast('🔄 ' + t('success-reset'), 3000);
    }
}

function deleteAll() {
    if (confirm(t('confirm-delete-all'))) {
        appData = [];
        saveData();
        render();
        showToast('🗑️ All data has been deleted!', 3000);
    }
}

function checkStorageUsage() {
    let totalSize = 0;
    
    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        totalSize += (value.length * 2) / 1024;
    }
    
    if (totalSize > 0) {
        showToast('💾 ' + t('storage-info', {size: totalSize.toFixed(2)}), 3000);
    } else {
        showToast('💾 ' + t('storage-empty'), 2000);
    }
}

function clearAllStorage() {
    if (confirm(t('confirm-clear-storage'))) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(LANGUAGE_KEY);
        localStorage.removeItem('theme');
        
        currentLanguage = 'en';
        appData = JSON.parse(JSON.stringify(defaultData['en']));
        
        applyLanguage();
        render();
        
        showToast('🧹 ' + t('storage-cleared'), 3000);
        showToast('🔄 App has been reset to factory settings!', 3000);
    }
}

function showStorageNotification() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        const dataSize = (savedData.length * 2) / 1024;
        showToast('💾 ' + t('storage-info', {size: dataSize.toFixed(2)}), 4000);
    }
}

function showSaveNotification() {
    showToast('💾 Data saved to browser cache (NO EXPIRATION!)', 2000);
}

// ===================== RENDER FUNCTIONS =====================
function render() {
    DOM.appContainer.innerHTML = '';

    if (appData.length === 0) {
        DOM.appContainer.innerHTML = `<div class="empty-state">${t('empty-state')}</div>`;
        return;
    }

    if (window.innerWidth >= 768) {
        const leftColumn = document.createElement('div');
        leftColumn.className = 'left-column';
        const rightColumn = document.createElement('div');
        rightColumn.className = 'right-column';

        const midPoint = Math.ceil(appData.length / 2);
        const leftData = appData.slice(0, midPoint);
        const rightData = appData.slice(midPoint);

        leftData.forEach((cat, catIndex) => {
            leftColumn.appendChild(createCategoryItem(cat, catIndex));
        });

        rightData.forEach((cat, catIndex) => {
            rightColumn.appendChild(createCategoryItem(cat, catIndex + midPoint));
        });

        DOM.appContainer.appendChild(leftColumn);
        DOM.appContainer.appendChild(rightColumn);
    } else {
        appData.forEach((cat, catIndex) => {
            DOM.appContainer.appendChild(createCategoryItem(cat, catIndex));
        });
    }

    initializeSortable();
}

function createCategoryItem(cat, catIndex) {
    const catDiv = document.createElement('div');
    catDiv.className = 'category-item';
    catDiv.id = `cat-item-${cat.id}`;
    catDiv.dataset.index = catIndex;
    catDiv.style.setProperty('--color-cat', cat.color || 'var(--color-cat-default)');

    catDiv.innerHTML = `
        <div class="category-header">
            <div class="drag-handle cat-handle"><i class="fas fa-grip-lines"></i></div>
            <div class="header-content">
                <i class="fas ${cat.icon || 'fa-folder'}" style="color:var(--color-cat)"></i>
                <span id="txt-cat-${cat.id}">${cat.title}</span>
            </div>
            <div style="display:flex; gap:4px;">
                <button class="btn-icon btn-top" id="btn-edit-cat-${cat.id}"><i class="fas fa-pen"></i></button>
                <button class="btn-icon btn-top hidden" id="btn-save-cat-${cat.id}" style="color:var(--success); border-color:var(--success)"><i class="fas fa-check"></i></button>
                <button class="btn-icon btn-top" style="color:var(--danger); border-color:var(--danger)"><i class="fas fa-trash-alt"></i></button>
            </div>
        </div>
        
        <div class="panel" id="panel-${cat.id}">
            <div class="list-scripts" data-cat-index="${catIndex}"></div>
            <button class="btn" style="width:100%; justify-content:center; margin-top:10px; border-style:dashed;">
                <i class="fas fa-plus"></i> ${t('add-message')}
            </button>
        </div>
    `;

    const headerContent = catDiv.querySelector('.header-content');
    const panel = catDiv.getElementById(`panel-${cat.id}`);
    const editBtn = catDiv.getElementById(`btn-edit-cat-${cat.id}`);
    const saveBtn = catDiv.getElementById(`btn-save-cat-${cat.id}`);
    const deleteBtn = catDiv.querySelector('.btn-icon[style*="color:var(--danger)"]`);
    const addBtn = catDiv.querySelector('.btn[style*="border-style:dashed"]`);

    headerContent.onclick = () => togglePanel(`panel-${cat.id}`, `cat-item-${cat.id}`);
    editBtn.onclick = (e) => editCatMode(cat.id, catIndex, e);
    saveBtn.onclick = (e) => saveCat(cat.id, catIndex, e);
    deleteBtn.onclick = (e) => deleteCat(catIndex, e);
    addBtn.onclick = () => addNewItem(catIndex);

    const listContainer = catDiv.querySelector('.list-scripts');
    cat.items.forEach((item, itemIndex) => {
        listContainer.appendChild(createScriptCard(item, catIndex, itemIndex));
    });

    return catDiv;
}

function createScriptCard(item, catIndex, itemIndex) {
    const card = document.createElement('div');
    card.className = 'script-card';
    card.innerHTML = `
        <div class="card-header">
            <div class="card-title">${item.title}</div>
            <div class="drag-handle card-handle"><i class="fas fa-bars"></i></div>
        </div>

        <div id="view-${item.id}">
            <div class="card-body">${item.text}</div>
            <div class="tap-hint">${t('tap-hint')}</div>
            
            <div class="btn-group" id="act-${item.id}" style="margin-top:8px;">
                <button class="btn btn-danger"><i class="fas fa-trash-alt"></i> ${t('delete-item')}</button>
                <button class="btn"><i class="fas fa-pen"></i> ${t('edit-btn')}</button>
            </div>
        </div>

        <div id="edit-${item.id}" class="edit-area hidden">
            <div id="alert-${item.id}" class="risk-alert hidden"></div>
            <input type="text" id="inp-title-${item.id}" class="form-input" value="${item.title}" placeholder="${t('message-title')}">
            <textarea id="inp-text-${item.id}" class="form-input" placeholder="${t('message-content')}">${item.text}</textarea>
            <div class="btn-group">
                <button class="btn btn-danger"><i class="fas fa-trash-alt"></i> ${t('delete-item')}</button>
                <button class="btn">${t('cancel-btn')}</button>
                <button class="btn btn-primary"><i class="fas fa-save"></i> ${t('save-btn')}</button>
            </div>
        </div>
    `;

    const cardBody = card.querySelector('.card-body');
    const deleteBtn = card.querySelector('.btn-danger');
    const editBtn = card.querySelector('.btn:not(.btn-danger)');
    const cancelBtn = card.querySelector('#edit-' + item.id + ' .btn:not(.btn-danger):not(.btn-primary)');
    const saveBtn = card.querySelector('#edit-' + item.id + ' .btn-primary');
    const textInput = card.getElementById(`inp-text-${item.id}`);

    cardBody.onclick = () => copyText(item.text, item.title);
    deleteBtn.onclick = (e) => {
        e.stopPropagation();
        deleteItem(catIndex, itemIndex, e);
    };
    editBtn.onclick = (e) => toggleEditItem(item.id, e);
    cancelBtn.onclick = () => toggleEditItem(item.id);
    saveBtn.onclick = () => saveItem(item.id, catIndex, itemIndex);
    textInput.onkeyup = () => handleInputCheck(item.id);

    return card;
}

// ===================== EVENT HANDLERS =====================
function attachEventListeners() {
    // Theme toggle
    if (DOM.checkbox) {
        DOM.checkbox.onchange = (e) => toggleTheme(e);
    }
    
    // Language dropdown
    document.querySelector('.lang-btn').onclick = toggleLanguageDropdown;
    document.addEventListener('click', (event) => {
        const dropdown = DOM.langDropdown;
        const langBtn = document.querySelector('.lang-btn');
        if (dropdown && !dropdown.contains(event.target) && !langBtn.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
    
    // Reset and delete buttons
    document.getElementById('reset-btn').onclick = resetToDefault;
    document.getElementById('delete-btn').onclick = deleteAll;
    
    // Storage buttons
    document.getElementById('check-storage-btn').onclick = checkStorageUsage;
    document.getElementById('clear-storage-btn').onclick = clearAllStorage;
    
    // FAB button
    document.getElementById('fab-btn').onclick = showCreateFolderModal;
    
    // Modal buttons
    document.getElementById('modal-close-btn').onclick = hideCreateFolderModal;
    document.getElementById('cancel-modal-btn').onclick = hideCreateFolderModal;
    document.getElementById('create-folder-btn').onclick = createNewFolderFromModal;
    
    // Close modal on outside click
    document.addEventListener('click', (event) => {
        const modal = DOM.createFolderModal;
        const modalContent = document.querySelector('.modal');
        const fabBtn = document.getElementById('fab-btn');
        
        if (modal.classList.contains('active') && 
            !modalContent.contains(event.target) && 
            event.target !== fabBtn && 
            !fabBtn.contains(event.target)) {
            hideCreateFolderModal();
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') hideCreateFolderModal();
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            saveData();
        }
    });
}

function toggleTheme(e) {
    const theme = e.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    showToast(theme === 'dark' ? '🌙 Dark mode activated' : '☀️ Light mode activated', 2000);
}

function toggleLanguageDropdown() {
    DOM.langDropdown.classList.toggle('show');
}

function togglePanel(panelId, parentId) {
    const panel = document.getElementById(panelId);
    const parentDiv = document.getElementById(parentId);
    
    let column = 'left';
    if (window.innerWidth >= 768) {
        const leftColumn = document.querySelector('.left-column');
        const rightColumn = document.querySelector('.right-column');
        column = leftColumn && leftColumn.contains(parentDiv) ? 'left' : 'right';
    }
    
    if (panel.classList.contains('open')) {
        panel.classList.remove('open');
        parentDiv.classList.remove('active-parent');
        currentlyOpenPanels[column] = null;
        return;
    }
    
    if (currentlyOpenPanels[column] && currentlyOpenPanels[column] !== panel) {
        currentlyOpenPanels[column].classList.remove('open');
        const previousParent = currentlyOpenPanels[column].parentElement;
        if (previousParent) previousParent.classList.remove('active-parent');
    }
    
    panel.classList.add('open');
    parentDiv.classList.add('active-parent');
    currentlyOpenPanels[column] = panel;
}

// ===================== CRUD OPERATIONS =====================
function editCatMode(id, index, e) {
    e.stopPropagation();
    
    const contentDiv = document.getElementById(`txt-cat-${id}`).parentNode;
    const spanTitle = document.getElementById(`txt-cat-${id}`);
    
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = `inp-cat-${id}`;
    inputField.value = spanTitle.textContent;
    inputField.onclick = (e) => e.stopPropagation();
    
    contentDiv.replaceChild(inputField, spanTitle);
    document.getElementById(`btn-edit-cat-${id}`).classList.add('hidden');
    document.getElementById(`btn-save-cat-${id}`).classList.remove('hidden');
    inputField.focus();
}

function saveCat(id, index, e) {
    e.stopPropagation();
    const inputField = document.getElementById(`inp-cat-${id}`);
    
    if (inputField) {
        appData[index].title = inputField.value;
        saveData();
        render();
    }
}

function deleteCat(index, e) {
    e.stopPropagation();
    if (confirm(t('confirm-delete-category'))) { 
        appData.splice(index, 1); 
        saveData(); 
        render(); 
    }
}

function toggleEditItem(itemId, e) {
    if (e) e.stopPropagation();
    const view = document.getElementById(`view-${itemId}`);
    const edit = document.getElementById(`edit-${itemId}`);
    
    if (edit.classList.contains('hidden')) {
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
    
    if (violations.length > 0 && !confirm(t('confirm-banned-words', {violations: violations.join(', ')}))) {
        return;
    }
    
    appData[catIndex].items[itemIndex].title = document.getElementById(`inp-title-${itemId}`).value;
    appData[catIndex].items[itemIndex].text = text;
    saveData();
    
    const catId = appData[catIndex].id;
    render();
    
    setTimeout(() => {
        const panel = document.getElementById(`panel-${catId}`);
        const parentDiv = document.getElementById(`cat-item-${catId}`);
        
        if (panel && parentDiv) {
            panel.classList.add('open');
            parentDiv.classList.add('active-parent');
            
            let column = 'left';
            if (window.innerWidth >= 768) {
                const leftColumn = document.querySelector('.left-column');
                const rightColumn = document.querySelector('.right-column');
                column = leftColumn && leftColumn.contains(parentDiv) ? 'left' : 'right';
            }
            
            currentlyOpenPanels[column] = panel;
        }
    }, 50);
}

function deleteItem(catIndex, itemIndex, e) {
    if (e) e.stopPropagation();

    if (confirm(t('confirm-delete-message'))) {
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
                    
                    let column = 'left';
                    if (window.innerWidth >= 768) {
                        const leftColumn = document.querySelector('.left-column');
                        const rightColumn = document.querySelector('.right-column');
                        column = leftColumn && leftColumn.contains(parentDiv) ? 'left' : 'right';
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
            
            let column = 'left';
            if (window.innerWidth >= 768) {
                const leftColumn = document.querySelector('.left-column');
                const rightColumn = document.querySelector('.right-column');
                column = leftColumn && leftColumn.contains(parentDiv) ? 'left' : 'right';
            }
            
            currentlyOpenPanels[column] = panel;
        }
    }, 50);
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

// ===================== MODAL FUNCTIONS =====================
function showCreateFolderModal() {
    updateModalText();
    DOM.createFolderModal.classList.add('active');
    
    setTimeout(() => {
        DOM.newFolderName.focus();
        DOM.newFolderName.select();
    }, 100);
}

function hideCreateFolderModal() {
    DOM.createFolderModal.classList.remove('active');
}

function updateModalText() {
    const t = translations[currentLanguage] || translations['en'];
    
    if (DOM.createFolderModal.classList.contains('active')) {
        document.getElementById('modal-title').textContent = t['modal-title'];
        document.getElementById('folder-name-label').textContent = t['folder-name-label'];
        document.getElementById('folder-name-hint').innerHTML = t['folder-name-hint'];
        document.getElementById('example-title').textContent = t['example-title'];
        document.getElementById('example-text').innerHTML = t['example-text'];
        document.getElementById('cancel-btn-modal').textContent = t['cancel-btn-modal'];
        document.getElementById('create-btn').textContent = t['create-btn'];
        
        DOM.newFolderName.placeholder = t['category-default'];
        if (DOM.newFolderName.value === 'New Folder Name' || DOM.newFolderName.value === 'Nama Folder Baru') {
            DOM.newFolderName.value = t['category-default'];
        }
    }
}

function createNewFolderFromModal() {
    const folderName = DOM.newFolderName.value.trim();
    
    if (!folderName) {
        showToast('❌ Please enter a folder name!', 2000);
        return;
    }
    
    const newId = Date.now();
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    
    const exampleItem = {
        id: 'example_' + Date.now(),
        title: t('message-title'),
        text: t('message-content')
    };
    
    const newCategory = {
        id: newId,
        title: folderName,
        icon: 'fa-folder',
        color: randomColor,
        items: [exampleItem]
    };
    
    appData.push(newCategory);
    saveData();
    render();
    
    hideCreateFolderModal();
    DOM.newFolderName.value = t('category-default');
    
    showToast(`📁 Folder "${folderName}" created!`, 3000);
    
    setTimeout(() => {
        const panel = document.getElementById(`panel-${newId}`);
        const parentDiv = document.getElementById(`cat-item-${newId}`);
        
        if (panel && parentDiv) {
            panel.classList.add('open');
            parentDiv.classList.add('active-parent');
            
            let column = 'left';
            if (window.innerWidth >= 768) {
                const leftColumn = document.querySelector('.left-column');
                const rightColumn = document.querySelector('.right-column');
                column = leftColumn && leftColumn.contains(parentDiv) ? 'left' : 'right';
            }
            
            currentlyOpenPanels[column] = panel;
        }
    }, 100);
}

// ===================== DRAG & DROP =====================
function initializeSortable() {
    document.querySelectorAll('.list-scripts').forEach(listContainer => {
        if (listContainer.children.length > 0) {
            new Sortable(listContainer, { 
                group: 'shared', 
                animation: 150, 
                handle: '.card-handle', 
                onEnd: rebuildData
            });
        }
    });

    if (window.innerWidth >= 768) {
        document.querySelectorAll('.left-column, .right-column').forEach(column => {
            if (column.children.length > 0) {
                new Sortable(column, { 
                    animation: 150, 
                    handle: '.cat-handle', 
                    onEnd: rebuildCategoryOrder
                });
            }
        });
    } else {
        if (DOM.appContainer.children.length > 0) {
            new Sortable(DOM.appContainer, { 
                animation: 150, 
                handle: '.cat-handle', 
                onEnd: rebuildCategoryOrder
            });
        }
    }
}

function rebuildCategoryOrder() {
    const newAppData = [];
    
    if (window.innerWidth >= 768) {
        const leftColumn = document.querySelector('.left-column');
        const rightColumn = document.querySelector('.right-column');
        
        if (leftColumn) {
            leftColumn.querySelectorAll('.category-item').forEach(catEl => {
                const index = parseInt(catEl.dataset.index);
                if (index < appData.length) newAppData.push(appData[index]);
            });
        }
        
        if (rightColumn) {
            rightColumn.querySelectorAll('.category-item').forEach(catEl => {
                const index = parseInt(catEl.dataset.index);
                if (index < appData.length) newAppData.push(appData[index]);
            });
        }
    } else {
        DOM.appContainer.querySelectorAll('.category-item').forEach(catEl => {
            const index = parseInt(catEl.dataset.index);
            if (index < appData.length) newAppData.push(appData[index]);
        });
    }
    
    appData = newAppData;
    saveData();
}

function rebuildData() {
    const newAppData = [];
    document.querySelectorAll('.category-item').forEach(catEl => {
        const oldIndex = catEl.dataset.index;
        if (oldIndex < appData.length) {
            const baseCat = appData[oldIndex];
            const newItems = [];
            catEl.querySelectorAll('.script-card').forEach(itemEl => {
                const title = itemEl.querySelector('.card-title').textContent;
                const body = itemEl.querySelector('.card-body').textContent;
                newItems.push({ id: 'm'+Math.random().toString(36).substr(2,9), title: title, text: body });
            });
            baseCat.items = newItems;
            newAppData.push(baseCat);
        }
    });
    appData = newAppData;
    saveData();
}

// ===================== UTILITY FUNCTIONS =====================
function copyText(txt, title = '') {
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
        showToast('❌ Copy failed!', 2000);
    }
    
    document.body.removeChild(textArea);
}

function showCopySuccess(title = '') {
    const successMessage = title 
        ? `✅ Copied: "${title}"`
        : t('toast-text');
    showToast(successMessage, 2000);
}

function showToast(message, duration = 2000) {
    DOM.toastText.textContent = message;
    DOM.toast.classList.add('copy-success');
    DOM.toast.className = "show";
    
    setTimeout(() => {
        DOM.toast.className = DOM.toast.className.replace("show", "");
        DOM.toast.classList.remove('copy-success');
    }, duration);
}

// ===================== INITIALIZE =====================
document.addEventListener('DOMContentLoaded', init);

// Service Worker for PWA (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(error => {
            console.log('Service Worker registration failed:', error);
        });
    });
}
