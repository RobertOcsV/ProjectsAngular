import { ValidationMessages, GenericValidator, DisplayMessage } from './../../utils/generic-form-validation';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { ContaService } from '../services/conta.service';
import { CustomValidators } from 'ngx-custom-validators';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'

})
export class CadastroComponent implements OnInit, AfterViewInit {

  errors: any[] = [];
  cadastroForm: FormGroup;
  usuario: Usuario;

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage;

  constructor(private fb: FormBuilder,
              private contaService: ContaService)
     {
      this.validationMessages = {
        email: {
          required: 'Informe o e-mail',
          email: 'Email inválido'
        },
        password: {
          required: 'Informe a senha',
          rangeLength: 'A senha deve possuir entre 6 e 15 caracteres'
        },
        confirmPassword: {
          required: 'Informe a senha novamente',
          rangeLength: 'A senha deve possuir entre 6 e 15 caracteres',
          equalTo: 'As senhas não conferem'
        }
      };

     }
  ngOnInit(): void {

    let senha = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
    let senhaConfirm = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(senha)]);


    this.cadastroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: senha,
      confirmPassword: senhaConfirm
    });
  }

  ngAfterViewInit(): void {

  }

  adicionarConta(){
    if(this.cadastroForm.dirty && this.cadastroForm.valid){
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value );

      this.contaService.cadastrarUsuario(this.usuario);
    }
  }


}
