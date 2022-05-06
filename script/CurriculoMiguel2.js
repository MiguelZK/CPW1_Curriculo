function changeImage(){
    let imagem = document.getElementById('gifMiguel');
        if (imagem.src.match("Animated")) {
            imagem.src = "imagens/George-Clooney-74101.gif";
        }
        else {
            imagem.src = "imagens/Animated GIF-downsized.gif";
        }
    
        let element = document.getElementById("NomeNaImagem");
        if (element.value == "Miguel Zanona Krasner") {
            element.value = element.replace("Miguel Zanona Krasner", "Agora melhorou, né?");
        }
        else {
            element = element.replace("Agora melhorou, né?", "Miguel Zanona Krasner");
        }
    }