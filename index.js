const functions = require("firebase-functions");

const DocumentsController  = require("./source/controllers/Documents")
const VisualLawController  = require("./source/controllers/VisualLaw")


exports.helloWorld = functions.https.onRequest((request, response) => {
    
  functions.logger.info("Hello logs!", {structuredData: true});
  functions.logger.info("Hello body: ", JSON.stringify(request.body));

  response.send("Hello from Firebase!");
});


const express = require('express');
const cors = require('cors');


// buscar os documentos com base num CPF
const appDocuments = express();
appDocuments.use(cors({ origin: true }));

appDocuments.get('/:id', (req, res) => res.send(DocumentsController.getByCpf(req.params.id)));
exports.v1_documents = functions.https.onRequest(appDocuments);


// buscar o design law com base em um documentId
const appVisualLaw = express();
appVisualLaw.use(cors({ origin: true }));

appVisualLaw.get('/:id', (req, res) => res.send(VisualLawController.getById(req.params.id)));
exports.v1_visualLaw = functions.https.onRequest(appVisualLaw);


