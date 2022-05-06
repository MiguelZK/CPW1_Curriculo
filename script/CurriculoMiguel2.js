function changeImage(){
    imagem = document.getElementById('gifMiguel');
        if (imagem.src.match("Animated")) {
            imagem.src = "imagens/George-Clooney-74101.gif";
        }
        else {
            imagem.src = "imagens/Animated GIF-downsized.gif";
        }
    }