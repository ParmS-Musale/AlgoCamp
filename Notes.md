# Monolith vs Microservices: Deep Architectural Differences

## Monolithic Architecture

- **Structure:** Single codebase; all features (UI, business logic, data access) tightly coupled and deployed together.
- **Database:** One centralized database.
- **Deployment:** Any change requires redeploying the whole application.
- **Tech Stack:** Typically the same stack for all components.
- **Communication:** Internal function calls within the same process.
- **Failure Handling:** A bug in any part can crash the entire system.

## Microservices Architecture

- **Structure:** Application split into independent services, each with its own codebase and database.
- **Database:** Each service may use its own database.
- **Deployment:** Services deployed independently; updating one does not affect others.
- **Tech Stack:** Different technologies can be used for different services.
- **Communication:** Services communicate via APIs or messaging queues.
- **Failure Handling:** Fault isolation; issues in one service do not affect others.

## Companies Using Monolith and Microservices (2025)

- **Netflix:** Transitioned from monolith to microservices for scalability and rapid deployments.
- **Square Payroll:** Migrated for improved scaling and workflow transparency.
- **Traditional Banks:** Often use monolithic systems for legacy core banking, modernizing incrementally.
- **Hybrid Approach:** Many organizations use a mix—core features as monolith, peripheral features as microservices.

## Simple Example: E-commerce Platform

| Feature         | Monolithic Example                          | Microservices Example                       |
|-----------------|--------------------------------------------|---------------------------------------------|
| User Auth       | Single user auth logic in main app          | Separate user-auth service                  |
| Product Catalog | Managed in same code/database as rest of app| Own microservice with own database          |
| Shopping Cart   | Module within main app                      | Dedicated shopping-cart service             |
| Payment Gateway | Logic in main codebase                      | Separate payment service with 3rd-party APIs|
| Deployment      | All features deployed at once               | Each service deployed/updated individually  |
| Scenario        | Small business, quick launch                | Large-scale retailer, high traffic, many teams|

## Pros and Cons

### Monolithic

**Pros**
- Easier to develop, test, and deploy initially.
- Lower initial investment and simpler debugging.

**Cons**
- Difficult to scale efficiently.
- Hard to adopt new technologies in one part.
- Any bug can impact the entire system.
- Limited flexibility; tightly coupled components.
- Performance and deployment risk increase as codebase grows.

### Microservices

**Pros**
- High scalability; scale only the needed service.
- Flexibility in technology choices.
- Fault tolerance; isolated failures.
- Easier integration of new tech/services.
- Teams can work in parallel.

**Cons**
- Increased complexity and operational costs.
- Network communication overhead and latency.
- More resources needed for orchestration and management.
- Harder testing and debugging across services.
- Complex deployment pipelines and dependencies.



## Client-Side vs Server-Side Architecture

### Client-Side Architecture

- **Definition:** Logic and rendering handled primarily in the user's browser or device.
- **Technologies:** HTML, CSS, JavaScript frameworks (React, Angular, Vue).
- **Data Flow:** Fetches data from server APIs, processes and displays it locally.
- **Deployment:** Static assets (HTML, JS, CSS) served via CDN or web server.
- **Performance:** Fast UI updates; depends on client device capabilities.
- **Security:** Vulnerable to code exposure and client-side attacks (XSS).
- **Use Cases:** Single Page Applications (SPAs), interactive dashboards, real-time UIs.

### Server-Side Architecture

- **Definition:** Core logic, data processing, and rendering handled on the server.
- **Technologies:** Node.js, Python (Django, Flask), Java (Spring), PHP, Ruby on Rails.
- **Data Flow:** Server receives requests, processes data, and sends rendered HTML or API responses.
- **Deployment:** Application hosted on web servers; clients receive processed output.
- **Performance:** Centralized processing; less dependent on client device.
- **Security:** Sensitive logic and data remain on server; easier to enforce access controls.
- **Use Cases:** Traditional websites, REST APIs, secure data processing, multi-user systems.

### Comparison Table

| Aspect         | Client-Side Architecture                | Server-Side Architecture                   |
|----------------|----------------------------------------|--------------------------------------------|
| Rendering      | In browser/device                      | On server, sent to client                  |
| Speed          | Fast UI, depends on device             | Consistent, depends on server              |
| Security       | Exposed code, client-side risks        | Centralized, better control                |
| Scalability    | Offloads work to clients               | Scales with server resources               |
| SEO            | Needs extra handling (SSR, prerender)  | Good out-of-the-box                        |
| Use Cases      | SPAs, interactive apps                 | Content-heavy sites, APIs                  |

### Pros and Cons

#### Client-Side

**Pros**
- Rich, interactive user experiences.
- Reduced server load for UI updates.
- Offline capabilities with caching.

