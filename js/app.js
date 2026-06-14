/* ============================================
   NEXUM SOLUTIONS VMO - App Principal
   ============================================ */

// ============================================
// DATA STORE (LocalStorage)
// ============================================

const Store = {
    get(key, defaultValue = []) {
        try {
            const data = localStorage.getItem(`nexum_${key}`);
            return data ? JSON.parse(data) : defaultValue;
        } catch { return defaultValue; }
    },
    set(key, value) {
        localStorage.setItem(`nexum_${key}`, JSON.stringify(value));
    }
};

// ============================================
// SERVICES DATA
// ============================================

const servicesData = [
    {
        id: 1, category: 'estrategia', icon: 'fa-lightbulb',
        title: 'Consultoría TI Estratégica',
        desc: 'Acompañamiento en la toma de decisiones y transformación digital. Alineamos la tecnología con los objetivos de negocio.',
        tags: ['Estrategia', 'Transformación Digital', 'Roadmap TI'],
        detailTitle: 'Transformamos su visión tecnológica',
        detailDesc: 'Diagnosticamos su madurez digital, diseñamos hojas de ruta personalizadas y acompañamos la ejecución de iniciativas estratégicas. Reducimos riesgos, aceleramos time-to-market y alineamos cada inversión TI con los objetivos del negocio.',
        benefits: ['Diagnóstico de madurez digital', 'Roadmap tecnológico 12-36 meses', 'ROI de iniciativas TI', 'Gobierno de datos y procesos'],
        forWhom: 'CTOs, CIOs, Directores de TI y CEOs que buscan transformar su área de tecnología en un centro de valor estratégico.'
    },
    {
        id: 2, category: 'estrategia', icon: 'fa-shield-halved',
        title: 'Gestión de Compliance y Gobierno IT',
        desc: 'Marcos de trabajo seguros, normados y escalables. Aseguramos el cumplimiento regulatorio y las mejores prácticas.',
        tags: ['COBIT', 'ISO 27001', 'GDPR', 'SOX'],
        detailTitle: 'Cumplimiento normativo sin fricción',
        detailDesc: 'Implementamos marcos de gobierno TI (COBIT, ISO 38500) y aseguramos el cumplimiento de regulaciones como GDPR, SOX, PCI-DSS e ISO 27001. Automatizamos la gestión de riesgos y controles.',
        benefits: ['Auditorías exitosas', 'Reducción de multas y sanciones', 'Automatización de controles', 'Reportes en tiempo real'],
        forWhom: 'Oficiales de Compliance, Auditores Internos, CISO y Gerentes de Riesgo.'
    },
    {
        id: 3, category: 'estrategia', icon: 'fa-cubes',
        title: 'Gestión Estratégica VMO',
        desc: 'Optimización del valor del ecosistema de proveedores. Maximice el valor del portafolio con nuestra plataforma.',
        tags: ['VMO', 'Proveedores', 'Portafolio'],
        detailTitle: 'Maximice el valor de su ecosistema de proveedores',
        detailDesc: 'Diseñamos e implementamos oficinas de gestión de proveedores (VMO) que centralizan la administración del ciclo de vida completo: selección, contratación, evaluación y desvinculación.',
        benefits: ['Consolidación de proveedores', 'Reducción de costos 15-25%', 'Gestión centralizada', 'KPIs y scorecards automatizados'],
        forWhom: 'Gerentes de Procurement, VMO Managers, Directores de Operaciones TI.'
    },
    {
        id: 4, category: 'estrategia', icon: 'fa-scale-balanced',
        title: 'GRC Avanzado',
        desc: 'Evaluación integral de riesgos, continuidad operativa (BIA/BCP/DRP) y resiliencia empresarial.',
        tags: ['GRC', 'Riesgos', 'BCP', 'DRP', 'BIA'],
        detailTitle: 'Resiliencia empresarial inteligente',
        detailDesc: 'Evaluamos riesgos estratégicos, operacionales y tecnológicos. Diseñamos planes de continuidad (BCP), recuperación ante desastres (DRP) y análisis de impacto al negocio (BIA).',
        benefits: ['Continuidad operativa 24/7', 'Planes de recuperación probados', 'Cumplimiento normativo', 'Reducción de exposición al riesgo'],
        forWhom: 'Gerentes de Riesgo, Continuidad Operativa, CISO y Dirección General.'
    },
    {
        id: 15, category: 'estrategia', icon: 'fa-fingerprint',
        title: 'IAM & CIAM - Gestión de Identidades',
        desc: 'Soluciones integrales de Identidad y Acceso (IAM/CIAM): autenticación multifactor, single sign-on, gobierno de identidades y control de accesos basado en riesgos.',
        tags: ['IAM', 'CIAM', 'SSO', 'MFA', 'Autenticación'],
        detailTitle: 'Identidad como centro de su seguridad',
        detailDesc: 'Implementamos soluciones IAM/CIAM de clase empresarial: autenticación adaptativa, federación de identidades, ciclo de vida automatizado y control de accesos basado en políticas dinámicas.',
        benefits: ['Autenticación sin fricción', 'Reducción de fraudes de identidad', 'Gobierno de accesos automatizado', 'SSO y MFA unificados'],
        forWhom: 'CISO, Gerentes de Seguridad, Directores de TI y empresas con alta demanda de autenticación digital.'
    },
    {
        id: 16, category: 'estrategia', icon: 'fa-shield',
        title: 'Ciberseguridad & Protección Digital',
        desc: 'Arquitectura de seguridad zero trust, protección contra fraudes de identidad, seguridad en la nube y cumplimiento normativo de clase empresarial.',
        tags: ['Ciberseguridad', 'Zero Trust', 'Fraude', 'Cloud Security'],
        detailTitle: 'Protección integral para su empresa digital',
        detailDesc: 'Diseñamos arquitecturas Zero Trust, protegemos contra fraudes de identidad, aseguramos entornos cloud y establecemos centros de operaciones de seguridad (SOC) con respuesta automatizada.',
        benefits: ['Arquitectura Zero Trust', 'Detección y respuesta en tiempo real', 'Seguridad cloud nativa', 'Protección contra ransomware'],
        forWhom: 'CISO, Gerentes de Ciberseguridad, Directores de TI y empresas en proceso de transformación digital.'
    },
    {
        id: 5, category: 'operaciones', icon: 'fa-gears',
        title: 'Gestión ITSM & ITIL',
        desc: 'Estandarización y eficiencia en la entrega de servicios TI. Implementación de procesos basados en ITIL.',
        tags: ['ITSM', 'ITIL', 'Service Desk'],
        detailTitle: 'Eficiencia operativa con estándares globales',
        detailDesc: 'Implementamos y optimizamos procesos ITSM basados en ITIL 4: gestión de incidentes, problemas, cambios, activos y catálogo de servicios. Transformamos su Service Desk en un centro de excelencia.',
        benefits: ['Reducción de incidentes 40%', 'Service Desk optimizado', 'Gestión de cambios sin riesgos', 'Catálogo de servicios automatizado'],
        forWhom: 'ITSM Managers, Service Desk Leads, Directores de Operaciones TI.'
    },
    {
        id: 6, category: 'operaciones', icon: 'fa-clock',
        title: 'Gestión de SLA/SLO',
        desc: 'Aseguramiento de niveles de servicio alineados a la realidad operativa. Monitoreo y reporting de cumplimiento.',
        tags: ['SLA', 'SLO', 'SLM', 'KPIs'],
        detailTitle: 'Acuerdos de servicio que cumplen lo que prometen',
        detailDesc: 'Diseñamos, negociamos y monitoreamos Acuerdos de Nivel de Servicio (SLA) y Objetivos (SLO) con dashboards en tiempo real, alertas inteligentes y reportes ejecutivos automatizados.',
        benefits: ['Cumplimiento > 99.5%', 'Penalizaciones automatizadas', 'Dashboards en tiempo real', 'Mejora continua de servicios'],
        forWhom: 'VMO Managers, Gerentes de Contratos, ITSM Managers y Proveedores de Servicios.'
    },
    {
        id: 7, category: 'operaciones', icon: 'fa-copyright',
        title: 'Gestión y Análisis SAM',
        desc: 'Control, optimización y transparencia en activos de software. Gestión del ciclo de vida de licencias.',
        tags: ['SAM', 'Licencias', 'Optimización'],
        detailTitle: 'Control total de su portafolio de software',
        detailDesc: 'Implementamos Software Asset Management (SAM) para optimizar licencias, eliminar gastos innecesarios, asegurar compliance con fabricantes y maximizar el valor de sus inversiones en software.',
        benefits: ['Ahorro 20-35% en licencias', 'Compliance con fabricantes', 'Inventario automatizado', 'Optimización continua'],
        forWhom: 'SAM Managers, Gerentes de TI, Procurement y Finanzas.'
    },
    {
        id: 8, category: 'operaciones', icon: 'fa-file-signature',
        title: 'Sourcing Estratégico (RFXs)',
        desc: 'Procesos de adquisición y licitación (RFI, RFQ, RFT, RFP) de alto impacto.',
        tags: ['RFI', 'RFQ', 'RFT', 'RFP'],
        detailTitle: 'Adquisiciones inteligentes, resultados superiores',
        detailDesc: 'Diseñamos y ejecutamos procesos de sourcing completos: RFI para exploración de mercado, RFQ para cotizaciones, RFT para propuestas técnicas y RFP para selección integral de proveedores.',
        benefits: ['Procesos estandarizados', 'Selección objetiva', 'Negociación informada', 'Ahorro 15-25% en adquisiciones'],
        forWhom: 'Procurement Managers, VMO Managers, Directores de TI y Comités de Adquisiciones.'
    },
    {
        id: 9, category: 'operaciones', icon: 'fa-chart-line',
        title: 'Benchmarking y Cost Reduction',
        desc: 'Proyectos de eficiencia financiera y maximización de inversiones TI.',
        tags: ['Benchmarking', 'Cost Reduction'],
        detailTitle: 'Maximice cada dólar invertido en TI',
        detailDesc: 'Comparamos sus costos TI contra benchmarks de industria, identificamos oportunidades de optimización y ejecutamos proyectos de reducción de gastos recurrentes e inversiones sin sacrificar calidad.',
        benefits: ['Benchmarks personalizados', 'Ahorros 15-30%', 'ROI medible', 'Mejores prácticas de industria'],
        forWhom: 'CFOs, Directores de TI, Procurement Managers y VMO Managers.'
    },
    {
        id: 10, category: 'operaciones', icon: 'fa-arrow-right-arrow-left',
        title: 'Operational Model & Transition',
        desc: 'Diseño y aceleración de capacidades competitivas. Gestión de transiciones.',
        tags: ['Transición', 'Modelo Operativo'],
        detailTitle: 'Transiciones suaves, resultados rápidos',
        detailDesc: 'Diseñamos modelos operativos ágiles y gestionamos transiciones de servicios, infraestructura o contratos con metodologías probadas que minimizan riesgos y aseguran continuidad operativa.',
        benefits: ['Transiciones sin interrupción', 'Modelos operativos optimizados', 'Time-to-value acelerado', 'Knowledge transfer asegurado'],
        forWhom: 'Gerentes de Transición, Directores de Operaciones, VMO Managers.'
    },
    {
        id: 11, category: 'innovacion', icon: 'fa-brain',
        title: 'Desarrollo de Capa Agéntica',
        desc: 'Sistemas autónomos para automatización de procesos complejos. Agentes inteligentes.',
        tags: ['IA Agéntica', 'Automatización'],
        detailTitle: 'Automatización inteligente con agentes autónomos',
        detailDesc: 'Diseñamos e implementamos sistemas multi-agente que automatizan procesos complejos: agentes de decisión, orquestación, monitoreo y ejecución autónoma con capacidad de aprendizaje continuo.',
        benefits: ['Automatización de procesos complejos', 'Agentes autónomos 24/7', 'Toma de decisiones en tiempo real', 'Escalabilidad sin límites'],
        forWhom: 'Directores de Innovación, CTOs, Gerentes de Automatización y empresas con procesos intensivos en datos.'
    },
    {
        id: 12, category: 'innovacion', icon: 'fa-robot',
        title: 'IA Operacional Automatizada',
        desc: 'Software a medida para ejecución inteligente. Automatización con inteligencia artificial.',
        tags: ['IA', 'RPA', 'ML'],
        detailTitle: 'IA que opera, no solo recomienda',
        detailDesc: 'Desarrollamos software de IA operacional que ejecuta tareas de forma autónoma: desde RPA inteligente hasta modelos de machine learning en producción con monitoreo y retraining automatizado.',
        benefits: ['RPA inteligente', 'ML en producción', 'Automatización end-to-end', 'Monitoreo y mejora continua'],
        forWhom: 'Gerentes de Operaciones, CTOs, Directores de Datos y empresas con procesos repetitivos escalables.'
    },
    {
        id: 13, category: 'innovacion', icon: 'fa-code',
        title: 'Desarrollo de Productos & Web',
        desc: 'Soluciones digitales escalables centradas en experiencia de usuario.',
        tags: ['Web', 'Mobile', 'UX/UI'],
        detailTitle: 'Productos digitales que marcan la diferencia',
        detailDesc: 'Creamos productos digitales desde la conceptualización hasta el lanzamiento: aplicaciones web progresivas, plataformas SaaS, apps móviles y portales corporativos con diseño UX/UI de clase mundial.',
        benefits: ['Time-to-market acelerado', 'UX/UI centrado en usuario', 'Arquitectura escalable', 'Soporte y evolución continua'],
        forWhom: 'Product Managers, Directores de Digital, CTOs y startups en etapa de crecimiento.'
    },
    {
        id: 14, category: 'innovacion', icon: 'fa-people-arrows',
        title: 'Change Management',
        desc: 'Estrategias de adopción y gestión del cambio para evolucionar con la tecnología.',
        tags: ['Change Management', 'Adopción'],
        detailTitle: 'El cambio exitoso comienza con las personas',
        detailDesc: 'Diseñamos estrategias de gestión del cambio organizacional para asegurar la adopción efectiva de nuevas tecnologías, procesos y modelos de trabajo. Metodologías ADKAR, Kotter y ágiles.',
        benefits: ['Adopción > 85%', 'Resistencia gestionada', 'Capacitación efectiva', 'Cultura de innovación'],
        forWhom: 'Gerentes de RRHH, Directores de Transformación, Líderes de Proyecto y sponsors ejecutivos.'
    }
];


