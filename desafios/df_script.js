// Ex01
let listaGatos = ["amarelo","preto","branco","tigrado"];


function filtroListaDeGatos (lista, cor){
    const listaFiltrada = lista.filter(gato => gato === cor);
    console.log(listaFiltrada);
}

filtroListaDeGatos(listaGatos,"preto");

//Ex02

function lerArquivo(arquivo){
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();

        leitor.onload = () =>{
            resolve({url:leitor.result, nome:arquivo.name})
        }

        leitor.onerror = () =>{
            reject(`Erro na leitura do arquivo: ${arquivo}`)
        }
        leitor.readAsDataURL(arquivo)
    })
}


const inputUpload = document.getElementById("imageInput")

const imagemPreview = document.querySelector("#imagem-preview")

inputUpload.addEventListener("change" ,async (evento)=>{
    const arquivo = evento.target.files[0];
    if (arquivo){
        try {
            const conteudoArquivo = await lerArquivo(arquivo);

            imagemPreview.src = conteudoArquivo.url;
            
            
        } catch (error) {
            alert(`Erro no carregamento do arquivo : ${arquivo}`)
        }
    }
})