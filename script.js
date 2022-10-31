// addEventListener= significa: adcione um observador de evento

// o primeiro parametro é o evento que eu quero é o keyup = é o evento quando aperto o botão e solto ele

// depois que executar o evento, no caso o keyup, eu vou executar uma função

document.body.addEventListener('keyup', (event) =>{

    // esse ".code" tem a função de mostrar qual tecla foi apertada
    // o ".tooLower case"  serve para transformar o texto em minúsculo

    playSound(event.code.toLowerCase()) // esse ".code" tem a função de mostrar qual tecla foi apertada   

});

//função para tocar o som

document.querySelector('.composer button').addEventListener('click', () =>{// vai adicionar um evento de clique
    let song = document.querySelector('#input').value; //vai selecionar o input e pegar o seu valor

    if(song != ""){ // se o song for diferente de vazio , tranforma em array

        let songArray = song.split(''); // esse split no vazio vai fazer  vai fazer com que cada letra vire um array, correspondendo a cada letra um item do array

        playComposition(songArray);

    }
})

function playSound(sound){

    let audioElement = document.querySelector(`#s_${sound}`) // temos que deixar em template string pois torna dinamico o código
    let keyElement = document.querySelector(`div[data-key ="${sound}"]`)
    

    if(audioElement){

        //corrigindo o bug do botão "s"(esse botão solta um som mais demorado por isso ele só aciona novamente o som apos finalizar ele por completo)
        audioElement.currentTime = 0; // esse current time vai fazer com que toda vez que eu dar play ele vai pro tempo zero do audio

        audioElement.play(); // se o "audioElement" foi encontrado, vai tocar o som
    }

    if(keyElement){  // se o "keyElement" foi encontrado, vai mudar a cor da borda amarela e texto

        keyElement.classList.add('active');

        setTimeout(() =>{

            keyElement.classList.remove('active') //ele vai remover a borda depois de 3 milesegundos

        },300);
    }

}

function playComposition(songArray){


    let wait = 0;

    for(let songItem of songArray){ //vou dar um loop no array

        setTimeout(()=>{ // para corrigir o bug em que todos ossons tocam ao mesmo tempo

            playSound(`key${songItem}`)
            }, wait );

        wait += 250; // a cada letra usada para fazer o som, sera adicionado 250 milesegundos, assim fa´ra com que os sons não sejam reproduzidos conjuntamente

    }

}


