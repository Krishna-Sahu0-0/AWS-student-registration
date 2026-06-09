# Student Registration System

A modern, responsive web application for managing student registrations with seamless cloud integration.

**Live Website:** http://student-registration-dynamodb.s3-website.ap-south-1.amazonaws.com

> ⚠️ **Note:** The AWS resources for this project have been deleted to manage costs as a student. The website URL above is no longer active. This repository serves as documentation of the project architecture and implementation.

---

## 🎯 Overview

The **Student Registration System** is a full-stack web application designed to facilitate efficient student enrollment and data management. Users can register new students, view existing records, and manage student information through an intuitive user interface.

---

## 🏗️ Architecture & Infrastructure

### **☁️ Cloud Deployment: AWS**

This project is **hosted and deployed on Amazon Web Services (AWS)** with the following components:

| Component | Service | Purpose |
|-----------|---------|---------|
| **Database** | **AWS DynamoDB** | NoSQL database for persistent student data storage |
| **API Gateway** | **AWS Lambda + API Gateway** | Serverless backend for API endpoints |
| **Endpoint** | **API Gateway** | RESTful API for frontend-backend communication |

### **Database Highlights**
- ✅ **AWS DynamoDB** - Fully managed NoSQL database
- ✅ **Scalable** - Automatically scales with demand
- ✅ **Highly Available** - Multi-region support and automatic backups
- ✅ **Cost-Efficient** - Pay-per-request pricing model

---

## 🚀 Features

- **Student Registration** - Register new students with ID, name, course, and email
- **Data Retrieval** - View all registered students in a structured table format
- **Real-time Updates** - Instant data synchronization with DynamoDB backend
- **Responsive Design** - Works seamlessly across devices
- **Professional UI** - Clean and intuitive user interface

---

## 📋 Technical Stack

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling and responsive design
- **JavaScript (ES6+)** - Dynamic functionality and API interactions

### Backend & Database
- **AWS Lambda** - Serverless compute for API handlers
- **AWS API Gateway** - RESTful API management
- **AWS DynamoDB** - NoSQL database for data persistence

---

## 📁 Project Structure

```
Student Registration System/
├── index.html          # Main HTML document
├── script.js           # JavaScript logic and API calls
├── style.css           # Styling and layout
└── README.md           # Project documentation
```

---

## 🛠️ Setup & Installation

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for AWS API access

### Getting Started

1. **Open the application**
   ```
   Open index.html in your web browser
   ```

2. **Register a Student**
   - Fill in the registration form with:
     - Student ID
     - Student Name
     - Course Name
     - Email Address
   - Click "Register Student" button
   - Confirmation message will appear

3. **View Students**
   - Click "View Students" button
   - All registered students will be displayed in a table

---

## 🔌 API Integration

The frontend communicates with a secure AWS Lambda API endpoint:

```
Endpoint: https://e8beb2ilpj.execute-api.ap-south-1.amazonaws.com/students
Region: AP South 1 (Mumbai)
Database: AWS DynamoDB
```

### API Operations

| Operation | Method | Endpoint | Purpose |
|-----------|--------|----------|---------|
| Register Student | POST | `/students` | Create new student record in DynamoDB |
| Fetch Students | GET | `/students` | Retrieve all students from DynamoDB |

---

## 💾 Data Storage

Student records are stored in **AWS DynamoDB** with the following attributes:

```json
{
  "studentId": "unique identifier",
  "name": "student name",
  "course": "course name",
  "email": "student email"
}
```

---

## 🔒 Security & Best Practices

- ✅ Secured API Gateway endpoints
- ✅ AWS Lambda execution roles with least privilege
- ✅ DynamoDB encryption at rest and in transit
- ✅ Input validation on client-side

---

## 📈 Scalability

The application leverages AWS's managed services for automatic scaling:
- **DynamoDB** automatically scales read/write capacity
- **Lambda** handles concurrent requests without configuration
- **API Gateway** manages traffic and request throttling

---

## 🤝 Contributing

For contributions or bug reports, please submit a pull request or create an issue.

---

## 📜 License

This project is provided as-is for educational and development purposes.

---

## 📞 Support

For issues or questions related to:
- **Frontend**: Review script.js and index.html
- **Backend**: Check AWS Lambda and API Gateway configurations
- **Database**: Verify DynamoDB table setup and permissions

---

**Last Updated:** June 2026  
**Deployment Status:** ✅ Active on AWS  
**Database:** ✅ AWS DynamoDB
