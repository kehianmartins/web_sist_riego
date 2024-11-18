// Gráfica de los últimos 7 días
const ctx7Days = document.getElementById('chart7Days').getContext('2d');
new Chart(ctx7Days, {
  type: 'line',
  data: {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'], // Últimos 7 días
    datasets: [{
      label: 'Datos (Últimos 7 días)',
      data: [12, 19, 3, 5, 2, 3, 7], // Ejemplo de datos
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      tension: 0.3,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  },
});

// Gráfica del último mes
const ctx1Month = document.getElementById('chart1Month').getContext('2d');
new Chart(ctx1Month, {
  type: 'bar',
  data: {
    labels: Array.from({ length: 30 }, (_, i) => `Día ${i + 1}`), // Días del mes
    datasets: [{
      label: 'Datos (Último Mes)',
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)), // Generar datos aleatorios
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  },
});

// Gráfica de los últimos 3 meses
const ctx3Months = document.getElementById('chart3Months').getContext('2d');
new Chart(ctx3Months, {
  type: 'bar',
  data: {
    labels: ['Enero', 'Febrero', 'Marzo'], // Meses (ejemplo)
    datasets: [{
      label: 'Datos (Últimos 3 Meses)',
      data: [200, 300, 400], // Ejemplo de datos acumulados por mes
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  },
});
