cd ~/l1msn_social
npm run build:prod

rm -rf ~/../var/www/l1msn_social/html
mv ~/l1msn_social/build ~/../var/www/l1msn_social/html