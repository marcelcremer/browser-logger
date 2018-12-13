type LogLevels = 'error' | 'warn' | 'info' | 'trace' | 'debug';
export interface LogEntry {
  id?: number;
  date: Date;
  severity: LogLevels;
  scope: string;
  entry: string;
}
