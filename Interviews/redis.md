## What is redis ?
 - Remote Dictionary Server (REDIS) is an open-source, in-memory data store
 - Used as a database, cache and message broker
 - It is fast, low latency and support multiple data structures (strings, hashes, lists, sets and sorted sets)
 - Widely used for caching, session management, real-time analytics, message queuing

## How is it different from traditional database like nosql and sql ?

- Redis is an in-memory NoSql database while MySql is a disk-based relational database
- It is optimised for high speed key value operations
- Redis is for caching and real-time applications as it provides faster read/write operations

## What are redis hashes ?

- Redis hashes is a data structure that stores data as a field-value pairs under a single key
- Commonly used to represent objects
- Example: user100(key): email, password, address (fields)

## Can redis be used in a multi-threaded application and how does it handle concurrency ?

## What is pub/sub in redis ?

- It is a messaging pattern in redis where publishers send messages to channels and subscribers receive messages from the channels they subscribed to.
- Commonly used in real-time communications
- Example could be a chat application

## How do you ensure persistence in Redis ?

- Redis provide two persistence mechanisms:
- RDB (redis database backup) and AOF (Append only file)
- RDB created periodic snapshots of the data
- AOF logs every read and write operation

## What is redis transactions

- Redis transactions allow multiple commands to be executed as a single unit using `MULTI` and `EXEC` commands
- This ensured that all queued commands are executed sequentially without interruption from other clients
- It ensures atomic execution of grouped commands maintaining data consistency
- Example: A banking application can use a Redis transaction to debit one account and credit another, ensuring both operations are executed together.

## How to scale redis ?

- Redis can be scaled using replication, redis sentinal, and redis cluster
- Replication: improves read performance by distributing read traffic. We will have 1 master node and we add more replica nodes to it and they copy everything that master node does in real-time
- Redis sentinal: provides high availability. If the master dies, a replica needs to take over the position and become new master. Redis sentinel does that.
- Redis cluster: distributes data across multiple nodes for horizontal scaling (A-C in one cluster, D-G in one cluster etc)

## Redis data types

- Strings (texts/numbers)
- Hashes (for objects)
- Lists (stacks and queues)
- Sets (unique values)
- Sorted sets (leaderboards)
- Streams (event streaming and real-time messaging)
- Bitmaps
- HyperLogLogs

## What is key eviction and how is it configured ?

- Key eviction is the process of automatically removing keys from redis when the configured memory limit is reached
- Redis used different eviction policies to decide which keys should be removed
- Common eviction policies include: allkeys-lru, volatile-lru, allkeys-random and noneviction
- eviction policy is configured using the maxmemory-policy setting in the redis configuration

## How does redis manage memory ?

- Redis manages memory by storing data in RAM using optimized data structures and memory allocators such as jemalloc
- It also provides memory limits and eviction policies to efficiently control memory usage

## Where redis is not appropriate choice ?

- for complex relational queries
- ACID transactions
- Datasets larger than the available memory

## Monitor and debug redis performance issues ?

- Can use commands like `MONITOR`, `SLOWLOG` and `INFO` to track commands and detect slow queries and view server statistics
- Integrate grafana and prometheus for continuous monitoring, alerts and performance analysis

## How lua scripting is used in redis ?

- Lua scripting allows multiple redis commands to be executed as a single atomic operation on the server using `EVAL` command

## How do you handle caching in a distributed environment using Redis?

- In a distributed environment, redis is used as a centralized caching layer
- It reduce database load and improve application performance
- Techniques such as redis cluster, replication and consistent hashing help distribute data efficiently across multiple cache nodes