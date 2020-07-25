import { Task } from "./Task";
import { TaskResult } from "./TaskResult";
/**
 * A class that massages synchronous and some async functions into promises. Expects very specific function signatures.
 */
declare class Promisifier {
    /**
     * Takes a function and wraps it in a function which returns a promise.
     *
     * Supports:
     *  - Promises
     *  - "done" callback
     *  - sync returns (including Promises, Gulp streams, etc.)
     *
     * @param {(results, done) => any} fn
     * @returns {(results) => Promise}
     */
    wrap<T>(fn: Task<T>): (results: T) => Promise<TaskResult>;
}
export { Promisifier };
