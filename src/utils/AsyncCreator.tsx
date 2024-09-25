
export default function Async<Type>(f: () => Type) {
    return new Promise<Type>((resolve, reject) => {
        try {
            resolve(f())
        } catch (e) {
            reject(e)
        }
    })
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}