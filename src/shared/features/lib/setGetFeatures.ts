import IFeatureFlags from '../../types/IFeatureFlags';

const defaultFeatures: IFeatureFlags = {
    isAppRedesigned: true,
};

let featureFlags: IFeatureFlags = {
    ...defaultFeatures,
};

function setFeatureFlags(newFeatureFlags?: IFeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

function getFeatureFlags(flag: keyof IFeatureFlags) {
    return featureFlags[flag];
}

function getAllFeatureFlags() {
    return featureFlags;
}

export { setFeatureFlags, getFeatureFlags, getAllFeatureFlags };
