import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
 imports:      [ MatButtonModule, MatCheckboxModule, MatToolbarModule, MatFormFieldModule, MatInputModule ],
 exports:      [ MatButtonModule, MatCheckboxModule, MatToolbarModule, MatFormFieldModule, MatInputModule ]
})
export class SharedModule { }