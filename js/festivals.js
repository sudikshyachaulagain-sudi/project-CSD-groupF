function toggleText(id, button) {
    var text = document.getElementById(id);
    var isOpen = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', String(!isOpen));
    button.textContent = isOpen ? 'Details' : 'Hide details';
    text.style.display = isOpen ? 'none' : 'block';
}