// ============================================
// SEED DATA
// ============================================

function seedData() {
    if (Store.get('proveedores').length === 0) {
        Store.set('proveedores', [
            { id: 1, nombre: 'CloudTech Solutions', categoria: 'Cloud & SaaS', contacto: 'María García', email: 'maria@cloudtech.com', valor: 450000, estado: 'Activo', rendimiento: 92 },
            { id: 2, nombre: 'InfraSys Corp', categoria: 'Infraestructura', contacto: 'Carlos López', email: 'carlos@infrasys.com', valor: 380000, estado: 'Activo', rendimiento: 88 },
            { id: 3, nombre: 'SoftInnovate', categoria: 'Software', contacto: 'Ana Martínez', email: 'ana@softinnovate.com', valor: 290000, estado: 'En Evaluación', rendimiento: 75 },
            { id: 4, nombre: 'DataSecure', categoria: 'Consultoría', contacto: 'Pedro Ramírez', email: 'pedro@datasecure.com', valor: 180000, estado: 'Activo', rendimiento: 95 },
            { id: 5, nombre: 'NetConnect', categoria: 'Infraestructura', contacto: 'Laura Torres', email: 'laura@netconnect.com', valor: 320000, estado: 'En Transición', rendimiento: 70 }
        ]);
    }
    if (Store.get('contratos').length === 0) {
        Store.set('contratos', [
            { id: 1, nombre: 'Infraestructura Cloud 2026', proveedorId: 1, inicio: '2026-01-01', fin: '2026-12-31', valor: 450000, estado: 'Vigente' },
            { id: 2, nombre: 'Soporte Infraestructura', proveedorId: 2, inicio: '2025-06-01', fin: '2026-05-31', valor: 380000, estado: 'Por Vencer' },
            { id: 3, nombre: 'Licencias Enterprise', proveedorId: 3, inicio: '2026-03-01', fin: '2027-02-28', valor: 290000, estado: 'Vigente' },
            { id: 4, nombre: 'Consultoría Seguridad', proveedorId: 4, inicio: '2026-01-15', fin: '2026-07-15', valor: 180000, estado: 'Vigente' }
        ]);
    }
    if (Store.get('evaluaciones').length === 0) {
        Store.set('evaluaciones', [
            { id: 1, proveedorId: 1, calidad: 9, cumplimiento: 9, costos: 8, innovacion: 9 },
            { id: 2, proveedorId: 2, calidad: 8, cumplimiento: 9, costos: 7, innovacion: 7 },
            { id: 3, proveedorId: 4, calidad: 10, cumplimiento: 9, costos: 9, innovacion: 9 }
        ]);
    }
    if (Store.get('slas').length === 0) {
        Store.set('slas', [
            { id: 1, proveedorId: 1, servicio: 'Cloud Uptime', uptime: 99.9, respuesta: 2, cumplimiento: 99.5, penalizacion: '5% descuento' },
            { id: 2, proveedorId: 2, servicio: 'Soporte N1', uptime: 99.5, respuesta: 4, cumplimiento: 98.2, penalizacion: '3% descuento' },
            { id: 3, proveedorId: 4, servicio: 'Consultoría Seguridad', uptime: 99.0, respuesta: 8, cumplimiento: 97.8, penalizacion: '2% descuento' }
        ]);
    }
    if (Store.get('rfxs').length === 0) {
        Store.set('rfxs', [
            { id: 1, tipo: 'RFP', titulo: 'Plataforma Cloud Híbrida', proveedores: '5', fechaLimite: '2026-07-15', estado: 'En Proceso' },
            { id: 2, tipo: 'RFQ', titulo: 'Licencias Microsoft EA', proveedores: '3', fechaLimite: '2026-06-30', estado: 'Borrador' },
            { id: 3, tipo: 'RFI', titulo: 'Soluciones Ciberseguridad', proveedores: '8', fechaLimite: '2026-08-01', estado: 'En Evaluación' }
        ]);
    }
}

