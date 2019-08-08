import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder) {

    this.loginForm = new FormGroup({
      'identificacion': new FormControl('', [
        Validators.required]),
      'nombre': new FormControl('', [
        Validators.required]),
      'apellido': new FormControl('', [
        Validators.required]),
      'direccion': new FormControl('', [
        Validators.required])
    })
  }

  ngOnInit() {
  }

  send() {
    console.log(this.loginForm.value);
  }

}