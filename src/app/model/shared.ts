export interface Shared{
  loading:boolean,
  toast:{
    isError:boolean,
    message?:string,
    color?:string
  }
}