// ============================================
// HELPERS
// ============================================

function getProvName(id) {
    const p = Store.get('proveedores').find(x => x.id === id);
    return p ? p.nombre : '—';
}

function statusClass(estado) {
    const map = {
        'Activo': 'status-active', 'Vigente': 'status-vigente',
        'En Evaluación': 'status-evaluacion', 'Por Vencer': 'status-vencer',
        'Inactivo': 'status-inactivo', 'Vencido': 'status-vencido',
        'En Transición': 'status-transicion', 'En Negociación': 'status-negociacion',
        'Borrador': 'status-borrador', 'En Proceso': 'status-proceso',
        'Adjudicado': 'status-adjudicado', 'Cancelado': 'status-cancelado'
    };
    return map[estado] || 'status-active';
}

function formatCurrency(n) {
    return '$' + Number(n).toLocaleString('en-US');
}

function showToast(msg, type = 'success') {
    const t = document.getElementById('toast');
    t.className = 'toast show ' + type;
    t.innerHTML = `<i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i> ${msg}`;
    setTimeout(() => { t.className = 'toast'; }, 3000);
}

// ============================================
// SPA NAVIGATION
// ============================================

let currentPage = 'dashboard';
let charts = {};

function navigate(page) {
    currentPage = page;
    document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.toggle('active', el.dataset.page === page);
    });
    renderPage(page);
    // Close sidebar on mobile
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('active');
}

function renderPage(page) {
    const container = document.getElementById('pageContent');
    switch(page) {
        case 'dashboard': renderDashboard(container); break;
        case 'proveedores': renderProveedores(container); break;
        case 'contratos': renderContratos(container); break;
        case 'evaluaciones': renderEvaluaciones(container); break;
        case 'sla': renderSLA(container); break;
        case 'rfx': renderRFX(container); break;
        case 'benchmarking': renderBenchmarking(container); break;
        case 'reportes': renderReportes(container); break;
        case 'servicios': renderServicios(container); break;
        case 'contacto': renderContacto(container); break;
    }
}

// ============================================
// DASHBOARD
// ============================================

function renderDashboard(container) {
    const prov = Store.get('proveedores');
    const cont = Store.get('contratos');
    const evalData = Store.get('evaluaciones');
    const slas = Store.get('slas');

    const totalGasto = prov.reduce((s, p) => s + p.valor, 0);
    const activos = prov.filter(p => p.estado === 'Activo').length;
    const avgRend = prov.length ? (prov.reduce((s, p) => s + p.rendimiento, 0) / prov.length).toFixed(0) : 0;
    const avgSLA = slas.length ? (slas.reduce((s, x) => s + x.cumplimiento, 0) / slas.length).toFixed(1) : 0;
    const avgEval = evalData.length ? (evalData.reduce((s, e) => s + (e.calidad + e.cumplimiento + e.costos + e.innovacion) / 4, 0) / evalData.length).toFixed(1) : 0;

    container.innerHTML = `
        <div class="page-header">
            <div class="page-header-left">
                <h1>Dashboard Estratégico VMO</h1>
                <p>Panel de control central para la gestión del ecosistema de proveedores TI</p>
            </div>
            <div class="page-header-actions">
                <button class="btn btn-secondary btn-sm" onclick="exportVMOData()"><i class="fas fa-download"></i> Exportar</button>
                <button class="btn btn-primary btn-sm" onclick="navigate('proveedores')"><i class="fas fa-plus"></i> Nuevo Proveedor</button>
            </div>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon purple"><i class="fas fa-building"></i></div>
                <div class="stat-info">
                    <span class="stat-label">Proveedores Activos</span>
                    <span class="stat-value">${activos} <span style="font-size:0.8rem;color:var(--text-muted)">/ ${prov.length}</span></span>
                    <span class="stat-change positive">${prov.length ? Math.round(activos/prov.length*100) : 0}% del total</span>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon teal"><i class="fas fa-dollar-sign"></i></div>
                <div class="stat-info">
                    <span class="stat-label">Gasto TI Total</span>
                    <span class="stat-value gradient">${formatCurrency(totalGasto)}</span>
                    <span class="stat-change positive">-12.5% vs año anterior</span>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon green"><i class="fas fa-chart-line"></i></div>
                <div class="stat-info">
                    <span class="stat-label">Rendimiento Promedio</span>
                    <span class="stat-value">${avgRend}%</span>
                    <span class="stat-change positive">+3.2% este trimestre</span>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon pink"><i class="fas fa-clock"></i></div>
                <div class="stat-info">
                    <span class="stat-label">Cumplimiento SLA</span>
                    <span class="stat-value">${avgSLA}%</span>
                    <span class="stat-change positive">Dentro del objetivo</span>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon orange"><i class="fas fa-star"></i></div>
                <div class="stat-info">
                    <span class="stat-label">Score Evaluación</span>
                    <span class="stat-value">${avgEval}</span>
                    <span class="stat-change positive">/ 10 puntos</span>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon red"><i class="fas fa-file-contract"></i></div>
                <div class="stat-info">
                    <span class="stat-label">Contratos Vigentes</span>
                    <span class="stat-value">${cont.filter(c => c.estado === 'Vigente').length}</span>
                    <span class="stat-change ${cont.filter(c => c.estado === 'Por Vencer').length > 0 ? 'negative' : 'positive'}">
                        ${cont.filter(c => c.estado === 'Por Vencer').length} por vencer
                    </span>
                </div>
            </div>
        </div>

        <div class="charts-grid">
            <div class="card">
                <div class="card-header"><h3><i class="fas fa-chart-bar"></i> Gasto TI por Categoría</h3></div>
                <div class="chart-container"><canvas id="chartGastos"></canvas></div>
            </div>
            <div class="card">
                <div class="card-header"><h3><i class="fas fa-pie-chart"></i> Distribución</h3></div>
                <div class="chart-container"><canvas id="chartDist"></canvas></div>
            </div>
        </div>

        <div class="charts-grid-2">
            <div class="card">
                <div class="card-header"><h3><i class="fas fa-trend-up"></i> Tendencia de Gastos</h3></div>
                <div class="chart-container"><canvas id="chartTend"></canvas></div>
            </div>
            <div class="card">
                <div class="card-header"><h3><i class="fas fa-tachometer-alt"></i> KPIs Clave</h3></div>
                <div class="kpi-grid">
                    <div class="kpi-item"><span class="kpi-value">${Math.round(avgRend * 0.85 + 15)}%</span><span class="kpi-label">Eficiencia Costos</span></div>
                    <div class="kpi-item"><span class="kpi-value">${prov.length ? Math.round(activos/prov.length*100) : 0}%</span><span class="kpi-label">Salud Proveedores</span></div>
                    <div class="kpi-item"><span class="kpi-value">${cont.length ? Math.round(cont.filter(c => c.estado === 'Vigente').length/cont.length*100) : 0}%</span><span class="kpi-label">Cumplimiento Contractual</span></div>
                    <div class="kpi-item"><span class="kpi-value">${evalData.length ? (evalData.reduce((s,e) => s + e.innovacion, 0)/evalData.length).toFixed(1) : 0}</span><span class="kpi-label">Índice Innovación</span></div>
                </div>
            </div>
        </div>
    `;

    // Init charts after DOM
    setTimeout(() => {
        initDashboardCharts();
    }, 100);
}

