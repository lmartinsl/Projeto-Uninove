import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { RadioOption } from './radio-option.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[]

  value: any

  onChange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value;
    this.onChange(this.value);
  }

  /**
 * Write a new value to the element.
 */
  writeValue(obj: any): void {
    //método que é chamado pela diretiva quando se quer passar um valor para o componente
    this.value = obj;
  }
  /**
   * Set the function to be called when the control receives a change event.
   */
  registerOnChange(fn: any): void {
    //é passada uma função que é necessário chamar a funçaõ sempre que o valor interno do componente for alterado
    this.onChange = fn
  }
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn: any): void {
    //utiliza-se para registro da autenticação do usuário
  }
  /**
   * This function is called when the control status changes to or from "DISABLED".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState?(isDisabled: boolean): void {

  }

}
