# 创建

	#cocos
    $ cocos new MyGame -p com.MyCompany.MyGame -l cpp -d ~/MyCompany

    #phonegap
    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add ios
    $ cordova prepare              # or "cordova build"

# 添加插件

	cordova plugin add org.apache.cordova.file

    <gap:plugin name="fork.cordova.file" version="1.2.1" />
    
>> 注意添加完插件后，一定重新build  cordova build ios

# 制作图标

	#icreate
    icreate  -icon:YourBigIcon.png
    icreate  -logo:YourLogo.png -color:#ffffff
    icreate -logo:logo.png -color:#ffffff -l
    icreate  -icon:icon.png   -output:../icons

+ 替换位置

	![Alt text](../archives/QuickFind/images/2014-11-05-01.png)