function initDashboardCharts() {
    // Destroy previous
    Object.values(charts).forEach(c => { try { c.destroy(); } catch(e) {} });
    charts = {};

    const gastosCtx = document.getElementById('chartGastos');
    if (gastosCtx) {
        charts.gastos = new Chart(gastosCtx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Infraestructura', 'Software', 'Cloud', 'Servicios', 'Consultoría', 'Hardware'],
                datasets: [{
                    label: 'Gasto Anual',
                    data: [520000, 380000, 450000, 290000, 180000, 210000],
                    backgroundColor: ['rgba(108,92,231,0.8)','rgba(0,206,201,0.8)','rgba(253,121,168,0.8)','rgba(253,203,110,0.8)','rgba(108,92,231,0.5)','rgba(0,206,201,0.5)'],
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true, ticks: { color: '#6b6b8d', callback: v => '$'+(v/1000).toFixed(0)+'k' }, grid: { color: 'rgba(255,255,255,0.03)' } },
                    x: { ticks: { color: '#6b6b8d' }, grid: { display: false } }
                }
            }
        });
    }

    const distCtx = document.getElementById('chartDist');
    if (distCtx) {
        charts.dist = new Chart(distCtx.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Infraestructura','Software','Cloud','Servicios','Consultoría','Hardware'],
                datasets: [{ data: [28,20,24,15,10,3], backgroundColor: ['#6C5CE7','#00CEC9','#FD79A8','#FDCB6E','#A29BFE','#55EFC4'], borderWidth: 0 }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom', labels: { color: '#6b6b8d', padding: 12, font: { size: 11 } } } },
                cutout: '65%'
            }
        });
    }

    const tendCtx = document.getElementById('chartTend');
    if (tendCtx) {
        charts.tend = new Chart(tendCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
                datasets: [
                    { label: '2025', data: [185,175,190,180,195,188,192,185,178,182,190,195], borderColor: '#6b6b8d', backgroundColor: 'rgba(107,107,141,0.1)', fill: true, tension: 0.4, pointRadius: 3, borderDash: [5,5] },
                    { label: '2026', data: [165,158,170,162,155,148,150,145,140,135,130,125], borderColor: '#6C5CE7', backgroundColor: 'rgba(108,92,231,0.1)', fill: true, tension: 0.4, pointRadius: 4 }
                ]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { labels: { color: '#6b6b8d', font: { size: 11 } } } },
                scales: {
                    y: { ticks: { color: '#6b6b8d', callback: v => '$'+v+'k' }, grid: { color: 'rgba(255,255,255,0.03)' } },
                    x: { ticks: { color: '#6b6b8d' }, grid: { display: false } }
                }
            }
        });
    }
}

// ============================================
// PROVEEDORES PAGE
// ============================================

function renderProveedores(container) {
    const data = Store.get('proveedores');
    container.innerHTML = `
        <div class="page-header">
            <div class="page-header-left">
                <h1>Gestión de Proveedores</h1>
                <p>${data.length} proveedores registrados · ${data.filter(p => p.estado === 'Activo').length} activos</p>
            </div>
            <div class="page-header-actions">
                <button class="btn btn-primary btn-sm" onclick="openModal('modalProveedor')"><i class="fas fa-plus"></i> Nuevo Proveedor</button>
            </div>
        </div>
        <div class="card">
            <div class="table-container">
                <table class="data-table">
                    <thead><tr>
                        <th>Proveedor</th><th>Categoría</th><th>Contacto</th><th>Estado</th><th>Valor Anual</th><th>Rendimiento</th><th></th>
                    </tr></thead>
                    <tbody>
                        ${data.length ? data.map(p => `
                            <tr>
                                <td class="cell-name">${p.nombre}</td>
                                <td>${p.categoria}</td>
                                <td>${p.contacto}<br><span class="cell-sub">${p.email}</span></td>
                                <td><span class="status ${statusClass(p.estado)}">${p.estado}</span></td>
                                <td>${formatCurrency(p.valor)}</td>
                                <td>
                                    <div style="display:flex;align-items:center;gap:8px">
                                        <span class="progress-bar"><span class="progress-fill" style="width:${p.rendimiento}%"></span></span>
                                        <span style="font-size:0.8rem;font-weight:600">${p.rendimiento}%</span>
                                    </div>
                                </td>
                                <td>
                                    <div class="actions">
                                        <button class="action-btn edit" onclick="editProveedor(${p.id})" title="Editar"><i class="fas fa-edit"></i></button>
                                        <button class="action-btn delete" onclick="deleteProveedor(${p.id})" title="Eliminar"><i class="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                        `).join('') : `<tr><td colspan="7"><div class="empty-state"><i class="fas fa-building"></i><h3>Sin proveedores</h3><p>Agregue su primer proveedor para comenzar</p></div></td></tr>`}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function editProveedor(id) {
    const p = Store.get('proveedores').find(x => x.id === id);
    if (!p) return;
    document.getElementById('modalProveedorTitle').textContent = 'Editar Proveedor';
    document.getElementById('editProveedorId').value = p.id;
    document.getElementById('provNombre').value = p.nombre;
    document.getElementById('provCategoria').value = p.categoria;
    document.getElementById('provContacto').value = p.contacto;
    document.getElementById('provEmail').value = p.email;
    document.getElementById('provValor').value = p.valor;
    document.getElementById('provEstado').value = p.estado;
    openModal('modalProveedor');
}

function deleteProveedor(id) {
    if (!confirm('¿Eliminar este proveedor?')) return;
    let d = Store.get('proveedores').filter(x => x.id !== id);
    Store.set('proveedores', d);
    renderPage(currentPage);
    showToast('Proveedor eliminado');
}

document.getElementById('formProveedor').addEventListener('submit', function(e) {
    e.preventDefault();
    const editId = document.getElementById('editProveedorId').value;
    const data = {
        nombre: document.getElementById('provNombre').value,
        categoria: document.getElementById('provCategoria').value,
        contacto: document.getElementById('provContacto').value,
        email: document.getElementById('provEmail').value,
        valor: parseInt(document.getElementById('provValor').value) || 0,
        estado: document.getElementById('provEstado').value,
        rendimiento: 85
    };
    let d = Store.get('proveedores');
    if (editId) {
        const idx = d.findIndex(x => x.id === parseInt(editId));
        if (idx !== -1) d[idx] = { ...d[idx], ...data };
        showToast('Proveedor actualizado');
    } else {
        data.id = Date.now();
        d.push(data);
        showToast('Proveedor creado');
    }
    Store.set('proveedores', d);
    closeModal('modalProveedor');
    renderPage(currentPage);
});

// ============================================
// CONTRATOS PAGE
// ============================================