**Cons**
- SEO challenges.
- Initial load time can be high.
- Security risks from exposed code.

#### Server-Side

**Pros**
- Better security and access control.
- Easier SEO and content indexing.
- Centralized updates and logic.

**Cons**
- Higher server resource usage.
- Slower UI interactions (full page reloads).
- Less dynamic user experience without AJAX or websockets.

## TCP/IP vs OSI Model: Full Details

### OSI Model (Open Systems Interconnection)

The OSI model is a conceptual framework that standardizes the functions of a communication system into seven distinct layers.

| Layer | Name                | Function                                                                                  | Examples                       |
|-------|---------------------|------------------------------------------------------------------------------------------|--------------------------------|
| 7     | Application         | User-facing protocols and interfaces (email, web, file transfer)                         | HTTP, FTP, SMTP, DNS           |
| 6     | Presentation        | Data translation, encryption, compression                                                | SSL/TLS, JPEG, ASCII           |
| 5     | Session             | Establishes, manages, and terminates sessions                                            | NetBIOS, RPC                   |
| 4     | Transport           | Reliable data transfer, error recovery, flow control                                     | TCP, UDP                       |
| 3     | Network             | Routing, addressing, packet forwarding                                                   | IP, ICMP, ARP                  |
| 2     | Data Link           | Framing, MAC addressing, error detection/correction                                      | Ethernet, PPP, Switches        |
| 1     | Physical            | Transmission of raw bits over physical medium                                            | Cables, Hubs, Fiber, Wi-Fi     |

**Key Points:**
- Each layer serves the layer above and is served by the layer below.
- Strict separation of concerns; ideal for teaching and troubleshooting.
- Not all protocols map perfectly to OSI layers in practice.

---

### TCP/IP Model (Internet Protocol Suite)

The TCP/IP model is the foundation of the modern internet, with four layers that map to real-world protocols.

| Layer         | Function                                   | OSI Equivalent                | Examples                  |
|---------------|--------------------------------------------|-------------------------------|---------------------------|
| Application   | Network processes to applications          | OSI Layers 5-7                | HTTP, FTP, SMTP, DNS      |
| Transport     | Host-to-host communication, reliability    | OSI Layer 4                   | TCP, UDP                  |
| Internet      | Routing, addressing, packet forwarding     | OSI Layer 3                   | IP, ICMP, ARP             |
| Network Access| Physical transmission, data link           | OSI Layers 1-2                | Ethernet, Wi-Fi, PPP      |

**Key Points:**
- More practical and widely used than OSI.
- Protocols are defined for each layer.
- Layers are less strictly separated than OSI.

---

### OSI vs TCP/IP: Comparison Table

| Aspect           | OSI Model (7 Layers)         | TCP/IP Model (4 Layers)      |
|------------------|-----------------------------|------------------------------|
| Layers           | 7                            | 4                            |
| Development      | Theoretical, reference model | Practical, protocol-driven   |
| Usage            | Teaching, troubleshooting    | Real-world networking        |
| Layer Mapping    | Strict separation            | Some layers combined         |
| Protocols        | Protocols defined after model| Model based on existing protocols |

---

### How Data Flows (Example: Sending an Email)

1. **Application Layer:** User writes email (SMTP).
2. **Presentation Layer (OSI):** Data encrypted (TLS).
3. **Session Layer (OSI):** Session established.
4. **Transport Layer:** Data segmented, reliability ensured (TCP).
5. **Network Layer:** Data routed across networks (IP).
6. **Data Link Layer:** Frames prepared for transmission (Ethernet).
7. **Physical Layer:** Bits sent over cable/wireless.

In TCP/IP, steps 2 and 3 are handled within the Application layer.

---

### Summary

- **OSI Model:** 7 layers, theoretical, used for understanding and troubleshooting.
- **TCP/IP Model:** 4 layers, practical, basis for the internet.
- **Both models:** Help standardize networking, but TCP/IP is used in real-world systems.


## What is REST?

**REST** (Representational State Transfer) is an architectural style for designing networked applications, especially web APIs. Introduced by Roy Fielding in 2000, REST APIs enable software systems to communicate over the internet using standard HTTP methods (GET, POST, PUT, DELETE), treating data as resources that clients can create, read, update, and delete.

---

### Why Use REST?

- **Simplicity:** Uses standard HTTP methods, easy to learn and implement.
- **Scalability:** Stateless requests allow for easy scaling.
- **Flexibility & Independence:** Decouples client and server; each can evolve independently.
- **Lightweight:** Commonly uses JSON, suitable for web and mobile.
- **Integration:** Language and platform agnostic.

---

### REST Architectural Constraints

REST APIs follow six key principles:

