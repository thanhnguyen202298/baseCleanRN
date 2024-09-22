import { sleep } from "../../utils/AsyncCreator"

export const MockApi = {
   async get(){
    let a: number[] = []
        for (var key = 0; key< 100;key++) {
            await sleep(200).then(()=> a.push(key));
        }
        return a;
    },

    async post(){
        await sleep(1000);
        return {status: true};
    }
}