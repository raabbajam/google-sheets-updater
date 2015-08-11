# Google Sheets Updater

Update google sheets daily

## How to use

```
git clone https://github.com/raabbajam/google-sheets-updater.git
cd google-sheets-updater
npm i
cp sample.env .env

# use your favorite editor to fill the required credentials
vim .env

node .
```

## Upload you pem certificate

If you run this scheduler on remote server, you can use this command to upload it from local to you server.

```
scp key.pem pluto:/home/raabbajam/google-sheets-updater
```

## How to schedule this daily

```
#write out current crontab
crontab -l > mycron

#echo new cron into cron file
#set daily job except on sunday
echo "30 15 * * 1-6 node `pwd`" >> mycron

#install new cron file
crontab mycron
rm mycron
```
