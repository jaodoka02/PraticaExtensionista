
// Seleciona o formulário
const form = document.getElementById('contactForm');

// Adiciona um evento de submissão ao formulário
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Seleciona os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Exibe uma mensagem de agradecimento (simulação de envio)
    alert(`Obrigado pela sua mensagem, ${nome}! Vamos responder para ${email} em breve.`);

    // Limpa o formulário
    form.reset();
});
