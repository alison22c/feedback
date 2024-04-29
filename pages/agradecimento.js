function pegarnota(){
    let nota= localStorage.getItem(nota)
    let pegarnota=document.querySelector(".paragrafo_nota")
    paragrafonota.innerHTML=`você selecionou ${nota} de 5`
}
pegarnota()