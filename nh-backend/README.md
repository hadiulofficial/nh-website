<p align="center">
  <a href="https://laravel.com" target="_blank">
    <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo">
  </a>
</p>

<p align="center">
  <a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
  <a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
  <a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
  <a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

# NH Global Education API (Laravel Backend)

This is a Laravel-powered RESTful API backend for **NH Global Education**, designed to handle university listings, student stories, inquiries, and application processes.

---

## 📦 Features

- University listings with detail view
- Country-based filtering
- Student stories
- Inquiry submission
- Application submission & status checking

---

## 📡 API Endpoints

| Method | Endpoint                        | Description                          |
|--------|----------------------------------|--------------------------------------|
| GET    | `/universities`                 | Get list of all universities         |
| GET    | `/universities/{id}`            | Get detailed info of a university    |
| GET    | `/stories`                      | Retrieve success stories             |
| GET    | `/countries`                    | List all countries                   |
| POST   | `/submit-inquiry`               | Submit a student inquiry             |
| POST   | `/submit-application`           | Submit a university application      |
| POST   | `/application-status`           | Check status of an application       |

---

## 🚀 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/therafibhuiyan/nh-backend
   cd nhglobaleducation-api



---

Let me know if you’d like to add environment variable info, Postman collection, or database structure details.
