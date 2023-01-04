import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // let nome = new FormControl('');
    //this.cadastroForm = new FormGroup
      this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: [''] [Validators.required, NgBrazilValidators.cpf],
      email: ['', [Validators.required, Validators.email]],
      senha: [''],
      senhaConfirmacao: ['']
    })
  }

  adicionarUsuario(){    
    if(this.cadastroForm.dirty && this.cadastroForm.valid){
      this.usuario =   Object.assign({}, this.usuario, this.cadastroForm.value)
      this.formResult = JSON.stringify(this.cadastroForm.value);
    }else{
      this.formResult = "Não submeteu!"
    }
    
  }
}
