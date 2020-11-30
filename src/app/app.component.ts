import { Component } from '@angular/core';
import { Empleado } from './models/empleado';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  EmpleadoArray: Empleado[]=[
    {id: 1, name: "Maria", country:"Panama"},
    {id: 2, name: "Jose", country:"Usa"},
    {id: 3, name: "Alex", country:"Colombia"}
  ];

  selectedEmpleado: Empleado = new Empleado();
  
  openForEdit(e: Empleado){
    this.selectedEmpleado = e;    
  }

  addOrEdit(){
    if(this.selectedEmpleado.id === 0){
      this.selectedEmpleado.id = this.EmpleadoArray.length + 1;
      this.EmpleadoArray.push(this.selectedEmpleado);
    }

    
    this.selectedEmpleado = new Empleado();
  }

 delete(){
    if(confirm('Seguro de que desea eliminarlo?')){
      this.EmpleadoArray = this.EmpleadoArray.filter(x => x != this.selectedEmpleado);
      this.selectedEmpleado = new Empleado();
    }

   //this.EmpleadoArray = this.EmpleadoArray.filter(x => x != this.selectedEmpleado);
   //this.selectedEmpleado = new Empleado();
 }

}
