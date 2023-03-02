Paginador = function(divPaginador, tabla)
{
    this.miDiv = divPaginador;   
    this.tabla = tabla;       
    this.tamPagina = 5;
    this.pagActual = 1;         
    this.paginas = Math.floor((this.tabla.rows.length - 1) / this.tamPagina); 
 
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

const p = new Paginador(
    document.getElementById('paginador'),
    document.getElementById('tblDatos'),
    4
);
p.Mostrar();