import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interfaces';

@Pipe({
  name: 'imagenPipe'
})
export class ImagenPipePipe implements PipeTransform {

  transform(value: Heroe): string {
    if( !value.id ){
      return `assets/no-image.png`
    } else if( value.alt_img != undefined){
      return value.alt_img;
    }
    return `assets/heroes/${value.id}.jpg`
    
  }

}
