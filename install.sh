g='\033[1;32m'
p='\033[1;35m'
clear
echo -e "\033[1;32m"
echo "N[1] press 1 for main menu "  
echo "N[2] update tool "  
echo "N[3] follow me "
echo "N[0] exit "
echo ""
echo -e "$p"
read -p  "--> " N


if [ "$N" -eq "1"  ]; then
 clear
 clear
 echo -e $g 'Please Wait requirements installing ===+['$p'>              '$g']\'
 sleep 2
 apt install nodejs
 clear
 echo -e $g 'Please Wait requirements installing ===+['$p'>              '$g']\'
 sleep 2
 apt install nodejs-lts
 clear
 echo -e $g 'Please Wait requirements installing ===+['$p'>              '$g']\'
 sleep 2
 chmod +x * index.js
 echo -e $g 'Please Wait all requirements installing ===+['$p'>              '$g']\'
 sleep 25
 npm i
 clear
 echo -e $g 'Please Wait all requirements installing ===+['$p'>              '$g']\'
 sleep 15
 npm audit fix
 clear
 echo -e $g 'Please Wait all requirements installing ===+['$p'>              '$g']\'
 sleep 10
 npm audit
 clear
 echo -e $g 'Please Wait all requirements installing ===+['$p'>              '$g']\'
 sleep 2
 node index.js



elif [ "$N" -eq "2"  ]; then
 cd
 clear
 clear
 echo -e $g 'Please Wait ===+['$p'>              '$g']\'
 sleep 0.4
 clear
 echo -e $g 'Please Wait ===+['$p'-------------> '$g']\'
 sleep 0.4
 clear
 echo -e $g 'Please Wait ===+['$p'-------------->'$g']|'
 sleep 0.4
 clear 
 echo -e "$g+++++++++++++++>$p[Please Wait]$g<++++++++++++++"
 sleep 2
 cd
 cd
 sleep 1
 rm -rf package.json package-lock.json instagram-automation
 rm -rf package.json package-lock.json instagram-automation
 rm -rf package.json package-lock.json instagram-automation
 cd
 git clone https://github.com/ShuBhamg0sain/instagram-automation.git
 cd instagram-automation
 chmod +x install.sh
 ./install.sh
 


elif [ "$N" -eq "3"  ]; then
 clear
 cd insta
 python2 insta.py



elif [ "$N" -eq "0"  ]; then
 cd
 echo -e "$g+++++++++++++++>$p[Please Wait]$g<++++++++++++++"
 sleep 0.4
 cd
 exit
 clear
 sleep 2



else :
 bash install.sh
fi
