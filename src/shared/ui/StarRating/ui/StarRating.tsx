import React, { JSX, memo, useState } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import StarIcon from '@/shared/assets/icons/star-icon.svg';
import Icon from '../../Icon';

interface IStarRatingProps {
    className?: string;
    onSelect?: (starCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars: number[] = [1, 2, 3, 4, 5];

const StarRating: React.FC<IStarRatingProps> = memo(
    (props: IStarRatingProps): JSX.Element => {
        const { className, selectedStars = 0, onSelect, size = 50 } = props;

        const [currentStarsCount, setCurrentStarsCount] =
            useState<number>(selectedStars);
        const [isSelected, setIsSelected] = useState<boolean>(
            Boolean(selectedStars),
        );

        function onHover(starsCount: number) {
            return () => {
                if (!isSelected) {
                    setCurrentStarsCount(starsCount);
                }
            };
        }

        function onLeave() {
            if (!isSelected) {
                setCurrentStarsCount(0);
            }
        }

        function onClick(starsCount: number) {
            return () => {
                if (!isSelected) {
                    onSelect?.(starsCount);
                    setCurrentStarsCount(starsCount);
                    setIsSelected(true);
                }
            };
        }

        return (
            <div className={classNames(cls.starRating, {}, [className])}>
                {stars.map((starNumber) => (
                    <Icon
                        data-testid={'StarRating.' + starNumber}
                        data-selected={currentStarsCount >= starNumber}
                        key={starNumber}
                        Svg={StarIcon}
                        className={classNames(
                            cls.starIcon,
                            {
                                [cls.selected]: isSelected,
                            },
                            [
                                currentStarsCount >= starNumber
                                    ? cls.hovered
                                    : cls.normal,
                            ],
                        )}
                        width={size}
                        height={size}
                        onMouseLeave={onLeave}
                        onMouseEnter={onHover(starNumber)}
                        onClick={onClick(starNumber)}
                    />
                ))}
            </div>
        );
    },
);

export default StarRating;
