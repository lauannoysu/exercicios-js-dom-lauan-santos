function mudarForma()
{
    let div = document.getElementById("forma");
    let btn = document.getElementById("btn-forma")
    if(btn.innerText ==="mudar forma")
    {
         div.style.borderRadius = "0%";
         btn.innerText = "Retornar a forma original"
    }else{
         div.style.borderRadius = "50%";
        btn.innerText ="mudar forma"
    }
}