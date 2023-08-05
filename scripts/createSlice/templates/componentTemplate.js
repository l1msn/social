const interfaceConst = 'interface';

module.exports = (componentName) => `import classNames from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './${componentName}.module.scss';
import {memo} from 'react';

${interfaceConst} I${componentName}Props {
    className?: string;
}

const ${componentName} = memo((props: I${componentName}Props) => {
    const {className} = props;
    const {t} = useTranslation();

    return (
        <div className={classNames(cls.ArticleRecommendationsList, {}, [className])}>

        </div>
    );
});

export default ${componentName};`;
