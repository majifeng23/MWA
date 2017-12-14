import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {forbiddenNameValidator} from "./validators/forbidden-name.validator";

@Component({
    selector: 'signup-form',
    templateUrl: 'signup-form.component.html',
    styles: []
})
export class SignupFormComponent {
    signupForm = new FormGroup({
        username: new FormControl('', [Validators.required, forbiddenNameValidator(/something/)]),
        password: new FormControl('', [Validators.required, Validators.minLength(3)])
    });

    signup() {
        console.log(this.signupForm.value);
    }
}
