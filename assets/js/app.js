$(document).ready(function(){


    const nombre= prompt("Ingrese su nombre");
    const apellido = prompt("Ingrese su apellido");
    const carrera = prompt("Ingrese su carrera");
    const asignatura1=prompt("Ingrese la Primera asignatura");
    const notasAsignatura1=[];
    const notasAsignatura2=[];
    const notasAsignatura3=[];

    for (let i = 1; i<=3; i++) {
        let nota = prompt(`Ingrese la nota numero ${i} de la asignatura ${asignatura1}`)
        notasAsignatura1.push(parseFloat(nota));        
    }
    const asignatura2=prompt("Ingrese la Segunda asignatura");
    for (let i = 1; i<=3; i++) {
        let nota = prompt(`Ingrese la nota numero ${i} de la asignatura ${asignatura2}`)
        notasAsignatura2.push(parseFloat(nota));                
    }
    const asignatura3=prompt("Ingrese la Tercera asignatura");
    for (let i = 1; i<=2; i++) {
        let nota = prompt(`Ingrese la nota numero ${i} de la asignatura ${asignatura3}`)
        notasAsignatura3.push(parseFloat(nota));                
    }
    const notaAprobacion=prompt("Ingrese nota de aprobación minima");
    parseFloat(notaAprobacion);


    const addHtml=(etiqueta,classesBT,contenido)=>{
        const container = document.getElementById('container');
        container.innerHTML+=`<${etiqueta} class="${classesBT}">${contenido}</${etiqueta}>`
    }

    //PROMEDIOS

    const sumAsig1=notasAsignatura1.reduce((previous,current)=>current+=previous);
    const promAsig1=sumAsig1/notasAsignatura1.length;

    const sumAsig2=notasAsignatura2.reduce((previous,current)=>current+=previous);
    const promAsig2=sumAsig2/notasAsignatura2.length;

    //NOTA REQUERIDA PARA APROBAR
    const ultimaNota=(3*notaAprobacion)-(notasAsignatura3[0]+notasAsignatura3[1]);
    console.log(ultimaNota);


    //TITUTLO
    addHtml('h1','my-4','Notas Finales')

    //NOMBRE Y CARRERA
    container.innerHTML+=
    `<div class="col-12">
        <table class="table table-borderless">
            <tbody>
                <tr>
                    <th scope="row">Nombre: </th>
                    <td>${nombre} ${apellido}</td>
                </tr>
                <tr>
                    <th scope="row">Carrera: </th>
                    <td>${carrera}</td>
                </tr>
            </tbody>
        </table>
    </div>`

    //TABLA PRINCIPAL
    container.innerHTML+=`
    <table class="table">
    <thead>
        <tr class="table-dark">
            <th scope="col">Asignatura</th>
            <th scope="col">Nota 1</th>
            <th scope="col">Nota 2</th>
            <th scope="col">Nota 3</th>
            <th scope="col">Promedio</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">${asignatura1}</th>
            <td>${notasAsignatura1[0]}</td>
            <td>${notasAsignatura1[1]}</td>
            <td>${notasAsignatura1[2]}</td>
            <td>${promAsig1}</td>
        </tr>
        <tr>
            <th scope="row">${asignatura2}</th>
            <td>${notasAsignatura2[0]}</td>
            <td>${notasAsignatura2[1]}</td>
            <td>${notasAsignatura2[2]}</td>
            <td>${promAsig2}</td>
        </tr>
        <tr>
            <th scope="row">${asignatura3}</th>
            <td>${notasAsignatura3[0]}</td>
            <td>${notasAsignatura3[1]}</td>
            <td>-</td>
            <td>-</td>
        </tr>
    </tbody>
</table>
`

container.innerHTML+=
`
<div>
    <p>Para aprobar la Asignatura ${asignatura3} con la nota mínima ingresada (${notaAprobacion}) necesita obtener una nota mayor o igual a ${ultimaNota} en la tercera nota</p>
</div>
`

});






