
// Metadata: Descriptions and Analysis Texts
const VARIABLE_META = {
    'Mx': {
        label: 'Mx (Momento Fletor X)',
        analysis: 'O <b>Mx</b> representa a flexão em torno do eixo X. Em torres simétricas, este valor tende a ser menor que o momento principal (My) se a direção do vento estiver alinhada com Y, ou pode indicar componentes laterais de carga.'
    },
    'My': {
        label: 'My (Momento Fletor Y)',
        analysis: 'O <b>My</b> é tipicamente o esforço dominante de flexão. Seu valor é máximo na base, gerado pela força de arrasto do vento na nacelle e na torre, e decresce quadraticamente ou linearmente conforme subimos, diminuindo o braço de alavanca.'
    },
    'Mxy': {
        label: 'Mxy (Momento Resultante)',
        analysis: 'O <b>Mxy</b> é a resultante vetorial dos momentos fletores. Ele resume a demanda total de flexão na seção. O dimensionamento da parede da torre geralmente é governado por este envelope máximo.'
    },
    'Mz': {
        label: 'Mz (Momento Torsor)',
        analysis: 'O <b>Mz</b> indica a torção no eixo vertical. Geralmente baixo em torres tubulares, exceto se houver excentricidade de cargas na nacelle ou efeitos dinâmicos de guinada (yaw).'
    },
    'Fx': {
        label: 'Fx (Cisalhamento X)',
        analysis: 'O <b>Fx</b> é a força cortante na direção X. Sua variação ao longo da altura depende de como as cargas laterais (vento) são distribuídas. Variações bruscas podem indicar pontos de aplicação de carga concentrada.'
    },
    'Fy': {
        label: 'Fy (Cisalhamento Y)',
        analysis: 'O <b>Fy</b> é o cisalhamento principal associado à direção do vento dominante. Ele representa a "soma" de todas as forças horizontais acima da seção considerada.'
    },
    'Fxy': {
        label: 'Fxy (Cisalhamento Resultante)',
        analysis: 'O <b>Fxy</b> combina os cortes em X e Y. É crucial para o dimensionamento de soldas e parafusos nas conexões de flanges entre seções.'
    },
    'Fz': {
        label: 'Fz (Força Axial/Compressão)',
        analysis: 'A força <b>Fz</b> é máxima (mais negativa) na base, pois suporta todo o peso da torre mais a nacelle. À medida que subimos, a massa suportada diminui, logo a compressão se torna menor.'
    }
};

const CATEGORIES = {
    moments: ['Mx', 'My', 'Mxy', 'Mz'],
    forces: ['Fx', 'Fy', 'Fxy', 'Fz']
};

const COLORS = {
    '10^-2': {
        'Mx': '#FF6B6B', 'My': '#4ECDC4', 'Mxy': '#45B7D1', 'Mz': '#96CEB4',
        'Fx': '#FFCC5C', 'Fy': '#FF6F69', 'Fxy': '#FFEEAD', 'Fz': '#D4A5A5'
    },
    '10^-4': {
        'Mx': '#CC0000', 'My': '#006666', 'Mxy': '#004C99', 'Mz': '#2D5948',
        'Fx': '#CC9900', 'Fy': '#CC0000', 'Fxy': '#999900', 'Fz': '#800000'
    }
};

// State
let currentType = 'moments';
let selectedVars = ['My', 'Mxy']; // Default selection

// DOM Elements
const typeSelect = document.getElementById('typeSelect');
const variableCheckboxes = document.getElementById('variableCheckboxes');
const btnSelectAll = document.getElementById('btnSelectAll');
const btnClearAll = document.getElementById('btnClearAll');
const case10_2 = document.getElementById('case10_2');
const case10_4 = document.getElementById('case10_4');
const analysisContent = document.getElementById('analysisContent');

// Initialization
function init() {
    typeSelect.addEventListener('change', handleTypeChange);
    btnSelectAll.addEventListener('click', () => setAllVars(true));
    btnClearAll.addEventListener('click', () => setAllVars(false));
    case10_2.addEventListener('change', updatePlot);
    case10_4.addEventListener('change', updatePlot);

    renderCheckboxes();
    updatePlot();
    updateAnalysis();
}

