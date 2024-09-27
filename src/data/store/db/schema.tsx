interface DBState {
  //props
  user: UserInfo | {};
  dataState: any | {};
  permissions: Map<string,boolean> | {};
  configs: Config| {};

  taskRunning: string[];

  //dispatchers
  setUser: ((user: UserInfo) => void),
  setData: ((data:any)=> void),
  setPermissions: ((permissions: Map<string, boolean>)=> void);
  setConfigs: ((config:Config)=> void),

  resetData: (()=>void),
  resetConfig: (()=>void),
  setTaskRunning: ((d: string[])=>void)
}

interface UIState {
  isLoading: boolean;
  isOnPopup: boolean;
  isOnline: boolean;
  isAppActive: boolean;

  setIsLoading: ((isLoading:boolean)=> void);
  setIsOnPopup: ((isOnPopup: boolean)=> void),
}

interface IStore extends UIState, DBState{}

interface Config{
  locale: string;
  timeZone: string;
  language: string;
  enabledNotify: boolean;
  currency: string;
}
interface UserInfo {
    name: string; age: number; birth: string
}

