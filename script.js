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

// ===================== TRANSLATIONS FOR ALL LANGUAGES =====================
const translations = {
    'en': {
        // ... (keep your existing English translations here)
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
        // ... (keep your existing Indonesian translations here)
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
        'app-title': '卖家聊天助手 Pro',
        'reset-btn': '重置',
        'delete-btn': '删除所有',
        'info-title': '重要信息：',
        'info-text': '支持12种语言！适用于 eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy 等平台！',
        'toast-text': '✅ 文本已成功复制！',
        'category-default': '新文件夹名称',
        'add-message': '添加消息',
        'message-title': '消息标题',
        'message-content': '在此处编写回复...（支持所有语言！）',
        'tap-hint': '点击上方文本即可复制',
        'delete-item': '删除',
        'edit-btn': '编辑',
        'cancel-btn': '取消',
        'save-btn': '保存',
        'confirm-reset': '⚠️ 警告：您的所有脚本数据将被删除并恢复为出厂设置。\n\n您确定吗？',
        'confirm-delete-all': '⚠️ 严重警告：所有菜单和脚本将被彻底删除！\n\n您必须从头开始重新创建。\n您确定吗？',
        'confirm-delete-category': '删除此分类文件夹？',
        'confirm-delete-message': '删除此消息？',
        'confirm-banned-words': '⚠️ 包含违禁词 (${violations})。确定要保存吗？',
        'success-reset': '数据已成功恢复为默认值。',
        'empty-state': '尚无保存的菜单。<br>点击下方的 (+) 按钮创建一个新菜单。',
        'warning-title': '警告',
        'warning-banned': '词语 "${words}" 被禁止使用。',
        'current-lang': 'ZH',
        'storage-title': '本地存储：',
        'storage-text': '所有数据自动保存在浏览器中 - 永不过期！支持离线工作。支持12种语言！',
        'check-storage-btn': '检查存储',
        'clear-storage-btn': '清除所有',
        'confirm-clear-storage': '⚠️ 警告：包括主题和语言在内的所有数据将从浏览器缓存中删除。\n\n应用将恢复出厂设置。\n您确定吗？',
        'storage-cleared': '✅ 所有缓存数据已被清除。',
        'storage-info': '已存储数据：${size} KB（支持12种语言！）',
        'storage-empty': '无存储数据',
        'modal-title': '创建新文件夹',
        'folder-name-label': '文件夹名称：',
        'folder-name-hint': '输入新文件夹的描述性名称（例如：“欢迎消息”，“物流信息”等）',
        'example-title': '📁 创建的示例文件夹：',
        'example-text': '创建后，此文件夹将包含：<br>1. 一个展示如何使用的示例消息<br>2. 点击“添加消息”增加更多内容<br>3. 点击任何消息文本复制到剪贴板<br>4. 使用按钮编辑或删除消息',
        'cancel-btn-modal': '取消',
        'create-btn': '创建文件夹',
        'platforms': '适用于：eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy'
    },

    'es': {
        'app-title': 'Asistente de Chat Pro',
        'reset-btn': 'Reiniciar',
        'delete-btn': 'Borrar Todo',
        'info-title': 'INFO IMPORTANTE:',
        'info-text': '¡Soporta 12 idiomas! ¡Funciona para eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy y más!',
        'toast-text': '✅ ¡Texto copiado con éxito!',
        'category-default': 'Nombre de Carpeta',
        'add-message': 'Añadir Mensaje',
        'message-title': 'Título del Mensaje',
        'message-content': 'Escribe la respuesta aquí... (¡Soporta TODOS los idiomas!)',
        'tap-hint': 'Toca el texto arriba para copiar',
        'delete-item': 'Eliminar',
        'edit-btn': 'Editar',
        'cancel-btn': 'Cancelar',
        'save-btn': 'Guardar',
        'confirm-reset': '⚠️ ADVERTENCIA: Todos tus datos de script serán eliminados y restaurados a la configuración de fábrica.\n\n¿Estás seguro?',
        'confirm-delete-all': '⚠️ ADVERTENCIA CRÍTICA: ¡Todos los menús y scripts serán COMPLETAMENTE ELIMINADOS!\n\nTendrás que crearlos de nuevo desde cero.\n¿Estás seguro?',
        'confirm-delete-category': '¿Eliminar esta carpeta de categoría?',
        'confirm-delete-message': '¿Eliminar este mensaje?',
        'confirm-banned-words': '⚠️ Hay palabras prohibidas (${violations}). ¿Seguro que quieres guardar?',
        'success-reset': 'Datos restaurados a los valores predeterminados con éxito.',
        'empty-state': 'No hay menús guardados aún.<br>Haz clic en el botón (+) abajo para crear uno nuevo.',
        'warning-title': 'ADVERTENCIA',
        'warning-banned': 'Las palabras "${words}" están prohibidas.',
        'current-lang': 'ES',
        'storage-title': 'ALMACENAMIENTO LOCAL:',
        'storage-text': 'Todos los datos se guardan automáticamente en el navegador - ¡SIN CADUCIDAD! Funciona sin conexión.',
        'check-storage-btn': 'Verificar Almacenamiento',
        'clear-storage-btn': 'Borrar Todo',
        'confirm-clear-storage': '⚠️ ADVERTENCIA: Todos los datos, incluyendo tema e idioma, se eliminarán de la caché.\n\nLa aplicación volverá a la configuración de fábrica.\n¿Estás seguro?',
        'storage-cleared': '✅ Todos los datos de caché han sido borrados.',
        'storage-info': 'Datos almacenados: ${size} KB (¡Soporta 12 idiomas!)',
        'storage-empty': 'No hay datos almacenados',
        'modal-title': 'Crear Nueva Carpeta',
        'folder-name-label': 'Nombre de Carpeta:',
        'folder-name-hint': 'Ingresa un nombre descriptivo (ej: "Mensajes de Bienvenida", "Info de Envío", etc.)',
        'example-title': '📁 Carpeta de Ejemplo Creada:',
        'example-text': 'Después de crear, esta carpeta contendrá:<br>1. Un mensaje de ejemplo mostrando cómo usar<br>2. Puedes añadir más mensajes haciendo clic en "Añadir Mensaje"<br>3. Toca cualquier texto para copiarlo al portapapeles<br>4. Edita o elimina mensajes usando los botones',
        'cancel-btn-modal': 'Cancelar',
        'create-btn': 'Crear Carpeta',
        'platforms': 'Funciona para: eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy'
    },

    'ru': {
        'app-title': 'Чат-помощник продавца Pro',
        'reset-btn': 'Сброс',
        'delete-btn': 'Удалить все',
        'info-title': 'ВАЖНАЯ ИНФОРМАЦИЯ:',
        'info-text': 'Поддерживает 12 языков! Работает с eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy и другими!',
        'toast-text': '✅ Текст успешно скопирован!',
        'category-default': 'Новая папка',
        'add-message': 'Добавить',
        'message-title': 'Заголовок сообщения',
        'message-content': 'Напишите ответ здесь... (Поддерживает ВСЕ языки!)',
        'tap-hint': 'Нажмите на текст выше, чтобы скопировать',
        'delete-item': 'Удалить',
        'edit-btn': 'Изменить',
        'cancel-btn': 'Отмена',
        'save-btn': 'Сохранить',
        'confirm-reset': '⚠️ ВНИМАНИЕ: Все ваши скрипты будут удалены, настройки вернутся к заводским.\n\nВы уверены?',
        'confirm-delete-all': '⚠️ КРИТИЧЕСКОЕ ПРЕДУПРЕЖДЕНИЕ: Все меню и скрипты будут ПОЛНОСТЬЮ УДАЛЕНЫ!\n\nВам придется создавать их заново.\nВы уверены?',
        'confirm-delete-category': 'Удалить эту папку категории?',
        'confirm-delete-message': 'Удалить это сообщение?',
        'confirm-banned-words': '⚠️ Обнаружены запрещенные слова (${violations}). Вы уверены, что хотите сохранить?',
        'success-reset': 'Данные успешно восстановлены по умолчанию.',
        'empty-state': 'Меню пока нет.<br>Нажмите кнопку (+) внизу, чтобы создать новое.',
        'warning-title': 'ВНИМАНИЕ',
        'warning-banned': 'Слова "${words}" запрещены.',
        'current-lang': 'RU',
        'storage-title': 'ЛОКАЛЬНОЕ ХРАНИЛИЩЕ:',
        'storage-text': 'Все данные сохраняются автоматически в браузере - БЕЗ СРОКА ДЕЙСТВИЯ! Работает офлайн.',
        'check-storage-btn': 'Проверить память',
        'clear-storage-btn': 'Очистить все',
        'confirm-clear-storage': '⚠️ ВНИМАНИЕ: Все данные, включая тему и язык, будут удалены из кэша браузера.\n\nПриложение вернется к заводским настройкам.\nВы уверены?',
        'storage-cleared': '✅ Весь кэш очищен.',
        'storage-info': 'Сохранено данных: ${size} KB (Поддерживает 12 языков!)',
        'storage-empty': 'Нет сохраненных данных',
        'modal-title': 'Создать новую папку',
        'folder-name-label': 'Имя папки:',
        'folder-name-hint': 'Введите понятное имя для папки (например, "Приветствия", "Информация о доставке" и т.д.)',
        'example-title': '📁 Создана папка с примером:',
        'example-text': 'После создания папка будет содержать:<br>1. Пример сообщения с инструкцией<br>2. Вы можете добавить сообщения кнопкой "Добавить"<br>3. Нажмите на текст сообщения, чтобы скопировать его<br>4. Редактируйте или удаляйте сообщения кнопками',
        'cancel-btn-modal': 'Отмена',
        'create-btn': 'Создать папку',
        'platforms': 'Работает для: eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy'
    },

    'ar': {
        'app-title': 'مساعد دردشة البائع برو',
        'reset-btn': 'إعادة تعيين',
        'delete-btn': 'حذف الكل',
        'info-title': 'معلومات هامة:',
        'info-text': 'يدعم 12 لغة! يعمل مع eBay و Amazon و TikTok Shop و Shopee و Lazada و AliExpress و Mercari و Etsy والمزيد!',
        'toast-text': '✅ تم نسخ النص بنجاح!',
        'category-default': 'اسم المجلد الجديد',
        'add-message': 'إضافة رسالة',
        'message-title': 'عنوان الرسالة',
        'message-content': 'اكتب الرد هنا... (يدعم جميع اللغات!)',
        'tap-hint': 'اضغط على النص أعلاه للنسخ',
        'delete-item': 'حذف',
        'edit-btn': 'تعديل',
        'cancel-btn': 'إلغاء',
        'save-btn': 'حفظ',
        'confirm-reset': '⚠️ تحذير: سيتم حذف جميع بيانات النصوص الخاصة بك واستعادتها إلى إعدادات المصنع.\n\nهل أنت متأكد؟',
        'confirm-delete-all': '⚠️ تحذير هام: سيتم حذف جميع القوائم والنصوص بالكامل!\n\nسيتعين عليك إنشاؤها مرة أخرى من البداية.\nهل أنت متأكد؟',
        'confirm-delete-category': 'حذف مجلد الفئة هذا؟',
        'confirm-delete-message': 'حذف هذه الرسالة؟',
        'confirm-banned-words': '⚠️ توجد كلمات محظورة (${violations}). هل أنت متأكد أنك تريد الحفظ؟',
        'success-reset': 'تم استعادة البيانات الافتراضية بنجاح.',
        'empty-state': 'لا توجد قوائم محفوظة بعد.<br>انقر فوق الزر (+) أدناه لإنشاء قائمة جديدة.',
        'warning-title': 'تحذير',
        'warning-banned': 'الكلمات "${words}" محظورة.',
        'current-lang': 'AR',
        'storage-title': 'التخزين المحلي:',
        'storage-text': 'يتم حفظ جميع البيانات تلقائيًا في المتصفح - بلا انتهاء صلاحية! يعمل دون اتصال بالإنترنت.',
        'check-storage-btn': 'فحص التخزين',
        'clear-storage-btn': 'مسح الكل',
        'confirm-clear-storage': '⚠️ تحذير: سيتم إزالة جميع البيانات بما في ذلك النسق واللغة من ذاكرة التخزين المؤقت للمتصفح.\n\nسيعود التطبيق إلى إعدادات المصنع.\nهل أنت متأكد؟',
        'storage-cleared': '✅ تم مسح جميع بيانات التخزين المؤقت.',
        'storage-info': 'البيانات المخزنة: ${size} كيلوبايت (يدعم 12 لغة!)',
        'storage-empty': 'لا توجد بيانات مخزنة',
        'modal-title': 'إنشاء مجلد جديد',
        'folder-name-label': 'اسم المجلد:',
        'folder-name-hint': 'أدخل اسمًا وصفيًا للمجلد الجديد (مثل "رسائل الترحيب"، "معلومات الشحن"، إلخ)',
        'example-title': '📁 تم إنشاء مجلد مثال:',
        'example-text': 'بعد الإنشاء، سيحتوي هذا المجلد على:<br>1. رسالة مثال توضح كيفية الاستخدام<br>2. يمكنك إضافة المزيد من الرسائل بالنقر فوق "إضافة رسالة"<br>3. اضغط على أي نص رسالة لنسخه إلى الحافظة<br>4. قم بتعديل أو حذف الرسائل باستخدام الأزرار',
        'cancel-btn-modal': 'إلغاء',
        'create-btn': 'إنشاء مجلد',
        'platforms': 'يعمل لـ: eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy'
    },

    'pt': {
        'app-title': 'Assistente de Chat Pro',
        'reset-btn': 'Redefinir',
        'delete-btn': 'Apagar Tudo',
        'info-title': 'INFO IMPORTANTE:',
        'info-text': 'Suporta 12 idiomas! Funciona para eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy e mais!',
        'toast-text': '✅ Texto copiado com sucesso!',
        'category-default': 'Nome da Nova Pasta',
        'add-message': 'Adicionar Mensagem',
        'message-title': 'Título da Mensagem',
        'message-content': 'Escreva a resposta aqui... (Suporta TODOS os idiomas!)',
        'tap-hint': 'Toque no texto acima para copiar',
        'delete-item': 'Apagar',
        'edit-btn': 'Editar',
        'cancel-btn': 'Cancelar',
        'save-btn': 'Salvar',
        'confirm-reset': '⚠️ AVISO: Todos os dados dos seus scripts serão apagados e restaurados para as configurações de fábrica.\n\nTem certeza?',
        'confirm-delete-all': '⚠️ AVISO CRÍTICO: Todos os menus e scripts serão COMPLETAMENTE APAGADOS!\n\nVocê terá que criá-los novamente do zero.\nTem certeza?',
        'confirm-delete-category': 'Apagar esta pasta de categoria?',
        'confirm-delete-message': 'Apagar esta mensagem?',
        'confirm-banned-words': '⚠️ Existem palavras proibidas (${violations}). Tem certeza que deseja salvar?',
        'success-reset': 'Dados restaurados para o padrão com sucesso.',
        'empty-state': 'Nenhum menu salvo ainda.<br>Clique no botão (+) abaixo para criar um novo.',
        'warning-title': 'AVISO',
        'warning-banned': 'As palavras "${words}" são proibidas.',
        'current-lang': 'PT',
        'storage-title': 'ARMAZENAMENTO LOCAL:',
        'storage-text': 'Todos os dados salvos automaticamente no navegador - SEM VALIDADE! Funciona offline.',
        'check-storage-btn': 'Verificar Armazenamento',
        'clear-storage-btn': 'Limpar Tudo',
        'confirm-clear-storage': '⚠️ AVISO: Todos os dados, incluindo tema e idioma, serão removidos do cache do navegador.\n\nO aplicativo retornará às configurações de fábrica.\nTem certeza?',
        'storage-cleared': '✅ Todos os dados de cache foram limpos.',
        'storage-info': 'Dados armazenados: ${size} KB (Suporta 12 idiomas!)',
        'storage-empty': 'Nenhum dado armazenado',
        'modal-title': 'Criar Nova Pasta',
        'folder-name-label': 'Nome da Pasta:',
        'folder-name-hint': 'Digite um nome descritivo para sua nova pasta (ex: "Mensagens de Boas-vindas", "Info de Envio", etc.)',
        'example-title': '📁 Pasta de Exemplo Criada:',
        'example-text': 'Após criar, esta pasta conterá:<br>1. Uma mensagem de exemplo mostrando como usar<br>2. Você pode adicionar mais mensagens clicando em "Adicionar Mensagem"<br>3. Toque em qualquer texto de mensagem para copiar para a área de transferência<br>4. Edite ou apague mensagens usando os botões',
        'cancel-btn-modal': 'Cancelar',
        'create-btn': 'Criar Pasta',
        'platforms': 'Funciona para: eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy'
    },

    'fr': {
        'app-title': 'Assistant Chat Vendeur Pro',
        'reset-btn': 'Réinitialiser',
        'delete-btn': 'Tout Supprimer',
        'info-title': 'INFO IMPORTANTE :',
        'info-text': 'Supporte 12 langues ! Fonctionne pour eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy et plus !',
        'toast-text': '✅ Texte copié avec succès !',
        'category-default': 'Nouveau Dossier',
        'add-message': 'Ajouter Message',
        'message-title': 'Titre du Message',
        'message-content': 'Écrivez votre réponse ici... (Supporte TOUTES les langues !)',
        'tap-hint': 'Touchez le texte ci-dessus pour copier',
        'delete-item': 'Supprimer',
        'edit-btn': 'Éditer',
        'cancel-btn': 'Annuler',
        'save-btn': 'Enregistrer',
        'confirm-reset': '⚠️ ATTENTION : Toutes vos données de script seront supprimées et restaurées aux paramètres d\'usine.\n\nÊtes-vous sûr ?',
        'confirm-delete-all': '⚠️ ALERTE CRITIQUE : Tous les menus et scripts seront COMPLÈTEMENT SUPPRIMÉS !\n\nVous devrez les recréer à partir de zéro.\nÊtes-vous sûr ?',
        'confirm-delete-category': 'Supprimer ce dossier de catégorie ?',
        'confirm-delete-message': 'Supprimer ce message ?',
        'confirm-banned-words': '⚠️ Il y a des mots interdits (${violations}). Êtes-vous sûr de vouloir enregistrer ?',
        'success-reset': 'Données restaurées par défaut avec succès.',
        'empty-state': 'Aucun menu enregistré.<br>Cliquez sur le bouton (+) ci-dessous pour en créer un nouveau.',
        'warning-title': 'ATTENTION',
        'warning-banned': 'Les mots "${words}" sont interdits.',
        'current-lang': 'FR',
        'storage-title': 'STOCKAGE LOCAL :',
        'storage-text': 'Toutes les données sont sauvegardées automatiquement dans le navigateur - SANS EXPIRATION ! Fonctionne hors ligne.',
        'check-storage-btn': 'Vérifier le Stockage',
        'clear-storage-btn': 'Tout Effacer',
        'confirm-clear-storage': '⚠️ ATTENTION : Toutes les données, y compris le thème et la langue, seront supprimées du cache du navigateur.\n\nL\'application reviendra aux réglages d\'usine.\nÊtes-vous sûr ?',
        'storage-cleared': '✅ Toutes les données du cache ont été effacées.',
        'storage-info': 'Données stockées : ${size} KB (Supporte 12 langues !)',
        'storage-empty': 'Aucune donnée stockée',
        'modal-title': 'Créer Nouveau Dossier',
        'folder-name-label': 'Nom du Dossier :',
        'folder-name-hint': 'Entrez un nom descriptif (ex: "Messages de Bienvenue", "Info Livraison", etc.)',
        'example-title': '📁 Dossier Exemple Créé :',
        'example-text': 'Après création, ce dossier contiendra :<br>1. Un exemple de message montrant l\'utilisation<br>2. Ajoutez plus de messages en cliquant sur "Ajouter Message"<br>3. Touchez n\'importe quel texte pour le copier dans le presse-papier<br>4. Modifiez ou supprimez les messages avec les boutons',
        'cancel-btn-modal': 'Annuler',
        'create-btn': 'Créer Dossier',
        'platforms': 'Fonctionne pour : eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy'
    },

    'ja': {
        'app-title': 'セラーチャットアシスタント Pro',
        'reset-btn': 'リセット',
        'delete-btn': '全削除',
        'info-title': '重要情報：',
        'info-text': '12ヶ国語に対応！eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy などで使用可能！',
        'toast-text': '✅ テキストをコピーしました！',
        'category-default': '新しいフォルダ名',
        'add-message': 'メッセージ追加',
        'message-title': 'メッセージ件名',
        'message-content': 'ここに返信を入力...（全言語対応！）',
        'tap-hint': '上のテキストをタップしてコピー',
        'delete-item': '削除',
        'edit-btn': '編集',
        'cancel-btn': 'キャンセル',
        'save-btn': '保存',
        'confirm-reset': '⚠️ 警告：すべてのスクリプトデータが削除され、初期設定に戻ります。\n\nよろしいですか？',
        'confirm-delete-all': '⚠️ 重大警告：すべてのメニューとスクリプトが【完全に削除】されます！\n\n最初から作り直す必要があります。\n本当によろしいですか？',
        'confirm-delete-category': 'このカテゴリフォルダを削除しますか？',
        'confirm-delete-message': 'このメッセージを削除しますか？',
        'confirm-banned-words': '⚠️ 禁止ワード (${violations}) が含まれています。保存しますか？',
        'success-reset': 'データが正常に初期化されました。',
        'empty-state': 'メニューがまだありません。<br>下の (+) ボタンをクリックして新規作成してください。',
        'warning-title': '警告',
        'warning-banned': '単語 "${words}" は禁止されています。',
        'current-lang': 'JA',
        'storage-title': 'ローカルストレージ：',
        'storage-text': '全データはブラウザに自動保存されます - 有効期限なし！オフラインでも動作します。',
        'check-storage-btn': 'ストレージ確認',
        'clear-storage-btn': 'すべて消去',
        'confirm-clear-storage': '⚠️ 警告：テーマや言語設定を含む全データがブラウザのキャッシュから削除されます。\n\nアプリは工場出荷時の設定に戻ります。\nよろしいですか？',
        'storage-cleared': '✅ 全キャッシュデータが消去されました。',
        'storage-info': '保存データ：${size} KB（12ヶ国語対応！）',
        'storage-empty': '保存データなし',
        'modal-title': '新規フォルダ作成',
        'folder-name-label': 'フォルダ名：',
        'folder-name-hint': '分かりやすい名前を入力してください（例：「ウェルカムメッセージ」、「配送情報」など）',
        'example-title': '📁 サンプルフォルダ作成完了：',
        'example-text': '作成後、このフォルダには以下が含まれます：<br>1. 使用方法を示すサンプルメッセージ<br>2. 「メッセージ追加」でさらに追加可能<br>3. テキストをタップしてクリップボードにコピー<br>4. ボタンでメッセージの編集・削除が可能',
        'cancel-btn-modal': 'キャンセル',
        'create-btn': 'フォルダ作成',
        'platforms': '対応：eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy'
    },

    'de': {
        'app-title': 'Verkäufer Chat Assistent Pro',
        'reset-btn': 'Zurücksetzen',
        'delete-btn': 'Alles löschen',
        'info-title': 'WICHTIGE INFO:',
        'info-text': 'Unterstützt 12 Sprachen! Funktioniert für eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy und mehr!',
        'toast-text': '✅ Text erfolgreich kopiert!',
        'category-default': 'Neuer Ordnername',
        'add-message': 'Nachricht hinzufügen',
        'message-title': 'Nachrichtentitel',
        'message-content': 'Antwort hier schreiben... (Unterstützt ALLE Sprachen!)',
        'tap-hint': 'Tippen Sie oben auf den Text zum Kopieren',
        'delete-item': 'Löschen',
        'edit-btn': 'Bearbeiten',
        'cancel-btn': 'Abbrechen',
        'save-btn': 'Speichern',
        'confirm-reset': '⚠️ WARNUNG: Alle Ihre Skriptdaten werden gelöscht und auf Werkseinstellungen zurückgesetzt.\n\nSind Sie sicher?',
        'confirm-delete-all': '⚠️ KRITISCHE WARNUNG: Alle Menüs und Skripte werden VOLLSTÄNDIG GELÖSCHT!\n\nSie müssen sie von Grund auf neu erstellen.\nSind Sie sicher?',
        'confirm-delete-category': 'Diesen Kategorieordner löschen?',
        'confirm-delete-message': 'Diese Nachricht löschen?',
        'confirm-banned-words': '⚠️ Es gibt verbotene Wörter (${violations}). Sind Sie sicher, dass Sie speichern wollen?',
        'success-reset': 'Daten erfolgreich auf Standard zurückgesetzt.',
        'empty-state': 'Noch keine Menüs gespeichert.<br>Klicken Sie unten auf (+), um ein neues zu erstellen.',
        'warning-title': 'WARNUNG',
        'warning-banned': 'Die Wörter "${words}" sind verboten.',
        'current-lang': 'DE',
        'storage-title': 'LOKALER SPEICHER:',
        'storage-text': 'Alle Daten werden automatisch im Browser gespeichert - KEIN ABLAUFDATUM! Funktioniert offline.',
        'check-storage-btn': 'Speicher prüfen',
        'clear-storage-btn': 'Alles löschen',
        'confirm-clear-storage': '⚠️ WARNUNG: Alle Daten einschließlich Design und Sprache werden aus dem Browser-Cache entfernt.\n\nDie App kehrt zu den Werkseinstellungen zurück.\nSind Sie sicher?',
        'storage-cleared': '✅ Alle Cache-Daten wurden gelöscht.',
        'storage-info': 'Gespeicherte Daten: ${size} KB (Unterstützt 12 Sprachen!)',
        'storage-empty': 'Keine Daten gespeichert',
        'modal-title': 'Neuen Ordner erstellen',
        'folder-name-label': 'Ordnername:',
        'folder-name-hint': 'Geben Sie einen beschreibenden Namen ein (z.B. "Willkommensnachrichten", "Versandinfos", etc.)',
        'example-title': '📁 Beispielordner erstellt:',
        'example-text': 'Nach der Erstellung enthält dieser Ordner:<br>1. Eine Beispielnachricht zur Nutzung<br>2. Fügen Sie weitere Nachrichten mit "Nachricht hinzufügen" hinzu<br>3. Tippen Sie auf einen beliebigen Text, um ihn zu kopieren<br>4. Bearbeiten oder löschen Sie Nachrichten mit den Schaltflächen',
        'cancel-btn-modal': 'Abbrechen',
        'create-btn': 'Ordner erstellen',
        'platforms': 'Funktioniert für: eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy'
    },

    'ko': {
        'app-title': '셀러 채팅 어시스턴트 Pro',
        'reset-btn': '초기화',
        'delete-btn': '전체 삭제',
        'info-title': '중요 정보:',
        'info-text': '12개 언어 지원! eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy 등에서 작동!',
        'toast-text': '✅ 텍스트가 복사되었습니다!',
        'category-default': '새 폴더 이름',
        'add-message': '메시지 추가',
        'message-title': '메시지 제목',
        'message-content': '여기에 답변 작성... (모든 언어 지원!)',
        'tap-hint': '복사하려면 위 텍스트를 탭하세요',
        'delete-item': '삭제',
        'edit-btn': '편집',
        'cancel-btn': '취소',
        'save-btn': '저장',
        'confirm-reset': '⚠️ 경고: 모든 스크립트 데이터가 삭제되고 공장 설정으로 복원됩니다.\n\n확실합니까?',
        'confirm-delete-all': '⚠️ 중대 경고: 모든 메뉴와 스크립트가 완전히 삭제됩니다!\n\n처음부터 다시 만들어야 합니다.\n확실합니까?',
        'confirm-delete-category': '이 카테고리 폴더를 삭제하시겠습니까?',
        'confirm-delete-message': '이 메시지를 삭제하시겠습니까?',
        'confirm-banned-words': '⚠️ 금지된 단어(${violations})가 있습니다. 저장하시겠습니까?',
        'success-reset': '데이터가 성공적으로 기본값으로 복원되었습니다.',
        'empty-state': '저장된 메뉴가 없습니다.<br>새 메뉴를 만들려면 아래 (+) 버튼을 클릭하세요.',
        'warning-title': '경고',
        'warning-banned': '단어 "${words}"는 금지되어 있습니다.',
        'current-lang': 'KO',
        'storage-title': '로컬 저장소:',
        'storage-text': '모든 데이터는 브라우저에 자동 저장됩니다 - 만료 없음! 오프라인 작동.',
        'check-storage-btn': '저장소 확인',
        'clear-storage-btn': '모두 지우기',
        'confirm-clear-storage': '⚠️ 경고: 테마 및 언어를 포함한 모든 데이터가 브라우저 캐시에서 제거됩니다.\n\n앱이 공장 설정으로 돌아갑니다.\n확실합니까?',
        'storage-cleared': '✅ 모든 캐시 데이터가 삭제되었습니다.',
        'storage-info': '저장된 데이터: ${size} KB (12개 언어 지원!)',
        'storage-empty': '저장된 데이터 없음',
        'modal-title': '새 폴더 만들기',
        'folder-name-label': '폴더 이름:',
        'folder-name-hint': '새 폴더의 설명적인 이름을 입력하세요 (예: "환영 메시지", "배송 정보" 등)',
        'example-title': '📁 예시 폴더 생성됨:',
        'example-text': '생성 후 이 폴더에는 다음이 포함됩니다:<br>1. 사용법을 보여주는 예시 메시지<br>2. "메시지 추가"를 클릭하여 더 추가 가능<br>3. 텍스트를 탭하여 클립보드에 복사<br>4. 버튼을 사용하여 메시지 편집 또는 삭제',
        'cancel-btn-modal': '취소',
        'create-btn': '폴더 만들기',
        'platforms': '지원 플랫폼: eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy'
    },

    'tl': {
        'app-title': 'Seller Chat Assistant Pro',
        'reset-btn': 'I-reset',
        'delete-btn': 'Burahin Lahat',
        'info-title': 'MAHALAGANG IMPORMASYON:',
        'info-text': 'Sumusuporta sa 12 wika! Gumagana sa eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy at iba pa!',
        'toast-text': '✅ Matagumpay na nakopya ang teksto!',
        'category-default': 'Pangalan ng Bagong Folder',
        'add-message': 'Magdagdag ng Mensahe',
        'message-title': 'Pamagat ng Mensahe',
        'message-content': 'Isulat ang sagot dito... (Sumusuporta sa LAHAT ng wika!)',
        'tap-hint': 'I-tap ang teksto sa itaas para kopyahin',
        'delete-item': 'Burahin',
        'edit-btn': 'I-edit',
        'cancel-btn': 'Kanselahin',
        'save-btn': 'I-save',
        'confirm-reset': '⚠️ BABALA: Ang lahat ng iyong script data ay buburahin at ibabalik sa factory settings.\n\nSigurado ka ba?',
        'confirm-delete-all': '⚠️ KRITIKAL NA BABALA: Ang lahat ng menu at scripts ay LUBUSANG BUBURAHIN!\n\nKailangan mong gawin ulit ang mga ito mula sa simula.\nSigurado ka ba?',
        'confirm-delete-category': 'Burahin ang category folder na ito?',
        'confirm-delete-message': 'Burahin ang mensaheng ito?',
        'confirm-banned-words': '⚠️ May mga ipinagbabawal na salita (${violations}). Sigurado ka bang gusto mong i-save?',
        'success-reset': 'Matagumpay na naibalik ang data sa default.',
        'empty-state': 'Wala pang naka-save na menu.<br>I-click ang (+) button sa ibaba para gumawa ng bago.',
        'warning-title': 'BABALA',
        'warning-banned': 'Ang mga salitang "${words}" ay ipinagbabawal.',
        'current-lang': 'TL',
        'storage-title': 'LOKAL NA IMBAKAN:',
        'storage-text': 'Lahat ng data ay kusang nai-save sa browser - WALANG EXPIRATION! Gumagana offline.',
        'check-storage-btn': 'Suriin ang Storage',
        'clear-storage-btn': 'Linisin Lahat',
        'confirm-clear-storage': '⚠️ BABALA: Lahat ng data kasama ang tema at wika ay tatanggalin sa browser cache.\n\nBabalik ang app sa factory settings.\nSigurado ka ba?',
        'storage-cleared': '✅ Lahat ng cache data ay nalinis na.',
        'storage-info': 'Naka-imbak na data: ${size} KB (Sumusuporta sa 12 wika!)',
        'storage-empty': 'Walang naka-imbak na data',
        'modal-title': 'Gumawa ng Bagong Folder',
        'folder-name-label': 'Pangalan ng Folder:',
        'folder-name-hint': 'Maglagay ng pangalan para sa iyong bagong folder (hal., "Welcome Messages", "Shipping Info", atbp.)',
        'example-title': '📁 Nilikhang Halimbawang Folder:',
        'example-text': 'Pagkatapos gawin, ang folder na ito ay maglalaman ng:<br>1. Isang halimbawang mensahe na nagpapakita kung paano gamitin<br>2. Pwede kang magdagdag ng mensahe sa pag-click ng "Magdagdag ng Mensahe"<br>3. I-tap ang anumang teksto para kopyahin sa clipboard<br>4. I-edit o burahin ang mga mensahe gamit ang mga button',
        'cancel-btn-modal': 'Kanselahin',
        'create-btn': 'Gumawa ng Folder',
        'platforms': 'Gumagana para sa: eBay, Amazon, TikTok Shop, Shopee, Lazada, AliExpress, Mercari, Etsy'
    }
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
        },
        { 
            id: 'cat_2', 
            title: 'Returns & Refunds', 
            icon: 'fa-rotate-left', 
            color: '#a855f7', 
            items: [
                { id: 'm21', title: 'Return Policy', text: 'We accept returns within 30 days of delivery for unused items in original packaging. Return shipping is the customer\'s responsibility unless the item is defective or wrong.' },
                { id: 'm22', title: 'Refund Processing Time', text: 'Refunds are processed within 5-7 business days after we receive the returned item. The refund will appear on your original payment method.' },
                { id: 'm23', title: 'Defective Item Return', text: 'I\'m sorry to hear about the issue! Please initiate a return through the platform and select "Defective" as the reason. We\'ll cover return shipping and send a replacement immediately.' }
            ]
        },
        { 
            id: 'cat_3', 
            title: 'Product Information', 
            icon: 'fa-circle-question', 
            color: '#06b6d4', 
            items: [
                { id: 'm31', title: 'Product Authenticity', text: 'We guarantee 100% authentic products sourced directly from authorized suppliers. All items come with manufacturer warranty where applicable.' },
                { id: 'm32', title: 'Request More Photos', text: 'I\'d be happy to provide additional photos! Could you please specify which angle or detail you\'d like to see? I\'ll take fresh pictures for you.' },
                { id: 'm33', title: 'Size/Measurement Guide', text: 'For accurate sizing, please refer to our size chart in the product images. If you share your measurements, I can help recommend the best size for you.' }
            ]
        }
    ]
};