function renderContratos(container) {
    const data = Store.get('contratos');
    container.innerHTML = `
        <div class="page-header">
            <div class="page-header-left">
                <h1>Gestión de Contratos</h1>
                <p>${data.length} contratos · ${data.filter(c => c.estado === 'Vigente').length} vigentes</p>
            </div>
            <div class="page-header-actions">
                <button class="btn btn-primary btn-sm" onclick="openModal('modalContrato')"><i class="fas fa-plus"></i> Nuevo Contrato</button>
            </div>
        </div>
        <div class="card">
            <div class="table-container">
                <table class="data-table">
                    <thead><tr>
                        <th>Contrato</th><th>Proveedor</th><th>Inicio</th><th>Fin</th><th>Valor</th><th>Estado</th><th></th>
                    </tr></thead>
                    <tbody>
                        ${data.length ? data.map(c => `
                            <tr>
                                <td class="cell-name">${c.nombre}</td>
                                <td>${getProvName(c.proveedorId)}</td>
                                <td>${c.inicio}</td>
                                <td>${c.fin}</td>
                                <td>${formatCurrency(c.valor)}</td>
                                <td><span class="status ${statusClass(c.estado)}">${c.estado}</span></td>
                                <td>
                                    <div class="actions">
                                        <button class="action-btn edit" onclick="editContrato(${c.id})"><i class="fas fa-edit"></i></button>
                                        <button class="action-btn delete" onclick="deleteContrato(${c.id})"><i class="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                        `).join('') : `<tr><td colspan="7"><div class="empty-state"><i class="fas fa-file-contract"></i><h3>Sin contratos</h3><p>Agregue su primer contrato</p></div></td></tr>`}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function editContrato(id) {
    const c = Store.get('contratos').find(x => x.id === id);
    if (!c) return;
    document.getElementById('modalContratoTitle').textContent = 'Editar Contrato';
    document.getElementById('editContratoId').value = c.id;
    document.getElementById('contNombre').value = c.nombre;
    document.getElementById('contInicio').value = c.inicio;
    document.getElementById('contFin').value = c.fin;
    document.getElementById('contValor').value = c.valor;
    document.getElementById('contEstado').value = c.estado;
    populateSelect('contProveedor', c.proveedorId);
    openModal('modalContrato');
}

function deleteContrato(id) {
    if (!confirm('¿Eliminar este contrato?')) return;
    Store.set('contratos', Store.get('contratos').filter(x => x.id !== id));
    renderPage(currentPage);
    showToast('Contrato eliminado');
}

document.getElementById('formContrato').addEventListener('submit', function(e) {
    e.preventDefault();
    const editId = document.getElementById('editContratoId').value;
    const data = {
        nombre: document.getElementById('contNombre').value,
        proveedorId: parseInt(document.getElementById('contProveedor').value),
        inicio: document.getElementById('contInicio').value,
        fin: document.getElementById('contFin').value,
        valor: parseInt(document.getElementById('contValor').value) || 0,
        estado: document.getElementById('contEstado').value
    };
    let d = Store.get('contratos');
    if (editId) {
        const idx = d.findIndex(x => x.id === parseInt(editId));
        if (idx !== -1) d[idx] = { ...d[idx], ...data };
        showToast('Contrato actualizado');
    } else {
        data.id = Date.now();
        d.push(data);
        showToast('Contrato creado');
    }
    Store.set('contratos', d);
    closeModal('modalContrato');
    renderPage(currentPage);
});

// ============================================
// EVALUACIONES PAGE
// ============================================

