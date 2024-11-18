const datos7Dias = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    datasets: [
        {
            label: 'Humedad',
            data: [65, 70, 75, 80, 85, 90, 95],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        },
        {
            label: 'Temperatura',
            data: [20, 22, 21, 23, 24, 25, 26],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
        {
            label: 'Humedad del Suelo',
            data: [30, 35, 40, 45, 50, 55, 60],
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }
    ]
};

const config7Dias = {
    type: 'line',
    data: datos7Dias,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const grafica7Dias = new Chart(
    document.getElementById('grafica7Dias'),
    config7Dias
);

const datosMes = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
    datasets: [
        {
            label: 'Humedad',
            data: [60, 65, 70, 75],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        },
        {
            label: 'Temperatura',
            data: [21, 22, 23, 24],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
        {
            label: 'Humedad del Suelo',
            data: [35, 40, 45, 50],
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }
    ]
};

const configMes = {
    type: 'line',
    data: datosMes,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const graficaMes = new Chart(
    document.getElementById('graficaMes'),
    configMes
);

const datos3Meses = {
    labels: ['Mes 1', 'Mes 2', 'Mes 3'],
    datasets: [
        {
            label: 'Humedad',
            data: [55, 60, 65],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        },
        {
            label: 'Temperatura',
            data: [20, 21, 22],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
        {
            label: 'Humedad del Suelo',
            data: [30, 35, 40],
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }
    ]
};

const config3Meses = {
    type: 'line',
    data: datos3Meses,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const grafica3Meses = new Chart(
    document.getElementById('grafica3Meses'),
    config3Meses
);