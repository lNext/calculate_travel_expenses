function calcular() {
  let destino = document.getElementById('destino').value;
  let presupuesto = document.getElementById('presupuesto').value;
  let alojamiento = document.getElementById('alojamiento').value;
  let intaloja = parseInt(alojamiento);
  let transporte = document.getElementById('transporte').value;
  let inttrans = parseInt(transporte);
  let comida = document.getElementById('comida').value;
  let intcomida = parseInt(comida);
  let resuldestino = document.getElementById('resuldestino');
  let resulpresupuesto = document.getElementById('resulpresupuesto');
  let balance = document.getElementById('balance');
  let gastototal = document.getElementById('gastotal');
  let sobrante = document.getElementById('sobrante');
  let total = intaloja + intcomida + inttrans;
  let mayor = total - presupuesto;
  let rsobrante = presupuesto - total;
  console.log(total);

  if (destino.length == 0 || /^\s+$/.test(destino) || presupuesto.length == 0 || isNaN(presupuesto) || /^\s+$/.test(presupuesto) || alojamiento.length == 0 || /^\s+$/.test(alojamiento) || isNaN(alojamiento) || transporte.length == 0 || /^\s+$/.test(transporte) || isNaN(transporte) || comida.length == 0 || /^\s+$/.test(comida) || isNaN(comida)) {
    alert('No pueden haber campos vacíos ni caractéres diferentes a números');
  } else {
    resuldestino.innerHTML = 'Detino: ' + destino;
    resulpresupuesto.innerHTML = 'Presupuesto: ' + presupuesto;
    gastototal.innerHTML = 'Tu gasto total fue: ' + total;
    if (total < presupuesto) {
      sobrante.innerHTML = 'Sobrante: ' + rsobrante;
    }
    if (total > presupuesto) {
      balance.innerHTML = 'Te pasaste: ' + mayor + ' de tu presupuesto';
    }
  }
}