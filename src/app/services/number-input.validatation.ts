import { AbstractControl, ValidatorFn } from '@angular/forms';

export class NumberInputValidator {
    static checkLimit(min: number, max: number): ValidatorFn {
        return (controller: AbstractControl): { [key: string]: boolean } | null => {
            if (controller.value && ( controller.value < min || controller.value > max)) {
                return { 'range': true };
            }
            return null;
        };
    }
}
