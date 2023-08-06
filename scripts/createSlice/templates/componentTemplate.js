const interfaceConst = 'interface';

module.exports = (componentName) => `import classNames from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './${componentName}.module.scss';
import React, {JSX, memo} from 'react';

${interfaceConst} I${componentName}Props {
    className?: string;
}

const ${componentName}: React.FC<I${componentName}Props> = memo((props: I${componentName}Props): JSX.Element => {
    const {className} = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.ArticleRecommendationsList, {}, [className])}>

        </div>
    );
});

export default ${componentName};`;
