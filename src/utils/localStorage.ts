export const setLocalStorageItem = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorageItem = (key: string) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : null;
};

export const removeLocalStorageItem = (key: string) => {
  localStorage.removeItem(key);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