1. **Stateless:** No client context stored on the server between requests.
2. **Client-Server Separation:** Front end and back end evolve independently.
3. **Uniform Interface:** Consistent resource access via URLs, HTTP methods, and status codes.
4. **Resource-Based:** Everything is a resource (e.g., `/users`, `/orders`).
5. **Cacheable:** Responses can be cached for performance.
6. **Layered System:** Middleware and security can be added without changing the API.

---

### REST Best Practices

- Use nouns and plural names for resources (e.g., `/users`).
- Match HTTP methods to actions: GET (read), POST (create), PUT (update), DELETE (remove).
- Prefer JSON for data exchange.
- Provide clear error messages and standard status codes.
- Keep endpoints consistent; version APIs (e.g., `/api/v1/`).
- Secure APIs (OAuth 2.0, HTTPS).
- Document endpoints and enable easy testing.

---

### How REST Works (Step-by-Step)

1. **Client Request:** Sends HTTP request (e.g., `GET /api/users/5`).
2. **Server Processing:** Authenticates, processes, and accesses the resource.
3. **Server Response:** Returns status code (e.g., 200, 404) and data (usually JSON).
4. **Client Handling:** Processes and displays the response.

**Example:**

- Request: `GET https://api.books.com/books/101`
- Response:
    ```json
    {
        "id": 101,
        "title": "REST Basics",
        "author": "A. N. Author"
    }
    ```

---

### Alternatives to REST

| Technology   | Best For                  | Pros                              | Cons                                 |
|--------------|---------------------------|------------------------------------|--------------------------------------|
| REST         | General purpose, public APIs | Simple, scalable, widely adopted   | Over/under-fetching                  |
| GraphQL      | Complex, data-heavy apps  | Flexible, precise data             | More complex, single endpoint        |
| gRPC         | Internal microservices    | High performance, strongly typed   | Not human-readable, learning curve   |
| WebSockets   | Real-time updates         | Bi-directional, low latency        | Not REST, complex state management   |
| MQTT         | IoT, real-time messaging  | Lightweight, efficient             | Specialized, not for general APIs    |
| Falcor       | Model-driven APIs         | Efficient data fetching            | Niche use case                       |
| EDA          | Event-driven systems      | Asynchronous, scalable             | Requires message brokers             |

---

### Summary

- REST is the most popular API style for web and mobile due to its simplicity and scalability.
- Choose REST for most API needs; consider alternatives for real-time or complex data requirements.

---

## Common Ways to Send Custom Data in HTTP Requests

### 1. Request Body (Most Flexible)
- **Usage:** POST, PUT, PATCH methods allow clients to send structured data (JSON, XML, form-data) in the request body.
- **Example (JSON):**
    ```http
    POST /api/user
    Content-Type: application/json

    {
      "username": "customuser",
      "favorite_color": "blue",
      "preferences": {
        "newsletter": true,
        "notifications": "sms"
      }
    }
    ```
- **Notes:** Ideal for complex or nested data. The server parses and uses these fields.

### 2. Query Parameters
- **Usage:** Appended to URLs, typically for GET requests to filter or sort data.
- **Example:**
    ```
    GET /api/products?category=shoes&sort=price_asc&discounted=true
    ```
- **Notes:** Best for simple key-value pairs; visible in the URL.

### 3. Custom HTTP Headers
- **Usage:** Used for metadata (auth tokens, tracking IDs, custom flags).
- **Example:**
    ```
    GET /api/orders
    X-Client-App: MobileAppV2
    ```
- **Notes:** Not suitable for large or structured data.

### 4. Form Data (Key-Value Pairs or File Uploads)
- **Usage:** Used for submitting forms or uploading files, often with `multipart/form-data`.
- **Example:**
    ```
    POST /api/upload
    Content-Type: multipart/form-data

    --boundary
    Content-Disposition: form-data; name="user_id"

    12345
    --boundary
    Content-Disposition: form-data; name="profile_pic"; filename="profile.jpg"

    ...image bytes...
    --boundary--
    ```
- **Notes:** Allows mixing files and fields in one request.

### 5. Cookies
- **Usage:** Store persistent session data or user context sent automatically with requests.
- **Notes:** Limited size; security considerations apply.

---

### Summary Table

| Method         | Use For                          | Limitations                      |
|----------------|----------------------------------|----------------------------------|
| Request Body   | Flexible, structured, complex    | Not used in GET requests         |
| Query Params   | Searching/filtering, simple      | Limited length, visible in URL   |
| Headers        | Metadata, auth, IDs              | Not for complex data             |
| Cookies        | Session/user context             | Size limits, security concerns   |

**Summary:**  
Clients typically use the request body for structured data (POST/PUT/PATCH), query parameters for filtering/searching, and headers for metadata. Choose the method based on the data type and HTTP method.
