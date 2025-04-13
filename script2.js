const letrasGriegas = ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ', 'λ', 'μ', 'ν', 'ξ', 'ο', 'π', 'ρ', 'σ', 'τ', 'υ', 'φ', 'χ', 'ψ', 'ω'];

function mezclar(array) {
    return array.slice().sort(() => Math.random() - 0.5);
}

function crearLista(letras) {
    const lista = document.getElementById('lista-letras');
    lista.innerHTML = '';
    letras.forEach(letra => {
        const item = document.createElement('li');
        item.textContent = letra;
        item.draggable = true;
        lista.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let letrasMezcladas = mezclar(letrasGriegas);
    crearLista(letrasMezcladas);

    let dragSrc;

    document.querySelectorAll('#lista-letras').forEach(lista => {
        lista.addEventListener('dragstart', e => {
            dragSrc = e.target;
            e.dataTransfer.effectAllowed = 'move';
        });

        lista.addEventListener('dragover', e => {
            e.preventDefault();
        });

        lista.addEventListener('drop', e => {
            e.preventDefault();
            if (e.target.tagName === 'LI' && e.target !== dragSrc) {
                const parent = dragSrc.parentNode;
                const srcIndex = Array.from(parent.children).indexOf(dragSrc);
                const targetIndex = Array.from(parent.children).indexOf(e.target);
                parent.insertBefore(dragSrc, targetIndex > srcIndex ? e.target.nextSibling : e.target);
            }
        });
    });

    document.getElementById('verificar').addEventListener('click', () => {
        const actual = Array.from(document.querySelectorAll('#lista-letras li')).map(li => li.textContent);
        const correcto = letrasGriegas.join(',');
        const respuesta = actual.join(',');

        const resultado = document.getElementById('resultado');
        if (respuesta === correcto) {
            resultado.textContent = '✅ ¡Correcto!';
            resultado.style.color = 'green';
        } else {
            resultado.textContent = '❌ Incorrecto. Intenta de nuevo.';
            resultado.style.color = 'red';
        }
    });
});
