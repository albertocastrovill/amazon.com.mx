// Guardar datos en Firestore
/*
function guardar(){
    db.collection("usuarios").add({
        email: document.getElementById('email').value,
    })
    .then(function(docRef) {
        console.log("Registro exitoso con ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error al agregar el documento: ", error);
    });

}
*/

import { collection, addDoc } from "firebase/firestore"; 

function guardar(){
    try {
    const docRef = addDoc(collection(db, "usuarios"), {
        email: document.getElementById('email').value,
    });
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ", e);
    }
}