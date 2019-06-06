import { NgModule } from "@angular/core";
import { ModeloDerComponent } from './modelo-der.component';
import { RouterModule, Routes, Router } from '@angular/router';

const ROUTES: Routes = [
    { path: '', component: ModeloDerComponent }
]

@NgModule({
    declarations: [ModeloDerComponent],
    imports: [RouterModule.forChild(ROUTES)]
})

export class ModeloDerModule { }