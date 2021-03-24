import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interfaces';

@Pipe({
  name: 'imagenPipe'
})
export class ImagenPipePipe implements PipeTransform {

  transform(value: Heroe): string {
    if(value.alt_img == undefined){
      return `assets/no-image.png`  
    }
    return `assets/heroes/${value.id}.jpg`
  }

}
