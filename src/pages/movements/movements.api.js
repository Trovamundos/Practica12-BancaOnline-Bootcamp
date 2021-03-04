import Axios from 'axios';

const urlMovements = `${process.env.BASE_API_URL}/movements`;
const urlAccounts = `${process.env.BASE_API_URL}/account-list`;

export const getMovements = (id) => Axios.get(urlMovements, { params: { accountId: id }})
.then(response => {
    return response.data;
});

export const getAccounts = (id) => Axios.get(`${urlAccounts}/${id}`)
.then(response => {
    return response.data;
});