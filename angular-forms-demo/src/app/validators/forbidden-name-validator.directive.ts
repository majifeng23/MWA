import {Directive, Input} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, Validator} from "@angular/forms";
import {forbiddenNameValidator} from "./forbidden-name.validator";

@Directive({
    selector: '[forbiddenName]',
    providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
    @Input() forbiddenName: string;

    validate(control: AbstractControl): {[key: string]: any} {
        return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
            : null;
    }
}
//attach