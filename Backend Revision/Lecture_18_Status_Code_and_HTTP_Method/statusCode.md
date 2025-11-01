# 🌐 HTTP Status Codes

## 🧩 What is a Status Code?
A **status code** is a **three-digit number** that the server sends back in response to a client’s request.  
It tells the client whether the request was **successful**, **failed**, or requires **additional action**.

---

## 📚 Categories of Status Codes

| Category | Range | Meaning |
|-----------|--------|----------|
| **1xx** | 100–199 | Informational – Request received, continuing process |
| **2xx** | 200–299 | Success – The request was successfully received, understood, and accepted |
| **3xx** | 300–399 | Redirection – Further action is needed to complete the request |
| **4xx** | 400–499 | Client Error – The request contains bad syntax or cannot be fulfilled |
| **5xx** | 500–599 | Server Error – The server failed to fulfill a valid request |

---

## ✅ Common HTTP Status Codes

### 🔹 **1xx – Informational**
| Code | Meaning |
|------|----------|
| **100 Continue** | The server has received the request headers, and the client should proceed to send the body. |

---

### 🟢 **2xx – Success**
| Code | Meaning |
|------|----------|
| **200 OK** | The request was successful. |
| **201 Created** | A new resource has been created (used in POST requests). |
| **202 Accepted** | The request has been accepted for processing, but not completed. |
| **204 No Content** | The request was successful, but there is no content to send back. |

---

### 🟡 **3xx – Redirection**
| Code | Meaning |
|------|----------|
| **301 Moved Permanently** | The requested resource has a new URL. |
| **302 Found** | The resource is temporarily located at a different URL. |
| **304 Not Modified** | The resource has not changed since the last request. |

---

### 🔴 **4xx – Client Error**
| Code | Meaning |
|------|----------|
| **400 Bad Request** | The server could not understand the request. |
| **401 Unauthorized** | Authentication is required or has failed. |
| **403 Forbidden** | The client does not have permission to access this resource. |
| **404 Not Found** | The requested resource was not found. |
| **409 Conflict** | The request conflicts with the current state of the resource. |
| **422 Unprocessable Entity** | The request is well-formed but cannot be processed (e.g., validation error). |

---

### ⚫ **5xx – Server Error**
| Code | Meaning |
|------|----------|
| **500 Internal Server Error** | A generic error occurred on the server. |
| **501 Not Implemented** | The server does not support the functionality required. |
| **502 Bad Gateway** | The server received an invalid response from the upstream server. |
| **503 Service Unavailable** | The server is overloaded or down for maintenance. |
| **504 Gateway Timeout** | The server did not receive a timely response from another server. |

---

## 💡 Example in Express.js
```js
app.get('/example', (req, res) => {
  // Success
  res.status(200).json({ message: 'OK' });
});

app.post('/users', (req, res) => {
  // Resource created
  res.status(201).json({ message: 'User created' });
});

app.use((req, res) => {
  // Not found
  res.status(404).json({ message: 'Route not found' });
});
````

---

## 🧾 Summary

| Code    | Meaning      | Common Use              |
| ------- | ------------ | ----------------------- |
| **200** | OK           | Successful GET/POST     |
| **201** | Created      | After saving data       |
| **400** | Bad Request  | Invalid input           |
| **401** | Unauthorized | Missing/Invalid token   |
| **403** | Forbidden    | Access denied           |
| **404** | Not Found    | Invalid route/resource  |
| **500** | Server Error | Unexpected server issue |

---

**In short:**

> 🔹 *Status codes are how servers communicate the result of a request back to the client.*

```


