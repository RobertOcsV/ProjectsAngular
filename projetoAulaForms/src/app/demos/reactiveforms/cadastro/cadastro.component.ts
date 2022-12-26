import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario: Usuario;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // let nome = new FormControl('');
    //this.cadastroForm = new FormGroup
      this.cadastroForm = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      senha: [''],
      senhaConfirmacao: ['']
    })
  }

  adicionarUsuario(){    
    this.usuario =   Object.assign({}, this.usuario, this.cadastroForm.value)
  }
}
