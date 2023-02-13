import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';
import { BarServices, BarServicesMock } from './bar.service';
import {Component, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  providers: [
    { provide: BarServices, useClass: BarServicesMock } 
  ]
})
export class BarComponent implements OnInit {
  ConfigManual: BarUnidadeConfig;
  barBebida1: string;
  Config: BarUnidadeConfig;

  constructor(
    private barServices: BarServices,
    @Inject('ConfigManualUnidade') private ApiConfigManual: BarUnidadeConfig,
    @Inject(BAR_UNIDADE_CONFIG) private ApiConfig: BarUnidadeConfig
    ) {}

  ngOnInit(): void {
      this.barBebida1 = this.barServices.obterBebidas();
      this.ConfigManual = this.ApiConfigManual
      this.Config = this.ApiConfig 
  }

}