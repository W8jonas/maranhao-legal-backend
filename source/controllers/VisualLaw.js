

async function getByCpf(id) {
    console.log('getByCpf', id)
    return {
        status: '200',
        data: {
            dispositivo: 'Não definido ainda',
            var2: 'Não definido ainda',
            var3: 'Não definido ainda',
        }
    }
}


module.exports = {
    getByCpf
}
