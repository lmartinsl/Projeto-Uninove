import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { RestauranteDetalheComponent } from './restaurante-detalhe/restaurante-detalhe.component';
import { MenuComponent } from './restaurante-detalhe/menu/menu.component';
import { ReviewsComponent } from './restaurante-detalhe/reviews/reviews.component';
//import { OrderComponent } from './order/order.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';

export const ROUTES: Routes = [

    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'restaurantes', component: RestaurantesComponent },
    //indicando parâmetros --> :nomeDoParâmetro
    {
        path: 'restaurantes/:id', component: RestauranteDetalheComponent,
        //rotas filha para 'avaliações (reviews) e menu'
        children: [
            //redirecionado para o menu caso a rota seja 'null'
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent }
        ]
    },
    { path: 'order', loadChildren: './order/order.module#OrderModule' },
    { path: 'order-sumary', component: OrderSumaryComponent },
    //O conteúdo 'about' somente é carregado caso a rota do mesmo seja indicada.  
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'modeloDer', loadChildren: './modelo-der/modelo-der.module#ModeloDerModule' }


]
