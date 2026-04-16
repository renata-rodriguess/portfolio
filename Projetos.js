import React from 'react';
const meus projetos=[
{
nome:"Portfolio,
descricao:" Site que mostra meus sites e fala um pouco sobre mim"
}
];
function Projetos (){
return(
<section>
<h2>Meus Projetos</h2>
<div className="container">
{meus projetos.map((projetos,
índice)=>(
<div className="card">
<h3>{projeto.nome}</h3>
<p>{projetos.descricao}</p>
</div>
))}
</div>
</section>
);
}
export default Projetos;
