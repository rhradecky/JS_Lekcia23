function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
       result = "Prosím, zadajte platné čísla.";
    } else {
      switch (operation) {
             case 'add':
                   result = num1 + num2;
                   break;
             case 'subtract':
                   result = num1 - num2;
                   break;
             case 'multiply':
                   result = num1 * num2;
                   break;
             case 'divide':
                 if (num2 !== 0) {
                    esult = num1 / num2;
                    } else {
                   result = "Chyba (delenie nulou)";
                     }
                     break;
                    default:
                    result = "Neznáma operácia";
                }
            }

            document.getElementById('result').textContent = `Výsledok: ${result}`;
        }


//zadanie 2

function addItem() {
    const textInput = document.getElementById('textInput');
    const itemList = document.getElementById('itemList');

    if (textInput.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = textInput.value;
        li.onclick = function() {
            itemList.removeChild(li);
        };
        itemList.appendChild(li);
        textInput.value = '';
    }
}


//zadanie3



function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
       const li = document.createElement('li');
       li.textContent = taskInput.value;

       li.onclick = function() {
       li.classList.toggle('completed');
       };

       const removeButton = document.createElement('button');
       removeButton.textContent = 'Odstrániť';
       removeButton.onclick = function() {
       taskList.removeChild(li);
       };

       li.appendChild(removeButton);
       taskList.appendChild(li);

       taskInput.value = '';
       }
     }
