import {Component} from "@angular/core";
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'tag',
    templateUrl: './tag.component.html'
})
export class TagComponent {
    tagForm = new FormGroup(
        {
            tags: new FormArray([])
        });

    get tags() {
        return this.tagForm.get('tags') as FormArray;
    }

    addTag(tag: HTMLInputElement) {
        this.tags.push(new FormControl(tag.value));
        tag.value = '';
    }

    removeTag(tag: FormControl) {
        const idx = this.tags.controls.indexOf(tag);
        this.tags.removeAt(idx);
    }
}
