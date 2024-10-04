declare module "*.jpg";
declare module "*.svg";
declare module 'redux-persist/lib/storage' {
    const storage: any;
    export default storage;
  }
declare module 'redux-persist/es/persistReducer' {
    const persistReducer: any;
    export default persistReducer;
  }