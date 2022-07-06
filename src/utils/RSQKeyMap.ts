import { Key } from '../types/Key';

const stringifyKey = (key: Key): string => {
    return JSON.stringify(key);
};

export class RSQKeyMap<Value> {
    private values: Map<string, Value> = new Map();

    public get(key: Key): Value | undefined {
        const stringifiedKey = stringifyKey(key);
        return this.values.get(stringifiedKey);
    }

    public set(key: Key, value: Value) {
        const stringifiedKey = stringifyKey(key);
        this.values.set(stringifiedKey, value);
    }

    public has(key: Key): boolean {
        const stringifiedKey = stringifyKey(key);
        return this.values.has(stringifiedKey);
    }
}