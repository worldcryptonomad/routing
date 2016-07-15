initSidebarItems({"constant":[["CONDVAR_INIT","Constant initializer for a statically allocated condition variable."],["MUTEX_INIT","Static initialization of a mutex. This constant can be used to initialize other mutex constants."],["ONCE_INIT","Initialization value for static `Once` values."],["RW_LOCK_INIT","Constant initialization for a statically-initialized rwlock."]],"enum":[["TryLockError","An enumeration of possible errors which can occur while calling the `try_lock` method."]],"mod":[["atomic","Atomic types"],["mpsc","Multi-producer, single-consumer FIFO queue communication primitives."]],"struct":[["Arc","An atomically reference counted wrapper for shared state."],["Barrier","A barrier enables multiple threads to synchronize the beginning of some computation."],["BarrierWaitResult","A result returned from wait."],["Condvar","A Condition Variable"],["Mutex","A mutual exclusion primitive useful for protecting shared data"],["MutexGuard","An RAII implementation of a \"scoped lock\" of a mutex. When this structure is dropped (falls out of scope), the lock will be unlocked."],["Once","A synchronization primitive which can be used to run a one-time global initialization. Useful for one-time initialization for FFI or related functionality. This type can only be constructed with the `ONCE_INIT` value."],["OnceState","State yielded to the `call_once_force` method which can be used to query whether the `Once` was previously poisoned or not."],["PoisonError","A type of error which can be returned whenever a lock is acquired."],["RwLock","A reader-writer lock"],["RwLockReadGuard","RAII structure used to release the shared read access of a lock when dropped."],["RwLockWriteGuard","RAII structure used to release the exclusive write access of a lock when dropped."],["StaticCondvar","Statically allocated condition variables."],["StaticMutex","The static mutex type is provided to allow for static allocation of mutexes."],["StaticRwLock","Structure representing a statically allocated RwLock."],["WaitTimeoutResult","A type indicating whether a timed wait on a condition variable returned due to a time out or not."],["Weak","A weak pointer to an `Arc`."]],"type":[["LockResult",""],["TryLockResult",""]]});