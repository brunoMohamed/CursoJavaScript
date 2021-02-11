    const inputTarefa = document.querySelector('.input-tarefa');
    const btnTarefa = document.querySelector('.btn-tarefa');
    const tarefas = document.querySelector('.tarefas');

    
    inputTarefa.addEventListener('keypress', function(e) {
        if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value); }
    })
    
    btnTarefa.addEventListener('click', function(){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
        
    })

    function criaLi () {
        const li = document.createElement('li');
        return li;
    }
    
    function criaTarefa (textInput){
        const li = criaLi ();
        li.innerText = textInput;
        tarefas.appendChild(li)
        limpaInput();
        criaBotaoApagar(li);
        salvarTarefas();
    }

   
    function limpaInput() {
        inputTarefa.value = '';
        inputTarefa.focus();
    }
    
    function criaBotaoApagar (li) {
        li.innerText += ' ';
        const botaoApagar = document.createElement('button');
        botaoApagar.innerText = 'Apagar';
        botaoApagar.setAttribute('class', 'Apagar');
        botaoApagar.setAttribute('title', 'Apagar esta tarefa');
        li.appendChild(botaoApagar);
        
       
    }

    document.addEventListener('click', function (e) {
        const el = e.target;

        if (el.classList.contains('Apagar')) {
         el.parentElement.remove();
         salvarTarefas();
        }
    })

    function salvarTarefas () {
        const liTarefas = tarefas.querySelectorAll('li');
        const listaTarefas = [];

        for (let tarefa of liTarefas) {
            let tarefaTexto = tarefa.innerText;
            tarefaTexto = tarefaTexto.replace('Apagar', '');
            listaTarefas.push(tarefaTexto);
        }

        const tarefasJSON = JSON.stringify(listaTarefas);
        localStorage.setItem('tarefas', tarefasJSON);

    }

    function adicionaTarefasSalvas() {
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas);
      
        for(let tarefa of listaDeTarefas) {
          criaTarefa(tarefa);
        }
      }
      adicionaTarefasSalvas();