/**
 * ESPITALETA WELLNESS — Dashboard Clínico
 * Lógica de la página: KPIs, resumen clínico y gráfica de evolución de peso.
 */

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
  if (typeof requireAuth === 'function') requireAuth();

  initDashboard();
});

/* ------------------------------------------------------------------
   Datos simulados — reemplazar loadDashboardData() por un fetch()
   real cuando el backend esté listo. El resto del archivo no
   necesita cambiar: solo la fuente de los datos.
------------------------------------------------------------------ */
const dashboardData = {
  patients: 120,
  alerts: 12,
  recommendations: 8,
  measurements: 18,
  averageWeight: 78.4,
  averageBMI: 26.3,
  weightHistory: {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    values: [82, 80.5, 79.8, 79, 78.7, 78.4]
  }
};

/* ------------------------------------------------------------------
   Punto de entrada
------------------------------------------------------------------ */
async function initDashboard() {
  try {
    const data = await loadDashboardData();
    renderKpiCards(data);
    renderClinicalSummary(data);
    renderMetricSummary(data);
    renderWeightChart(data.weightHistory);
  } catch (error) {
    console.error('No se pudo cargar el dashboard:', error);
  }
}

/* ------------------------------------------------------------------
   Fuente de datos
------------------------------------------------------------------ */
async function loadDashboardData() {
  // TODO: reemplazar por la llamada real, por ejemplo:
  // const response = await fetch('/api/dashboard');
  // if (!response.ok) throw new Error('Error al cargar el dashboard');
  // return response.json();
  return dashboardData;
}

/* ------------------------------------------------------------------
   Tarjetas KPI (Pacientes / Alertas / Recomendaciones / Métricas)
------------------------------------------------------------------ */
function renderKpiCards(data) {
  animateCounter('total-patients', data.patients);
  animateCounter('active-alerts', data.alerts);
  animateCounter('pending-recommendations', data.recommendations);
  animateCounter('recent-metrics', data.measurements);
}

/* ------------------------------------------------------------------
   Resumen clínico (bloque bajo el hero)
------------------------------------------------------------------ */
function renderClinicalSummary(data) {
  animateCounter('summary-patients', data.patients);
  animateCounter('summary-alerts', data.alerts);
  animateCounter('summary-recommendations', data.recommendations);
}

/* ------------------------------------------------------------------
   Resumen de métricas (tarjeta lateral de la gráfica)
------------------------------------------------------------------ */
function renderMetricSummary(data) {
  setText('recent-measurements', data.measurements);
  setText('average-weight', `${data.averageWeight.toFixed(1)} kg`);
  setText('average-bmi', data.averageBMI.toFixed(1));
}

/* ------------------------------------------------------------------
   Gráfica de evolución de peso (Chart.js)
   Requiere que el HTML cargue Chart.js antes de este archivo:
   <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.4/dist/chart.umd.min.js"></script>
------------------------------------------------------------------ */
let weightChartInstance = null;

function renderWeightChart({ labels, values }) {
  const canvas = document.getElementById('weight-chart');
  if (!canvas || !window.Chart) return;

  const ctx = canvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.clientHeight || 230);
  gradient.addColorStop(0, 'rgba(47, 137, 167, 0.28)');
  gradient.addColorStop(1, 'rgba(47, 137, 167, 0)');

  if (weightChartInstance) {
    weightChartInstance.destroy();
  }

  weightChartInstance = new Chart(canvas, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Peso (kg)',
          data: values,
          borderColor: '#2F89A7',
          backgroundColor: gradient,
          borderWidth: 2.5,
          pointRadius: 4,
          pointBackgroundColor: '#2F89A7',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2,
          pointHoverRadius: 6,
          tension: 0.4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { intersect: false, mode: 'index' },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#12141A',
          titleFont: { family: 'Inter', size: 12 },
          bodyFont: { family: 'Inter', size: 12 },
          padding: 10,
          cornerRadius: 8,
          displayColors: false,
          callbacks: {
            label: (item) => `${item.formattedValue} kg`
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#9AA1AD', font: { family: 'Inter', size: 11 } }
        },
        y: {
          beginAtZero: false,
          grid: { color: 'rgba(15, 23, 42, 0.06)' },
          ticks: {
            color: '#9AA1AD',
            font: { family: 'Inter', size: 11 },
            callback: (value) => `${value} kg`
          }
        }
      }
    }
  });
}

/* ------------------------------------------------------------------
   Utilidades de DOM
------------------------------------------------------------------ */
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function animateCounter(id, endValue, duration = 800) {
  const el = document.getElementById(id);
  if (!el) return;

  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.round(endValue * eased);
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = endValue;
  }

  requestAnimationFrame(tick);
}
