import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { Recepiente } from 'src/app/model/recepiente';

@Injectable()
export class RecipienteService {

    private lista: Recepiente[] = [];

    constructor() {
        this.lista = [
            {
                nome: 'Jara',
                litro: 2,
            },
            {
                nome: 'Copo Americano',
                litro: 0.19,
            }
        ];
    }

    findAll(): Observable<Recepiente[]> {
        return observableOf(this.lista);
    }
}
