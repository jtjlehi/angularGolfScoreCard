import {Pipe, PipeTransform} from '@angular/core';
import { NamesService } from './names.service';

@Pipe({
    name: 'nameCheck'
})
export class NameCheck implements PipeTransform {

    constructor(private namesService: NamesService) {}

    transform(value: string, id: string): string {
        const name = this.namesService.findNameById(id);
        return `${value} ${name.count}`;
    }
}
