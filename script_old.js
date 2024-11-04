function filterItems() {
    const checkboxes = document.querySelectorAll('#filterForm input[type="checkbox"]');
    const items = document.getElementById('itemList').getElementsByTagName('li');
    const checkedValues = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (checkedValues.length === 0 || checkedValues.includes(item.textContent)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    }
}
