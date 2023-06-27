import React, {JSX} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface ILoaderProps {
    className?: string
}

const Loader: React.FC<ILoaderProps> = ({className}: ILoaderProps): JSX.Element => {
    return (
        <div className={classNames('lds-ellipsis', {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;
