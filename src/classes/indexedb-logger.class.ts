import { Logger } from '../interfaces/logger.interface';
import { LogDatabase } from './log-database.class';
import { LogEntry } from '../interfaces/log-entry.interface';
import * as stringify from 'json-stringify-safe';

// tslint:disable:no-identical-functions no-console
export class IndexedDBLogger implements Logger {
    db = new LogDatabase('default');
    constructor() {}

    info(scope: string, ...data: any[]): void {
        this.db
            .transaction('rw', this.db.logEntries, () => {
                this.db.logEntries.add({ scope, severity: 'info', date: new Date(), entry: stringify(data) }).catch(console.log);
            })
            .catch(console.log);
    }
    warn(scope: string, ...data: any[]): void {
        this.db
            .transaction('rw', this.db.logEntries, () => {
                this.db.logEntries.add({ scope, severity: 'warn', date: new Date(), entry: stringify(data) }).catch(console.log);
            })
            .catch(console.log);
    }
    error(scope: string, ...data: any[]): void {
        this.db
            .transaction('rw', this.db.logEntries, () => {
                this.db.logEntries.add({ scope, severity: 'error', date: new Date(), entry: stringify(data) }).catch(console.log);
            })
            .catch(console.log);
    }
    debug(scope: string, ...data: any[]): void {
        this.db
            .transaction('rw', this.db.logEntries, () => {
                this.db.logEntries.add({ scope, severity: 'debug', date: new Date(), entry: stringify(data) }).catch(console.log);
            })
            .catch(console.log);
    }
    trace(scope: string, ...data: any[]): void {
        this.db
            .transaction('rw', this.db.logEntries, () => {
                this.db.logEntries.add({ scope, severity: 'trace', date: new Date(), entry: stringify(data) }).catch(console.log);
            })
            .catch(console.log);
    }
    getLogEntries(): Promise<LogEntry[]> {
        return new Promise((resolve, reject) => {
            this.db
                .transaction('rw', this.db.logEntries, () => {
                    this.db.logEntries
                        .toArray()
                        .then((entries) => resolve(entries))
                        .catch((e) => reject(e));
                })
                .catch((error) => reject(error));
        });
    }
}