function renderEvaluaciones(container) {
    const data = Store.get('evaluaciones');
    const scores = data.map(e => (e.calidad + e.cumplimiento + e.costos + e.innovacion) / 4);
    const avg = scores.length ? (scores.reduce((a,b) => a+b, 0) / scores.length).toFixed(1) : 0;
    const best = scores.length ? Math.max(...scores).toFixed(1) : 0;

    container.innerHTML = `
        <div class="page-header">
            <div class="page-header-left">
                <h1>Evaluación de Proveedores</h1>
                <p>Scorecard multidimensional · ${data.length} evaluaciones</p>
            </div>
            <div class="page-header-actions">
                <button class="btn btn-primary btn-sm" onclick="openModal('modalEvaluacion')"><i class="fas fa-plus"></i> Nueva Evaluación</button>
            </div>
        </div>
        <div class="stats-grid" style="grid-template-columns:repeat(3,1fr)">
            <div class="stat-card">
                <div class="stat-icon purple"><i class="fas fa-list"></i></div>
                <div class="stat-info"><span class="stat-label">Evaluaciones</span><span class="stat-value">${data.length}</span></div>
            </div>
            <div class="stat-card">
                <div class="stat-icon teal"><i class="fas fa-chart-simple"></i></div>
                <div class="stat-info"><span class="stat-label">Score Promedio</span><span class="stat-value gradient">${avg}</span></div>
            </div>
            <div class="stat-card">
                <div class="stat-icon green"><i class="fas fa-trophy"></i></div>
                <div class="stat-info"><span class="stat-label">Mejor Desempeño</span><span class="stat-value">${best}</span></div>
            </div>
        </div>
        <div class="card">
            <div class="table-container">
                <table class="data-table">
                    <thead><tr>
                        <th>Proveedor</th><th>Calidad</th><th>Cumplimiento</th><th>Costos</th><th>Innovación</th><th>Score Total</th><th></th>
                    </tr></thead>
                    <tbody>
                        ${data.length ? data.map(e => {
                            const score = ((e.calidad + e.cumplimiento + e.costos + e.innovacion) / 4).toFixed(1);
                            return `<tr>
                                <td class="cell-name">${getProvName(e.proveedorId)}</td>
                                <td>${e.calidad}/10</td>
                                <td>${e.cumplimiento}/10</td>
                                <td>${e.costos}/10</td>
                                <td>${e.innovacion}/10</td>
                                <td><strong style="color:var(--primary-light)">${score}</strong></td>
                                <td><button class="action-btn delete" onclick="deleteEvaluacion(${e.id})"><i class="fas fa-trash"></i></button></td>
                            </tr>`;
                        }).join('') : `<tr><td colspan="7"><div class="empty-state"><i class="fas fa-chart-bar"></i><h3>Sin evaluaciones</h3><p>Evalúe a sus proveedores</p></div></td></tr>`}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function deleteEvaluacion(id) {
    if (!confirm('¿Eliminar esta evaluación?')) return;
    Store.set('evaluaciones', Store.get('evaluaciones').filter(x => x.id !== id));
    renderPage(currentPage);
    showToast('Evaluación eliminada');
}

document.getElementById('formEvaluacion').addEventListener('submit', function(e) {
    e.preventDefault();
    const data = {
        proveedorId: parseInt(document.getElementById('evalProveedor').value),
        calidad: parseInt(document.getElementById('evalCalidad').value),
        cumplimiento: parseInt(document.getElementById('evalCumplimiento').value),
        costos: parseInt(document.getElementById('evalCostos').value),
        innovacion: parseInt(document.getElementById('evalInnovacion').value),
        id: Date.now()
    };
    let d = Store.get('evaluaciones');
    d.push(data);
    Store.set('evaluaciones', d);
    closeModal('modalEvaluacion');
    renderPage(currentPage);
    showToast('Evaluación guardada');
});

// ============================================
// SLA PAGE
// ============================================

function renderSLA(container) {
    const data = Store.get('slas');
    const avg = data.length ? (data.reduce((s, x) => s + x.cumplimiento, 0) / data.length).toFixed(1) : 0;

    container.innerHTML = `
        <div class="page-header">
            <div class="page-header-left">
                <h1>Gestión SLA / SLO</h1>
                <p>Monitoreo de niveles de servicio · ${data.length} acuerdos</p>
            </div>
            <div class="page-header-actions">
                <button class="btn btn-primary btn-sm" onclick="openModal('modalSLA')"><i class="fas fa-plus"></i> Nuevo SLA</button>
            </div>
        </div>
        <div class="card">
            <div class="sla-container">
                <div>
                    <div class="sla-gauge-wrap">
                        <canvas id="slaGaugeCanvas" width="200" height="200"></canvas>
                        <div class="sla-gauge-text">
                            <span id="slaGaugeValue">${avg}</span>
                            <small>Cumplimiento Global</small>
                        </div>
                    </div>
                </div>
                <div class="sla-list">
                    ${data.length ? data.map(s => `
                        <div class="sla-item">
                            <div class="sla-info">
                                <h4>${s.servicio}</h4>
                                <p>${getProvName(s.proveedorId)} · Objetivo: ${s.uptime}% · Penalización: ${s.penalizacion}</p>
                            </div>
                            <div class="sla-bar"><div class="sla-fill" style="width:${s.cumplimiento}%"></div></div>
                            <span class="sla-value">${s.cumplimiento}%</span>
                            <button class="action-btn delete" onclick="deleteSLA(${s.id})"><i class="fas fa-trash"></i></button>
                        </div>
                    `).join('') : `<div class="empty-state"><i class="fas fa-clock"></i><h3>Sin SLAs</h3><p>Agregue acuerdos de servicio</p></div>`}
                </div>
            </div>
        </div>
    `;

    setTimeout(() => drawSLAGauge(parseFloat(avg)), 100);
}

function deleteSLA(id) {
    if (!confirm('¿Eliminar este SLA?')) return;
    Store.set('slas', Store.get('slas').filter(x => x.id !== id));
    renderPage(currentPage);
    showToast('SLA eliminado');
}

document.getElementById('formSLA').addEventListener('submit', function(e) {
    e.preventDefault();
    const data = {
        proveedorId: parseInt(document.getElementById('slaProveedor').value),
        servicio: document.getElementById('slaServicio').value,
        uptime: parseFloat(document.getElementById('slaUptime').value),
        respuesta: parseFloat(document.getElementById('slaRespuesta').value),
        cumplimiento: parseFloat(document.getElementById('slaCumplimiento').value),
        penalizacion: document.getElementById('slaPenalizacion').value,
        id: Date.now()
    };
    let d = Store.get('slas');
    d.push(data);
    Store.set('slas', d);
    closeModal('modalSLA');
    renderPage(currentPage);
    showToast('SLA creado');
});

function drawSLAGauge(pct) {
    const canvas = document.getElementById('slaGaugeCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    const cx = w/2, cy = h/2, r = 85, lw = 14;

    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.arc(cx, cy, r, Math.PI * 0.75, Math.PI * 2.25);
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = lw;
    ctx.lineCap = 'round';
    ctx.stroke();

    const end = Math.PI * 0.75 + (Math.PI * 1.5 * (pct / 100));
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#6C5CE7');
    grad.addColorStop(1, '#00CEC9');
    ctx.beginPath();
    ctx.arc(cx, cy, r, Math.PI * 0.75, end);
    ctx.strokeStyle = grad;
    ctx.lineWidth = lw;
    ctx.lineCap = 'round';
    ctx.stroke();
}

// ============================================
// RFX PAGE
// ============================================

function renderRFX(container) {
    const data = Store.get('rfxs');
    container.innerHTML = `
        <div class="page-header">
            <div class="page-header-left">
                <h1>Procesos RFXs</h1>
                <p>Gestión de adquisiciones · ${data.length} procesos activos</p>
            </div>
            <div class="page-header-actions">
                <button class="btn btn-primary btn-sm" onclick="openModal('modalRFX')"><i class="fas fa-plus"></i> Nuevo RFX</button>
            </div>
        </div>
        <div class="card">
            <div class="table-container">
                <table class="data-table">
                    <thead><tr>
                        <th>Tipo</th><th>Título</th><th>Proveedores</th><th>Fecha Límite</th><th>Estado</th><th></th>
                    </tr></thead>
                    <tbody>
                        ${data.length ? data.map(r => `
                            <tr>
                                <td><span class="status" style="background:rgba(108,92,231,0.12);color:var(--primary-light)">${r.tipo}</span></td>
                                <td class="cell-name">${r.titulo}</td>
                                <td>${r.proveedores} proveedores</td>
                                <td>${r.fechaLimite}</td>
                                <td><span class="status ${statusClass(r.estado)}">${r.estado}</span></td>
                                <td>
                                    <div class="actions">
                                        <button class="action-btn edit" onclick="editRFX(${r.id})"><i class="fas fa-edit"></i></button>
                                        <button class="action-btn delete" onclick="deleteRFX(${r.id})"><i class="fas fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                        `).join('') : `<tr><td colspan="6"><div class="empty-state"><i class="fas fa-file-signature"></i><h3>Sin procesos RFX</h3><p>Inicie un nuevo proceso</p></div></td></tr>`}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function editRFX(id) {
    const r = Store.get('rfxs').find(x => x.id === id);
    if (!r) return;
    document.getElementById('rfxTipo').value = r.tipo;
    document.getElementById('rfxTitulo').value = r.titulo;
    document.getElementById('rfxProveedores').value = r.proveedores;
    document.getElementById('rfxFechaLimite').value = r.fechaLimite;
    document.getElementById('rfxEstado').value = r.estado;
    document.getElementById('formRFX').dataset.editId = id;
    openModal('modalRFX');
}

function deleteRFX(id) {
    if (!confirm('¿Eliminar este RFX?')) return;
    Store.set('rfxs', Store.get('rfxs').filter(x => x.id !== id));
    renderPage(currentPage);
    showToast('RFX eliminado');
}

document.getElementById('formRFX').addEventListener('submit', function(e) {
    e.preventDefault();
    const editId = this.dataset.editId;
    const data = {
        tipo: document.getElementById('rfxTipo').value,
        titulo: document.getElementById('rfxTitulo').value,
        proveedores: document.getElementById('rfxProveedores').value,
        fechaLimite: document.getElementById('rfxFechaLimite').value,
        estado: document.getElementById('rfxEstado').value
    };
    let d = Store.get('rfxs');
    if (editId) {
        const idx = d.findIndex(x => x.id === parseInt(editId));
        if (idx !== -1) d[idx] = { ...d[idx], ...data };
        delete this.dataset.editId;
        showToast('RFX actualizado');
    } else {
        data.id = Date.now();
        d.push(data);
        showToast('RFX creado');
    }
    Store.set('rfxs', d);
    closeModal('modalRFX');
    renderPage(currentPage);
});

// ============================================
// BENCHMARKING PAGE
// ============================================

function renderBenchmarking(container) {
    container.innerHTML = `
        <div class="page-header">
            <div class="page-header-left">
                <h1>Benchmarking & Cost Reduction</h1>
                <p>Proyecte ahorros y optimice su presupuesto TI</p>
            </div>
        </div>
        <div class="benchmark-grid">
            <div class="card">
                <div class="card-header"><h3><i class="fas fa-sliders"></i> Parámetros</h3></div>
                <div class="benchmark-form">
                    <div class="form-group">
                        <label>Gasto TI Anual Actual ($)</label>
                        <input type="number" id="bmGasto" value="1000000" min="100000" step="100000">
                    </div>
                    <div class="form-group">
                        <label>Número de Proveedores</label>
                        <input type="number" id="bmProveedores" value="25" min="1" max="500">
                    </div>
                    <div class="form-group">
                        <label>Categoría de Servicio</label>
                        <select id="bmCategoria">
                            <option value="infraestructura">Infraestructura</option>
                            <option value="software">Software & Licencias</option>
                            <option value="servicios">Servicios Profesionales</option>
                            <option value="cloud">Cloud & SaaS</option>
                            <option value="completo" selected>Portafolio Completo</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Madurez VMO Actual</label>
                        <select id="bmMadurez">
                            <option value="inicial">Inicial (1-2)</option>
                            <option value="basico">Básico (2-3)</option>
                            <option value="definido" selected>Definido (3-4)</option>
                            <option value="gestionado">Gestionado (4-5)</option>
                            <option value="optimizado">Optimizado (5)</option>
                        </select>
                    </div>
                    <button class="btn btn-primary btn-block" onclick="calcularBenchmark()"><i class="fas fa-calculator"></i> Calcular Proyección</button>
                </div>
            </div>
            <div class="benchmark-results" id="bmResults">
                <div class="result-highlight">
                    <span class="result-highlight-label">Ahorro Potencial Anual</span>
                    <span class="result-highlight-value" id="bmAhorro">$180,000</span>
                    <span class="result-highlight-detail" id="bmPorcentaje">-18.0% del gasto actual</span>
                </div>
                <div class="result-grid-2">
                    <div class="result-item">
                        <span class="result-item-label">Gasto Optimizado</span>
                        <span class="result-item-value" id="bmOptimizado">$820,000</span>
                    </div>
                    <div class="result-item">
                        <span class="result-item-label">ROI Implementación</span>
                        <span class="result-item-value" id="bmROI">120%</span>
                    </div>
                    <div class="result-item">
                        <span class="result-item-label">Payback</span>
                        <span class="result-item-value" id="bmPayback">10 meses</span>
                    </div>
                    <div class="result-item">
                        <span class="result-item-label">Proveedores Óptimos</span>
                        <span class="result-item-value" id="bmOptimo">15-18</span>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header"><h3><i class="fas fa-chart-simple"></i> Desglose de Ahorros</h3></div>
                    <div class="breakdown-list" id="bmBreakdown"></div>
                </div>
            </div>
        </div>
    `;
    calcularBenchmark();
}

function calcularBenchmark() {
    const gasto = parseFloat(document.getElementById('bmGasto').value) || 1000000;
    const prov = parseInt(document.getElementById('bmProveedores').value) || 25;
    const cat = document.getElementById('bmCategoria').value;
    const mad = document.getElementById('bmMadurez').value;

    const madFactors = { inicial: 0.05, basico: 0.10, definido: 0.18, gestionado: 0.25, optimizado: 0.32 };
    const catFactors = { infraestructura: 0.15, software: 0.20, servicios: 0.12, cloud: 0.22, completo: 0.18 };

    const rate = (madFactors[mad] || 0.18) + (catFactors[cat] || 0.18) * 0.5 + Math.min(1, prov / 50) * 0.05;
    const ahorro = Math.round(gasto * rate);
    const opt = gasto - ahorro;
    const roi = Math.round((ahorro / (gasto * 0.15)) * 100);
    const payback = Math.round((gasto * 0.15) / (ahorro / 12));

    document.getElementById('bmAhorro').textContent = formatCurrency(ahorro);
    document.getElementById('bmPorcentaje').textContent = `-${(rate * 100).toFixed(1)}% del gasto actual`;
    document.getElementById('bmOptimizado').textContent = formatCurrency(opt);
    document.getElementById('bmROI').textContent = roi + '%';
    document.getElementById('bmPayback').textContent = payback + ' meses';
    document.getElementById('bmOptimo').textContent = `${Math.max(8, Math.round(prov * 0.6))}-${Math.max(12, Math.round(prov * 0.75))}`;

    const breakdowns = [
        { label: 'Consolidación de Proveedores', pct: 35, val: Math.round(ahorro * 0.35) },
        { label: 'Renegociación de Contratos', pct: 25, val: Math.round(ahorro * 0.25) },
        { label: 'Optimización de Licencias', pct: 20, val: Math.round(ahorro * 0.20) },
        { label: 'Automatización de Procesos', pct: 12, val: Math.round(ahorro * 0.12) },
        { label: 'Estandarización ITIL', pct: 8, val: Math.round(ahorro * 0.08) }
    ];

    document.getElementById('bmBreakdown').innerHTML = breakdowns.map(b => `
        <div class="breakdown-row">
            <span class="breakdown-label">${b.label}</span>
            <div class="breakdown-track"><div class="breakdown-fill" style="width:${b.pct}%"></div></div>
            <span class="breakdown-amount">${formatCurrency(b.val)}</span>
        </div>
    `).join('');
}

// ============================================
// REPORTES PAGE
// ============================================

function renderReportes(container) {
    const prov = Store.get('proveedores');
    const cont = Store.get('contratos');
    const evalData = Store.get('evaluaciones');
    const slas = Store.get('slas');

    container.innerHTML = `
        <div class="page-header">
            <div class="page-header-left">
                <h1>Reportes & Analytics</h1>
                <p>Visibilidad completa del ecosistema TI</p>
            </div>
            <div class="page-header-actions">
                <button class="btn btn-secondary btn-sm" onclick="exportVMOData()"><i class="fas fa-download"></i> Exportar Todo</button>
            </div>
        </div>
        <div class="charts-grid-2">
            <div class="card">
                <div class="card-header"><h3><i class="fas fa-chart-pie"></i> Distribución por Categoría</h3></div>
                <div class="chart-container"><canvas id="reportDist"></canvas></div>
            </div>
            <div class="card">
                <div class="card-header"><h3><i class="fas fa-chart-bar"></i> Rendimiento por Proveedor</h3></div>
                <div class="chart-container"><canvas id="reportRend"></canvas></div>
            </div>
        </div>
        <div class="stats-grid" style="grid-template-columns:repeat(4,1fr)">
            <div class="stat-card">
                <div class="stat-icon purple"><i class="fas fa-building"></i></div>
                <div class="stat-info"><span class="stat-label">Total Proveedores</span><span class="stat-value">${prov.length}</span></div>
            </div>
            <div class="stat-card">
                <div class="stat-icon teal"><i class="fas fa-file-contract"></i></div>
                <div class="stat-info"><span class="stat-label">Total Contratos</span><span class="stat-value">${cont.length}</span></div>
            </div>
            <div class="stat-card">
                <div class="stat-icon pink"><i class="fas fa-star"></i></div>
                <div class="stat-info"><span class="stat-label">Evaluaciones</span><span class="stat-value">${evalData.length}</span></div>
            </div>
            <div class="stat-card">
                <div class="stat-icon green"><i class="fas fa-clock"></i></div>
                <div class="stat-info"><span class="stat-label">SLAs Activos</span><span class="stat-value">${slas.length}</span></div>
            </div>
        </div>
    `;

    setTimeout(() => {
        const ctx1 = document.getElementById('reportDist');
        if (ctx1) {
            new Chart(ctx1.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ['Infraestructura','Software','Cloud','Servicios','Consultoría','Hardware'],
                    datasets: [{ data: [28,20,24,15,10,3], backgroundColor: ['#6C5CE7','#00CEC9','#FD79A8','#FDCB6E','#A29BFE','#55EFC4'], borderWidth: 0 }]
                },
                options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: '#6b6b8d', font: { size: 11 } } } }, cutout: '60%' }
            });
        }
        const ctx2 = document.getElementById('reportRend');
        if (ctx2) {
            new Chart(ctx2.getContext('2d'), {
                type: 'bar',
                data: {
                    labels: prov.map(p => p.nombre.substring(0, 12) + '...'),
                    datasets: [{
                        label: 'Rendimiento',
                        data: prov.map(p => p.rendimiento),
                        backgroundColor: prov.map(p => p.rendimiento >= 85 ? 'rgba(0,206,201,0.7)' : p.rendimiento >= 70 ? 'rgba(253,203,110,0.7)' : 'rgba(255,107,107,0.7)'),
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true, maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { beginAtZero: true, max: 100, ticks: { color: '#6b6b8d', callback: v => v+'%' }, grid: { color: 'rgba(255,255,255,0.03)' } },
                        x: { ticks: { color: '#6b6b8d', font: { size: 9 } }, grid: { display: false } }
                    }
                }
            });
        }
    }, 100);
}

