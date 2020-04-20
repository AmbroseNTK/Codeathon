# Codeathon

_Online Coding Platform_

The project of Developer Student Clubs of Hoa Sen University paticipated in **Solution Challenge 2020**

---

## 1. What is Codeathon?

**Codeathon** is an open platform to sharing and working on the challenge in programming, algorithms,... It is built for the beginner and IT students who learn how to code and want to improve coding skill by solving coding challenge.

**Coding challenge** is the programming problems in mathematics, algorithms, data stuctures,... Specially, everybody can post their challenge to the community and other people try to solve these problem and share to others.

## 2. Why we build Codeathon?

For the first reason, it helps the students in our community improve their coding skill. Some student post the challenge as their homework and others can help them. Others want to sharpen problem solving, coding skill,... We can see it has two way advantages to people who post the challenges and solve the them.

The second reason, we have build the long term planning to expand the platform in the core principles. So, the companies or organizations can use it as a solution for hiring new high quality employee, be an interview tool, creating coding competition, etc.

## 3. What we have done at Solution Challenge 2020

We have done some basic functions for the first reason at this time and we have already hosted it online for our community.
For the first time we operating this platform, a lot student in our university have used it for posting challenge and solving challenge. The first version of the platform still contains a lot disavantages, but we are keeping to move forward.

---

## 4. Technologies stack we have used in this platform

The platform has two sub-projects. The first one is the backend which has been built with:

1. NodeJS
2. Docker to create virtual machine
3. Firebase Admin for user management
4. Firebase Hosting for hosting the web app
5. Firestore for storing data

To be honest, Google Cloud Platform has provided a lot of services for our project such as Cloud Compute Engine, App Engine and it really useful and make our project is more easier. Unfortunatelly, we do not have enough credits to run our backend on GCP in the long time, so we have moved our backend to others VPS which is low cost.

In a nut shell, the backend server manages the virtual machine for running user solutions. It is very importance to isolate the user's code environemnt because it may contain dangerous code for our server.
Beside managing new challenge posted by user, the backend runs user's code with the test cases defined in the challenges and evalutes the result.

The second one is the frontend project, we have built the web app with Angular. This app will interact with backend and serve the users.
At this time, the app have these functions:

1. Login with Google
2. View his/her profile and other's profile
3. Post and manage their challenges
4. Explore existed challenge
5. Read and submit solution to the challenges.
6. Leaderboard for every challenge.

In the first versions, these functions are enough for testing and surveying the acceptant from the community. Accroding to the community's feedback we will improve the platform day by day.

---

## 5. Self-hosted tutorial

We will describe how to hosting the backend and the frontend of the platform step by step.

---
