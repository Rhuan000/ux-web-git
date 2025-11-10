document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('textInput');
  const addBtn = document.getElementById('addBtn');
  const list = document.getElementById('items');

  function addItem(text) {
    if (!text) return;
    const li = document.createElement('li');
    li.textContent = text;
    const btn = document.createElement('button');
    btn.textContent = 'Remover';
    btn.style.marginLeft = '8px';
    btn.addEventListener('click', () => li.remove());
    li.appendChild(btn);
    list.appendChild(li);
    input.value = '';
    input.focus();
  }

  addBtn.addEventListener('click', () => addItem(input.value.trim()));
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') addItem(input.value.trim()); });
});
