function tanulo_adatok() {
    const tanuloAdatok = [];
    const hanyAdat = parseInt(prompt("Hány adatot szeretnél megadni?"));

    for (let i = 0; i < hanyAdat; i++) {
        const nev = prompt("Név:");
        const email = prompt("E-mail:");
        tanuloAdatok.push({ nev, email });
    }

    const tanulokDiv = document.getElementById("tanulokAdatok");
    tanulokDiv.innerHTML = "<h3>A tanulók adatai:</h3>";
    tanuloAdatok.forEach(tanulo => {
        tanulokDiv.innerHTML += `<p>Név: ${tanulo.nev} E-mail: ${tanulo.email}</p>`;
    });
}

function orarend() {
    const hetiOrarend = [
        { nap: "Hétfő", orak: ["Matematika", "Irodalom", "Történelem", "Tesi", "Webprogramozás"] },
        { nap: "Kedd", orak: ["Fizika", "Kémia", "Biológia", "Kémia"] },
        { nap: "Szerda", orak: ["Testnevelés", "Földrajz", "Angol", "Német"] },
        { nap: "Csütörtök", orak: ["Informatika", "Matek", "Történelem", "Emelt történelem"] },
        { nap: "Péntek", orak: ["Irodalom", "Fizika", "Ének", "Webprogramozás"] }
    ];

    const orarendDiv = document.getElementById("orarendAdatok");
    orarendDiv.innerHTML = "<h3>Heti órarend:</h3>";
    hetiOrarend.forEach(nap => {
        orarendDiv.innerHTML += `<p>${nap.nap}: ${nap.orak.join(", ")}</p>`;
    });
}

document.getElementById("btnTanulok").addEventListener("click", tanulo_adatok);
document.getElementById("btnOrarend").addEventListener("click", orarend);
