---
title: git 常规操作 windows版
---
首先在本地建立好文件夹，然后初始化git仓库：

	git   init
接下来在github上面克隆项目：

	git clone   这里写你的项目地址
然后就可以修改，删除，提交代码了

 

#### 如果需要在新分支上面开发：

查看远程分支：

	git branch -a                 可以查看远程分支，远程分支会用红色表示出来
	
 如果没有找到   可以试试：

	git fetch 
	git pull
或者没有分支的话  可以创建一个分支，用来开发：

	#这一步是建立本地的分支，建立好之后，
	#需要推送一次就会在远端建立一个对应的分支了
	git checkout -b 分支名字     等同于 git branch 分支名字  git checkout 分支名字     
开发完成了之后：我们提交在我们的分支上去：

	git add 文件名字
然后切回我们的主要分支，一般默认为 master：

	git checkout master
最后我们需要合并这两个分支：

	git merge 刚才我们新建的分支名字
合并完成后（记得要**推送**一次），我们就可以删除分支了：

	git branch -d dev
然后再删除远端的分支：

	git push --delete origin 分支名字