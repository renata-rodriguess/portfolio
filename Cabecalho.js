import React from 'react';
function Cabecalho (){
return(
<div>
  <header>
    <div class="container">
      <h1>Meu Portfólio</h1>
      <nav>
        <ul>
          <li><a
href="#sobre" >Sobre Mim</a></li>
          <li><a
href="#projetos">Meus Projetos</a></li>
        </ul>
      </nav>
    </div>
  </header>
<main>
  <section id="sobre" 
  class="container">
    <h2>Sobre Mim</h2>
    <div class="conteudo-sobre">
      <img src="foto.jpg" alt="Minha foto" class="foto-perfil">
<p>Olá,Meu nome é Renata e eu sou estudante de sistemas para internet.</p>
    </div>
  </section>
  <section id="projetos"
class="container">
    <h2>Meus Projetos</h2>
    <div id=" lista-projetos" class="grid-projetos">
    <div class="projeto-card">
    <h3>Calculadora</h3>
    <p>Uma calculadora funcional feita com HTML,CSS e JavaScript.</p>
    </div>
  </div>
  </section>
</main>
<footer>
  <p>&copy; 2026- Meu Portfólio Profissional</p>
</footer>
<script src="script.js"></script>
</div>
);
}
export default Cabecalho;
