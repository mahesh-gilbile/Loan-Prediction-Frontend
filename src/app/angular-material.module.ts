import { NgModule } from "@angular/core";

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
    imports : [
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatProgressSpinnerModule
    ],
    exports : [
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatProgressSpinnerModule
    ]
})

export class AngularMaterialModule {}