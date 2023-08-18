echo "Start"
hexo clean
git add .
git commit -m "备份"
git push
hexo generate
hexo deploy
echo "Finish"
echo 按任意键继续
read -n 1