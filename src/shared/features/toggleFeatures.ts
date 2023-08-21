import FeatureFlags from '@/shared/types/featureFlags';
import { getFeatureFlags } from './setGetFeatures';

interface IToggleFeaturesOptions<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

function toggleFeatures<T>({ off, on, name }: IToggleFeaturesOptions<T>) {
    return getFeatureFlags(name) ? on() : off();
}

export default toggleFeatures;
