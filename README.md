# Launchpad  API
## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.
Also create the .env file and add environment variables as mentioned below.

```sh
git clone git@github.com:devansh016/launchpad-api.git
npm install
npm start
```

## Environment Variable Required

```sh
MONGODB_URL = mongodb+srv://userid:password@clusterx.xxxxx.mongodb.net/launchpad?retryWrites=true
```

Your app should now be running on [localhost](http://localhost/) at port 80.

## API endpoints

**Search Launchpad**
----
Gets all launchpad if no params used. Filter also available

* **URL**

  /launchpad

* **Method:**
 
  `GET`
  
*  **URL Params**

   **Optional:**
 
   `launchpadId=[alphanumeric]`
    `name=[alphanumeric]`
   `active=[boolean]`
   `company=[alphanumeric]`
   `availability.start=[date]`
   `availability.end=[date]`
   `location.city=[alphanumeric]`
   `location.country=[alphanumeric]`
   `location.state=[alphanumeric]`
   
**Get Launchpad with particular ID**
----

* **URL**

  /launchpad/:launchpadId

* **Method:**
 
  `GET`
  
 **Add a Launchpad**
----

* **URL**

  /addLaunchpad

* **Method:**
 
  `POST`
   
