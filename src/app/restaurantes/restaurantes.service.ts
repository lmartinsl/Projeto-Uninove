import { Restaurante } from "./restaurante/restaurante.module";
import { MEAT_API } from '../app.api';
import { Injectable } from '@angular/core';
import { Http, Jsonp } from "@angular/http";
import { ErrorHandler } from '../app.error-handler';
import { MenuItem } from './../restaurante-detalhe/item-menu/menu-item.module';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { map } from "rxjs/operator/map";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RestaurantesService {

    constructor(private http: Http) { }

    restaurantes(): Observable<Restaurante[]> {
        return this.http.get(`${MEAT_API}/restaurantes`)
            .map(response => response.json())
            /* Tratamento básico de erros */
            .catch(ErrorHandler.handlerError)
    }

    //método para para retornar restaurante por id
    restauranteById(id: string): Observable<Restaurante> {
        return this.http.get(`${MEAT_API}/restaurantes/${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handlerError)
    }

    //método para retornar as avaliações de cada restaurante
    reviewsRestaurante(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/reviews?restaurantId=${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handlerError)
    }

    //particularidade dos itens do menu
    menuRestaurante(id: string): Observable<MenuItem[]> {
        return this.http.get(`${MEAT_API}/menu?restaurantId=${id}`)
            .map(response => response.json())
            .catch(ErrorHandler.handlerError)
    }

}