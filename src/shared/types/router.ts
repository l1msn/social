import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line l1msn-plugin/layer-imports
import { UserRole } from '@/entities/User';

type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
export type { AppRoutesProps };
