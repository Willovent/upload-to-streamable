# Upload to Steamable

This project aim to add a simple way to upload your videos to [streamable.com](https://streamable.com/).

It's base on the [streamable documentation](https://streamable.com/documentation) and powered by node.js.

## Setup
 1. Clone this repository 
 ```bash
 git clone https://github.com/Willovent/upload-to-streamable.git
 ```
 2. intall node dependencies
 ```bash
 npm install
 ```
 3. Edit the file `index.js` to put your own streamable credientials
 ```javascript
let username = "YourUsername";
let password = "YourPassword";
 ```
4. Edit the file `add-context-menu.reg` to put the right path to the project 
```r
[HKEY_CLASSES_ROOT\*\shell\streamable\command]
@="\"C:\\Program Files\\nodejs\\node.exe\" \"\\Path\\to\\Project\" \"%1\""
```
5. Run the file `add-context-menu.reg` to add the context menu. 
6. You're all done ! 

![upload to streamable](https://i.imgur.com/ny5aqDS.png)