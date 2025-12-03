function inserirTitulo()
{
    let h1 = document.getElementById("titulo");
    let texto = document.getElementById("txt-titulo").value;
    h1.innerText = texto;
    h1.style.color = "blue";

}