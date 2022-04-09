

async function getByCpf(cpf) {
    console.log('getByCpf', cpf)
    return {
        status: '200',
        data: {
            documents: [
                {id: '123', name: 'Sentença XXX'},
                {id: 'dsf3se', name: 'Sentença YYY'},
            ]
        }
    }
}


module.exports = {
    getByCpf
}
