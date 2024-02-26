const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    const outputElement = document.querySelector('#outputElement');
    
    const li = document.createElement('li');
    li.textContent = input.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    if (input.value === '') {
        outputElement.textContent = 'Please enter a book and chapter.';
        input.focus();    
    }else{

        li.append(deleteButton);
        
        list.appendChild(li);

        outputElement.textContent = '';
    }

    deleteButton.addEventListener('click', () => {
    list.removeChild(li);
    input.focus();
    input.value = '';
});
});