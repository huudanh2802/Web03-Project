# Calico Note

Calico Note is a web application that allows users to manage their notes. This repository contains the frontend and backend code for the application.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Docker](#docker)
- [CI/CD Pipeline](#cicd-pipeline)
- [Contributing](#contributing)

## Features

- Icloud Note clone using Next.Js and Spring Boot
- User authentication with Google
- Note management (create, read, update, delete)
- Responsive design

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Spring Boot
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **Containerization**: Docker
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Docker
- Docker Compose
- Java (JDK 17)
- PostgreSQL

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/huudanh2802/web03-project.git
   cd web03-project
   ```

2. Install frontend dependencies:

   ```sh
   cd web03-frontend
   npm install --force
   ```

3. Install backend dependencies:

   ```sh
   cd ../web03-backend
   ./gradlew build
   ```

## Environment Variables

Create a `.env` file in the `web03-backend` directory and add the following environment variables:

```properties
DB_URL=jdbc:postgresql://postgres-container:5432/web03database
DB_USERNAME=admin
DB_PASSWORD=admin

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CLIENT_SCOPE=email,profile

JWT_SECRET=your-jwt-secret
JWT_EXPIRE_MS=86400000
```

Create a `.env` file in the `web03-frontend` directory and add the following environment variables:

```properties
NEXTAUTH_URL=your-url
NEXTAUTH_SECRET=your-nextauth-secret

GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## Running the Application

### Frontend

1. Start the frontend development server:

   ```sh
   cd web03-frontend
   npm run dev
   ```

### Backend

1. Start the backend server:

   ```sh
   cd web03-backend
   ./gradlew bootRun
   ```

## Docker

### Building and Running with Docker Compose

1. Build and start the containers:

   ```sh
   docker-compose up
   ```

2. Access the application at `http://localhost:3000`.

## CI/CD Pipeline

The CI/CD pipeline is configured using GitHub Actions. It includes the following workflows:

- **Build and Push Docker Image**: Builds the Docker image and pushes it to GitHub Container Registry.
- **Deploy to Amazon ECS**: Deploys the Docker image to Amazon ECS.

### GitHub Actions Workflow

The GitHub Actions workflow is defined in the `.github/workflows/ci-cd.yml` file.
