// Construindo uma lista de emails ficticia a ser capturada
const listaDeEmail = ["ismael.levino@gmail.com","marcia-argos@hotmail.com"];


//Capturando botão para inserção do ouvinte de evento 
const botaoCadastrar = document.getElementById("botao-cadastrar");

// Definição da função de validação dos emails
async function validaEmails (email) {

    // Promisse para verificação do email 
    return new Promise((resolve,reject)=>{

        if (listaDeEmail.includes(email)) {
            reject("Email já cadastrado em nossa plataforma")
        } else {
            resolve("Email validado")    
        }
        
    })
}

// Inserindo ouvinte de evento para captura do formulário input 
botaoCadastrar.addEventListener("click", async (evento)=>{

    // Retirada do comportamento padrão de carregamento da página
    evento.preventDefault()

    // Capturando o input onde está sendo inserido o email
    const emailUsuario = document.getElementById("email").value;

    // Garantindo a validação do email 

    const validacaoEmail = await validaEmails(emailUsuario);
    
    if (validacaoEmail === "Email validado"){
        listaDeEmail.push(emailUsuario)
    }


})
