import { Validators, createFormValidation } from '@lemoncode/fonk';
import { laterDate } from '@lemoncode/fonk-later-date-validator';

const dayValidator = ({ value }, month, year) => {
    
    // const succeeded = '';
    // switch (parseInt(month)) {        
    //     case 1: succeeded = parseInt(value) > 0 && parseInt(value) <= 31; break;      
    //     case 2: if (year % 4 == 0) {
    //         succeeded = parseInt(value) > 0 && parseInt(value) <= 29; 
    //         break;
    //     } else {
    //         succeeded = parseInt(value) > 0 && parseInt(value) <= 28;
    //         break;
    //     }
    //     case 3: succeeded = parseInt(value) > 0 && parseInt(value) <= 31; break;        
    //     case 4: succeeded = parseInt(value) > 0 && parseInt(value) <= 30; break;        
    //     case 5: succeeded = parseInt(value) > 0 && parseInt(value) <= 31; break;        
    //     case 6: succeeded = parseInt(value) > 0 && parseInt(value) <= 30; break;           
    //     case 7: succeeded = parseInt(value) > 0 && parseInt(value) <= 31; break;        
    //     case 8: succeeded = parseInt(value) > 0 && parseInt(value) <= 31; break;        
    //     case 9:succeeded = parseInt(value) > 0 && parseInt(value) <= 30; break;              
    //     case 10: succeeded = parseInt(value) > 0 && parseInt(value) <= 31; break;       
    //     case 11: succeeded = parseInt(value) > 0 && parseInt(value) <= 30; break;            
    //     case 12: succeeded = parseInt(value) > 0 && parseInt(value) <= 31; break;       
    // }

    const succeeded = parseInt(value) > 0 && parseInt(value) <= 31;

    return {
        succeeded,
        message: succeeded ? '' : 'Por favor, introduzca un número correcto',
    };
};

const monthValidator = ({ value }) => {
    const succeeded = parseInt(value) > 0 && parseInt(value) <= 12;

    return {
        succeeded,
        message: succeeded ? '' : 'Por favor, introduzca un número correcto',
    };
};

const yearValidator = ({ value }) => {
    const succeeded = parseInt(value) > 2021 && parseInt(value) < 2021 + 10;

    return {
        succeeded,
        message: succeeded ? '' : 'Por favor, introduzca un número correcto',
    };
};

const  validationSchema = {
    field: {
        iban: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /^[A-Z]{2}\d{2}((\s|\-)?\d{4}){5}$/ },
                message: 'Formato Iban no válido',
            },
        ],
        name: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        amount: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: Validators.pattern,
                customArgs: { pattern: /^\d+((.|,)\d{1,2})?$/ },
                message: 'Por favor, introduzca una cantidad válida',
            }
        ],
        concept: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
        ],
        day: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: dayValidator,
            }
        ],
        month: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            }, 
            {
                validator: monthValidator,
            }
        ],
        year: [
            {
                validator: Validators.required,
                message: 'Campo requerido'
            },
            {
                validator: yearValidator,
            }
        ],
        date: [
            {
                validator: laterDate.validator,
                customArgs: { parseStringToDateFn: value => new Date(value), date: new Date() },
                message: 'Por favor, revise que la fecha sea correcta'
            }
        ],
        email: [
            {
                validator: Validators.email,
                message: 'Email no válido',
            },
        ],
    },
};

export const formValidation = createFormValidation(validationSchema);