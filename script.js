/* Adicione os novos CPs abaixo seguindo o formato:
 * { empresa: "NOME", registro: "00", moldagem: "AAAA-MM-DD", prazo: 7 ou 14 ou 28 },
 */
const registrosCP = [

    // PROGEO KM489
    { empresa: "PROGEO KM489", registro: "114", moldagem: "2026-04-02", prazo: 28 },
    { empresa: "PROGEO KM489", registro: "115", moldagem: "2026-04-06", prazo: 28 },
    { empresa: "PROGEO KM489", registro: "116", moldagem: "2026-04-07", prazo: 28 },
    { empresa: "PROGEO KM489", registro: "118", moldagem: "2026-04-09", prazo: 28 },
    { empresa: "PROGEO KM489", registro: "119", moldagem: "2026-04-10", prazo: 28 },
    { empresa: "PROGEO KM489", registro: "120", moldagem: "2026-04-15", prazo: 28 },
    { empresa: "PROGEO KM489", registro: "121", moldagem: "2026-04-16", prazo: 28 },
    { empresa: "PROGEO KM489", registro: "122", moldagem: "2026-04-17", prazo: 28 },
    { empresa: "PROGEO KM489", registro: "123", moldagem: "2026-04-22", prazo: 28 },
    { empresa: "PROGEO KM489", registro: "124", moldagem: "2026-04-23", prazo: 14 },
    { empresa: "PROGEO KM489", registro: "124", moldagem: "2026-04-23", prazo: 28 },
    { empresa: "PROGEO KM489", registro: "125", moldagem: "2026-04-24", prazo: 14 },
    { empresa: "PROGEO KM489", registro: "125", moldagem: "2026-04-24", prazo: 28 },
    { empresa: "PROGEO KM489", registro: "126", moldagem: "2026-04-27", prazo: 14 },
    { empresa: "PROGEO KM489", registro: "126", moldagem: "2026-04-27", prazo: 28 },
    { empresa: "PROGEO KM489", registro: "127", moldagem: "2026-04-01", prazo: 28 },
    { empresa: "PROGEO KM489", registro: "129", moldagem: "2026-04-10", prazo: 28 },
    { empresa: "PROGEO KM489", registro: "130", moldagem: "2026-04-14", prazo: 28 },
    { empresa: "PROGEO KM489", registro: "131", moldagem: "2026-04-16", prazo: 28 },
    { empresa: "PROGEO KM489", registro: "132", moldagem: "2026-04-17", prazo: 28 },
        

    // UAU INGLESA
    { empresa: "UAU INGLESA", registro: "84", moldagem: "2026-04-10", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "85", moldagem: "2026-04-10", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "86", moldagem: "2026-04-10", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "87", moldagem: "2026-04-13", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "88", moldagem: "2026-04-13", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "89", moldagem: "2026-04-13", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "90", moldagem: "2026-04-14", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "91", moldagem: "2026-04-14", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "92", moldagem: "2026-04-15", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "93", moldagem: "2026-04-15", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "94", moldagem: "2026-04-16", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "95", moldagem: "2026-04-16", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "96", moldagem: "2026-04-16", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "97", moldagem: "2026-04-16", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "98", moldagem: "2026-04-17", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "99", moldagem: "2026-04-27", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "99", moldagem: "2026-04-27", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "100", moldagem: "2026-04-28", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "100", moldagem: "2026-04-28", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "101", moldagem: "2026-04-30", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "101", moldagem: "2026-04-30", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "102", moldagem: "2026-04-30", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "102", moldagem: "2026-04-30", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "103", moldagem: "2026-04-30", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "103", moldagem: "2026-04-30", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "104", moldagem: "2026-04-30", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "104", moldagem: "2026-04-30", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "105", moldagem: "2026-05-05", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "105", moldagem: "2026-05-05", prazo: 28 },
    { empresa: "UAU INGLESA", registro: "106", moldagem: "2026-05-06", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "106", moldagem: "2026-05-06", prazo: 28 },

    { empresa: "UAU INGLESA", registro: "108", moldagem: "2026-05-07", prazo: 7 },
    { empresa: "UAU INGLESA", registro: "108", moldagem: "2026-05-07", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "108", moldagem: "2026-05-07", prazo: 28 },

    { empresa: "UAU INGLESA", registro: "109", moldagem: "2026-05-07", prazo: 7 },
    { empresa: "UAU INGLESA", registro: "109", moldagem: "2026-05-07", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "109", moldagem: "2026-05-07", prazo: 28 },

    { empresa: "UAU INGLESA", registro: "110", moldagem: "2026-05-07", prazo: 7 },
    { empresa: "UAU INGLESA", registro: "110", moldagem: "2026-05-07", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "110", moldagem: "2026-05-07", prazo: 28 },

    { empresa: "UAU INGLESA", registro: "112", moldagem: "2026-05-08", prazo: 7 },
    { empresa: "UAU INGLESA", registro: "112", moldagem: "2026-05-08", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "112", moldagem: "2026-05-08", prazo: 28 },

    { empresa: "UAU INGLESA", registro: "113", moldagem: "2026-05-11", prazo: 7 },
    { empresa: "UAU INGLESA", registro: "113", moldagem: "2026-05-11", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "113", moldagem: "2026-05-11", prazo: 28 },

    { empresa: "UAU INGLESA", registro: "114", moldagem: "2026-05-11", prazo: 7 },
    { empresa: "UAU INGLESA", registro: "114", moldagem: "2026-05-11", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "114", moldagem: "2026-05-11", prazo: 28 },

    { empresa: "UAU INGLESA", registro: "115", moldagem: "2026-05-11", prazo: 7 },
    { empresa: "UAU INGLESA", registro: "115", moldagem: "2026-05-11", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "115", moldagem: "2026-05-11", prazo: 28 },

    { empresa: "UAU INGLESA", registro: "116", moldagem: "2026-05-11", prazo: 7 },
    { empresa: "UAU INGLESA", registro: "116", moldagem: "2026-05-11", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "116", moldagem: "2026-05-11", prazo: 28 },

    { empresa: "UAU INGLESA", registro: "117", moldagem: "2026-05-11", prazo: 7 },
    { empresa: "UAU INGLESA", registro: "117", moldagem: "2026-05-11", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "117", moldagem: "2026-05-11", prazo: 28 },

    { empresa: "UAU INGLESA", registro: "118", moldagem: "2026-05-12", prazo: 7 },
    { empresa: "UAU INGLESA", registro: "118", moldagem: "2026-05-12", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "118", moldagem: "2026-05-12", prazo: 28 },

    { empresa: "UAU INGLESA", registro: "119", moldagem: "2026-05-12", prazo: 7 },
    { empresa: "UAU INGLESA", registro: "119", moldagem: "2026-05-12", prazo: 14 },
    { empresa: "UAU INGLESA", registro: "119", moldagem: "2026-05-12", prazo: 28 },


    // KTM
    { empresa: "KTM", registro: "4", moldagem: "2026-04-09", prazo: 28 },
    { empresa: "KTM", registro: "5", moldagem: "2026-04-09", prazo: 28 },
    { empresa: "KTM", registro: "6", moldagem: "2026-04-10", prazo: 28 },
    { empresa: "KTM", registro: "7", moldagem: "2026-04-10", prazo: 28 },
    { empresa: "KTM", registro: "8", moldagem: "2026-04-17", prazo: 28 },
    { empresa: "KTM", registro: "9", moldagem: "2026-04-17", prazo: 28 },
    { empresa: "KTM", registro: "10", moldagem: "2026-04-24", prazo: 14 },
    { empresa: "KTM", registro: "10", moldagem: "2026-04-24", prazo: 28 },
    { empresa: "KTM", registro: "11", moldagem: "2026-04-24", prazo: 14 },
    { empresa: "KTM", registro: "11", moldagem: "2026-04-24", prazo: 28 },
    { empresa: "KTM", registro: "12", moldagem: "2026-04-24", prazo: 14 },
    { empresa: "KTM", registro: "12", moldagem: "2026-04-24", prazo: 28 },

    { empresa: "KTM", registro: "13", moldagem: "2026-04-28", prazo: 7 },
    { empresa: "KTM", registro: "13", moldagem: "2026-04-28", prazo: 14 },
    { empresa: "KTM", registro: "13", moldagem: "2026-04-28", prazo: 28 },

    { empresa: "KTM", registro: "14", moldagem: "2026-04-28", prazo: 7 },
    { empresa: "KTM", registro: "14", moldagem: "2026-04-28", prazo: 14 },
    { empresa: "KTM", registro: "14", moldagem: "2026-04-28", prazo: 28 },

    { empresa: "KTM", registro: "15", moldagem: "2026-04-30", prazo: 7 },
    { empresa: "KTM", registro: "15", moldagem: "2026-04-30", prazo: 14 },
    { empresa: "KTM", registro: "15", moldagem: "2026-04-30", prazo: 28 },

    { empresa: "KTM", registro: "16", moldagem: "2026-04-30", prazo: 7 },
    { empresa: "KTM", registro: "16", moldagem: "2026-04-30", prazo: 14 },
    { empresa: "KTM", registro: "16", moldagem: "2026-04-30", prazo: 28 },
    
    


    // ATERPA
    { empresa: "ATERPA", registro: "19", moldagem: "2026-04-09", prazo: 28 },
    { empresa: "ATERPA", registro: "20", moldagem: "2026-04-09", prazo: 28 },
    { empresa: "ATERPA", registro: "21", moldagem: "2026-04-09", prazo: 28 },
    { empresa: "ATERPA", registro: "22", moldagem: "2026-04-16", prazo: 28 },
    { empresa: "ATERPA", registro: "23", moldagem: "2026-04-16", prazo: 28 },
    { empresa: "ATERPA", registro: "24", moldagem: "2026-04-17", prazo: 28 },
    { empresa: "ATERPA", registro: "25", moldagem: "2026-04-17", prazo: 28 },
    { empresa: "ATERPA", registro: "26", moldagem: "2026-04-17", prazo: 28 },
    { empresa: "ATERPA", registro: "27", moldagem: "2026-04-22", prazo: 28 },
    { empresa: "ATERPA", registro: "28", moldagem: "2026-04-22", prazo: 28 },
    { empresa: "ATERPA", registro: "29", moldagem: "2026-04-22", prazo: 14 },
    { empresa: "ATERPA", registro: "29", moldagem: "2026-04-22", prazo: 28 },
    { empresa: "ATERPA", registro: "30", moldagem: "2026-04-24", prazo: 14 },
    { empresa: "ATERPA", registro: "30", moldagem: "2026-04-24", prazo: 28 },
    { empresa: "ATERPA", registro: "31", moldagem: "2026-04-27", prazo: 14 },
    { empresa: "ATERPA", registro: "31", moldagem: "2026-04-27", prazo: 28 },
    { empresa: "ATERPA", registro: "32", moldagem: "2026-04-29", prazo: 14 },
    { empresa: "ATERPA", registro: "32", moldagem: "2026-04-29", prazo: 28 },
    { empresa: "ATERPA", registro: "33", moldagem: "2026-04-30", prazo: 14 },
    { empresa: "ATERPA", registro: "33", moldagem: "2026-04-30", prazo: 28 },
    { empresa: "ATERPA", registro: "34", moldagem: "2026-05-04", prazo: 14 },
    { empresa: "ATERPA", registro: "34", moldagem: "2026-05-04", prazo: 28 },
    { empresa: "ATERPA", registro: "35", moldagem: "2026-05-05", prazo: 14 },
    { empresa: "ATERPA", registro: "35", moldagem: "2026-05-05", prazo: 28 },
    { empresa: "ATERPA", registro: "36", moldagem: "2026-05-06", prazo: 14 },
    { empresa: "ATERPA", registro: "36", moldagem: "2026-05-06", prazo: 28 },
    { empresa: "ATERPA", registro: "37", moldagem: "2026-05-08", prazo: 14 },
    { empresa: "ATERPA", registro: "37", moldagem: "2026-05-08", prazo: 28 },

    // PROGEO KM469
    { empresa: "PROGEO KM469", registro: "16", moldagem: "2026-04-10", prazo: 7 },
    { empresa: "PROGEO KM469", registro: "16", moldagem: "2026-04-10", prazo: 14 },
    { empresa: "PROGEO KM469", registro: "16", moldagem: "2026-04-10", prazo: 28 },

    { empresa: "PROGEO KM469", registro: "17", moldagem: "2026-04-13", prazo: 7 },
    { empresa: "PROGEO KM469", registro: "17", moldagem: "2026-04-13", prazo: 14 },
    { empresa: "PROGEO KM469", registro: "17", moldagem: "2026-04-13", prazo: 28 },

    { empresa: "PROGEO KM469", registro: "18", moldagem: "2026-04-15", prazo: 7 },
    { empresa: "PROGEO KM469", registro: "18", moldagem: "2026-04-15", prazo: 14 },
    { empresa: "PROGEO KM469", registro: "18", moldagem: "2026-04-15", prazo: 28 },

    { empresa: "PROGEO KM469", registro: "19", moldagem: "2026-04-17", prazo: 7 },
    { empresa: "PROGEO KM469", registro: "19", moldagem: "2026-04-17", prazo: 14 },
    { empresa: "PROGEO KM469", registro: "19", moldagem: "2026-04-17", prazo: 28 },

    { empresa: "PROGEO KM469", registro: "20", moldagem: "2026-04-22", prazo: 7 },
    { empresa: "PROGEO KM469", registro: "20", moldagem: "2026-04-22", prazo: 14 },
    { empresa: "PROGEO KM469", registro: "20", moldagem: "2026-04-22", prazo: 28 },

    { empresa: "PROGEO KM469", registro: "21", moldagem: "2026-04-24", prazo: 7 },
    { empresa: "PROGEO KM469", registro: "21", moldagem: "2026-04-24", prazo: 14 },
    { empresa: "PROGEO KM469", registro: "21", moldagem: "2026-04-24", prazo: 28 },

    { empresa: "PROGEO KM469", registro: "22", moldagem: "2026-04-27", prazo: 7 },
    { empresa: "PROGEO KM469", registro: "22", moldagem: "2026-04-27", prazo: 14 },
    { empresa: "PROGEO KM469", registro: "22", moldagem: "2026-04-27", prazo: 28 },

    { empresa: "PROGEO KM469", registro: "23", moldagem: "2026-04-29", prazo: 7 },
    { empresa: "PROGEO KM469", registro: "23", moldagem: "2026-04-29", prazo: 14 },
    { empresa: "PROGEO KM469", registro: "23", moldagem: "2026-04-29", prazo: 28 },

    { empresa: "PROGEO KM469", registro: "24", moldagem: "2026-04-30", prazo: 7 },
    { empresa: "PROGEO KM469", registro: "24", moldagem: "2026-04-30", prazo: 14 },
    { empresa: "PROGEO KM469", registro: "24", moldagem: "2026-04-30", prazo: 28 },


    //FERRAÇO

    { empresa: "FERRAÇO", registro: "715", moldagem: "2026-04-20", prazo: 7 },
    { empresa: "FERRAÇO", registro: "715", moldagem: "2026-04-20", prazo: 14 },
    { empresa: "FERRAÇO", registro: "715", moldagem: "2026-04-20", prazo: 28 },

    { empresa: "FERRAÇO", registro: "716", moldagem: "2026-04-28", prazo: 7 },
    { empresa: "FERRAÇO", registro: "716", moldagem: "2026-04-28", prazo: 14 },
    { empresa: "FERRAÇO", registro: "716", moldagem: "2026-04-28", prazo: 28 },

    { empresa: "FERRAÇO", registro: "717", moldagem: "2026-05-14", prazo: 7 },
    { empresa: "FERRAÇO", registro: "717", moldagem: "2026-05-14", prazo: 14 },
    { empresa: "FERRAÇO", registro: "717", moldagem: "2026-05-14", prazo: 28 },


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
