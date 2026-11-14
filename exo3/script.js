"use strict";

// Fonction B : prend float et retourne un boolean (Slide 45)
function B(note) {
    // Condition If/Else (Slide 42 - Les Conditions)
    if (note >= 10.0) {
        return true;
    } else {
        return false;
    }
}

// Fonc A Appelle la fonc B
function A() {
    // Tableau (Slide 38 - Les Tableaux)
    let students = [
        [1000, "JOHN", "DOE", 14.0, 5],
        [2000, "BOB", "CARLTON", 7.0, 1],
        [3000, "RAYNE", "SMITH", 13.0, 3]
    ];

    // Boucle for (Slide 44)
    for (let i = 0; i < students.length; i++) {
        let id = students[i][0];
        let note = students[i][3]; 
// Index 3 contient la note
        
        let estAdmis = B(note);

        // Affichage (Slide 33)
        if (estAdmis) {
            console.log(id + ": ADMIS");
        } else {
            console.log(id + ": AJOURNÉ");
        }
    }
}