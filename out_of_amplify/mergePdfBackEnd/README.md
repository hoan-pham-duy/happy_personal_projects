Install with Zappa

python3 -m pip install virtualenv

virtualenv -p python3 env

source env/bin/active

python3 -m pip install -r requirements.txt

zappa deploy <env_name>  (in zappa_settings.json)
example:
    zappa deploy production

If deployed -> zappa update <env_name>
    zappa update production

Need go to API -> Enable CORS

Need go to Lambda Function, Add a Lambda Layer
        arn:aws:lambda:ap-southeast-1:764866452798:layer:ghostscript:8