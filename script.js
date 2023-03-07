'use strict';

let mojBroj = Math.trunc(Math.random()*20)+1;
let rezultat = 20;
let najboljiRezultat=0;

const ispisiPoruku= function(poruka){
    document.querySelector('.poruka').textContent= poruka;
    
}

document.querySelector('.check').addEventListener('click',function(){
    const pogodi=Number(document.querySelector('.pogodi').value);

    if(!pogodi) {
      ispisiPoruku('Nema broja');
        //kada nema inputa
    }else if(pogodi===mojBroj){
        ispisiPoruku("Tacan broj!!!");
        document.querySelector('body').style.backgroundColor="#60b347";
        document.querySelector('.broj').textContent = mojBroj;

        document.querySelector('.broj').style.width = '30rem';

        if(rezultat > najboljiRezultat){
            najboljiRezultat= rezultat;
            document.querySelector('.najboljiRezultat').textContent=najboljiRezultat;
        }    
        //kada predjes igricu
    
    
    //kad je pogadjanje razlicito
    }else if (pogodi!==mojBroj){
        if(rezultat>1){
            ispisiPoruku(pogodi > mojBroj ? 'Previsok broj!':'Prenizak broj')
            rezultat--;
            document.querySelector('.rezultat').textContent = rezultat;
        }else{
            ispisiPoruku('Izgubili ste!')
            document.querySelector('.rezultat').textContent = 0;
        }
    } 
});

document.querySelector('.ponovi').addEventListener("click",function() {
    rezultat=20;
    mojBroj = Math.trunc(Math.random()*20)+1;
    ispisiPoruku('Kreni sa pogadjanjem...');
    document.querySelector('.rezultat').textContent = rezultat;
    document.querySelector('.broj').textContent = '?';
    document.querySelector('.pogodi').value = '';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.broj').style.width= '15rem';

})