import {AxiosInstance} from 'axios';
import {NavigateOptions, To} from 'react-router-dom';

interface IThunkExtraArg {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions) => void
}

export default IThunkExtraArg;
