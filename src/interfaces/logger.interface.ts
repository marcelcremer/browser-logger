import { LogEntry } from './log-entry.interface';

export interface Logger {
  info(scope: string, ...data): void;

  warn(scope: string, ...data): void;

  error(scope: string, ...data): void;

  debug(scope: string, ...data): void;

  trace(scope: string, ...data): void;

  getLogEntries(): Promise<LogEntry[]>;
}
