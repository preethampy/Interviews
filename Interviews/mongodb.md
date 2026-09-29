## What is mongodb ?

- Mongodb is a NoSql, document-oriented database
- It store data as BSON documents instead of rows and tables
  
```
SQL:
Database → Tables → Rows → Columns

MongoDB:
Database → Collections → Documents → Fields
```

## Mongo vs Sql

| MongoDB | SQL |
|---|---|
| Document database | Relational database |
| Collection | Table |
| Document | Row |
| Field | Column |
| Embedded documents | Joins/related tables |
| Flexible schema | Usually fixed schema |
| BSON | Rows/columns |

Mongodb is useful when:
- the data model is document oriented
- the schema needs flexibility

Sql databases are useful when:
- We have higly relational data
- Need strong relational constraints and complex joins

## What is document ?

A document is basically a JSON like object stored by mongodb as BSON.

```
{
  _id: ObjectId("..."),
  name: "Preetham",
  age: 28,
  skills: ["React", "Node", "MongoDB"]
}
```

## What is BSON ?

Binary JSON - mongo stores documents as BSON internally

## Embedded vs Referenced documents

Use embedded when data belongs closly to the parent and is usually accessed together

```
{
  name: "John",
  address: {
    city: "Hyderabad",
    country: "India"
  }
}
```

Use reference when the related data is large, shared, independently updated or has its own lifecycle

## What is an index ?

An index is a data structure that helps MongoDB find documents faster without scanning the entire collection. It is a special data structure (B-tree) that stores a small portion of a collection's data in a sorted format to speed up read and query operations.

## Compound index

In compound index, we use index on multiple fields. Order matters in compound indexes.

## Unique index

Ensures duplicate values are not allowed

```
db.users.createIndex(
  { email: 1 },
  { unique: true }
)
```

## TTL index

Mongodb removes documents after a specified time. Can be used for OTPs, Sessions, etc.

```
db.sessions.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 3600 }
)
```

## Aggregation pipelines

It is used to process and transform data accross different collections

```
db.orders.aggregate([
  { $match: { status: "completed" } },
  {
    $group: {
      _id: "$userId",
      total: { $sum: "$amount" }
    }
  }
])
```

## Common stages
- `$match` -> filter document
    `{ $match: { age: { $gt: 25 } } }`
- `$project` -> select specific fields
    ```
    {
        $project: {
            name: 1,
            age: 1
        }
    }
    ```
- `$lookup` -> join-like operations between collections
    ```
    {
        $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user"
        }
    }
    ```

## Covered Query

A query is covered when mongodb can satisfy the query using only the index without reading the actual document

```
db.users.find(
  { email: "a@gmail.com" },
  { name: 1, _id: 0 }
)
```

## How do you find why a query is slow ?

We can use `.explain("executionStats")` 

```
db.users
  .find({ email: "abc@gmail.com" })
  .explain("executionStats")
```

## What is COLLSCAN vs IXSCAN

- COLLSCAN -> scans the entire collection
- IXSCAN -> scans an index

## What is a Transaction ?

A transaction allows multiple database operations to behave as one atomic unit

Example:

```
Transfer ₹1000

Account A → -₹1000
Account B → +₹1000
```

Either both should happen or neither should happen

## What is ACID ?

### Atomicity

It ensures either operations succeed or all are rolled back

### Consistency

The database must remain in a valid state before and after a transaction.

### Isolation

Isolation ensures that transactions run independently without affecting each other. Changes made by one transaction are not visible to others until they are committed.

### Durability

Durability ensures that once a transaction is committed, its changes are permanently saved, even if the system fails. 

## Does mongodb support ACID ?

Yes

## What is replication ?

Replication means maintaining multiple copies of data across MongoDB servers. Mongodb uses replica set.

```
Primary
  ↓
Secondary
  ↓
Secondary
```

- primary handles writes
- secondaries replicate the data
- if primary fails, another member can become primary

## What is sharding ?

Sharding means distributing data across multiple servers.

```
10 TB

Shard 1 → 3 TB
Shard 2 → 3 TB
Shard 3 → 4 TB
```

**Replication = copies**
**Sharding = distribution**

## What is read preference ?

In a replica set, you can control where reads happen. For example, reading from secondaries can help distribute read traffic, but you must understand the consistency implications.

## What is write concern ?

Write concern controls how much confirmation mongodb requires before considering a write successful

Example: `w:1` means acknowledgement from the primary

Higher durability requirements can use stronger write concerns.

## What is read concern ?

Read concern controls what level of committed data do i want to read

## How would you optimize a slow mongodb API ?

1. Check the query - `explain("executionStats")`
2. Check indexes - make sure the query has an appropriate index
3. Dont return unnecessary fields
4. Check pagination - avoid fetching huge datasets
5. Check aggregation - use filtering first and anything next
6. Consider redis for caching

## How would you paginate mongodb results ?

Basic

```
.find()
.skip(100)
.limit(20)
```

- skip first 100 data
- return only 20

But for larger datasets, deep `skip()` can become inefficient

Common approach would be cursor/range-based pagination

```
.find({
  _id: { $gt: lastId }
})
.limit(20)
```

## What is N+1 query problem ?

Suppose you fetch 100 orders:

```
1 query → get 100 orders

Then:

100 queries → get user for each order
```

Total:

```
101 database queries
```

Thats N+1. Solution can be to use aggregation pipeline with $lookup stage