import { 
    onUpdateField, 
    onSubmitForm, 
    onSetError, 
    onSetFormErrors 
} from '../../common/helpers';
import { isValidLogin } from './login.api';
import { formValidation } from './login.validations';
import {history, routes} from '../../core/router';

let login = {
    user: '',
    password: '',
};

// Guardo el usuario.
onUpdateField('user', event => {
    const value = event.target.value;
    //login.user = value;
    login = {
        ...login, 
        user: value
    };

    // Validar el usuario.
    formValidation.validateField('user', login.user)
    .then(result => {
        onSetError('user', result);
    });
});

// Guardo la contraseña.
onUpdateField('password', event => {
    const value = event.target.value;
    //login.password = value;
    login = {
        ...login,
        password: value
    };

    formValidation.validateField('password', login.password)
    .then(result => {
        onSetError('password', result);
    });
});

const onNavigate = (isValid) => {
    if(isValid) {
        history.push(routes.accountList);
    } else {
        alert('Usuario y/o contraseña no válidos');
    }
};

// Comprobar si es true o false la contraseña.
onSubmitForm('login-button', () => {
    // Setea todos los errores del formulario.
    formValidation.validateForm(login)
    .then(result => {
        // Pinta totos los errores del formulario.
        onSetFormErrors(result);
        if(result.succeeded) {
            // Si no hay ningun error vamos a servidor.
            isValidLogin(login).then(isValid => {
                onNavigate(isValid);
            }); 
        }
    });
});

