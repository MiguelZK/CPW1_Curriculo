function changeImage(){
    imagem = document.getElementById('gifMiguel');
        if (imagem.src.match("Animated")) {
            imagem.src = "/~80822070006/imagens/George-Clooney-74101.gif";
        }
        else {
            imagem.src = "/~80822070006/imagens/Animated GIF-downsized.gif";
        }
    }