import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteComponent } from './restaurantes/restaurante/restaurante.component'
import { RestauranteDetalheComponent } from './restaurante-detalhe/restaurante-detalhe.component';
import { MenuComponent } from './restaurante-detalhe/menu/menu.component';
import { CarrinhoCompraComponent } from './restaurante-detalhe/carrinho-compra/carrinho-compra.component';
import { ItemMenuComponent } from './restaurante-detalhe/item-menu/item-menu.component';
import { ReviewsComponent } from './restaurante-detalhe/reviews/reviews.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantesComponent,
    RestauranteComponent,
    RestauranteDetalheComponent,
    MenuComponent,
    CarrinhoCompraComponent,
    ItemMenuComponent,
    ReviewsComponent,
    OrderSumaryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [
    {
      provide:
        LOCALE_ID, useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
