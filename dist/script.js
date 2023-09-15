const menuToggle = document.getElementById('menuToggle');
const closeSidebar = document.getElementById('closeSidebar');
const sidebar = document.getElementById('sidebar');
const sidebarDimming = document.getElementById('sidebarDimming');
const navbar = document.getElementById('navbar');
        
menuToggle.addEventListener('click', () => {
    sidebar.classList.remove('w-0', 'translate-x-full');
    sidebar.classList.add('w-64', 'translate-x-0');
    sidebarDimming.classList.remove('hidden');
});

closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('w-64', 'translate-x-0');
    sidebar.classList.add('w-0', 'translate-x-full');
    sidebarDimming.classList.add('hidden');
});

sidebarDimming.addEventListener('click', () => {
    sidebar.classList.remove('w-64', 'translate-x-0');
    sidebar.classList.add('w-0', 'translate-x-full');
    sidebarDimming.classList.add('hidden');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        // Saat scroll down, munculkan navbar dengan efek fade dan scale
        navbar.classList.remove('opacity-0');
        navbar.classList.add('opacity-100');
    } else {
        // Saat di paling atas, sembunyikan navbar kembali
        navbar.classList.remove('opacity-100');
        navbar.classList.add('opacity-0');
    }
});