const form = document.getElementById('agenda-contato');
const imgClaro = '<img src ="./imagens/claro.png" alt="logo claro">';
const imgTim = '<img src ="./imagens/tim.png" alt="logo tim">';
const imgOi = '<img src ="./imagens/oi.png" alt="logo oi">';
const imgVivo = '<img src ="./imagens/vivo.png" alt="logo vivo">';

const spanClaro = '<span class="operadora">Logo</span>';
const spanTim = '<span class="operadora">Logo</span>';
const spanOi = '<span class="operadora">Logo</span>';



const nomeDoContato = [];
const telefoneContato = [];
const operadora = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adicionarLinha();
    atualizaTabela();
    limpaLinha();
})

function adicionarLinha(){
    
    const inputNome = document.getElementById('nomeDoContato');
    const inputTelefone = document.getElementById('telefoneDoContato');
    const inputChip = document.getElementById('OperadoraChip');

    if(telefoneContato.includes(inputTelefone.value)){
        alert(`Esse número ${inputTelefone.value} já existe.`);
    }else{
        nomeDoContato.push(inputNome.value);
        telefoneContato.push(inputTelefone.value);
        operadora.push(inputChip.value)

    let linha = '<tr>'
    
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputTelefone.value}</td>`

    if(inputChip.value === "oi" || inputChip.value === "OI" || inputChip.value === "Oi"){
        linha += `<td>${inputChip.value = imgOi}</td>`
    }else if(inputChip.value === "claro" || inputChip.value === "Claro" || inputChip.value === "CLARO"){
        linha += `<td>${inputChip.value = imgClaro}</td>`
    }else if(inputChip.value === "TIM" || inputChip.value === "Tim" || inputChip.value === "tim"){
        linha += `<td>${inputChip.value = imgTim}</td>`
    }else if(inputChip.value === "VIVO" || inputChip.value === "Vivo" || inputChip.value === "vivo"){
        linha += `<td>${inputChip.value = imgVivo}</td>`
    }else{
        linha += `<td>Apenas Claro, TIM, Oi e Vivo </td>`
    }
    linha += '</tr>'
    linhas += linha;

    }

    inputNome.value = '';
    inputTelefone.value = '';
    inputChip.value = '';
    
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}



console.log(form)