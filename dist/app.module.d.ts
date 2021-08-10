import { Connection } from 'typeorm';
export declare class AppModule {
    connection: Connection;
    constructor(connection: Connection);
}