// ============================================
// SERVICIOS PAGE
// ============================================

function renderServicios(container) {
    container.innerHTML = `
        <div class="page-header">
            <div class="page-header-left">
                <h1>Catálogo de Servicios</h1>
                <p>Soluciones integrales TI para su organización</p>
            </div>
        </div>
        <div style="display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap">
            <button class="btn btn-sm ${currentFilter === 'all' ? 'btn-primary' : 'btn-secondary'}" onclick="filterServices('all')">Todos</button>
            <button class="btn btn-sm ${currentFilter === 'estrategia' ? 'btn-primary' : 'btn-secondary'}" onclick="filterServices('estrategia')">Estrategia & Gobierno</button>
            <button class="btn btn-sm ${currentFilter === 'operaciones' ? 'btn-primary' : 'btn-secondary'}" onclick="filterServices('operaciones')">Eficiencia Operativa</button>
            <button class="btn btn-sm ${currentFilter === 'innovacion' ? 'btn-primary' : 'btn-secondary'}" onclick="filterServices('innovacion')">Innovación & IA</button>
        </div>
        <div class="services-grid" id="servicesGrid"></div>
    `;
    renderServiceCards(currentFilter);
}

let currentFilter = 'all';

function filterServices(cat) {
    currentFilter = cat;
    renderServiceCards(cat);
    document.querySelectorAll('[onclick^="filterServices"]').forEach(el => {
        const match = el.getAttribute('onclick').match(/'([^']+)'/);
        if (match) {
            el.className = `btn btn-sm ${match[1] === cat ? 'btn-primary' : 'btn-secondary'}`;
        }
    });
}

