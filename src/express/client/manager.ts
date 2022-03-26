import axios from 'axios';
import { ServerError } from '../error';
import { IUser, INewUser } from './interface';

const getUsers = async (query: Partial<IUser>): Promise<IUser[]> => {
    return (await axios.get(`http://172.29.64.1:8000/api/users?firstName=${query.firstName}`)).data;
};

const createUser = async (user: INewUser): Promise<IUser> => {
    try {
        return (await axios.post('http://172.29.64.1:8000/api/users', user)).data;
    } catch (err: any) {
        throw new ServerError(err.response.data.code, err.response.data.message);
    }
};

const deleteUser = async (id: string) => {
    return (await axios.delete(`http://172.29.64.1:8000/api/users/${id}`)).data;
};

export { getUsers, createUser, deleteUser };
