
# tastee-npm
executable npm module for tastee 

<img src="https://tastee.github.io/img/home.png"/>

# Usage

## Install Tastee
```
git clone https://github.com/tastee/tastee-npm.git 
cd tastee-npm 
npm uninstall -g tastee
npm install -g 
```

## Launch Tastee
```
tastee -b <browser> -o <output> -r <extract> -e <headless> -l <logLevel> <FOLDER>
```
<browser>  is chrome or firefox.
<output>   is the path of the directory where the final report is generated.
<extract>  is the name of the extractor used. For now, it can only be html.
<headless>  enable headless mode for chrome and firefox. (default is false).
<logLevel>  set log level (error|warn|info|verbose|debug|silly) default error, use debug to see executed instructions.
<FOLDER>   is a directory containing the following tastee files OR just a file.

## Example
```
tastee -b firefox starting-tastee.html 
tastee -b chrome /tmp 
tastee -b chrome -r html /tmp 
tastee -b chrome -r html -o /tmp/report/ ../tastee_folder 
tastee -b chrome -r html -o /tmp/report/ -e true ../tastee_folder 
tastee -b chrome -r html -o /tmp/report/ -e true -l debug ../tastee_folder 
```
