# Browser Logger

Browser Logger is a leightweight logging Framework that logs it's messages into the IndexedDB. Therefore it's possible to restore the log entries, even if the http-connection to the client was lost.

A "no-console" linting rule is recommended with this plugin, as all output should somehow be recoverable.
