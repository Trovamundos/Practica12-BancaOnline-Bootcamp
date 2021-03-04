import {
    getAccounts,
    getMovements,
} from './movements.api';
import { addMovementRows } from './movements.helpers';
import {
    mapMovementsFromApiToViewModel,
    mapAccountFromApiToViewModel
} from './movements.mappers';
import { history } from '../../core/router';
import { onSetValues } from '../../common/helpers';
 
const params = history.getParams();
const isSpecificAccount = Boolean(params.id);

if (isSpecificAccount) {
    getAccounts(params.id).then(account => onSetValues(mapAccountFromApiToViewModel(account)));
    getMovements(params.id).then(movements => addMovementRows(mapMovementsFromApiToViewModel(movements)));
} else {
    getMovements().then(movements => addMovementRows(mapMovementsFromApiToViewModel(movements)));
};