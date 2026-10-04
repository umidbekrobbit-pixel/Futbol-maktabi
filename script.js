// Mobil menyuni ochish va yopish uchun
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Mobil menyudagi havolani bosganda menyuni yopish
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Aloqa formasini jo'natish jarayoni
const footballForm = document.getElementById('footballForm');

footballForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Sahifa yangilanishining oldini oladi

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const group = document.getElementById('group').value;

    if (name === '' || phone === '') {
        alert('Iltimos, ismingiz va telefon raqamingizni kiriting!');
        return;
    }

    if (group === '') {
        alert('Iltimos, o\'quv guruhini tanlang!');
        return;
    }

    // Muvaffaqiyatli xabar ko'rsatish
    alert(`Rahmat, ${name}! Sizning arizangiz qabul qilindi. Tez orada operatorlarimiz siz bilan bog'lanishadi.`);
    
    // Formani tozalash
    footballForm.reset();
});