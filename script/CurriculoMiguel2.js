function changeImage(){
    imagem = document.getElementById('gifMiguel');
    console.log(imagem.src);
        if (imagem.src.match("Animated")) {
            imagem.src = "imagens/George-Clooney-74101.gif";
        }
        else {
            imagem.src = "imagens/Animated GIF-downsized.gif";
        }

        let element = document.getElementById('NomeNaImagem').firstChild.textContent;
        // console.log(element);
        // console.log(typeof(element));
        // console.log(element == `Miguel Zanona Krasner`);
        if (element == `Miguel Zanona Krasner`) {
            document.getElementById('NomeNaImagem').firstChild.textContent = `Agora melhorou, né?`;        
        }
        else {
            document.getElementById('NomeNaImagem').firstChild.textContent = `Miguel Zanona Krasner`;
        }
    }