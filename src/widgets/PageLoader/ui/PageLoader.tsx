import React, {JSX, memo} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Loader from 'widgets/Loader';
import cls from './PageLoader.module.scss';

interface IPageLoaderProps {
    className?: string
}

const PageLoader: React.FC<IPageLoaderProps> = memo(({className}: IPageLoaderProps): JSX.Element => {
    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader/>
        </div>
    );
});

export default PageLoader;
