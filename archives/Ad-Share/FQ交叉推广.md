## 梳理

### Step

+ 导入包androidSystemPkg-4-20.unitypackage(修改程序入口包)
+ 导入包FqAds.unitypackage（广告包体）
+ 修改AndroidManifest，修改程序入口
+ 确定player setting 的Bundle identify的值为包名


	<activity
	        android:name="com.feelingtouch.unityandroidsystem.UnityAndroidSystem"
	        android:configChanges="fontScale|keyboard|keyboardHidden|locale|mnc|mcc|navigation|orientation|screenLayout|screenSize|smallestScreenSize|uiMode|touchscreen"
	        android:label="@string/app_name"
	        android:screenOrientation="landscape"
	        android:launchMode="singleTask" >
	    <intent-filter>
	      <action android:name="android.intent.action.MAIN" />
	
	      <category android:name="android.intent.category.LAUNCHER" />
	    </intent-filter>
	  </activity>



+ 

## 模块

+ http://ads.feelingtouch.com:8080/ads-server/felad?pname=com.feelingtouch.totheend
