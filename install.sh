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
 echo -e $g 'Please Wait requirements installing +['$p'>-'$g']\'
 sleep 0.4
 echo -e $g 'Please Wait requirements installing +['$p'>--'$g']\'
 sleep 0.4
 echo -e $g 'Please Wait requirements installing +['$p'>---'$g']\'
 sleep 0.4
 echo -e $g 'Please Wait requirements installing +['$p'>----'$g']\'
 sleep 0.4
 echo -e $g 'Please Wait requirements installing +['$p'>------'$g']\'
 sleep 0.4
 echo -e $g 'Please Wait requirements installing +['$p'>-----'$g']\'
 sleep 0.4
 echo -e $g 'Please Wait requirements installing +['$p'>----'$g']\'
 sleep 0.4
 echo -e $g 'Please Wait requirements installing +['$p'>---'$g']\'
 sleep 0.4
 echo -e $g 'Please Wait requirements installing +['$p'>--'$g']\'
 sleep 0.4
 echo -e $g 'Please Wait requirements installing +['$p'>-'$g']\'
 sleep 0.4
 clear
 echo -e $g 'Please Wait .....\n'
 sleep 0.4
 apt install nodejs
 clear
 apt install nodejs-lts
 clear
 chmod +x * index.js
 clear
 npm i
 clear
 npm audit fix
 clear
 npm audit
 clear
 echo -e $g 'Please Wait.....\n'
 sleep 0.5
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
