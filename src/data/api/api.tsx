import Async, { sleep } from "../../utils/AsyncCreator"

export const MockApi = {
    async get() {
        let a: number[] = [];
        let v = Math.random() * 10
        for (var key = 0; key < v; key++) {
            await sleep(200)
            a.push(key);
        }
        return { data: a, status: true };
    },

    async post() {
        await sleep(1000);
        return { status: true };
    }
}