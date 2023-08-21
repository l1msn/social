import IFeatureFlags from '../types/featureFlags';

let featureFlags: IFeatureFlags;

function setFeatureFlags(newFeatureFlags?: IFeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

function getFeatureFlags(flag: keyof IFeatureFlags) {
    return featureFlags[flag];
}

export { setFeatureFlags, getFeatureFlags };
