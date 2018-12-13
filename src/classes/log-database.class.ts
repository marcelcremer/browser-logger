import Dexie from 'dexie';
import { LogEntry } from '../interfaces/log-entry.interface';

export class LogDatabase extends Dexie {
    logEntries: Dexie.Table<LogEntry, number>;

    constructor(databaseName: string) {
        super(databaseName);
        this.version(1).stores({
            logEntries: '++id,scope,entry'
        });
    }
}
