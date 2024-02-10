import { FormGroup } from "@angular/forms";

export function validPassword(password:string , conformpassword : string) {

    return(formGroup : FormGroup)=>{
        const pwd = formGroup.controls[password]
        const cpwd =formGroup.controls[conformpassword]

        if (pwd.value !== cpwd.value){
            cpwd.setErrors({validPassword : true})
        }else{
            cpwd.setErrors(null)
        }
    }
}