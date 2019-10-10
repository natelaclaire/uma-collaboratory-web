import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
 imports:      [ MatButtonModule, MatCheckboxModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelectModule ],
 exports:      [ MatButtonModule, MatCheckboxModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatSelectModule ]
})
export class SharedModule { }