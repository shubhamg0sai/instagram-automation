g='\033[1;32m'
p='\033[1;35m'
apt install nodejs
apt install nodejs-lts
clear
echo -e "\033[1;32m"
echo "N[1] press 1 for main menu "  
echo "N[2] update tool "  
echo "N[3] follow me "
echo "N[0] exit "
echo ""
echo -e "$p"
read -p  "num--> " N


if [ "$N" -eq "1"  ]; then
 clear
 clear
 echo -e $g 'Please Wait ===+['$p'>              '$g']\'
 sleep 0.4
 chmod +x * index.js
 clear
 echo -e $g 'Please Wait ===+['$p'-------------> '$g']\'
 sleep 0.4
 npm i
 clear
 echo -e $g 'Please Wait ===+['$p'-------------->'$g']|'
 sleep 0.4
 npm audit fix
 clear 
 echo -e "$g+++++++++++++++>$p[Please Wait]$g<++++++++++++++"
 sleep 0.4
 npm audit
 clear
 echo -e "$g+++++++++++>[$pWelcome to the new update$p$g]<+++++++++++++"
 sleep 2 
 node index.js


elif [ "$N" -eq "2"  ]; then
 cd
 clear
 termux-setup-storage
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
 sleep 0.4
 cd
 rm -rf instagram-automation
 git clone https://github.com/ShuBhamg0sain/instagram-automation.git
 cd instagram-automation
 chmod +x install.sh
 ./install.sh
 





elif [ "$N" -eq "3"  ]; then
 cd
 clear
 termux-setup-storage
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
 sleep 0.4
 cd
 git clone https://github.com/ShuBhamg0sain/SGsetup
 cd SGsetup
 cd Shubham
 cd Gosai
 cd Setup
 chmod +x * cctv.sh
 clear
 echo -e "$g+++++++++++>[$pWelcome to the new update$p$g]<+++++++++++++"
 sleep 2 
 bash cctv.sh
echo "    {Ctrl C} exit "
 sleep 2
 cd
 git clone https://github.com/ShuBhamg0sain/SGsetup
 cd SGsetup
 bash Sg.sh






elif [ "$N" -eq "4"  ]; then
 cd
 clear
 termux-setup-storage
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
 sleep 0.4
 cd
 git clone https://github.com/ShuBhamg0sain/SGsetup
 cd SGsetup
 cd Shubham
 cd Gosai
 cd Setup
 chmod +x * facebook.sh
 clear
 echo -e "$g+++++++++++>[$pWelcome to the new update$p$g]<+++++++++++++"
 sleep 2 
 bash facebook.sh

elif [ "$N" -eq "0"  ]; then
 cd
 echo -e "$g+++++++++++++++>$p[Please Wait]$g<++++++++++++++"
 sleep 0.4
 cd
 exit
 cd $HOME
 clear
 sleep 2


else :
 bash install.sh
fi
