import { buildSelector } from '@/shared/lib/store';
import { IStateSchema } from '@/app/providers/StoreProvider';
import IJsonSettings from '../types/IJsonSettings';

const defaultJsonSettings: IJsonSettings = {};

class JsonSelectors {
    static jsonSettings() {
        const [useJsonSettings, getJsonSettings] = buildSelector(
            (state: IStateSchema) =>
                state.user?.authData?.jsonSettings ?? defaultJsonSettings,
        );
        return { useJsonSettings, getJsonSettings };
    }
    static jsonSettingsByKey() {
        const [useJsonSettingsByKey, getJsonSettingsByKey] = buildSelector(
            (state: IStateSchema, key: keyof IJsonSettings) =>
                state.user?.authData?.jsonSettings?.[key] ??
                defaultJsonSettings,
        );
        return { useJsonSettingsByKey, getJsonSettingsByKey };
    }
}

export default JsonSelectors;
