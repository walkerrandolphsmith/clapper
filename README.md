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
4. Add lights to a group named `CLAPPER` using the Hue app.


### Configure clapper
Now using the `username` from steps 3 in Configure Hue Bridge
run `node ./setup/ <your-userId>` to generate a `env.json` file like the one shown below:
```
{
  "HUE_HOST": "X.X.X.X",
  "HUE_USER": "XXXXXXXXXXXX",
  "GROUP_NAME": "CLAPPER"
}
```


### Configuring Tessel

1. `npm install -g t2-cli`
2. `t2 list`
3. `t2 rename clapper`
4. `t2 init`
# Add tessel to the same local network as your hue bridge
5.  `t2 wifi -n <network-name> -p <password>`

### Testing Code on Tessel
`t2 run index.js`


### Deploy to Tessel
`t2 push index.js`