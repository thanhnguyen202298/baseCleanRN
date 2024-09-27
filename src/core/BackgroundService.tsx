import { useEffect } from 'react';
import BackgroundService from 'react-native-background-actions';
import { sleep } from './AsyncCreator';
import useDBStore from '../data/store';
import moment from 'moment';

const jobOptions = {
    taskName: 'job name',
    taskTitle: 'title',
    taskDesc: 'description',
    taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
    },
    color: '#ff00ff',
    linkingURI: 'yourScheme://chat/jane', // See Deep Linking for more info
    parameters: {
        delay: 1000,
    },
};

async function startAJobBackground(jobFunc: () => any, options: any = jobOptions) {
    await BackgroundService.start(jobFunc, options)
    //create notification for android 12 upto
    await BackgroundService.updateNotification({ taskDesc: options.taskDesc })
}

export function useRunBGTest() {
    
    const { taskRunning, setTaskRunning } = useDBStore();
    const { taskName }= jobOptions;
    if(taskRunning.includes(taskName))return;

    const newTask = taskRunning.concat([taskName])
    setTaskRunning(newTask)

    return useEffect(() => {
        startAJobBackground(async () => {
            while (true) {
                await sleep(200)
                console.log(`fetch in background ${Date.now()}`)
            }

        })
    }, [])
}