const letras = [
    { simbolo: 'α', nombre: 'alfa', equivalente: 'a' },
    { simbolo: 'β', nombre: 'beta', equivalente: 'b' },
    { simbolo: 'γ', nombre: 'gamma', equivalente: 'g' },
    { simbolo: 'δ', nombre: 'delta', equivalente: 'd' },
    { simbolo: 'ε', nombre: 'epsilon', equivalente: 'e' },
    { simbolo: 'ζ', nombre: 'dseta', equivalente: 'ds' },
    { simbolo: 'η', nombre: 'eta', equivalente: 'h' },
    { simbolo: 'θ', nombre: 'zeta', equivalente: 'z' },
    { simbolo: 'ι', nombre: 'iota', equivalente: 'i' },
    { simbolo: 'κ', nombre: 'kappa', equivalente: 'k' },
    { simbolo: 'λ', nombre: 'lambda', equivalente: 'l' },
    { simbolo: 'μ', nombre: 'mu', equivalente: 'm' },
    { simbolo: 'ν', nombre: 'nu', equivalente: 'n' },
    { simbolo: 'ξ', nombre: 'xi', equivalente: 'x' },
    { simbolo: 'ο', nombre: 'omicron', equivalente: 'o' },
    { simbolo: 'π', nombre: 'pi', equivalente: 'p' },
    { simbolo: 'ρ', nombre: 'rho', equivalente: 'r' },
    { simbolo: 'σ', nombre: 'sigma', equivalente: 's' },
    { simbolo: 'τ', nombre: 'tau', equivalente: 't' },
    { simbolo: 'υ', nombre: 'upsilon', equivalente: 'u' },
    { simbolo: 'φ', nombre: 'fi', equivalente: 'f' },
    { simbolo: 'χ', nombre: 'ji', equivalente: 'j' },
    { simbolo: 'ψ', nombre: 'psi', equivalente: 'ps' },
    { simbolo: 'ω', nombre: 'omega', equivalente: 'ô' }
  ];
  
  let letraActual = letras[Math.floor(Math.random() * letras.length)];
  let contador = 0;
  
  document.getElementById('letraGriega').textContent = letraActual.simbolo;
  
  const resultado = document.getElementById('resultado');
  
  document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const equivalente = document.getElementById('equivalente').value;
  
    if (nombre === letraActual.nombre && equivalente === letraActual.equivalente) {
      contador++;
      resultado.textContent = `✅ ¡Correcto! Respuestas seguidas: ${contador}`;
      resultado.style.color = "green";
    } else {
      resultado.textContent = `❌ Incorrecto. Era "${letraActual.nombre}" (equivalente: "${letraActual.equivalente}"). Tu racha se reinicia.`;
      resultado.style.color = "red";
      contador = 0;
    }
  
    // Mostrar nueva letra
    letraActual = letras[Math.floor(Math.random() * letras.length)];
    document.getElementById('letraGriega').textContent = letraActual.simbolo;
  
    // Reiniciar selects
    document.getElementById('nombre').value = "";
    document.getElementById('equivalente').value = "";
  });
  