function renderServiceCards(cat) {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    const filtered = cat === 'all' ? servicesData : servicesData.filter(s => s.category === cat);
    grid.innerHTML = filtered.map(s => `
        <div class="flip-card" data-id="${s.id}">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="service-card-icon"><i class="fas ${s.icon}"></i></div>
                    <h3>${s.title}</h3>
                    <p>${s.desc}</p>
                    <div class="service-tags">${s.tags.map(t => `<span class="service-tag">${t}</span>`).join('')}</div>
                    <div class="flip-hint"><i class="fas fa-sync-alt"></i> Ver detalles</div>
                </div>
                <div class="flip-card-back">
                    <div class="flip-back-content">
                        <div class="flip-back-header">
                            <div class="flip-back-icon"><i class="fas ${s.icon}"></i></div>
                            <h4>${s.title}</h4>
                        </div>
                        <p class="flip-desc">${s.detailDesc}</p>
                        <div class="flip-benefits">
                            ${s.benefits.map(b => `<span class="flip-benefit-chip"><i class="fas fa-check"></i> ${b}</span>`).join('')}
                        </div>
                        <div class="flip-for">
                            <i class="fas fa-users"></i> ${s.forWhom}
                        </div>
                        <button class="flip-back-close" data-close="${s.id}">
                            <i class="fas fa-times"></i> Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    // Attach click events for flip
    grid.querySelectorAll('.flip-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.closest('.flip-back-close')) return;
            this.classList.toggle('flipped');
        });
    });

    // Attach close events
    grid.querySelectorAll('.flip-back-close').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            this.closest('.flip-card').classList.remove('flipped');
        });
    });
}




// ============================================
// CONTACTO PAGE
// ============================================

function renderContacto(container) {
    container.innerHTML = `
        <div class="page-header">
            <div class="page-header-left">
                <h1>Contacto</h1>
                <p>Estamos listos para impulsar su estrategia digital</p>
            </div>
        </div>
        <div class="contact-grid">
            <div class="card">
                <div class="card-header"><h3><i class="fas fa-paper-plane"></i> Envíenos un mensaje</h3></div>
                <form id="contactFormApp">
                    <div class="form-row">
                        <div class="form-group">
                            <label>Nombre Completo</label>
                            <input type="text" placeholder="Su nombre" required>
                        </div>
                        <div class="form-group">
                            <label>Email Corporativo</label>
                            <input type="email" placeholder="email@empresa.com" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Empresa</label>
                            <input type="text" placeholder="Nombre de la empresa">
                        </div>
                        <div class="form-group">
                            <label>Teléfono</label>
                            <input type="tel" placeholder="+56 9 1234 5678">
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Servicio de Interés</label>
                        <select>
                            <option>Consultoría TI Estratégica</option>
                            <option>Gestión VMO</option>
                            <option>ITSM & ITIL</option>
                            <option>IAM & CIAM - Gestión de Identidades</option>
                            <option>Ciberseguridad & Protección Digital</option>
                            <option>Desarrollo de Capa Agéntica</option>
                            <option>IA Operacional Automatizada</option>
                            <option>Benchmarking & Cost Reduction</option>
                            <option>Gestión SAM</option>
                            <option>GRC & Compliance</option>
                            <option>Otro</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label>Mensaje</label>
                        <textarea rows="4" placeholder="Cuéntenos sobre su proyecto o desafío..."></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block" onclick="event.preventDefault();showToast('Mensaje enviado correctamente')"><i class="fas fa-paper-plane"></i> Enviar Mensaje</button>
                </form>
            </div>
            <div>
                <div class="contact-info-grid">
                    <div class="contact-info-card"><i class="fas fa-envelope"></i><h4>Email</h4><p>contacto@nexumsolutions.com</p></div>
                    <div class="contact-info-card"><i class="fas fa-phone"></i><h4>Teléfono</h4><p>+56 2 2345 6789</p></div>
                    <div class="contact-info-card"><i class="fas fa-map-marker-alt"></i><h4>Oficina</h4><p>Santiago, Chile</p></div>
                    <div class="contact-info-card"><i class="fas fa-clock"></i><h4>Horario</h4><p>Lun - Vie: 9:00 - 18:00</p></div>
                </div>
                <div class="card" style="margin-top:16px;text-align:center">
                    <h3 style="margin-bottom:12px">Nexum Solutions</h3>
                    <p style="color:var(--text-muted);font-size:0.85rem">Conectando la Estrategia con el Futuro Digital</p>
                    <div style="display:flex;gap:12px;justify-content:center;margin-top:16px">
                        <a href="#" style="color:var(--text-muted);font-size:1.2rem"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" style="color:var(--text-muted);font-size:1.2rem"><i class="fab fa-twitter"></i></a>
                        <a href="#" style="color:var(--text-muted);font-size:1.2rem"><i class="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================
// MODALS
// ============================================

function openModal(id) {
    // Populate selects
    if (id === 'modalContrato' || id === 'modalEvaluacion' || id === 'modalSLA') {
        populateSelect(id === 'modalContrato' ? 'contProveedor' : id === 'modalEvaluacion' ? 'evalProveedor' : 'slaProveedor');
    }
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

document.querySelectorAll('.modal').forEach(m => {
    m.addEventListener('click', e => { if (e.target === m) m.classList.remove('active'); });
});

function populateSelect(id, selected) {
    const sel = document.getElementById(id);
    if (!sel) return;
    const provs = Store.get('proveedores');
    sel.innerHTML = provs.map(p => `<option value="${p.id}" ${p.id === selected ? 'selected' : ''}>${p.nombre}</option>`).join('');
}

// ============================================
// EXPORT / RESET
// ============================================

function exportVMOData() {
    const data = {
        proveedores: Store.get('proveedores'),
        contratos: Store.get('contratos'),
        evaluaciones: Store.get('evaluaciones'),
        slas: Store.get('slas'),
        rfxs: Store.get('rfxs'),
        exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nexum_vmo_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('Datos exportados correctamente');
}

function resetVMODemo() {
    if (!confirm('¿Reiniciar todos los datos de demostración? Se perderán los cambios personalizados.')) return;
    ['proveedores','contratos','evaluaciones','slas','rfxs'].forEach(k => localStorage.removeItem(`nexum_${k}`));
    seedData();
    renderPage(currentPage);
    showToast('Datos de demo reiniciados');
}

// ============================================
// SIDEBAR TOGGLE (Mobile)
// ============================================

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('active');
}

// Touch events for sidebar
document.getElementById('sidebarToggle').addEventListener('click', toggleSidebar);
document.getElementById('sidebarClose').addEventListener('click', closeSidebar);
document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);

// Close sidebar on swipe left (mobile)
let touchStartX = 0;
document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].screenX;
    if (diff > 80 && document.getElementById('sidebar').classList.contains('open')) {
        closeSidebar();
    }
}, { passive: true });

// ============================================
// NAVIGATION EVENTS
// ============================================

document.querySelectorAll('.nav-item').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        navigate(el.dataset.page);
    });
    // Touch feedback
    el.addEventListener('touchstart', function() {
        this.style.transform = 'scale(0.97)';
    }, { passive: true });
    el.addEventListener('touchend', function() {
        this.style.transform = '';
    }, { passive: true });
});

// ============================================
// GLOBAL SEARCH
// ============================================

document.getElementById('globalSearch').addEventListener('input', function() {
    const q = this.value.toLowerCase().trim();
    if (q.length < 2) return;
    const provs = Store.get('proveedores');
    const found = provs.filter(p => p.nombre.toLowerCase().includes(q) || p.categoria.toLowerCase().includes(q));
    if (found.length > 0) {
        navigate('proveedores');
        showToast(`Se encontraron ${found.length} proveedor(es)`, 'success');
    }
});

// ============================================
// WINDOW RESIZE HANDLER
// ============================================

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Re-render charts if on dashboard or reportes
        if (currentPage === 'dashboard') {
            initDashboardCharts();
        } else if (currentPage === 'reportes') {
            renderReportes(document.getElementById('pageContent'));
        }
    }, 300);
});

// Close sidebar on orientation change (mobile)
window.addEventListener('orientationchange', () => {
    setTimeout(closeSidebar, 300);
});

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        // Close any open modal
        document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
        // Close sidebar if open
        closeSidebar();
    }
});

// ============================================
// INIT
// ============================================

seedData();
navigate('dashboard');

   
