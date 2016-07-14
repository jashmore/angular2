/**
 * Created by john on 14/07/2016.
 */
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'my-uppercase' })
export class MyUppercasePipe implements PipeTransform {
  transform(value: string) {
    return value.toUpperCase();
  }
}
