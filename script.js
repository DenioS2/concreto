/* Adicione os novos CPs abaixo seguindo o formato:
 * { empresa: "NOME", registro: "00", moldagem: "AAAA-MM-DD", prazo: 7 ou 14 ou 28 },
 */
const registrosCP = [

    // PROGEO KM489
    { empresa: "PROGEO KM489", registro: "124", moldagem: "2026-04-23", prazo: 28 },
    { empresa: "PROGEO KM489", registro: "125", moldagem: "2026-04-24", prazo: 28 },
    { empresa: "PROGEO KM489", registro: "126", moldagem: "2026-04-27", prazo: 28 },
        
    
    // UAU INGLESA
    
    { empresa: "UAU INGLESA", registro: "118", moldagem: "2026-05-12", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "118", moldagem: "2026-05-12", prazo: 28 },
    
    { empresa: "UAU INGLESA", registro: "119", moldagem: "2026-05-12", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "119", moldagem: "2026-05-12", prazo: 28 },

    { empresa: "UAU INGLESA", registro: "124", moldagem: "2026-05-15", prazo: 7 },
    { empresa: "UAU INGLESA", registro: "124", moldagem: "2026-05-15", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "124", moldagem: "2026-05-15", prazo: 28 },
    
    { empresa: "UAU INGLESA", registro: "125", moldagem: "2026-05-15", prazo: 7 },
    { empresa: "UAU INGLESA", registro: "125", moldagem: "2026-05-15", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "125", moldagem: "2026-05-15", prazo: 28 },
    
    { empresa: "UAU INGLESA", registro: "126", moldagem: "2026-05-16", prazo: 7 },
    { empresa: "UAU INGLESA", registro: "126", moldagem: "2026-05-16", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "126", moldagem: "2026-05-16", prazo: 28 },
    
    { empresa: "UAU INGLESA", registro: "127", moldagem: "2026-05-19", prazo: 7 },
    { empresa: "UAU INGLESA", registro: "127", moldagem: "2026-05-19", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "127", moldagem: "2026-05-19", prazo: 28 },

    { empresa: "UAU INGLESA", registro: "128", moldagem: "2026-05-21", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "128", moldagem: "2026-05-21", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "129", moldagem: "2026-05-22", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "129", moldagem: "2026-05-22", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "130", moldagem: "2026-05-25", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "130", moldagem: "2026-05-25", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "131", moldagem: "2026-05-25", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "131", moldagem: "2026-05-25", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "132", moldagem: "2026-05-25", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "132", moldagem: "2026-05-25", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "133", moldagem: "2026-05-25", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "133", moldagem: "2026-05-25", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "134", moldagem: "2026-05-25", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "134", moldagem: "2026-05-25", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "135", moldagem: "2026-05-26", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "135", moldagem: "2026-05-26", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "136", moldagem: "2026-05-26", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "136", moldagem: "2026-05-26", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "137", moldagem: "2026-05-26", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "137", moldagem: "2026-05-26", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "138", moldagem: "2026-05-26", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "138", moldagem: "2026-05-26", prazo: 28 },

    
      { empresa: "UAU INGLESA", registro: "120", moldagem: "2026-05-13", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "120", moldagem: "2026-05-13", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "121", moldagem: "2026-05-13", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "121", moldagem: "2026-05-13", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "122", moldagem: "2026-05-14", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "122", moldagem: "2026-05-14", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "130", moldagem: "2026-05-25", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "130", moldagem: "2026-05-25", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "131", moldagem: "2026-05-25", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "131", moldagem: "2026-05-25", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "132", moldagem: "2026-05-25", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "132", moldagem: "2026-05-25", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "133", moldagem: "2026-05-25", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "133", moldagem: "2026-05-25", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "134", moldagem: "2026-05-25", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "134", moldagem: "2026-05-25", prazo: 28 },
    
    
    { empresa: "UAU INGLESA", registro: "139", moldagem: "2026-05-28", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "139", moldagem: "2026-05-28", prazo: 28 },
    
    { empresa: "UAU INGLESA", registro: "140", moldagem: "2026-05-28", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "140", moldagem: "2026-05-28", prazo: 28 },
    
    { empresa: "UAU INGLESA", registro: "141", moldagem: "2026-05-28", prazo: 14 },
     { empresa: "UAU INGLESA", registro: "141", moldagem: "2026-05-28", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "142", moldagem: "2026-05-28", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "142", moldagem: "2026-05-28", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "143", moldagem: "2026-05-28", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "143", moldagem: "2026-05-28", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "144", moldagem: "2026-05-29", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "144", moldagem: "2026-05-29", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "145", moldagem: "2026-05-01", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "145", moldagem: "2026-05-01", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "146", moldagem: "2026-06-02", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "146", moldagem: "2026-06-02", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "147", moldagem: "2026-06-02", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "147", moldagem: "2026-06-02", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "148", moldagem: "2026-06-02", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "148", moldagem: "2026-06-02", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "149", moldagem: "2026-09-02", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "149", moldagem: "2026-09-02", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "150", moldagem: "2026-06-02", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "150", moldagem: "2026-06-02", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "151", moldagem: "2026-06-03", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "151", moldagem: "2026-06-03", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "152", moldagem: "2026-06-03", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "152", moldagem: "2026-06-03", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "153", moldagem: "2026-06-03", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "153", moldagem: "2026-06-03", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "154", moldagem: "2026-06-03", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "154", moldagem: "2026-06-03", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "155", moldagem: "2026-06-03", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "155", moldagem: "2026-06-03", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "156", moldagem: "2026-06-03", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "156", moldagem: "2026-06-03", prazo: 28 },
    
      { empresa: "UAU INGLESA", registro: "157", moldagem: "2026-06-03", prazo: 14 },
      { empresa: "UAU INGLESA", registro: "157", moldagem: "2026-06-03", prazo: 28 },

    



    // KTM
    { empresa: "KTM", registro: "10", moldagem: "2026-04-24", prazo: 28 },
    { empresa: "KTM", registro: "11", moldagem: "2026-04-24", prazo: 28 },
    { empresa: "KTM", registro: "12", moldagem: "2026-04-24", prazo: 28 },
    
    { empresa: "KTM", registro: "13", moldagem: "2026-04-28", prazo: 28 },
    
    { empresa: "KTM", registro: "14", moldagem: "2026-04-28", prazo: 28 },
    
    { empresa: "KTM", registro: "15", moldagem: "2026-04-30", prazo: 28 },
    
    { empresa: "KTM", registro: "16", moldagem: "2026-04-30", prazo: 28 },
    
    { empresa: "KTM", registro: "17", moldagem: "2026-05-08", prazo: 14 },
    { empresa: "KTM", registro: "17", moldagem: "2026-05-08", prazo: 28 },
    
    { empresa: "KTM", registro: "18", moldagem: "2026-05-12", prazo: 14 },
    { empresa: "KTM", registro: "18", moldagem: "2026-05-12", prazo: 28 },
    
    { empresa: "KTM", registro: "19", moldagem: "2026-05-12", prazo: 14 },
    { empresa: "KTM", registro: "19", moldagem: "2026-05-12", prazo: 28 },
    
    { empresa: "KTM", registro: "20", moldagem: "2026-05-13", prazo: 14 },
    { empresa: "KTM", registro: "20", moldagem: "2026-05-13", prazo: 28 },
    
    { empresa: "KTM", registro: "21", moldagem: "2026-05-13", prazo: 14 },
    { empresa: "KTM", registro: "21", moldagem: "2026-05-13", prazo: 28 },

    { empresa: "KTM", registro: "22", moldagem: "2026-05-19", prazo: 14 },
   { empresa: "KTM", registro: "22", moldagem: "2026-05-19", prazo: 28 },

   { empresa: "KTM", registro: "23", moldagem: "2026-05-19", prazo: 14 },
   { empresa: "KTM", registro: "23", moldagem: "2026-05-19", prazo: 28 },

   { empresa: "KTM", registro: "24", moldagem: "2026-05-21", prazo: 14 },
   { empresa: "KTM", registro: "24", moldagem: "2026-05-21", prazo: 28 },

   { empresa: "KTM", registro: "25", moldagem: "2026-05-21", prazo: 14 },
   { empresa: "KTM", registro: "25", moldagem: "2026-05-21", prazo: 28 },

   { empresa: "KTM", registro: "26", moldagem: "2026-05-22", prazo: 14 },
   { empresa: "KTM", registro: "26", moldagem: "2026-05-22", prazo: 28 },

    
    
    // ATERPA
    { empresa: "ATERPA", registro: "29", moldagem: "2026-04-22", prazo: 28 },
    { empresa: "ATERPA", registro: "30", moldagem: "2026-04-24", prazo: 28 },
    { empresa: "ATERPA", registro: "31", moldagem: "2026-04-27", prazo: 28 },
    { empresa: "ATERPA", registro: "32", moldagem: "2026-04-29", prazo: 28 },
    { empresa: "ATERPA", registro: "33", moldagem: "2026-04-30", prazo: 28 },
    { empresa: "ATERPA", registro: "34", moldagem: "2026-05-04", prazo: 28 },
    { empresa: "ATERPA", registro: "35", moldagem: "2026-05-05", prazo: 28 },
    { empresa: "ATERPA", registro: "36", moldagem: "2026-05-06", prazo: 28 },
    { empresa: "ATERPA", registro: "37", moldagem: "2026-05-08", prazo: 14 },
    { empresa: "ATERPA", registro: "37", moldagem: "2026-05-08", prazo: 28 },
    
    
    // PROGEO KM469
    { empresa: "PROGEO KM469", registro: "20", moldagem: "2026-04-22", prazo: 28 },
    
    { empresa: "PROGEO KM469", registro: "21", moldagem: "2026-04-24", prazo: 28 },
    
    { empresa: "PROGEO KM469", registro: "22", moldagem: "2026-04-27", prazo: 28 },
    
    { empresa: "PROGEO KM469", registro: "23", moldagem: "2026-04-29", prazo: 28 },
    
    { empresa: "PROGEO KM469", registro: "24", moldagem: "2026-04-30", prazo: 28 },
    
    
    //FERRAÇO
    { empresa: "FERRAÇO", registro: "716", moldagem: "2026-04-28", prazo: 28 },
    
    { empresa: "FERRAÇO", registro: "717", moldagem: "2026-05-14", prazo: 7 },
    { empresa: "FERRAÇO", registro: "717", moldagem: "2026-05-14", prazo: 14 },
    { empresa: "FERRAÇO", registro: "717", moldagem: "2026-05-14", prazo: 28 },

    { empresa: "FERRAÇO", registro: "718", moldagem: "2026-05-18", prazo: 7 },
    { empresa: "FERRAÇO", registro: "718", moldagem: "2026-05-18", prazo: 14 },
    { empresa: "FERRAÇO", registro: "718", moldagem: "2026-05-18", prazo: 28 },

    { empresa: "FERRAÇO", registro: "719", moldagem: "2026-05-22", prazo: 7 },
    { empresa: "FERRAÇO", registro: "719", moldagem: "2026-05-22", prazo: 14 },
    { empresa: "FERRAÇO", registro: "719", moldagem: "2026-05-22", prazo: 28 },

    { empresa: "FERRAÇO", registro: "720", moldagem: "2026-05-26", prazo: 7 },
    { empresa: "FERRAÇO", registro: "720", moldagem: "2026-05-26", prazo: 14 },
    { empresa: "FERRAÇO", registro: "720", moldagem: "2026-05-26", prazo: 28 },

    



];

