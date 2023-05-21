//Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y
//añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let index = 0; index < alumns.length; index++) {
    const element = alumns[index];

    let aprobados = 0;
    aprobados = element.T1 ? aprobados + 1 : aprobados;
    aprobados = element.T2 ? aprobados + 1 : aprobados;
    aprobados = element.T3 ? aprobados + 1 : aprobados;

    element.estaAprobado = aprobados >= 2;

}
console.log(alumns)