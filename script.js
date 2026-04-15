const meusProjetos = [
  {
    titulo:"Calculadora",
  descricao:"Uma calculadora funcional feita com HTML, CSS e JavaScript."
   }
];
function carregarProjetos(){
  const lugar=
document. getElementById('lista-projetos');
if(lugar){
  lugar.innerHTML=`
  <div style="backgroud:white; padding:20px;margin:10px; border-radius:10px;">
  <h3>Calculadora</h3>
  <p>Uma calculadora funcional feita com HTML, CSS e JavaScript.</p>
  </div>
  `;
 }
}
window.onload= carregarProjetos;
