# Web3 SAAS Data Labeling Platform

## Overview
This project demonstrates the creation of a full-stack Web3 SAAS application. The application leverages Solana blockchain and Web3.js to build a data labeling platform where users can post data for labeling, typically by individuals in developing nations, and facilitate micro-payments using cryptocurrency. 

## Features
- **Data Labeling Platform:** Allows users to upload data that needs to be labeled and pays workers for labeling this data.
- **Micro-payments with Solana:** Utilizes the Solana blockchain for handling micro-payments efficiently and securely.
- **AWS S3 Storage:** Uses AWS S3 for storing user-uploaded images and generates pre-signed URLs for secure uploads.
- **Full-Stack Implementation:** Built with a Node.js and Express back-end and a React/Next.js front-end.
- **Scalable and Secure:** Designed to handle a large number of users and tasks while maintaining security and efficiency.

## Technology Stack
- **Front-end:** React, Next.js
- **Back-end:** Node.js, Express
- **Blockchain:** Solana, Web3.js
- **Storage:** AWS S3

## Key Components
### 1. Data Labeling Platform
A platform that connects users who need data labeled (e.g., images for machine learning models) with workers who can perform these tasks. 

### 2. Micro-payments with Solana
The application uses the Solana blockchain to handle small payments to workers, ensuring quick and low-cost transactions.

### 3. AWS S3 for Storage
All user-uploaded data is securely stored in AWS S3. The application generates pre-signed URLs for uploading images to ensure that the back-end does not directly handle large files.

### 4. Front-end and Back-end
- **Front-end:** Built with React and Next.js, providing a responsive and dynamic user interface.
- **Back-end:** Implemented using Node.js and Express to handle API requests, user authentication, and interaction with the Solana blockchain.

## Setup and Installation
1. **Clone the Repository**
   ```sh
   git clone https://github.com/zacharias1219/decentralized-fiver.git
   cd decentralized-fiver
   ```

2. **Install Dependencies**
   ```sh
   # Backend
   cd backend
   npm install

   # Frontend (User Front-end and Worker Front-end)
   cd ../user-frontend
   npm install
   cd ../worker-frontend
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the backend directory and add your AWS and Solana credentials:
   ```sh
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   SOLANA_PRIVATE_KEY=your_solana_private_key
   ```

4. **Run the Application**
   ```sh
   # Start Backend
   cd backend
   npm start

   # Start User Frontend
   cd ../user-frontend
   npm run dev

   # Start Worker Frontend
   cd ../worker-frontend
   npm run dev
   ```

## Usage
- **User:** Uploads data to be labeled and sets up tasks.
- **Worker:** Labels the data and receives micro-payments via Solana for each completed task.

## Contributions
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or new features.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
