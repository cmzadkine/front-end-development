// Variabelen instellen
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// Geneste event listener voor het submitten van het formulier
form.addEventListener("submit", function(event) {
    event.preventDefault();  // Voorkomt dat het formulier daadwerkelijk wordt verzonden

    // Haal de waarden van de invoervelden op
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Controleer of alle velden zijn ingevuld
    if (name && email && message) {
        formMessage.innerHTML = `Bedankt voor je bericht, ${name}! We nemen zo snel mogelijk contact met je op.`;
        formMessage.style.color = "green";  // Succesbericht
    } else {
        formMessage.innerHTML = "Vul alstublieft alle velden in.";
        formMessage.style.color = "red";  // Foutbericht
    }
});
