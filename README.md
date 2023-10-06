# Fire API

## Overview

The Fire API provides endpoints to collect and provide fire-related information. It is a critical component of our firify system, assisting in the monitoring and management of fire incidents.

## Endpoints

### Collect Fire Information

- **Method**: POST
- **Path**: `/api/fire/collect`
- **Description**: Collect fire-related information to be stored in the system.
- **Request Body**:
  - Provide necessary parameters for fire data collection.
- **Response**:
  - Status: 200 OK
  - Body: JSON response with a success message and details of collected fire information.

### Provide Fire Information

- **Method**: GET
- **Path**: `/api/fire/provide`
- **Description**: Retrieve fire-related information from the system.
- **Response**:
  - Status: 200 OK
  - Body: JSON response with fire information.

# Messaging API

The Messaging API provides endpoints to send SMS and WhatsApp messages. It's an essential feature of our system, allowing users to communicate seamlessly.

## Endpoints

### Send SMS

- **Method**: POST
- **Path**: `/api/messaging/sms`
- **Description**: Send an SMS message.
- **Request Body**:
  - `recipient` (string, required): The recipient's phone number.
  - `message` (string, required): The message to send.
- **Response**:
  - Status: 200 OK
  - Body: JSON response with a success message and message details.

### Send WhatsApp Message

- **Method**: POST
- **Path**: `/api/messaging/whatsapp`
- **Description**: Send a WhatsApp message.
- **Request Body**:
  - `recipient` (string, required): The recipient's phone number.
  - `message` (string, required): The message to send.
- **Response**:
  - Status: 200 OK
  - Body: JSON response with a success message and message details.

# Data Retrieval API

The Data Retrieval API provides endpoints to fetch data from social media platforms and NASA for specific purposes in our application.

## Endpoints

### Fetch Social Media Data

- **Method**: GET
- **Path**: `/api/data/social-media`
- **Description**: Fetch data from social media platforms related to our application.
- **Response**:
  - Status: 200 OK
  - Body: JSON response with relevant social media data.

### Fetch NASA Data

- **Method**: GET
- **Path**: `/api/data/nasa`
- **Description**: Fetch data from NASA for specific purposes in our application.
- **Response**:
  - Status: 200 OK
  - Body: JSON response with relevant NASA data.


## Usage

1. Clone this repository.
2. Install necessary dependencies using `npm install`.
3. Run the server using `npm start`.
4. Access the Fire API using the defined endpoints.
