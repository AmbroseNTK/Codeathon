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

First, clone this project using git

```bash
    git clone https://github.com/AmbroseNTK/Codeathon
    cd Codeathon
    git submodule update
```

Second, build virtual machine for running user solution

1. Connect to virtual machine or server on GCP (Compute Engine) or any cloud service via SSH
2. Install Docker on this machine

```bash
    sudo snap install docker
```

3. Build the images and run it

```bash
    cd compilebox/Setup
    sudo ./Install_16.04.sh
```

4. Install Nodejs 10

```bash
    curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
    sudo apt install nodejs
```

5. Restore node_modules of the server

```bash
    cd ../API
    sudo npm i
```

6. Create a Firebase project and init the realtime database, then get the firebase admin key .json

7. Rename the key to admin_key.json and upload it to API folder
8. Edit file firebase.js at line 3: Change databaseURL to your firebase database URL

9. Start the backend on port 8989. If you want to serve to the Internet, make sure you allow it to open port 8989.

10. You should secure the connection to this server by using SSL Letsencrypt and NGINX for proxy.

Now the backend available at https://server.yourdomain.com

If you run at the localhost, you can skip step 10.

Next, we config the frontend - Angular app

1. Go to Codeathon folder

2. In Firebase project, add new web app and copy the firebase config, then paste it into environment.prod.ts file at firebase.

3. To enable login with Google function, please go to Firebase Authentication and enable Google provider in Firebase project

4. Add a config for the system on Firebase Realtime Database manually.

```json
{
  "config": {
    "backend": "https://server.yourdomain.com"
  }
}
```

5. Restore all node_modules of Angular project and install Angular CLI

```bash
    sudo npm i
    npm i -g @angular/cli
```

6. If you want to run this app locally, just run

```bash
    ng serve
```

and view the result at http://localhost:4200

7. To build production

```bash
    ng build --prod --aot
```

8. Using Firebase hosting to host the web app

```bash
   sudo npm install -g firebase-tools
   firebase login
   firebase init
   firebase deploy
```

9. View the web app from the link that Firebase provided.

---
