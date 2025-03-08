const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload");

uploadBtn.addEventListener("click", ()=> {
    inputUpload.click();
})

function lerConteudo (arquivo){
    return new Promise ((resolve, reject)=>{
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({url:leitor.result, nome:arquivo.name});
        }
        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo${arquivo}`);
        }
        leitor.readAsDataURL(arquivo);
    })
}

const imagemPrincipal = document.querySelector(".main-imagem");
const nomeDaImagem = document.querySelector(".container-imagem-nome p");

inputUpload.addEventListener("change",async (evento)=> {
    const arquivo = evento.target.files[0]; 

    if(arquivo){
        try{
            const conteudoArquivo = await lerConteudo(arquivo);
            imagemPrincipal.src = conteudoArquivo.url;
            nomeDaImagem.textContent = conteudoArquivo.nome;
        }catch(erro){
            console.error("Erro na leitura do arquvio");
        }
    }
})

const inputTags = document.getElementById("input-tags");
const listaTags = document.getElementById("lista-tags");


listaTags.addEventListener("click", (evento)=>{
    if(evento.target.classList.contains("remove-tag")){
        const tagAserRemovida = evento.target.parentElement;
        listaTags.removeChild(tagAserRemovida);
    }
})

const tagsDisponiveis = ["Front-end", "Programação", "Full-stack", "Back-end","CSS", "HTML"];

async function verificaTagsDisponiveis(tagTexto){
    return new Promise((resolve) =>{

        setTimeout(()=>{
            resolve(tagsDisponiveis.includes(tagTexto));
        },100)
    })
}



inputTags.addEventListener("keypress", async (evento)=>{
    if(evento.key === "Enter"){
        evento.preventDefault();

        const tagtexto = inputTags.value.trim();

        if(tagtexto !== "" ){

        try{
        const tagExiste = await verificaTagsDisponiveis(tagtexto);

        if (tagExiste) {
            
        
        const itemDaListaTags = document.createElement("li");
        itemDaListaTags.classList.add("container-imagem-nome");

        itemDaListaTags.innerHTML = `<p> ${tagtexto} </p> <img src="img/close-black.svg"" class="remove-tag">`;

        listaTags.appendChild(itemDaListaTags);
        inputTags.value = "";
        }else{
            alert("Tag não foi encontrada");
        }
        }catch(error){
            console.error("Erro ao verificar a existência da tag");
            alert("Erro ao verificar a existência da tag. Verifique o console");
        }
    }
    }
})

const botaPublicar = document.querySelector(".botao-publicar")

botaPublicar.addEventListener("click", async (evento)=>{
    evento.preventDefault();

    const nomeDoProjeto = document.getElementById("nome").value;
    const descricaoDoProjeto = document.getElementById("descricao").value;
    const tagsProjeto = Array.from(listaTags.querySelectorAll("p")).map((tag) =>tag.textContent);

    console.log(nomeDoProjeto)
    console.log(descricaoDoProjeto)
    console.log(tagsProjeto)
})

async function  publicarProjeto (nomeDoProjeto, descricaoDoProjeto, tagsDoProjeto) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const deuCerto = Math.random() > 0.5;
            
            if(deuCerto){
                resolve("Projeto publicado com sucesso");
            }else{
                reject("Erro ao publicar o projeto");
            }
        },2000)
    })
    
}


