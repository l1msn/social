import React, { JSX } from 'react';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import { Card } from '@/shared/ui/redesigned/Card';

interface IDetailsContainerProps {
    className?: string;
}

const DetailsContainer: React.FC<IDetailsContainerProps> = ({
    className,
}: IDetailsContainerProps): JSX.Element => {
    const { id } = useParams<string>();
    return (
        <Card max border={'round'} className={className}
padding={'24'}>
            <ArticleDetails id={id} />
        </Card>
    );
};

export default DetailsContainer;
