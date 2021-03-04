const mapMovementFromApiToViewModel = (movement) => {
    return {
        ...movement,
        amount: `${movement.amount} €`,
        balance: `${movement.balance} €`,
        transaction: new Date(movement.transaction).toLocaleDateString(),
        realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
    };
};  

export const mapAccountFromApiToViewModel = account => {
    return {
        balance: `${account.balance}€`,
        iban: account.iban,
        alias: account.name,
    };
};

export const mapMovementsFromApiToViewModel = (movements) => {
    return movements.map(movement => mapMovementFromApiToViewModel(movement));
};