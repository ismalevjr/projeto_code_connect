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

inputUpload.addEventListener("change",(evento)=> {
    
})