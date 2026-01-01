# defaults
Default files like configs, settings oder grunt scripts as blueprint for project initializations


## Task Runner

The task runner is implemented via _npm scripts_.

To get a list of all implemented scripts:  
`npm run`



### Trouble Shooting

- npm scripts needs to be executables    
  `chmod +x ./_tasks/foo.js` or  
  `chmod 755 ./_tasks/foo.js`



## Start a new project

- `npm init` to initialize node_modules
- `npm install sass --save-dev`
- `npm install postcss postcss-cli autoprefixer --save-dev`
- `npm install watch --save-dev`

- Verzeichnis `/_tasks` erzeugen
- Script `/_tasks/scss.js`
    - `chmod +x ./_tasks/foo.js` 
- In der package.json die Tasks anlegen
