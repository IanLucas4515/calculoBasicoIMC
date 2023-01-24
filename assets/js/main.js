function paginaIMC() {
    const form = document.querySelector('form');

    function noSubmit(evento) {
        evento.preventDefault();
        imc();
    }

    function imc() {
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;
        const resultado = validacoes(Number(peso), Number(altura));

        return resultado;
    }

    function validacoes(peso = 0, altura = 0) {
        const box = document.querySelector('#box');
        const resultadoFalso = box.querySelector('.resultado-falso');
        const resultadoVerdadeiro = box.querySelector('.resultado-verdadeiro');
        if (isNaN(peso) === true || typeof (peso) === "string") {
            resultadoVerdadeiro.innerHTML = '';
            resultadoFalso.innerHTML = 'O Peso é inválido, verifique se há alguma letra e remova, caso haja uma virgula troque por um ponto';
            box.classList.value = 'tomato';
        } else if (peso <= 0) {
            resultadoVerdadeiro.innerHTML = '';
            resultadoFalso.innerHTML = 'Não existe humano com esse peso!!! Digíte um peso válido';
            box.classList.value = 'tomato';
        } else if (peso > 600) {
            resultadoVerdadeiro.innerHTML = '';
            resultadoFalso.innerHTML = 'Se você excedeu tem peso entre para o Guines Book, afinal a pessoa mais pesada do mundo foi Manuel Uribe com 597 Kg';
            box.classList.value = 'tomato';
        } else if (isNaN(altura) === true || typeof (altura) === "string") {
            resultadoVerdadeiro.innerHTML = '';
            resultadoFalso.innerHTML = 'A altura é inválida, verifique se há alguma letra e remova, caso haja uma virgula troque por um ponto';
            box.classList.value = 'tomato';
        } else if (altura <= 0 || altura >= 3) {
            resultadoVerdadeiro.innerHTML = '';
            resultadoFalso.innerHTML = 'Digíte uma Altura Válida, a menor pessoa do mundo tinha 67 cm e a maior 2,74 metros';
            box.classList.value = 'tomato';
        } else {
            resultadoFalso.innerHTML = '';
            const calculoBasico = peso / altura ** 2;
            const estado = estadoIMC(calculoBasico);
            resultadoVerdadeiro.innerHTML = `Seu IMC é ${calculoBasico.toFixed(2)} (${estado})`;
            box.classList.value = 'greenyellow';
        }
    }

    function estadoIMC(imc) {
        if (imc < 18.5) {
            return "Abaixo do Peso";
        } else if (imc > 18, 5 && imc < 25) {
            return "Peso Normal";
        } else if (imc >= 25 && imc < 30) {
            return "Sobrepeso";
        } else if (imc >= 30 && imc < 35) {
            return "Obesidade Grau 1";
        } else if (imc >= 35 && imc <= 40) {
            return "Obesidade Grau 2";
        } else {
            return "Obesidade Grau 3";
        }
    }
    form.addEventListener('submit', noSubmit)
}
paginaIMC();