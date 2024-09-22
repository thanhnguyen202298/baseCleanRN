interface DBState {
  //props
  user: UserInfo | undefined;
  data: any | undefined;
  permissions: Map<string,boolean> | undefined;
  configs: Config| undefined;

  //dispatchers
  setUser: ((user: UserInfo) => void)|null,
  setData: ((data:any)=> void)|null,
  setPermissions: ((permissions: Map<string, boolean>)=> void)|null;
  setConfigs: ((config:Config)=> void)|void,

  resetData: (()=>void)|null,
  resetConfig: (()=>void)|null,
}

interface UIState {
  isLoading: boolean;
  isOnPopup: boolean;

  setIsLoading: ((isLoading:boolean)=> void)|null;
  setIsOnPopup: ((isOnPopup: boolean)=> void)|null,
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

