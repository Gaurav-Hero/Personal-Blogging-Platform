# 🚀 Express.js API Key Concepts

## 🔹 Query Params vs. Route Params
| Feature            | Query Params (`?key=value`) | Route Params (`/:value`) |
|--------------------|---------------------------|--------------------------|
| **Example URL**   | `/api/posts/?id=123`       | `/api/posts/123`        |
| **Access in Express** | `req.query.id`          | `req.params.id`        |
| **Usage**         | Optional filters, sorting, pagination | Unique resource identification |
| **Common Mistake** | If you send `?id=123` but your API expects `/:id`, it won't match the correct route. |

---

## 🔹 Express.js Routing & Middleware
- **Route Matching Order:** Express routes are matched in the order they are defined.  
  - `/api/posts/` gets matched **before** `/api/posts/:id` if defined first.  
- **Middleware (`app.use()`) is Global:** Applies to all routes if placed before them.  

---

## 🔹 Debugging API Issues
1. **Check if Route is Being Called:**  
   - Add `console.log(req.params.id);` or `console.log("Route hit");` inside controllers.  
2. **Restart Server After Changes:**  
   - Always restart the server after making changes to avoid old code running.  
3. **Use Postman or Curl for Testing:**  
   - Ensure the API request is correct (e.g., `GET /api/posts/123` instead of `GET /api/posts/?id=123`).  
4. **Check Import Paths in `server.js`:**  
   - Ensure `app.use("/api/posts", postRoutes);` is correctly set up.  

---

## 🔹 Common Express.js Issues & Fixes
| Issue | Possible Cause | Fix |
|-------|--------------|-----|
| **`req.params.id` is `undefined`** | Wrong route setup or request format | Use `/api/posts/:id` instead of `?id=...` |
| **`ECONNREFUSED 127.0.0.1:5000`** | Server not running | Run `npm start` or `node server.js` |
| **Returns all posts instead of one** | Query param used instead of route param | Use `req.params.id` in route `/posts/:id` |

---

This serves as a quick reference for Express.js API development. 🚀🔥
