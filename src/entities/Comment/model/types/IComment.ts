import {IUser} from '@/entities/User';

interface IComment {
    id: string | number,
    user: IUser,
    text: string;
}

export default IComment;
