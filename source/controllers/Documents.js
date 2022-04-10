const admin = require("firebase-admin");

// 'réu': '',
// 'autor': '',
// 'movimento': '',

const listaDeProcessos = [
    {
        'subject': 'DIREITO DO CONSUMIDOR (1156) - Contratos de Consumo (7771) - Bancário',
        'cpf': '81109523050',
        'judicialClass ': '[CÍVEL] PROCEDIMENTO COMUM CÍVEL',
        'distributionDate': '19/12/2014',
        'jurisdiction': 'Betim',
        'processNumber': '6000871-19.2014.8.13.0027',
        'docs': [{
            id: '6000871-19.2014.8.13.0027',
        }],
        'judgingBody': '4ª Vara Cível da Comarca de Betim',
    },
    {
        'processNumber': '2361062-34.2014.8.13.0024',
        'docs': [{
            id: '2361062-34.2014.8.13.0024',
        }],
        'distributionDate': '19/08/2014',
        'judicialClass ': '[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)',
        'subject': 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári',
        'cpf': '01421708019',
        'jurisdiction': 'Belo Horizonte',
        'judgingBody': '8ª Vara Cível da Comarca de Belo Horizonte',
    },
    {
        'processNumber': '6000871-19.2014.8.13.0027',
        'docs': [{
            id: '6000871-19.2014.8.13.0027',
        }],
        'distributionDate': '19/12/2014',
        'judicialClass ': '[CÍVEL] PROCEDIMENTO COMUM CÍVEL (7)',
        'subject': 'DIREITO DO CONSUMIDOR (1156) - Contratos de Consumo (7771) - Bancário',
        'cpf': '72799560091',
        'jurisdiction': 'Betim',
        'judgingBody': '4ª Vara Cível da Comarca de Betim',
    },
    {
        'processNumber': '5005974-24.2015.8.13.0145',
        'docs': [{
            id: '5005974-24.2015.8.13.0145',
        }],
        'distributionDate': '27/10/2015',
        'judicialClass ': '[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)',
        'subject': 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári',
        'cpf': '87499889050',
        'jurisdiction': 'Juiz de Fora',
        'judgingBody': '7ª Vara Cível da Comarca de Juiz de Fora',
    },
    {
        'processNumber': '6015206-47.2015.8.13.0079',
        'docs': [{
            id: '6015206-47.2015.8.13.0079',
        }],
        'distributionDate': '04/11/2020',
        'judicialClass ': '[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)',
        'subject': 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári',
        'cpf': '85807514033',
        'jurisdiction': 'Contagem',
        'judgingBody': '6ª Vara Cível da Comarca de Contagem',
    },
    {
        'processNumber': '6122043-97.2015.8.13.0024',
        'docs': [{
            id: '6122043-97.2015.8.13.0024',
        }],
        'distributionDate': '12/11/2015',
        'judicialClass ': '[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)',
        'subject': 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári',
        'cpf': '41105557014',
        'jurisdiction': 'Belo Horizonte',
        'judgingBody': '8ª Vara Cível da Comarca de Belo Horizonte',
    },
    {
        'processNumber': '5005932-61.2016.8.13.0105',
        'docs': [{
            id: '5005932-61.2016.8.13.0105',
        }],
        'distributionDate': '29/09/2016',
        'judicialClass ': '[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)',
        'subject': 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári',
        'cpf': '68775625008',
        'jurisdiction': 'Governador Valadares',
        'judgingBody': '7ª Vara Cível da Comarca de Governador Valadares',
    },
    {
        'processNumber': '5006647-58.2016.8.13.0702',
        'docs': [{
            id: '5006647-58.2016.8.13.0702',
        }],
        'distributionDate': '17/06/2016',
        'judicialClass ': '[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)',
        'subject': 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári',
        'cpf': '83963477008',
        'jurisdiction': 'Uberlândia',
        'judgingBody': '7ª Vara Cível da Comarca de Uberlândia',
    },
    {
        'processNumber': '5012217-13.2016.8.13.0027',
        'docs': [{
            id: '5012217-13.2016.8.13.0027',
        }],
        'distributionDate': '28/09/2016',
        'judicialClass ': '[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)',
        'subject': 'DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciária',
        'cpf': '67783111009',
        'jurisdiction': 'Betim',
        'judgingBody': '5ª Vara Cível da Comarca de Betim',
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
        // listaDeProcessos.forEach(item => {
        //     admin.firestore().collection("docs").doc(item.docs[0].id).set({
        //         ...item,
        //         docs: item.docs.map(doc => ({...doc, id: doc.id.replaceAll('.', '').replaceAll('-', '')}))
        //     })
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
