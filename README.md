# Kubernetes Node.js Backend Deployment 🚀

This project demonstrates the complete workflow of deploying a Node.js backend application using Docker and Kubernetes (Minikube).

It covers the real-world flow from application development to containerization and deployment in a Kubernetes cluster.

---

## Project Workflow

Node.js App → Docker Image → Docker Hub → Kubernetes Deployment → Service → Running API

---

## Tech Stack

* Node.js (Express backend)
* Docker (containerization)
* Docker Hub (image registry)
* Kubernetes (Minikube cluster)
* kubectl CLI

---

## Project Structure

```
app
 ├── server.js
 ├── package.json
 ├── package-lock.json
 └── Dockerfile
```

---

## Step 1 — Create Node.js Backend

Example server:

```js
const express = require("express");
const app = express();

app.get("/hello", (req,res)=>{
    res.send("Hello from Kubernetes backend 🚀");
});

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});
```

Install dependencies:

```
npm init -y
npm install express
```

---

## Step 2 — Dockerfile

Create Dockerfile:

```
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node","server.js"]
```

---

## Step 3 — Build Docker Image

```
docker build -t tryhard231/node-backend:v1 .
```

Check images:

```
docker images
```

---

## Step 4 — Push Image to Docker Hub

Login:

```
docker login
```

Push:

```
docker push tryhard231/node-backend:v1
```

---

## Step 5 — Start Kubernetes Cluster

```
minikube start --driver=docker
```

Verify:

```
kubectl get nodes
```

---

## Step 6 — Create Deployment

```
kubectl create deployment node-backend \
--image=tryhard231/node-backend:v1
```

Check pods:

```
kubectl get pods
```

---

## Step 7 — Expose Service

```
kubectl expose deployment node-backend \
--type=NodePort \
--port=3000
```

Check service:

```
kubectl get services
```

---

## Step 8 — Access Application

```
minikube service node-backend
```

API endpoint example:

```
http://localhost:<port>/hello
```

---

## Useful Commands

Check resources:

```
kubectl get all
```

Scale deployment:

```
kubectl scale deployment node-backend --replicas=3
```

Update image:

```
kubectl set image deployment/node-backend \
node-backend=tryhard231/node-backend:v2
```

Stop cluster:

```
minikube stop
```

Delete cluster:

```
minikube delete
```

---

## Key Learnings

* How Docker containerizes backend applications
* How Docker Hub stores images
* How Kubernetes deployments manage containers
* How services expose backend APIs
* How scaling works in Kubernetes

---

## Author

Harsh Goilkar
