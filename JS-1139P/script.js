function skorDegistir(takim, degisim) {
    const skorElement = document.getElementById(`takim-${takim}-skor`);
    let skor = Math.max(0, parseInt(skorElement.textContent) + degisim);
    skorElement.textContent = skor;
    if (takim === 'a'  && degisim >0) {
        const goalYazisi = document.getElementById('goal-yazisi');
        goalYazisi.style.display = 'block';

      
        setTimeout(() => {
            goalYazisi.style.display = 'none';
        }, 2000);
    }
}

function skorAtama(takim) {
    const yeniSkor = prompt("Yeni gol sayısını girin:");
    const skor = parseInt(yeniSkor);
    
    if (!isNaN(skor) && skor >= 0) {
        document.getElementById(`takim-${takim}-skor`).textContent = skor;
    } else {
        alert("Geçersiz sayı!");
    }
}

function takimIsmiDegistir(takim) {
    const yeniIsim = prompt("Yeni takım ismini girin:");
    if (yeniIsim) {
        document.getElementById(`takim-${takim}-isim`).textContent = yeniIsim;
    }
}
function sifirla() {
    document.getElementById('takim-a-skor').textContent = '0';
    document.getElementById('takim-b-skor').textContent = '0';
    document.getElementById('takim-a-isim').textContent = 'Takım A';
    document.getElementById('takim-b-isim').textContent = 'Takım B';
}



