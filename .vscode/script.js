function filterItems() {
    const filterValue = document.getElementById('filterInput').value.toUpperCase();
    const items = document.getElementById('itemList').getElementsByTagName('li');

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const textValue = item.textContent || item.innerText;
        
        if (textValue.toUpperCase().indexOf(filterValue) > -1) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    }
}
