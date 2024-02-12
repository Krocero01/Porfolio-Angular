import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./componentes/nav/nav.component";
import { EncabezadoComponent } from "./componentes/encabezado/encabezado.component";
import { AcercaDeComponent } from "./componentes/acerca-de/acerca-de.component";
import { ExperienciaComponent } from "./componentes/experiencia/experiencia.component";
import { EducacionComponent } from "./componentes/educacion/educacion.component";
import { SkillsComponent } from "./componentes/skills/skills.component";
import { ProyectosComponent } from "./componentes/proyectos/proyectos.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavComponent, EncabezadoComponent, AcercaDeComponent, ExperienciaComponent, EducacionComponent, SkillsComponent, ProyectosComponent]
})
export class AppComponent {
  title = 'Porfolio-Angular';
}
