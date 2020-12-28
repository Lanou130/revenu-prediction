import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { RevCalcSharedModule } from 'app/shared/shared.module';
import { RevCalcCoreModule } from 'app/core/core.module';
import { RevCalcAppRoutingModule } from './app-routing.module';
import { RevCalcHomeModule } from './home/home.module';
import { RevCalcEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    RevCalcSharedModule,
    RevCalcCoreModule,
    RevCalcHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    RevCalcEntityModule,
    RevCalcAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class RevCalcAppModule {}
