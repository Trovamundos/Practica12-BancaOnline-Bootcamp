import { getAccountList } from './account-list.api';
import { addAccountRows } from './account-list.helpers';
import { mapAccountListFromApiToViewModel } from './account-list.mappers';
import { onUpdateField } from '../../common/helpers';
import { history } from '../../core/router';

// Llamar a los datos.
getAccountList().then(accountList => {
    // Modificar lista.
    const viewModelAccountList = mapAccountListFromApiToViewModel(accountList);
    addAccountRows(viewModelAccountList);

    // Por cada cuenta navega a una ruta elegida.
    viewModelAccountList.forEach(account => {
        // Cuando cambia el valor del selec ejecuta la funcion de navegar.
        onUpdateField(`select-${account.id}`, (event) => {
            const route = event.target.value;
            history.push(route);
        });
    });
});

