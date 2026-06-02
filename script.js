/* =========================
   ACCORDION
========================= */

document.querySelectorAll(".accordion-btn")
.forEach(button => {

    button.addEventListener("click", () => {

        const content =
        button.nextElementSibling;

        const isOpen =
        content.style.display === "block";

        document
        .querySelectorAll(".accordion-content")
        .forEach(item => {
            item.style.display = "none";
        });

        content.style.display =
        isOpen ? "none" : "block";

    });

});

/* =========================
   TAMANHO DA FONTE
========================= */

let currentSize = 100;

const increaseBtn =
document.getElementById("increaseFont");

const decreaseBtn =
document.getElementById("decreaseFont");

increaseBtn.addEventListener("click", () => {
    currentSize += 10;
    document.body.style.fontSize =
    currentSize + "%";
});

decreaseBtn.addEventListener("click", () => {
    currentSize -= 10;
    document.body.style.fontSize =
    currentSize + "%";
});

/* =========================
   MODO ESCURO
========================= */

const toggleTheme =
document.getElementById("toggleTheme");

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

/* =========================
   LEITURA POR VOZ
========================= */

let speech = null;

const startReading =
document.getElementById("startReading");

const stopReading =
document.getElementById("stopReading");

startReading.addEventListener("click", () => {

    window.speechSynthesis.cancel();

    const content =
    document.getElementById("main-content")
    .innerText;

    speech =
    new SpeechSynthesisUtterance(content);

    speech.lang = "pt-BR";
    speech.rate = 1;

    window.speechSynthesis.speak(speech);

});

stopReading.addEventListener("click", () => {
    window.speechSynthesis.cancel();
});

/* =========================
   FORMULÁRIO
========================= */

const form =
document.querySelector(".form-card form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    alert(
        "Inscrição enviada com sucesso!"
    );

    form.reset();

});