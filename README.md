# SkillSwap Backend

## Project Overview

The SkillSwap Backend provides RESTful APIs for managing user profiles and skill-related operations for the SkillSwap platform.

This server handles:

- Profile creation and retrieval
- Supabase database integration
- JSON request handling
- CORS configuration for frontend communication
- Secure environment variable management

The backend is deployed and publicly accessible for production use.

---

## Tech Stack

- Node.js – Runtime environment  
- Express.js – Backend framework  
- Supabase – Database provider  
- CORS – Cross-origin resource handling  
- dotenv – Environment variable management  
- Render – Deployment platform  

---

## API Documentation

### Base URL
https://skillswap-backend-tijq.onrender.com


---

### Root Endpoint

**GET /**  
Checks if the backend server is running.

Response:
Backend Running ✅


---

#### Profiles Table

id (int8, Primary Key, auto-incremented)

name (Text)

email (Text)

skills (Text / JSON)

created_at (Timestamp, default now())


#### Schema Logic

Each profile represents a user.

The id field is automatically generated as an incrementing BIGINT.

Data is securely accessed using Supabase Service Role Key stored in environment variables.

Installation Steps

Clone the repository
git clone https://github.com/your-username/skillswap_backend.git

Navigate into the project folder
cd skillswap_backend

Install dependencies
npm install


Start the server

Development mode:

npm run dev


Production mode:

npm start


Server runs at:

http://localhost:5000


Deployment Link

The backend is deployed on Render.

Live URL:

https://skillswap-backend-tijq.onrender.com


### Profiles API

Base Route:
/api/profiles


#### GET /api/profiles
Fetch all profiles from the database.

#### POST /api/profiles
Create a new profile.

Example Request Body:

```json
{
  "name": "Anshika",
  "email": "anshika@email.com",
  "skills": "Frontend Development"
}