function inicializarPainel() {
    const painel = document.getElementById('painel-alertas');
    const dataDisplay = document.getElementById('data-atual');
    
    const hoje = new Date();
    // Força o fuso horário local para evitar erro de virada de dia à meia-noite
    const hojeStr = hoje.toLocaleDateString('en-CA'); 

    dataDisplay.innerText = `Bom dia! Hoje é ${hoje.toLocaleDateString('pt-BR')}`;
    painel.innerHTML = "";

    // 1. Filtrar rompimentos de HOJE com as regras de prazos específicos
    const paraRomperHoje = registrosCP.filter(cp => {
        const empresa = cp.empresa.toUpperCase();
        const prazo = cp.prazo;

        // Regra de Segurança: Aterpa não tem lembrete de 7 dias
        if (empresa === "ATERPA" && prazo === 7) return false;

        // Cálculo da data esperada
        let dataR = new Date(cp.moldagem + "T00:00:00");
        dataR.setDate(dataR.getDate() + prazo);
        
        return dataR.toLocaleDateString('en-CA') === hojeStr;
    });

    // 2. Se não houver nada para hoje
    if (paraRomperHoje.length === 0) {
        painel.innerHTML = `
            <div class="vazio-msg">
                <h3>Tudo por hoje</h3>
                <p>Nenhum corpo de prova para romper nesta data.</p>
            </div>`;
        return;
    }

    // 3. Agrupar por Empresa para o visual
    const agrupado = paraRomperHoje.reduce((acc, cp) => {
        if (!acc[cp.empresa]) acc[cp.empresa] = [];
        acc[cp.empresa].push(cp);
        return acc;
    }, {});

    // 4. Gerar os blocos na tela
    for (const empresa in agrupado) {
        const card = document.createElement('div');
        card.className = 'empresa-card';
        
        // Aplica cores diferentes para prazos maiores (opcional)
        let itensHtml = agrupado[empresa].map(cp => `
            <li>
                <span>Registro <strong>${cp.registro}</strong></span>
                <span class="badge-dias" style="background-color: ${cp.prazo === 28 ? '#ff4444' : '#ffcc00'}; color: ${cp.prazo === 28 ? '#fff' : '#000'}">
                    ${cp.prazo} DIAS
                </span>
            </li>
        `).join('');

        card.innerHTML = `
            <h3>${empresa}</h3>
            <ul class="lista-rompimento">
                ${itensHtml}
            </ul>
        `;
        
        painel.appendChild(card);
    }
}

window.onload = inicializarPainel;

function calcularMPA() {
    const kn = document.getElementById('leituraKN').value;
    const dimensao = document.getElementById('dimensaoCP').value;
    const displayRes = document.getElementById('resultadoMPA');

    if (kn > 0) {
        let resultado = 0;
        
        if (dimensao === "10x20") {
            // Área = 78,54 cm² -> MPA = kN / 7,854
            resultado = kn / 7.854;
        } else if (dimensao === "5x10") {
            // Área = 19,635 cm² -> MPA = kN / 1,9635
            resultado = kn / 1.9635;
        }

        displayRes.innerText = resultado.toFixed(2);
    } else {
        displayRes.innerText = "0.00";
    }
}
