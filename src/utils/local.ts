export const set = (key: string, val: unknown): void => {
    return localStorage.setItem(key, JSON.stringify(val))
}

export const get = (key: string): void | null => {
    const data = localStorage.getItem(key)
    if (data) JSON.parse(data)
    else return null
}

export const clear = (key: string | null): void => {
    if (key) localStorage.removeItem(key)
    else localStorage.clear()
}

export const sessionSet = (key: string, val: unknown): void => {
    return sessionStorage.setItem(key, JSON.stringify(val))
}

export const sessionGet = (key: string): void | null => {
    const data = sessionStorage.getItem(key)
    if (data) JSON.parse(data)
    else return null
}

export const sessionClear = (key: string | null): void => {
    if (key) sessionStorage.removeItem(key)
    else sessionStorage.clear()
}