function handleTypeChange(e) {
    currentType = e.target.value;
    selectedVars = [];
    if (currentType === 'moments') {
        selectedVars = ['My', 'Mxy'];
    } else {
        selectedVars = ['Fz'];
    }
    renderCheckboxes();
    updatePlot();
    updateAnalysis();
}

function renderCheckboxes() {
    variableCheckboxes.innerHTML = '';
    const vars = CATEGORIES[currentType];

    vars.forEach(v => {
        const div = document.createElement('div');
        div.className = 'checkbox-item';

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = `var_${v}`;
        input.value = v;
        input.checked = selectedVars.includes(v);
        input.addEventListener('change', (e) => {
            if (e.target.checked) {
                selectedVars.push(v);
            } else {
                selectedVars = selectedVars.filter(item => item !== v);
            }
            updatePlot();
            updateAnalysis();
        });

        const label = document.createElement('label');
        label.htmlFor = `var_${v}`;
        // Use the detailed label from metadata
        label.textContent = VARIABLE_META[v].label;

        div.appendChild(input);
        div.appendChild(label);
        variableCheckboxes.appendChild(div);
    });
}

function setAllVars(checked) {
    const inputs = variableCheckboxes.querySelectorAll('input');
    selectedVars = [];
    inputs.forEach(input => {
        input.checked = checked;
        if (checked) selectedVars.push(input.value);
    });
    updatePlot();
    updateAnalysis();
}

function updateAnalysis() {
    if (selectedVars.length === 0) {
        analysisContent.innerHTML = '<p class="placeholder-text">Selecione uma grandeza para visualizar a dedução técnica.</p>';
        return;
    }

    let html = '';
    // Show analysis for all selected variables in order
    // Order based on CATEGORIES definition to keep it stable
    const allVars = [...CATEGORIES.moments, ...CATEGORIES.forces];

    selectedVars.forEach(v => {
        const meta = VARIABLE_META[v];
        if (meta) {
            html += `
                <div class="analysis-item">
                    <strong>${meta.label}</strong>
                    <p>${meta.analysis}</p>
                </div>
            `;
        }
    });

    analysisContent.innerHTML = html;
}

function updatePlot() {
    const traces = [];
    const show10_2 = case10_2.checked;
    const show10_4 = case10_4.checked;
    const unit = currentType === 'moments' ? 'kNm' : 'kN';

    selectedVars.forEach(v => {
        // Safe check for metadata in case of mixed selection
        const meta = VARIABLE_META[v];
        const labelName = meta ? meta.label.split(' (')[0] : v;

        if (show10_2) {
            traces.push({
                x: dataCase10_2.map(d => d.TowerSection),
                y: dataCase10_2.map(d => d[v]),
                mode: 'lines',
                name: `${labelName} (10⁻²)`,
                line: {
                    color: COLORS['10^-2'][v],
                    width: 3
                },
                hovertemplate: `<b>10⁻²</b><br>${labelName}: %{y:.3f} ${unit}<br>H: %{x}m<extra></extra>`
            });
        }

        if (show10_4) {
            traces.push({
                x: dataCase10_4.map(d => d.TowerSection),
                y: dataCase10_4.map(d => d[v]),
                mode: 'lines',
                name: `${labelName} (10⁻⁴)`,
                line: {
                    color: COLORS['10^-4'][v],
                    width: 3,
                    dash: 'dot'
                },
                hovertemplate: `<b>10⁻⁴</b><br>${labelName}: %{y:.3f} ${unit}<br>H: %{x}m<extra></extra>`
            });
        }
    });

    const layout = {
        title: {
            text: 'Comparação de Esforços ao Longo da Torre',
            font: { size: 18, color: '#e0e0e0' }
        },
        paper_bgcolor: '#252525',
        plot_bgcolor: '#252525',
        font: { color: '#e0e0e0' },
        xaxis: {
            title: 'Altura da torre (m)',
            gridcolor: '#333',
            zerolinecolor: '#444'
        },
        yaxis: {
            title: `Esforço (${unit})`,
            gridcolor: '#333',
            zerolinecolor: '#444'
        },
        legend: {
            font: { color: '#e0e0e0' },
            orientation: 'h',
            y: 1.1
        },
        margin: { t: 40, l: 60, r: 30, b: 50 }
    };

    const config = {
        responsive: true,
        displayModeBar: true
    };

    Plotly.newPlot('plot', traces, layout, config);
}

// Start app
init();
