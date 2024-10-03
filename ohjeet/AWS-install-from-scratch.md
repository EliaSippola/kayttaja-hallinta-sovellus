### AWS ec2 instance install from scratch

Launching the app to ec2 Debian / Ubuntu instance

1. create instance with Ubuntu / Debian

2. Create SSH connection to 

2. follow the guide at https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/setting-up-node-on-ec2-instance.html for node installation

*Or just check https://nodejs.org/en/download/package-manager/current for linux installation*

3. Install git with command `apt-get install git`

For other versions of linux, check https://git-scm.com/download/linux

You can also copy the files different way if you want.

4. Create folder for node in `/var/node`
    1. Go to root directory with command `cd /`
    2. Move to `/var` with command `cd var`
    3. Create directory with commad `sudo mkdir node`

5. Copy git repository to `/var/node`

Check github for the link. Use command `git clone <url>`

6. Follow the rules at `installation.md`.

**You might need to login on sudo account**
You can use command `sudo -i` to login on sudo

**Rember to open the port you are opening the service at in AWS instance**

**Frontend does not support other ports than 3000 yet**
