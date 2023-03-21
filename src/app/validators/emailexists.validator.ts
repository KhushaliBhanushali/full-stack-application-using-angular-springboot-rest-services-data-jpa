import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { map, Observable } from "rxjs";
import { UsersService } from "../services/users.service";

export class EmailExistsValidator{
    static validate(userService: UsersService): AsyncValidatorFn{
        return (control: AbstractControl): Observable<ValidationErrors | null> =>{
            return userService.checkIfEmailExist(control.value).pipe(
                map((result:boolean) => result ? {emailAlreadyExists: true}: null)
            )
        }
    }
}