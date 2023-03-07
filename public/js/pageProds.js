// Esta funcion se utiliza en el listado de productos y en el administrador de usuarios nos permite ver diferentes cantidades de items para no tener una contaminacion visual gigante y que la pagina no sea interminable en backscroll
Paginador = function(divPaginador, tabla)
{
    // Aca creamos las tablas donde se enceuntrasn los botones y definimos la pagina en la que iniciamos y la cantidad de items que queremos mostrar 
    this.miDiv = divPaginador;   
    this.tabla = tabla;       
    this.tamPagina = 8;
    this.pagActual = 1;         
    this.paginas = Math.floor((this.tabla.rows.length - 1) / this.tamPagina); 
 
    // Esta funcion implementa la logica que utilizamos para cambiar de pagina 
    this.SetPagina = function(num)
    {
        if (num < 0 || num > this.paginas)
            return;
 
        this.pagActual = num;
        let min = 1 + (this.pagActual - 1) * this.tamPagina;
        let max = min + this.tamPagina - 1;
 
        for(let i = 1; i < this.tabla.rows.length; i++)
        {
            if (i < min || i > max)
                this.tabla.rows[i].style.display = 'none';
            else
                this.tabla.rows[i].style.display = '';
        }
        this.miDiv.firstChild.rows[0].cells[1].innerHTML = this.pagActual;
    }
 
    // Aca otorgamos estilos y hacemos que las paginas cambien restandole 1 o sumandole segun corresponda a donde queramos llegar 
    this.Mostrar = function()
    {
        let tblPaginador = document.createElement('table');
        let fil = tblPaginador.insertRow(tblPaginador.rows.length);
 
        let ant = fil.insertCell(fil.cells.length);
        ant.innerHTML = 'Anterior';
        ant.className = 'paginadorStyle'; 
        let self = this;
        ant.onclick = function()
        {
            if (self.pagActual == 1)
                return;
            self.SetPagina(self.pagActual - 1);
        }
 
        let num = fil.insertCell(fil.cells.length);
        num.innerHTML = ''; 
        num.className = 'paginadorStyle';
 
        let sig = fil.insertCell(fil.cells.length);
        sig.innerHTML = 'Siguiente';
        sig.className = 'paginadorStyle';
        sig.onclick = function()
        {
            if (self.pagActual == self.paginas)
                return;
            self.SetPagina(self.pagActual + 1);
        }
 
        
        this.miDiv.appendChild(tblPaginador);
 
    
        if (this.tabla.rows.length - 1 > this.paginas * this.tamPagina)
            this.paginas = this.paginas + 1;
 
        this.SetPagina(this.pagActual);
    }
}
    // Estees el elemento que utlizamos para renderizar nuestros botones en la pagina 
const p = new Paginador(
    document.getElementById('paginador'),
    document.getElementById('tblDatos'),
    4
);
p.Mostrar();