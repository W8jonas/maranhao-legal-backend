const admin = require("firebase-admin");

async function getByCpf(cpf) {
    console.log('getByCpf', cpf)

    try {

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
