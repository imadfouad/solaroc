import { AccueileComponent } from './components/accueile/accueile.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule , Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProposComponent } from './components/propos/propos.component';
import { ContactComponent } from './components/contact/contact.component';
import { PanneauxComponent } from './components/panneaux/panneaux.component';
import { ChauffeComponent } from './components/chauffe/chauffe.component';
import { PompesComponent } from './components/pompes/pompes.component';

const routes: Routes = [
  {path:  "" , component:AccueileComponent},
  {path:  "about" , component:ProposComponent},
  {path:  "projets" , component:PanneauxComponent},
  {path:  "chauffe-eaux" , component:ChauffeComponent},
  {path:  "services" , component:PompesComponent},
  {path:  "contact" , component:ContactComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    CarouselComponent,
    ServicesComponent,
    FooterComponent,
    AccueileComponent,
    ProposComponent,
    ContactComponent,
    PanneauxComponent,
    ChauffeComponent,
    PompesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
