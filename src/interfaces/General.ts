export interface ImyError extends Error  {
    statusCode:number;
    message:string;
    data:any;
}