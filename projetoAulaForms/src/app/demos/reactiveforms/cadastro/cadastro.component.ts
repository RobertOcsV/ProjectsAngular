import { GenericValidator, ValidationMessages, DisplayMessage } from './generic-form-validation';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';
import { Usuario } from '../../models/usuario';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';
  MASKS = utilsBr.MASKS;

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage;

  constructor(private fb: FormBuilder) { 
    this.validationMessages = {
      nome: {
        required: 'O nome é requerido',
        minLength: 'O nome precisa ter no mínimo 2 caracteres',
        maxLength: 'O nome precisa ter no máximo 150 caracteres'
      },
      cpf: {
          required: 'Informe o CPF',
          cpf: 'CPF não existe'
      },
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      },
      senha: {
        required: 'Informe a senha',
        rangeLength: 'A senha deve possuir entre 6 a 15 caracteres'
      },
      senhaConfirmacao: {
        required: 'Informe a senha novamente',
        rangeLength: 'A senha deve possuir entre 6 a 15 caracteres',
        equalTo: 'As senha não conferem'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);

  }

  ngOnInit() {

    let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15])])
    let senhaConfirmacao = new FormControl('', [Validators.required, CustomValidators.rangeLength([6,15]), CustomValidators.equalTo(senha)])

    // let nome = new FormControl('');
    //this.cadastroForm = new FormGroup
      this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(150)]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      senha: senha,
      senhaConfirmacao: senhaConfirmacao
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
