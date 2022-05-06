function changeName(){
    var element = document.getElementById("NomeNaImagem");
        if (element.value == "Miguel Zanona Krasner") {
            element.value = element.replace("Miguel Zanona Krasner", "Agora melhorou, né?");
        }
        else {
            element = element.replace("Agora melhorou, né?", "Miguel Zanona Krasner");
        }
    }