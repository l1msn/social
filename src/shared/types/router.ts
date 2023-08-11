import {RouteProps} from 'react-router-dom';
import {UserRole} from '@/entities/User';

type AppRoutesProps = RouteProps & {
    authOnly?: boolean,
    roles?: UserRole[];
}
export type {AppRoutesProps};
