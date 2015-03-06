## android ADK

+ Accessory Development Kit
+ Accessories use the Android Open Accessory (AOA) protocol to communicate with Android devices
+ over a USB cable or through a Bluetooth connection

### ADB

+ Android Debug Bridge (adb) is a versatile command line tool that lets you communicate with an emulator instance or connected Android-powered device. 
+ [Link](http://developer.android.com/tools/help/adb.html#logcat)

## android SDK

+ C:\Users\JiangC\AppData\Local\Android\sdk


## AVD(Android virtual devices)

+ [Link](http://developer.android.com/tools/devices/managing-avds.html)

## JDK,JRE 

+ 32bit or 64bit

## Activity

	

## 调试

+   adb logcat -s Unity　　[LINK](http://forum.unity3d.com/threads/any-tips-for-debugging-android.70197/)
	To limit it to only show the output from inside Unity, you can try this
	
+   adb logcat

	and it will start printing out everything that is going on on the device. 
	
+   Win32Exception  -source 1.6 -target 1.6

	[Solution](https://github.com/playgameservices/play-games-plugin-for-unity/issues/3)
	
	
+   After installing the .APK I see the app icon twice

	<category android:name="android.intent.category.LAUNCHER" /> 出现2次
	
+   工具方面可以选择Eclipse+ ADT插件进行输出日志跟踪  [LINK](http://developer.android.com/sdk/installing/installing-adt.html#Troubleshooting)