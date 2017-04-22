# Clapper

Turn your Hue lights into clap on lights with Tessel.


### Setup

1. Ensure the Hue bridge and lights work normally
1. Install Node
1. Change directory into this project.
1. Run `npm install`

### Configure Hue Bridge

https://www.developers.meethue.com/documentation/getting-started

1. Find the IP address of your Hue Bridge by running `node ./setup/getAddress.js`
2. Navigate to the following url in a web broswer `http://<your-ip>/debug/clip.html`
3. Make a POST to the url `/api/` with the following post to get a userId
```
{"devicetype":"my_hue_app#iphone clapper"}
```
4. Get the id of the light you want to turn into a clapper by running
 `node ./setup/getLightId.js <your-userId>` The results should contain the lights known by the bridge and we want to 
 grab the `uniqueid` with the format "XX:XX:XX:XX:XX:XX:XX:XX-XX".


### Configure clapper
Now using the `username` and `lightId` from steps 3 and 4 in Configure Hue Bridge
run `node ./setup/ <your-userId> <your-lightId>` to generate a `env.json` file like the one shown below:
```
{
  "HUE_HOST": "X.X.X.X",
  "HUE_USER": "XXXXXXXXXXXX",
  "BEDROOM_LIGHT": "XX:XX:XX:XX:XX:XX:XX:XX-XX"
}
```


### Configuring Tessel

1. `npm install -g t2-cli`
2. `t2 list`
3. `t2 rename clapper`
4. `t2 init`


### Testing Code on Tessel
`t2 run index.js`


### Deploy to Tessel
`t2 push index.js`