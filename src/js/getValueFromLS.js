export function getValue (key, initValue) {
    const value = localStorage.getItem(key);
    if (value) {
        try {
            return JSON.parse(value) || "";
        } catch (err) {
            console.log('invalid value', err);
            localStorage.removeItem(key);
        }
    }
    return initValue;
};