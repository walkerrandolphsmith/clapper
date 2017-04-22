# Clapper

Turn your Hue lights into clap on lights with Tessel.


### Setup

1. Ensure the Hue bridge and lights work normally
1. Install Node
1. Change directory into this project.
1. Run `npm install`

### Configure Hue Brdige

https://www.developers.meethue.com/documentation/getting-started

1. Find the IP address of your Hue Bridge by running `node ./findBrdige`
2. Navigate to the following url in a web broswer `http://<your-ip>/debug/clip.html`
3. Make a POST to the url `/api/` with the following post body where `username` is replace with a provided name
```
{"devicetype":"my_hue_app#iphone username"}
```

### Configuring Tessel

1. `npm install -g t2-cli`
2. `t2 list`
3. `t2 rename clapper`
4. 't2 init'


### Testing Code on Tessel
`t2 run index.js`


### Deploy to Tessel
```t2 push index.js```



### Run
```tessel run index.js```