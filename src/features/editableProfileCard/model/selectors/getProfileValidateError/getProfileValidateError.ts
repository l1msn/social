import {IStateSchema} from '@/app/providers/StoreProvider';
import {ValidateProfileError} from '../../types/editableProfileCardSchema';

const getProfileValidateError = (state: IStateSchema) => state?.profile?.validateError || [] as ValidateProfileError[];

export default getProfileValidateError;
