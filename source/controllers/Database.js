
const listaDeProcessos = [
    {
        "subject": "DIREITO DO CONSUMIDOR (1156) - Contratos de Consumo (7771) - Bancário",
        "cpf": "81109523050",
        "judicialClass ": "[CÍVEL] PROCEDIMENTO COMUM CÍVEL",
        "distributionDate": "19/12/2014",
        "jurisdiction": "Betim",
        "processNumber": "6000871-19.2014.8.13.0027",
        "docs": [
            {
                "id": "6000871-19.2014.8.13.0027"
            }
        ],
        "judgingBody": "4ª Vara Cível da Comarca de Betim"
    },
    {
        "processNumber": "2361062-34.2014.8.13.0024",
        "docs": [
            {
                "id": "2361062-34.2014.8.13.0024"
            }
        ],
        "distributionDate": "19/08/2014",
        "judicialClass ": "[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)",
        "subject": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári",
        "cpf": "01421708019",
        "jurisdiction": "Belo Horizonte",
        "judgingBody": "8ª Vara Cível da Comarca de Belo Horizonte"
    },
    {
        "processNumber": "6000871-19.2014.8.13.0027",
        "docs": [
            {
                "id": "6000871-19.2014.8.13.0027"
            }
        ],
        "distributionDate": "19/12/2014",
        "judicialClass ": "[CÍVEL] PROCEDIMENTO COMUM CÍVEL (7)",
        "subject": "DIREITO DO CONSUMIDOR (1156) - Contratos de Consumo (7771) - Bancário",
        "cpf": "72799560091",
        "jurisdiction": "Betim",
        "judgingBody": "4ª Vara Cível da Comarca de Betim"
    },
    {
        "processNumber": "5005974-24.2015.8.13.0145",
        "docs": [
            {
                "id": "5005974-24.2015.8.13.0145"
            }
        ],
        "distributionDate": "27/10/2015",
        "judicialClass ": "[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)",
        "subject": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári",
        "cpf": "87499889050",
        "jurisdiction": "Juiz de Fora",
        "judgingBody": "7ª Vara Cível da Comarca de Juiz de Fora"
    },
    {
        "processNumber": "6015206-47.2015.8.13.0079",
        "docs": [
            {
                "id": "6015206-47.2015.8.13.0079"
            }
        ],
        "distributionDate": "04/11/2020",
        "judicialClass ": "[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)",
        "subject": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári",
        "cpf": "85807514033",
        "jurisdiction": "Contagem",
        "judgingBody": "6ª Vara Cível da Comarca de Contagem"
    },
    {
        "processNumber": "6122043-97.2015.8.13.0024",
        "docs": [
            {
                "id": "6122043-97.2015.8.13.0024"
            }
        ],
        "distributionDate": "12/11/2015",
        "judicialClass ": "[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)",
        "subject": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári",
        "cpf": "41105557014",
        "jurisdiction": "Belo Horizonte",
        "judgingBody": "8ª Vara Cível da Comarca de Belo Horizonte"
    },
    {
        "processNumber": "5005932-61.2016.8.13.0105",
        "docs": [
            {
                "id": "5005932-61.2016.8.13.0105"
            }
        ],
        "distributionDate": "29/09/2016",
        "judicialClass ": "[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)",
        "subject": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári",
        "cpf": "68775625008",
        "jurisdiction": "Governador Valadares",
        "judgingBody": "7ª Vara Cível da Comarca de Governador Valadares"
    },
    {
        "processNumber": "5006647-58.2016.8.13.0702",
        "docs": [
            {
                "id": "5006647-58.2016.8.13.0702"
            }
        ],
        "distributionDate": "17/06/2016",
        "judicialClass ": "[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)",
        "subject": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári",
        "cpf": "83963477008",
        "jurisdiction": "Uberlândia",
        "judgingBody": "7ª Vara Cível da Comarca de Uberlândia"
    },
    {
        "processNumber": "5012217-13.2016.8.13.0027",
        "docs": [
            {
                "id": "5012217-13.2016.8.13.0027"
            }
        ],
        "distributionDate": "28/09/2016",
        "judicialClass ": "[CÍVEL] BUSCA E APREENSÃO EM ALIENAÇÃO FIDUCIÁRIA (81)",
        "subject": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciária",
        "cpf": "67783111009",
        "jurisdiction": "Betim",
        "judgingBody": "5ª Vara Cível da Comarca de Betim"
    }
]


const listaDeIds = [
    {"id": "2361062-34.2014.8.13.0024", "name": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári"},
    {"id": "6000871-19.2014.8.13.0027", "name": "DIREITO DO CONSUMIDOR (1156) - Contratos de Consumo (7771) - Bancário"},
    {"id": "5005974-24.2015.8.13.0145", "name": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári"},
    {"id": "6015206-47.2015.8.13.0079", "name": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári"},
    {"id": "6122043-97.2015.8.13.0024", "name": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári"},
    {"id": "5005932-61.2016.8.13.0105", "name": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári"},
    {"id": "5006647-58.2016.8.13.0702", "name": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári"},
    {"id": "5012217-13.2016.8.13.0027", "name": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciária"},
]

const userData = {
    "id": "Gbt1dLFOvZjzDuqMuWqu",
    "cpf": "126",
    "name": "Lucas Marcelo Rodrigues",
    "docs": [
        listaDeIds.map(doc => ({...doc, id: doc.id.replaceAll('.', '').replaceAll('-', '')}))
    ]
}


const USER_DATA = {
    "cpf": "126",
    "docs": [
        {"id": "23610623420148130024", "name": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári"},
        {"id": "60008711920148130027", "name": "DIREITO DO CONSUMIDOR (1156) - Contratos de Consumo (7771) - Bancário"},
        {"id": "50059742420158130145", "name": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári"},
        {"id": "60152064720158130079", "name": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári"},
        {"id": "61220439720158130024", "name": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári"},
        {"id": "50059326120168130105", "name": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári"},
        {"id": "50066475820168130702", "name": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciári"},
        {"id": "50122171320168130027", "name": "DIREITO CIVIL / Obrigações / Espécies de Contratos / Alienação Fiduciária"}
    ],
    "id": "Gbt1dLFOvZjzDuqMuWqu",
    "name": "Lucas Marcelo Rodrigues"
}

const admin = require("firebase-admin");


async function updateDocs(req, res) {
    console.log('updateDocs', JSON.stringify(req.body))

    const data = req.body.data

    try {

        data.forEach(item => {
            admin.firestore().collection("docs").doc(item.docs[0].id).set({
                ...item,
                docs: item.docs.map(doc => ({...doc, id: doc.id.replaceAll('.', '').replaceAll('-', '')}))
            })
        })

        return {
            status: '200',
            data
        }
    } catch (error) {
        return {
            status: '500',
            error: JSON.stringify(error)
        }
    }
}


async function updateUsers(req, res) {
    console.log('updateUsers', JSON.stringify(req.body))

    const data = req.body.data

    try {
        await admin.firestore().collection("users").doc('Gbt1dLFOvZjzDuqMuWqu').set({
            ...data
        })

        return {
            status: '200',
        }
    } catch (error) {
        return {
            status: '500',
            error: JSON.stringify(error)
        }
    }
}


module.exports = {
    updateDocs,
    updateUsers
}

