/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';

import { MatToolbarModule } from '@angular/material';

/* our own custom components */

@NgModule({
  imports: [
    /* angular stuff */
    CommonModule,
    FormsModule,

    /* 3rd party components */
    MatToolbarModule,
  ],
  declarations: [
  ],
  exports: [
    /* angular stuff */
    CommonModule,
    FormsModule,

    /* 3rd party components */
    MatToolbarModule,

    /* our own custom components */
    // SomeCustomComponent
  ]
})
export class SharedModule { }
