/* 3rd party libraries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
// import { MdButtonModule } from '@angular/material';

/* our own custom components */

@NgModule({
  imports: [
    /* angular stuff */
    CommonModule,
    FormsModule,

    /* 3rd party components */
    // MdButtonModule,
  ],
  declarations: [
  ],
  exports: [
    /* angular stuff */
    CommonModule,
    FormsModule,

    /* 3rd party components */
    // MdButtonModule,

    /* our own custom components */
    // SomeCustomComponent
  ]
})
export class SharedModule { }
