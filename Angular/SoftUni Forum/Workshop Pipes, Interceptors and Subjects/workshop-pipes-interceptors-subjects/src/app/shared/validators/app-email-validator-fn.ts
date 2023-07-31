import { ValidatorFn } from "@angular/forms";

export function appIsEmailValid(domains: string[]): ValidatorFn {
    const domainsString = domains.join('|');
    const regExp = new RegExp(`^.{6,}@gmail\.(${domainsString})?`);
    return (control) => {
        return control.value === '' || regExp.test(control.value) 
                    ? null 
                    : { appIsEmailValid: true };
    };
}