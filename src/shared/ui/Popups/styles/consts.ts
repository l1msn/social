import {DropDownDirection} from '../../../types/ui';
import cls from './popup.module.scss';

const mapDirectionClass: Record<DropDownDirection, string> = {
    'bottom left': cls.optionsBottomLeft,
    'bottom right': cls.optionsBottomRight,
    'top right': cls.optionsTopRight,
    'top left': cls.optionsTopLeft,
};

export default mapDirectionClass;
