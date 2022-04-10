const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');

const admin = require("firebase-admin");

admin.initializeApp();


const DocumentsController  = require("./source/controllers/Documents")
const VisualLawController  = require("./source/controllers/VisualLaw")


// buscar os documentos com base num CPF
const appDocuments = express();
appDocuments.use(cors({ origin: true }));

appDocuments.get('/:id', async (req, res) => res.send(await DocumentsController.getByCpf(req.params.id)));
exports.v1_documents = functions.https.onRequest(appDocuments);


// buscar o design law com base em um documentId
const appVisualLaw = express();
appVisualLaw.use(cors({ origin: true }));

appVisualLaw.get('/:id', async (req, res) => res.send(await VisualLawController.getById(req.params.id)));
exports.v1_visualLaw = functions.https.onRequest(appVisualLaw);



