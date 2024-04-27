import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'app-dbz-add-character',
    templateUrl: './add-character.component.html'
})

export class AddCharacterComponent {

    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    public character: Character = {
        name: '',
        power: 0
    }

    emitCharacter(): void {
        // Validate.
        if (this.character.name.length < 1) return;

        this.onNewCharacter.emit(this.character);
        
        this.resetCharacter();
    }

    resetCharacter(): void {
        this.character = {
            name: '',
            power: 0
        }
    }
}
