// Mapea y transforma los datos del objeto.
const mapAccountFromApiToViewModel = (account) => {
    return {
        id: account.id,
        iban: account.iban,
        name: account.name,
        balance: `${account.balance} €`,
        lastTransaction: new Date(account.lastTransaction).toLocaleDateString(),
    };
};

// Nuevo array pero con el formato de ViewModel.
export const mapAccountListFromApiToViewModel = (accountList) => {
    return accountList.map(account => 
        mapAccountFromApiToViewModel(account));
};