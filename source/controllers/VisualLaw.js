const admin = require("firebase-admin");
const fetch = require("node-fetch");


async function getById(id) {
    console.log('getById', id)

	const options = {
		method: "get",
		headers: {"Accept": "application/json", "Content-Type": "application/json", "mode": "no-cors"},
	};

	try { 
        const response = await admin.firestore().collection("docs").doc(id).get();
        const data = response.data()

		const response2 = await fetch(`https://maranhao-legal-pdf-api.herokuapp.com/categorias`, options);
		const responseJson = await response2.json();

		return {
            status: '200',
            data,
            pdfData: {
                ...responseJson.data
            }
        }
	} catch (error) {
		console.log("Error - getById :", JSON.stringify({error, message: error.message}));
        return {
            status: '500',
            error: JSON.stringify({error, message: error.message}),
        }
	}
}


module.exports = {
    getById
}
