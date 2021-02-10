function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Você tem algum prexido de URL definida? Digite sim/não: ", function (resposta) {
    if (resposta === 'sim') {

        readline.question('Digite o prefixo: ', prefixo => {
            readline.question('Digite a URL a ser encurtada: ', url => {
                console.log(`URL encriptada: https://localhost:4000/${prefixo}`);
                readline.close();
            });
        });
    } else {
        console.log(`OK, gerando URL aleatória: `);
        readline.question('Digite a URL a ser encurtada: ', url => {
            console.log(`URL encriptada: https://localhost:4000/${makeid(5)}`);
            readline.close();
        });
    }
})