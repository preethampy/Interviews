# EBS Setup
### Run following commands in terminal
```
sudo apt update
sudo apt install -y python3-pip python3-venv zip unzip
pip3 install --upgrade --user awsebcli
```

### Now add EB CLI to your PATH:
```
echo 'export PATH=$PATH:~/.local/bin' >> ~/.bashrc
source ~/.bashrc
```

### Verify Installation
`eb --version`

# Deploy simple node app

1. cd into your node app
2. Run `eb init -p node.js [application-name] --region [aws-region`. This command creates an application with given name and configures your local repository to create environments with the latest Node.js platform version
3. Run `eb init` again to configure a default key pair so that you can use SSH to connect to the EC2 instance running your application.
4. Then run `eb create [env-name]` to create an environment and deploy your application to it with eb create. Elastic Beanstalk automatically builds a zip file for your application and deploys it to an EC2 instance in the environment. After deploying your application, Elastic Beanstalk starts it on port 8080.
5. When the above process is done, run `eb open` to open your website
6. You can terminate your environment using `eb terminate` when you finish working with your application. Elastic Beanstalk terminates all AWS resources associated with your environment.

# Deploy any updates done in code
1. Do Git Add
2. Do Git commit
3. Run `eb deploy`

# Checking logs
When you are in project folder, run `eb logs` to get the logs

# How to SSH into EBS env (EC2)
1. In project level terminal, run `ssh setup`
2. Proceed to give the inputs asked
3. If you cant find the key-pair in the eb cli when setting up ssh, go to aws and create a new keypair and download it
4. Move the downloaded file into `.ssh` folder
5. Run `chmod 400 ~/.ssh/[your ssh file name].pem`
6. Run `eb ssh`