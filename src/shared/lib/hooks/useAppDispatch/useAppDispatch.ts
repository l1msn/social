import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/app/providers/StoreProvider/config/store';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
