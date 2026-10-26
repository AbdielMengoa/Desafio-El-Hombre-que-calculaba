function switchModule(modId, btnElement) {
    document.querySelectorAll('.module').forEach(function(m) {
      m.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(function(b) {
      b.classList.remove('active');
    });
  
    document.getElementById(modId).classList.add('active');
    btnElement.classList.add('active');
  }
  
  function calcularCuadratica() {
    var a = parseFloat(document.getElementById('eq_a').value);
    var b = parseFloat(document.getElementById('eq_b').value);
    var c = parseFloat(document.getElementById('eq_c').value);
  
    var resBox = document.getElementById('res_ej1');
    var codeElem = document.getElementById('code_ej1');
  
    if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
      alert("Por favor ingrese números válidos. El coeficiente 'a' no puede ser 0.");
      return;
    }
  
    var D = (b * b) - (4 * a * c);
    var textoSalida = "Ecuación: " + a + "x² + " + b + "x + " + c + " = 0\n";
    textoSalida += "Discriminante (D) = " + D.toFixed(2) + "\n\n";
  
    if (D > 0) {
      var x1 = (-b + Math.sqrt(D)) / (2 * a);
      var x2 = (-b - Math.sqrt(D)) / (2 * a);
      textoSalida += "Mensaje: The equation has two roots.\n";
      textoSalida += "x1 = " + x1.toFixed(4) + "\n";
      textoSalida += "x2 = " + x2.toFixed(4);
    } else if (D === 0) {
      var x = -b / (2 * a);
      textoSalida += "Mensaje: The equation has one root.\n";
      textoSalida += "x = " + x.toFixed(4);
    } else {
      textoSalida += "Mensaje: The equation has no real roots.";
    }
  
    codeElem.innerHTML = textoSalida;
    resBox.classList.add('show');
  }
  
  function estimarPi() {
    var n = parseInt(document.getElementById('pi_n').value);
    var resBox = document.getElementById('res_ej2');
    var codeElem = document.getElementById('code_ej2');
  
    if (isNaN(n) || n <= 0) {
      alert("Ingrese un número de términos válido mayor a 0.");
      return;
    }
  
    var suma = 0;
    for (var i = 1; i <= n; i++) {
      suma += 1 / (i * i);
    }
  
    var piAproximado = Math.sqrt(6 * suma);
    var piReal = Math.PI;
    var diferencia = Math.abs(piReal - piAproximado);
  
    var textoSalida = "Número de términos (N) = " + n + "\n";
    textoSalida += "Valor estimado de π = " + piAproximado.toFixed(10) + "\n";
    textoSalida += "Valor real (Math.PI) = " + piReal.toFixed(10) + "\n";
    textoSalida += "Diferencia/Error   = " + diferencia.toExponential(4);
  
    codeElem.innerHTML = textoSalida;
    resBox.classList.add('show');
  }
  
  function repartirCamellos() {
    var camellos = parseInt(document.getElementById('camellos_total').value);
    var resBox = document.getElementById('res_ej3');
    var codeElem = document.getElementById('code_ej3');
  
    if (isNaN(camellos) || camellos <= 0) {
      alert("Ingrese un número válido de camellos.");
      return;
    }
  
    var totalConPrestado = camellos + 1;
    var h1 = Math.floor(totalConPrestado / 2);
    var h2 = Math.floor(totalConPrestado / 3);
    var h3 = Math.floor(totalConPrestado / 9);
  
    var repartidos = h1 + h2 + h3;
    var sobran = totalConPrestado - repartidos;
  
    var textoSalida = "Camellos iniciales = " + camellos + "\n";
    textoSalida += "Camellos con el prestado (+1) = " + totalConPrestado + "\n\n";
    textoSalida += "Hermano 1 (1/2 de " + totalConPrestado + ") = " + h1 + " camellos\n";
    textoSalida += "Hermano 2 (1/3 de " + totalConPrestado + ") = " + h2 + " camellos\n";
    textoSalida += "Hermano 3 (1/9 de " + totalConPrestado + ") = " + h3 + " camellos\n";
    textoSalida += "----------------------------------------\n";
    textoSalida += "Total repartido a hermanos = " + repartidos + " camellos\n";
    textoSalida += "Sobran = " + sobran + " camellos (1 para devolver el prestado y " + (sobran - 1) + " para Beremiz por su astucia).";
  
    codeElem.innerHTML = textoSalida;
    resBox.classList.add('show');
  }
  
  function repartirPanes() {
    var pa = parseInt(document.getElementById('panes_a').value);
    var pb = parseInt(document.getElementById('panes_b').value);
    var monedas = parseInt(document.getElementById('monedas').value);
  
    var resBox = document.getElementById('res_ej4');
    var codeElem = document.getElementById('code_ej4');
  
    if (isNaN(pa) || isNaN(pb) || isNaN(monedas) || pa <= 0 || pb <= 0) {
      alert("Ingrese valores válidos.");
      return;
    }
  
    var totalPanes = pa + pb;
    var totalTercios = totalPanes * 3;
    var terciosPorPersona = totalTercios / 3;
  
    var aportaA = (pa * 3) - terciosPorPersona;
    var aportaB = (pb * 3) - terciosPorPersona;
  
    if (aportaA < 0) aportaA = 0;
    if (aportaB < 0) aportaB = 0;
  
    var totalAportadoTercero = aportaA + aportaB;
    var monedasA = (aportaA / totalAportadoTercero) * monedas;
    var monedasB = (aportaB / totalAportadoTercero) * monedas;
  
    var textoSalida = "Panes aportados: A = " + pa + ", B = " + pb + " (Total = " + totalPanes + " panes)\n";
    textoSalida += "Total de tercios cortados = " + totalTercios + "\n";
    textoSalida += "Cada viajero consume = " + terciosPorPersona + " tercios\n\n";
    textoSalida += "Aportes reales al 3er viajero (Jeque):\n";
    textoSalida += "- Viajero A entrega: " + aportaA + " tercios\n";
    textoSalida += "- Viajero B entrega: " + aportaB + " tercios\n\n";
    textoSalida += "Reparto equitativo de las " + monedas + " monedas de oro:\n";
    textoSalida += "- Monedas para Viajero A = " + monedasA.toFixed(2) + " monedas\n";
    textoSalida += "- Monedas para Viajero B = " + monedasB.toFixed(2) + " monedas";
  
    codeElem.innerHTML = textoSalida;
    resBox.classList.add('show');
  }