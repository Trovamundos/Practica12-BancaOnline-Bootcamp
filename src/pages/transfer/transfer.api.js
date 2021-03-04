import Axios from 'axios';

const urlAccountList = `${process.env.BASE_API_URL}/account-list`;
const urlTransfer = `${process.env.BASE_API_URL}/transfer`;

export const getAccountList = () => Axios.get(urlAccountList)
    .then(response => {
        return response.data;
});

export const insertTransfer = transfer => Axios.post(urlTransfer, transfer)
    .then(({ data }) => data);