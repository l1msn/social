import IFeatureFlags from '@/shared/types/IFeatureFlags';
import { getFeatureFlags } from './setGetFeatures';

interface IToggleFeaturesOptions<T> {
    name: keyof IFeatureFlags;
    on: () => T;
    off: () => T;
}

function toggleFeatures<T>({ off, on, name }: IToggleFeaturesOptions<T>) {
    return getFeatureFlags(name) ? on() : off();
}

export default toggleFeatures;
