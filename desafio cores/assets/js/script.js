function corDiferente(cor) {
    let quadrado = document.querySelector('.quadrado');
    switch (cor) {
        case 'verde':
            quadrado.style.backgroundColor = 'green';
            break;
        case 'azul':
            quadrado.style.backgroundColor = 'blue';
            break;
        case 'vermelho':
            quadrado.style.backgroundColor = 'red';
            break;
        case 'amarelo':
            quadrado.style.backgroundColor = 'yellow';
            break;
    }
}