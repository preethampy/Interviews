# General
1. Single core - It can only do one thing at a time
2. Quad core - It can do 4 things at a time


# Vertical Scaling (Scaling Up)
Increasing the power (CPU, RAM, SSD) of a single server.
### Pros:
- Simple to implement (just upgrade the server).
- Easier to maintain and monitor.
- No need to change code or architecture (monoliths benefit).
### Cons:
- Limited by hardware (you can’t scale infinitely).
- Downtime during upgrades (unless you’re using hot-swapping hardware).
- Single point of failure (if it crashes, the whole app is down).
- Gets expensive fast as high-end hardware is costly.
### When to use ?
- low traffic or MVP
- Monolithic architecture
- In budget

# Horizontal Scaling (Scaling Out)
Adding more machines/instances to handle load in parallel. Instead of upgrading one PC, you add 10 average PCs and split the work among them.
### Pros:
- Scales much better — no hardware limit.
- High availability and fault tolerance (if one server fails, others work).
- Cost-effective at large scale.
- Enables distributed systems and microservices.

### Cons:
- More complex (needs load balancing, syncing, stateless apps, etc.).
- Requires architecture changes (stateless services, distributed databases).
- Harder to debug and monitor.
### When to use ?
- Rapid user/traffic growth
- High availability needed

# Load Balancer
A load balancer is a system component that distributes incoming network traffic across multiple backend servers, ensuring no single server gets overlaoded with all the traffic
### Why Use a Load Balancer?
- To handle more users (scalability).
- To prevent single points of failure (availability).
- To enable horizontal scaling (multiple instances).
- For zero downtime deployments (blue/green, canary).
- For better performance (by distributing load evenly).

### Types of Load Balancers
| Type         | Examples                  | Layer   |
| ------------ | ------------------------- | ------- |
| **Hardware** | F5, Cisco                 | L4 / L7 |
| **Software** | NGINX, HAProxy            | L4 / L7 |
| **Cloud**    | AWS ELB, Azure LB, GCP LB | L4 / L7 |

### Layer 4 vs Layer 7 Load Balancing ?
| Feature  | Layer 4 (Transport) | Layer 7 (Application)                              |
| -------- | ------------------- | -------------------------------------------------- |
| Based on | IP, TCP, UDP        | URL, Headers, Cookies                              |
| Speed    | Faster              | Slower (more processing)                           |
| Use case | Basic routing       | Content-based routing                              |
| Example  | TCP load balancing  | Route `/api` to one service and `/auth` to another |

### How a Load Balancer Works (In Deep and Detailed)
#### Basic Flow:
1. A user opens a website (https://myapp.com).
2. The DNS resolves the domain to the Load Balancer’s IP address.
3. The Load Balancer:
    - Receives the request.
    - Picks one of the available backend servers (based on algorithm).
    - Sends the request to that server.
4. The chosen backend server processes the request and returns the response back to the load balancer, which then forwards it to the user.

#### Additional Features:
1. **Health Checks:** It regularly pings servers to ensure they are healthy. If a server fails, it's removed from the pool.

2. **SSL Termination:** The load balancer handles SSL encryption, freeing backend servers from this task.

3. **Session Management:** It can track user sessions (with or without sticky sessions).

4. **Auto-Scaling:** Works with auto-scaling groups (especially in cloud) to add/remove servers based on traffic.


### Types of Load Balancing Algorithms (with Examples)
| Algorithm                | Explanation                                                               | Real Example                                                    |
| ------------------------ | ------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **Round Robin**          | Each request goes to the next server in order, looping back to the first. | 3 servers: A, B, C → Req1 to A, Req2 to B, Req3 to C, Req4 to A |
| **Weighted Round Robin** | Like Round Robin, but servers have "weights" based on power.              | A (70%), B (30%) → A gets \~7 of 10 requests, B gets \~3        |
| **Least Connections**    | Chooses the server with the fewest current active connections.            | A: 2 users, B: 5 users → Next user goes to A                    |
| **IP Hashing**           | Hashes the client’s IP address to assign a server.                        | 192.168.0.1 always gets Server A, 192.168.0.2 gets Server B     |
| **Random**               | Picks any server randomly.                                                | No pattern — useful when other metrics are not relevant         |


### Detailed Explanation of Example Use Cases
#### Web Application
- A company has a React frontend and Node.js backend with 3 backend servers.
- A Load Balancer sits in front of them.
- User requests are distributed using Round Robin to spread traffic evenly.
- If Server B goes down, Load Balancer detects it via health checks and skips it.
- Benefits: High availability and even load distribution.

#### Zero Downtime Deployment
- Let’s say you want to upgrade your app without downtime.
- You run two environments:
    - Blue: current live version
    - Green: new version
- Load Balancer initially routes traffic to Blue.
- You test Green behind the scenes.
- When ready, you flip traffic from Blue to Green.
- If something breaks, flip back to Blue — no downtime!

#### SSL Termination
- SSL (HTTPS) is encrypted, secure.
- Decrypting SSL is resource-intensive.
- Load Balancer handles SSL termination and sends decrypted data to backend servers via HTTP.
- Backend servers don’t need to manage SSL, improving performance.



### What is Stateless (Easy Explanation)
**Stateless** = No memory of previous interactions. Each request is independent and self-contained. The server does not remember who you are.

**Why is it useful?** - 
Because any server can handle any request → enables horizontal scaling.

**Stateful** = Server remembers your session (not scalable unless sticky)

**Example:**
1. You make an API call to /user/profile.
2. The request contains everything needed: token, user ID.
3. Server doesn't store session; it just processes based on that info.

### Sticky Sessions (Detailed + Example)

**Sticky sessions** = same user always routed to the same server. Useful when the backend is stateful (e.g., stores session in RAM).

**Example:**
1. You log in and are assigned to Server A.
2. Server A stores your session in memory (not shared).
3. Without sticky sessions, next request might go to Server B → you’ll appear logged out.
4. Sticky session ensures all your requests go to Server A.

**Problem:**
Not scalable. If Server A crashes, session is lost.

**Better alternative:** store session in Redis or database (stateless approach).

### Blue/Green and Canary Releases
**Blue/Green Deployment:**
1. Two identical environments (Blue = current, Green = new).
2. You deploy new code to Green while Blue serves users.
3. When confident, switch Load Balancer traffic from Blue → Green.
4. Easy rollback: just point traffic back to Blue.

**Canary Release:**
1. Gradually expose new version to a small set of users.
2. For example:
    - 5% users to new version.
    - Monitor for errors.
    - Increase to 25%, 50%, then 100%.
3. Safer for detecting bugs or performance issues.




### Questions
#### How load balancer decide to which server it should send the incoming request from client to ?
Answer: It totally depends on the algorithm we configure

#### RAID's
1. RAID-0 : Will store incoming data in two identical hard disks. It will push a bit of data to first disk first and then second disk a bit and then first disk a bit and second disk a bit and it continues
2. RAID-1 : Will store incoming data in two identical hard disks. It will store same data in both the disks one at a time. If any of disk fails, we can replace the broken disk with new one and it will get the backup data from other disk
3. RAID - 5,6,10

# Performance vs scalability


# Latency vs throughput


# Availability vs consistency