// ===================== APP CONFIGURATION =====================
let appData = [];
const STORAGE_KEY = 'SellerChatAssistantPro_Data';
const BANNED_KEYWORDS = ["whatsapp", "wa ", "08", "no hp", "ig", "instagram", "shopee", "tokopedia", "lazada", "tf", "transfer", "bca", "mandiri", "diluar aplikasi", "external platform", "outside app"];
let currentLanguage = 'en';
const LANGUAGE_KEY = 'SellerChatAssistantPro_Language';
let currentlyOpenPanels = { left: null, right: null };
let importExportManager = null;

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
    updateStats();
    
    importExportManager = new ImportExportManager();
    
    setTimeout(() => {
        showStorageNotification();
    }, 1000);
    
    console.log('Seller Chat Assistant Pro initialized!');
}

function generateDefaultDataForAllLanguages() {
    const languageTemplates = {
        'id': {
            'Stock Availability': 'Ketersediaan Stok',
            'Shipping & Delivery': 'Pengiriman & Pengantaran',
            'Returns & Refunds': 'Pengembalian & Refund',
            'Product Information': 'Informasi Produk'
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

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const checkbox = document.getElementById('checkbox');
    if (checkbox) checkbox.checked = (savedTheme === 'dark');
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
    const dropdown = document.getElementById('lang-dropdown');
    if (!dropdown) return;
    
    dropdown.innerHTML = '';
    Object.keys(LANGUAGES).forEach(langCode => {
        const lang = LANGUAGES[langCode];
        const option = document.createElement('div');
        option.className = 'lang-option';
        option.dataset.lang = langCode;
        option.innerHTML = `<span>${lang.flag} ${lang.native}</span>`;
        option.onclick = () => changeLanguage(langCode);
        dropdown.appendChild(option);
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
    
    const dropdown = document.getElementById('lang-dropdown');
    if (dropdown) dropdown.classList.remove('show');
    
    const currentLangEl = document.getElementById('current-lang');
    if (currentLangEl) {
        currentLangEl.textContent = LANGUAGES[lang].name.substring(0, 3).toUpperCase();
    }
    
    updateModalText();
    
    showToast(`🌐 Switched to ${LANGUAGES[lang].name}`, 2000);
}

function applyLanguage() {
    const t = translations[currentLanguage] || translations['en'];
    
    // Update all translatable elements
    const elements = {
        'app-title': document.getElementById('app-title'),
        'reset-btn': document.getElementById('reset-btn')?.querySelector('span'),
        'delete-btn': document.getElementById('delete-btn')?.querySelector('span'),
        'info-title': document.getElementById('info-title'),
        'info-text': document.getElementById('info-text'),
        'toast-text': document.getElementById('toast-text'),
        'storage-title': document.getElementById('storage-title'),
        'storage-text': document.getElementById('storage-text'),
        'check-storage-btn': document.getElementById('check-storage-btn')?.querySelector('span'),
        'clear-storage-btn': document.getElementById('clear-storage-btn')?.querySelector('span')
    };

    for (const [key, element] of Object.entries(elements)) {
        if (element && t[key]) {
            element.textContent = t[key];
        }
    }
    
    document.title = t['app-title'] + ' | MultiLanguage Chat Templates for Sellers';
    
    const appContainer = document.getElementById('app-container');
    if (appContainer && appContainer.innerHTML !== '') {
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

// ===================== EVENT HANDLERS =====================
function attachEventListeners() {
    // Theme toggle
    const checkbox = document.getElementById('checkbox');
    if (checkbox) {
        checkbox.onchange = (e) => toggleTheme(e);
    }
    
    // Language dropdown
    const langBtn = document.querySelector('.lang-btn');
    if (langBtn) {
        langBtn.onclick = toggleLanguageDropdown;
    }
    
    document.addEventListener('click', (event) => {
        const dropdown = document.getElementById('lang-dropdown');
        const langBtn = document.querySelector('.lang-btn');
        if (dropdown && langBtn && !dropdown.contains(event.target) && !langBtn.contains(event.target)) {
            dropdown.classList.remove('show');
        }
    });
    
    // Reset and delete buttons
    const resetBtn = document.getElementById('reset-btn');
    const deleteBtn = document.getElementById('delete-btn');
    if (resetBtn) resetBtn.onclick = resetToDefault;
    if (deleteBtn) deleteBtn.onclick = deleteAll;
    
    // Storage buttons
    const checkStorageBtn = document.getElementById('check-storage-btn');
    const clearStorageBtn = document.getElementById('clear-storage-btn');
    if (checkStorageBtn) checkStorageBtn.onclick = checkStorageUsage;
    if (clearStorageBtn) clearStorageBtn.onclick = clearAllStorage;
    
    // FAB button
    const fabBtn = document.getElementById('fab-btn');
    if (fabBtn) fabBtn.onclick = showCreateFolderModal;
    
    // Modal buttons
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const cancelModalBtn = document.getElementById('cancel-modal-btn');
    const createFolderBtn = document.getElementById('create-folder-btn');
    if (modalCloseBtn) modalCloseBtn.onclick = hideCreateFolderModal;
    if (cancelModalBtn) cancelModalBtn.onclick = hideCreateFolderModal;
    if (createFolderBtn) createFolderBtn.onclick = createNewFolderFromModal;
    
    // Import/Export buttons
    const exportBtn = document.getElementById('export-btn');
    const importBtn = document.getElementById('import-btn');
    const downloadSampleBtn = document.getElementById('download-sample-btn');
    const printBtn = document.getElementById('print-btn');
    
    if (exportBtn) exportBtn.onclick = () => {
        if (importExportManager) importExportManager.exportAllData();
    };
    
    if (importBtn) importBtn.onclick = () => {
        document.getElementById('fileImportInput').click();
    };
    
    if (downloadSampleBtn) downloadSampleBtn.onclick = () => {
        if (importExportManager) importExportManager.downloadSampleData();
    };
    
    if (printBtn) printBtn.onclick = () => {
        if (importExportManager) importExportManager.printTemplates();
    };
    
    // Close modals on outside click
    document.addEventListener('click', (event) => {
        const createModal = document.getElementById('createFolderModal');
        const importModal = document.getElementById('importSuccessModal');
        const createModalContent = document.querySelector('#createFolderModal .modal');
        const importModalContent = document.querySelector('#importSuccessModal .modal');
        const fabBtn = document.getElementById('fab-btn');
        
        if (createModal && createModal.classList.contains('active') && 
            createModalContent && !createModalContent.contains(event.target) && 
            event.target !== fabBtn && 
            !fabBtn.contains(event.target)) {
            hideCreateFolderModal();
        }
        
        if (importModal && importModal.classList.contains('active') && 
            importModalContent && !importModalContent.contains(event.target)) {
            hideImportSuccessModal();
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideCreateFolderModal();
            hideImportSuccessModal();
        }
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            saveData();
        }
    });
    
    // File input change
    const fileInput = document.getElementById('fileImportInput');
    if (fileInput) {
        fileInput.onchange = (e) => {
            if (e.target.files.length && importExportManager) {
                importExportManager.handleFileImport(e.target.files[0]);
            }
        };
    }
}

// ===================== IMPORT/EXPORT MANAGER =====================
class ImportExportManager {
    constructor() {
        this.importedData = null;
        this.initFileDrop();
    }
    
    initFileDrop() {
        const dropArea = document.getElementById('file-drop-area');
        const fileInput = document.getElementById('fileImportInput');
        
        if (!dropArea || !fileInput) return;
        
        dropArea.addEventListener('click', () => fileInput.click());
        
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, this.preventDefaults, false);
        });
        
        ['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, () => {
                dropArea.classList.add('drag-over');
            }, false);
        });
        
        ['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, () => {
                dropArea.classList.remove('drag-over');
            }, false);
        });
        
        dropArea.addEventListener('drop', (e) => {
            const files = e.dataTransfer.files;
            if (files.length) {
                this.handleFileImport(files[0]);
            }
        }, false);
    }
    
    preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    exportAllData() {
        try {
            const data = {
                version: '1.0.0',
                exportDate: new Date().toISOString(),
                language: currentLanguage,
                appName: 'Seller Chat Assistant Pro',
                data: appData,
                stats: {
                    totalCategories: appData.length,
                    totalTemplates: appData.reduce((sum, cat) => sum + cat.items.length, 0),
                    languages: Object.keys(LANGUAGES).length
                }
            };
            
            const dataStr = JSON.stringify(data, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = `seller_chat_backup_${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            showToast('✅ Data exported successfully!', 3000);
            
        } catch (error) {
            console.error('Export error:', error);
            showToast('❌ Export failed! Please try again.', 3000);
        }
    }
    
    downloadSampleData() {
        try {
            const sampleData = {
                version: '1.0.0',
                exportDate: new Date().toISOString(),
                language: 'en',
                appName: 'Seller Chat Assistant Pro',
                data: defaultData['en'],
                note: 'This is a sample template. You can edit and import this file.',
                sampleTemplates: {
                    'Stock Availability': 'Check stock status messages',
                    'Shipping & Delivery': 'Shipping time and tracking updates',
                    'Returns & Refunds': 'Return policy and refund process',
                    'Product Information': 'Product details and specifications'
                }
            };
            
            const dataStr = JSON.stringify(sampleData, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = 'seller_chat_sample_template.json';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            showToast('📥 Sample template downloaded!', 3000);
            
        } catch (error) {
            console.error('Sample download error:', error);
            showToast('❌ Failed to download sample!', 3000);
        }
    }
    
    handleFileImport(file) {
        if (!file || file.type !== 'application/json') {
            showToast('❌ Please select a valid JSON file!', 3000);
            return;
        }
        
        if (file.size > 5 * 1024 * 1024) {
            showToast('❌ File too large! Max 5MB.', 3000);
            return;
        }
        
        const reader = new FileReader();
        
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                this.validateImportedData(importedData);
                this.importedData = importedData;
                this.showImportSuccess(importedData);
                
            } catch (error) {
                console.error('Import error:', error);
                showToast(`❌ Invalid file format: ${error.message}`, 4000);
            }
        };
        
        reader.onerror = () => {
            showToast('❌ Error reading file!', 3000);
        };
        
        reader.readAsText(file);
    }
    
    validateImportedData(data) {
        if (!data || typeof data !== 'object') {
            throw new Error('Invalid JSON structure');
        }
        
        const dataToValidate = data.data || data;
        
        if (!Array.isArray(dataToValidate)) {
            throw new Error('Data must be an array');
        }
        
        dataToValidate.forEach((category, index) => {
            if (!category.id || !category.title) {
                throw new Error(`Category ${index} missing id or title`);
            }
            
            if (!Array.isArray(category.items)) {
                throw new Error(`Category "${category.title}" items must be an array`);
            }
            
            category.items.forEach((item, itemIndex) => {
                if (!item.id || !item.title || !item.text) {
                    throw new Error(`Template ${itemIndex} in "${category.title}" missing required fields`);
                }
            });
        });
        
        return true;
    }
    
    showImportSuccess(data) {
        const importedData = data.data || data;
        
        const categoriesCount = importedData.length;
        const templatesCount = importedData.reduce((sum, cat) => sum + cat.items.length, 0);
        
        const importedCategoriesEl = document.getElementById('imported-categories');
        const importedTemplatesEl = document.getElementById('imported-templates');
        const importedLanguagesEl = document.getElementById('imported-languages');
        
        if (importedCategoriesEl) importedCategoriesEl.textContent = categoriesCount;
        if (importedTemplatesEl) importedTemplatesEl.textContent = templatesCount;
        if (importedLanguagesEl) importedLanguagesEl.textContent = data.language || 'Unknown';
        
        const importModal = document.getElementById('importSuccessModal');
        if (importModal) importModal.classList.add('active');
    }
    
    mergeImportedData() {
        if (!this.importedData) return;
        
        const importedData = this.importedData.data || this.importedData;
        const originalCount = appData.length;
        
        importedData.forEach(importedCat => {
            const existingIndex = appData.findIndex(cat => cat.id === importedCat.id);
            
            if (existingIndex === -1) {
                appData.push(importedCat);
            } else {
                const existingCat = appData[existingIndex];
                
                importedCat.items.forEach(importedItem => {
                    const existingItemIndex = existingCat.items.findIndex(item => item.id === importedItem.id);
                    if (existingItemIndex === -1) {
                        existingCat.items.push(importedItem);
                    }
                });
            }
        });
        
        const addedCount = appData.length - originalCount;
        
        saveData();
        render();
        updateStats();
        
        showToast(`✅ Import successful! Added ${addedCount} new categories.`, 3000);
        this.hideImportSuccessModal();
    }
    
    replaceWithImportedData() {
        if (!this.importedData) return;
        
        const importedData = this.importedData.data || this.importedData;
        
        if (confirm('⚠️ This will replace ALL your current data. Are you sure?')) {
            appData = JSON.parse(JSON.stringify(importedData));
            
            if (this.importedData.language && LANGUAGES[this.importedData.language]) {
                changeLanguage(this.importedData.language);
            }
            
            saveData();
            render();
            updateStats();
            
            showToast(`✅ All data replaced successfully!`, 3000);
            this.hideImportSuccessModal();
        }
    }
    
    hideImportSuccessModal() {
        const importModal = document.getElementById('importSuccessModal');
        if (importModal) importModal.classList.remove('active');
        this.importedData = null;
    }
    
    printTemplates() {
        const printWindow = window.open('', '_blank');
        
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Chat Templates - Seller Chat Assistant Pro</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; }
                    h1 { color: #FE2C55; }
                    .category { margin-bottom: 30px; break-inside: avoid; }
                    .category-title { background: #f0f0f0; padding: 10px; font-weight: bold; }
                    .template { margin: 10px 0; padding: 10px; border: 1px solid #ddd; }
                    .template-title { font-weight: bold; color: #FE2C55; }
                    .template-text { margin-top: 5px; }
                    @media print {
                        .no-print { display: none; }
                    }
                </style>
            </head>
            <body>
                <h1>Chat Templates</h1>
                <p>Generated: ${new Date().toLocaleString()}</p>
                <p>Total Categories: ${appData.length}</p>
                <p>Total Templates: ${appData.reduce((sum, cat) => sum + cat.items.length, 0)}</p>
                <hr>
                ${appData.map(category => `
                    <div class="category">
                        <div class="category-title">${category.title}</div>
                        ${category.items.map(item => `
                            <div class="template">
                                <div class="template-title">${item.title}</div>
                                <div class="template-text">${item.text}</div>
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
                <div class="no-print">
                    <hr>
                    <button onclick="window.print()">Print</button>
                    <button onclick="window.close()">Close</button>
                </div>
            </body>
            </html>
        `);
        
        printWindow.document.close();
    }
}

// ===================== CORE FUNCTIONS =====================
function toggleTheme(e) {
    const theme = e.target.checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    showToast(theme === 'dark' ? '🌙 Dark mode activated' : '☀️ Light mode activated', 2000);
}

function toggleLanguageDropdown() {
    const dropdown = document.getElementById('lang-dropdown');
    if (dropdown) dropdown.classList.toggle('show');
}

function saveData() { 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    updateStats();
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

function updateStats() {
    try {
        const categories = appData.length;
        const templates = appData.reduce((sum, cat) => sum + cat.items.length, 0);
        
        const dataStr = JSON.stringify(appData);
        const dataSize = (dataStr.length * 2) / 1024;
        
        const categoryCountEl = document.getElementById('category-count');
        const templateCountEl = document.getElementById('template-count');
        const dataSizeEl = document.getElementById('data-size');
        
        if (categoryCountEl) categoryCountEl.textContent = categories;
        if (templateCountEl) templateCountEl.textContent = templates;
        if (dataSizeEl) dataSizeEl.textContent = dataSize.toFixed(2) + ' KB';
        
    } catch (error) {
        console.error('Update stats error:', error);
    }
}

// ===================== RENDER FUNCTIONS =====================
function render() {
    const appContainer = document.getElementById('app-container');
    if (!appContainer) return;
    
    appContainer.innerHTML = '';

    if (appData.length === 0) {
        appContainer.innerHTML = `<div class="empty-state">${t('empty-state')}</div>`;
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

        appContainer.appendChild(leftColumn);
        appContainer.appendChild(rightColumn);
    } else {
        appData.forEach((cat, catIndex) => {
            appContainer.appendChild(createCategoryItem(cat, catIndex));
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

    // Attach event listeners
    const headerContent = catDiv.querySelector('.header-content');
    const panel = catDiv.querySelector(`#panel-${cat.id}`);
    const editBtn = catDiv.querySelector(`#btn-edit-cat-${cat.id}`);
    const saveBtn = catDiv.querySelector(`#btn-save-cat-${cat.id}`);
    const deleteBtn = catDiv.querySelector('.btn-icon[style*="color:var(--danger)"]');
    const addBtn = catDiv.querySelector('.btn[style*="border-style:dashed"]');

    if (headerContent) {
        headerContent.onclick = () => togglePanel(`panel-${cat.id}`, `cat-item-${cat.id}`);
    }
    
    if (editBtn) {
        editBtn.onclick = (e) => editCatMode(cat.id, catIndex, e);
    }
    
    if (saveBtn) {
        saveBtn.onclick = (e) => saveCat(cat.id, catIndex, e);
    }
    
    if (deleteBtn) {
        deleteBtn.onclick = (e) => deleteCat(catIndex, e);
    }
    
    if (addBtn) {
        addBtn.onclick = () => addNewItem(catIndex);
    }

    const listContainer = catDiv.querySelector('.list-scripts');
    if (listContainer) {
        cat.items.forEach((item, itemIndex) => {
            listContainer.appendChild(createScriptCard(item, catIndex, itemIndex));
        });
    }

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

    // Attach event listeners
    const cardBody = card.querySelector('.card-body');
    const deleteBtn = card.querySelector('.btn-danger');
    const editBtn = card.querySelector('.btn:not(.btn-danger)');
    const cancelBtn = card.querySelector(`#edit-${item.id} .btn:not(.btn-danger):not(.btn-primary)`);
    const saveBtn = card.querySelector(`#edit-${item.id} .btn-primary`);
    const textInput = card.querySelector(`#inp-text-${item.id}`);

    if (cardBody) {
        cardBody.onclick = () => copyText(item.text, item.title);
    }
    
    if (deleteBtn) {
        deleteBtn.onclick = (e) => {
            e.stopPropagation();
            deleteItem(catIndex, itemIndex, e);
        };
    }
    
    if (editBtn) {
        editBtn.onclick = (e) => toggleEditItem(item.id, e);
    }
    
    if (cancelBtn) {
        cancelBtn.onclick = () => toggleEditItem(item.id);
    }
    
    if (saveBtn) {
        saveBtn.onclick = () => saveItem(item.id, catIndex, itemIndex);
    }
    
    if (textInput) {
        textInput.onkeyup = () => handleInputCheck(item.id);
    }

    return card;
}

// ===================== CRUD OPERATIONS =====================
function togglePanel(panelId, parentId) {
    const panel = document.getElementById(panelId);
    const parentDiv = document.getElementById(parentId);
    
    if (!panel || !parentDiv) return;
    
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

function editCatMode(id, index, e) {
    if (e) e.stopPropagation();
    
    const contentDiv = document.getElementById(`txt-cat-${id}`)?.parentNode;
    const spanTitle = document.getElementById(`txt-cat-${id}`);
    
    if (!contentDiv || !spanTitle) return;
    
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.id = `inp-cat-${id}`;
    inputField.value = spanTitle.textContent;
    inputField.onclick = (e) => e.stopPropagation();
    
    contentDiv.replaceChild(inputField, spanTitle);
    
    const editBtn = document.getElementById(`btn-edit-cat-${id}`);
    const saveBtn = document.getElementById(`btn-save-cat-${id}`);
    
    if (editBtn) editBtn.classList.add('hidden');
    if (saveBtn) saveBtn.classList.remove('hidden');
    
    inputField.focus();
}

function saveCat(id, index, e) {
    if (e) e.stopPropagation();
    
    const inputField = document.getElementById(`inp-cat-${id}`);
    if (!inputField) return;
    
    appData[index].title = inputField.value;
    saveData();
    render();
}

function deleteCat(index, e) {
    if (e) e.stopPropagation();
    
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
    
    if (!view || !edit) return;
    
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
    const textInput = document.getElementById(`inp-text-${itemId}`);
    const titleInput = document.getElementById(`inp-title-${itemId}`);
    
    if (!textInput || !titleInput) return;
    
    const text = textInput.value;
    const violations = checkContent(text);
    
    if (violations.length > 0 && !confirm(t('confirm-banned-words', {violations: violations.join(', ')}))) {
        return;
    }
    
    appData[catIndex].items[itemIndex].title = titleInput.value;
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
    const textInput = document.getElementById(`inp-text-${itemId}`);
    const alertBox = document.getElementById(`alert-${itemId}`);
    
    if (!textInput || !alertBox) return;
    
    const text = textInput.value;
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
    const modal = document.getElementById('createFolderModal');
    const input = document.getElementById('newFolderName');
    
    if (modal) modal.classList.add('active');
    
    setTimeout(() => {
        if (input) {
            input.focus();
            input.select();
        }
    }, 100);
}

function hideCreateFolderModal() {
    const modal = document.getElementById('createFolderModal');
    if (modal) modal.classList.remove('active');
}

function updateModalText() {
    const t = translations[currentLanguage] || translations['en'];
    const modal = document.getElementById('createFolderModal');
    
    if (!modal || !modal.classList.contains('active')) return;
    
    const elements = {
        'modal-title': document.getElementById('modal-title'),
        'folder-name-label': document.getElementById('folder-name-label'),
        'folder-name-hint': document.getElementById('folder-name-hint'),
        'example-title': document.getElementById('example-title'),
        'example-text': document.getElementById('example-text'),
        'cancel-btn-modal': document.getElementById('cancel-btn-modal'),
        'create-btn': document.getElementById('create-btn')
    };

    for (const [key, element] of Object.entries(elements)) {
        if (element && t[key]) {
            if (key.includes('hint') || key.includes('text')) {
                element.innerHTML = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    }
    
    const input = document.getElementById('newFolderName');
    if (input) {
        input.placeholder = t['category-default'];
        if (input.value === 'New Folder Name' || input.value === 'Nama Folder Baru') {
            input.value = t['category-default'];
        }
    }
}

function createNewFolderFromModal() {
    const input = document.getElementById('newFolderName');
    if (!input) return;
    
    const folderName = input.value.trim();
    
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
    if (input) input.value = t('category-default');
    
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

function hideImportSuccessModal() {
    if (importExportManager) {
        importExportManager.hideImportSuccessModal();
    }
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
        const appContainer = document.getElementById('app-container');
        if (appContainer && appContainer.children.length > 0) {
            new Sortable(appContainer, { 
                animation: 150, 
                handle: '.cat-handle', 
                onEnd: rebuildCategoryOrder
            });
        }
    }
}

function rebuildData(evt) {
    const { from, to, oldIndex, newIndex } = evt;
    
    if (from === to) {
        const catIndex = parseInt(from.dataset.catIndex);
        const items = appData[catIndex].items;
        const [movedItem] = items.splice(oldIndex, 1);
        items.splice(newIndex, 0, movedItem);
        saveData();
    } else {
        const fromCatIndex = parseInt(from.dataset.catIndex);
        const toCatIndex = parseInt(to.dataset.catIndex);
        const fromItems = appData[fromCatIndex].items;
        const toItems = appData[toCatIndex].items;
        const [movedItem] = fromItems.splice(oldIndex, 1);
        toItems.splice(newIndex, 0, movedItem);
        saveData();
    }
}

function rebuildCategoryOrder() {
    const newOrder = [];
    
    if (window.innerWidth >= 768) {
        const leftColumn = document.querySelector('.left-column');
        const rightColumn = document.querySelector('.right-column');
        
        if (leftColumn) {
            const leftItems = leftColumn.querySelectorAll('.category-item');
            leftItems.forEach(item => {
                const catId = item.id.replace('cat-item-', '');
                const catIndex = appData.findIndex(cat => cat.id == catId);
                if (catIndex !== -1) newOrder.push(appData[catIndex]);
            });
        }
        
        if (rightColumn) {
            const rightItems = rightColumn.querySelectorAll('.category-item');
            rightItems.forEach(item => {
                const catId = item.id.replace('cat-item-', '');
                const catIndex = appData.findIndex(cat => cat.id == catId);
                if (catIndex !== -1) newOrder.push(appData[catIndex]);
            });
        }
    } else {
        const appContainer = document.getElementById('app-container');
        if (appContainer) {
            const items = appContainer.querySelectorAll('.category-item');
            items.forEach(item => {
                const catId = item.id.replace('cat-item-', '');
                const catIndex = appData.findIndex(cat => cat.id == catId);
                if (catIndex !== -1) newOrder.push(appData[catIndex]);
            });
        }
    }
    
    appData = newOrder;
    saveData();
}

// ===================== UTILITY FUNCTIONS =====================
function copyText(text, title) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(t('toast-text'), 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        showToast('❌ Failed to copy text', 2000);
    });
}

function showToast(message, duration = 3000) {
    // Create toast element if it doesn't exist
    let toast = document.getElementById('toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--toast-bg, #333);
            color: var(--toast-color, #fff);
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s;
            font-size: 14px;
        `;
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.style.opacity = 1;

    setTimeout(() => {
        toast.style.opacity = 0;
    }, duration);
}

// ===================== INITIALIZE APP =====================
document.addEventListener('DOMContentLoaded', init);
