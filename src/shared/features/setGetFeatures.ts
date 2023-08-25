import IFeatureFlags from '../types/IFeatureFlags';

let featureFlags: IFeatureFlags = {
    isAppRedesigned: true,
};

function setFeatureFlags(newFeatureFlags?: IFeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

function getFeatureFlags(flag: keyof IFeatureFlags) {
    return featureFlags[flag];
}

export { setFeatureFlags, getFeatureFlags };
