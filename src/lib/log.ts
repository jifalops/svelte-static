export class Log {
  static readonly ASSERT = 1;
  static readonly ERROR = 2;
  static readonly WARN = 3;
  static readonly INFO = 4;
  static readonly DEBUG = 5;
  static readonly TRACE = 6;

  assert = console.assert.bind(console);
  error = console.error.bind(console);
  warn = console.warn.bind(console);
  info = console.info.bind(console);
  debug = console.debug.bind(console);
  trace = console.log.bind(console);

  level = Log.INFO;

  constructor(level?: number) {
    if (level !== undefined) {
      this.level = level;
    }
    this.setLevel(this.level);
  }

  setLevel(level: number) {
    this.level = level;
    if (level >= Log.ASSERT) this.assert = console.assert.bind(console);
    else this.assert = function () {};
    if (level >= Log.ERROR) this.error = console.error.bind(console);
    else this.error = function () {};
    if (level >= Log.WARN) this.warn = console.warn.bind(console);
    else this.warn = function () {};
    if (level >= Log.INFO) this.info = console.info.bind(console);
    else this.info = function () {};
    if (level >= Log.DEBUG) this.debug = console.debug.bind(console);
    else this.debug = function () {};
    if (level >= Log.TRACE) this.trace = console.log.bind(console);
    else this.trace = function () {};
  }
}
