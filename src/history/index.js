export const addToHistoryN = n => (value, old) => [value, ...old.filter(h => h !== value).slice(0, n - 1)]

export const addToHistory = addToHistoryN(10)