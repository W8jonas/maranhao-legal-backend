const admin = require("firebase-admin");

// 'réu': '',
// 'autor': '',
// 'movimento': '',

const listaDeProcessos = [
    {
        'assunto': 'DIREITO DO CONSUMIDOR (1156) - Contratos de Consumo (7771) - Bancário',
        'cpf': '81109523050',
        'classe judicial ': '[CÍVEL] PROCEDIMENTO COMUM CÍVEL',
        'data da distribuição': '19/12/2014',
        'jurisdicao': 'Betim',
        'número processo': '6000871-19.2014.8.13.0027',
        'docs': [{
            id: '6000871-19.2014.8.13.0027',
        }],
        'orgao julgador': '4ª Vara Cível da Comarca de Betim',
    },
    {
        'número processo': '2361062-34.2014.8.13.0024',
        'docs': [{
            id: '2361062-34.2014.8.13.0024',
        }],
        'data da distribuição': '19/08/2014',
        'classe judicial ': '[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)',
        'assunto': 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári',
        'cpf': '01421708019',
        'jurisdicao': 'Belo Horizonte',
        'orgao julgador': '8ª Vara Cível da Comarca de Belo Horizonte',
    },
    {
        'número processo': '6000871-19.2014.8.13.0027',
        'docs': [{
            id: '6000871-19.2014.8.13.0027',
        }],
        'data da distribuição': '19/12/2014',
        'classe judicial ': '[CÍVEL] PROCEDIMENTO COMUM CÍVEL (7)',
        'assunto': 'DIREITO DO CONSUMIDOR (1156) - Contratos de Consumo (7771) - Bancário',
        'cpf': '72799560091',
        'jurisdicao': 'Betim',
        'orgao julgador': '4ª Vara Cível da Comarca de Betim',
    },
    {
        'número processo': '5005974-24.2015.8.13.0145',
        'docs': [{
            id: '5005974-24.2015.8.13.0145',
        }],
        'data da distribuição': '27/10/2015',
        'classe judicial ': '[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)',
        'assunto': 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári',
        'cpf': '87499889050',
        'jurisdicao': 'Juiz de Fora',
        'orgao julgador': '7ª Vara Cível da Comarca de Juiz de Fora',
    },
    {
        'número processo': '6015206-47.2015.8.13.0079',
        'docs': [{
            id: '6015206-47.2015.8.13.0079',
        }],
        'data da distribuição': '04/11/2020',
        'classe judicial ': '[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)',
        'assunto': 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári',
        'cpf': '85807514033',
        'jurisdicao': 'Contagem',
        'orgao julgador': '6ª Vara Cível da Comarca de Contagem',
    },
    {
        'número processo': '6122043-97.2015.8.13.0024',
        'docs': [{
            id: '6122043-97.2015.8.13.0024',
        }],
        'data da distribuição': '12/11/2015',
        'classe judicial ': '[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)',
        'assunto': 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári',
        'cpf': '41105557014',
        'jurisdicao': 'Belo Horizonte',
        'orgao julgador': '8ª Vara Cível da Comarca de Belo Horizonte',
    },
    {
        'número processo': '5005932-61.2016.8.13.0105',
        'docs': [{
            id: '5005932-61.2016.8.13.0105',
        }],
        'data da distribuição': '29/09/2016',
        'classe judicial ': '[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)',
        'assunto': 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári',
        'cpf': '68775625008',
        'jurisdicao': 'Governador Valadares',
        'orgao julgador': '7ª Vara Cível da Comarca de Governador Valadares',
    },
    {
        'número processo': '5006647-58.2016.8.13.0702',
        'docs': [{
            id: '5006647-58.2016.8.13.0702',
        }],
        'data da distribuição': '17/06/2016',
        'classe judicial ': '[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)',
        'assunto': 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári',
        'cpf': '83963477008',
        'jurisdicao': 'Uberlândia',
        'orgao julgador': '7ª Vara Cível da Comarca de Uberlândia',
    },
    {
        'número processo': '5012217-13.2016.8.13.0027',
        'docs': [{
            id: '5012217-13.2016.8.13.0027',
        }],
        'data da distribuição': '28/09/2016',
        'classe judicial ': '[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)',
        'assunto': 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciária',
        'cpf': '67783111009',
        'jurisdicao': 'Betim',
        'orgao julgador': '5ª Vara Cível da Comarca de Betim',
    },
]

const listaDeIds = [
    {id: '6000871-19.2014.8.13.0027', name: 'DIREITO DO CONSUMIDOR (1156) - Contratos de Consumo (7771) - Bancário'},
    {id: '2361062-34.2014.8.13.0024', name: 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári'},
    {id: '6000871-19.2014.8.13.0027', name: 'DIREITO DO CONSUMIDOR (1156) - Contratos de Consumo (7771) - Bancário'},
    {id: '5005974-24.2015.8.13.0145', name: 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári'},
    {id: '6015206-47.2015.8.13.0079', name: 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári'},
    {id: '6122043-97.2015.8.13.0024', name: 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári'},
    {id: '5005932-61.2016.8.13.0105', name: 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári'},
    {id: '5006647-58.2016.8.13.0702', name: 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári'},
    {id: '5012217-13.2016.8.13.0027', name: 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciária'},
]

async function getByCpf(cpf) {
    console.log('getByCpf', cpf)

    try {
        // admin.firestore().collection("users").doc('Gbt1dLFOvZjzDuqMuWqu').set({
        //     cpf: "123",
        //     id: "Gbt1dLFOvZjzDuqMuWqu",
        //     docs: listaDeIds
        // })

        const response = await admin.firestore().collection("users").where("cpf", "==", `${cpf}`).get();
        const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}));
        const account = data[0];
        
        return {
            status: '200',
            data: {
                documents: account.docs,
                name: account.name
            }
        }
    } catch (error) {
        return {
            status: '500',
            error: JSON.stringify(error)
        }
    }
}


module.exports = {
    getByCpf
}
