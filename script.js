function showSection(id) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.add('hidden'));

    const activeSection = document.getElementById(id);
    if (activeSection) {
        activeSection.classList.remove('hidden');
    }
}
