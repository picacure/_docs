## Vungle

+ [官网](https://v.vungle.com/dashboard)


>>>  Error building Player: Win32Exception: ApplicationName='C:\Program Files (x86)\Java\jre7\bin\javac.exe', 
CommandLine='-bootclasspath "C:/Users/JiangC/AppData/Local/Android/android-sdk/platforms/android-21\android.jar" -d "C:\fq\2theend\Temp\StagingArea\bin\classes" -source 1.6 -target 1.6 -encoding UTF-8 "com\feelingtouch\totheend\R.java" "com\google\android\gms\R.java"', CurrentDirectory='C:\fq\2theend\Temp\StagingArea\gen'

>>>  [Solution](https://github.com/playgameservices/play-games-plugin-for-unity/issues/3)


## AndroidManifest

	<?xml version="1.0" encoding="utf-8"?>
    <manifest xmlns:android="http://schemas.android.com/apk/res/android" package="com.unity3d.player" android:installLocation="preferExternal" android:theme="@android:style/Theme.NoTitleBar" android:versionCode="1" android:versionName="1.0">
      <supports-screens android:smallScreens="true" android:normalScreens="true" android:largeScreens="true" android:xlargeScreens="true" android:anyDensity="true" />
      <application android:icon="@drawable/app_icon" android:label="@string/app_name" android:debuggable="true">
        <activity android:name="com.unity3d.player.UnityPlayerProxyActivity" android:launchMode="singleTask" android:label="@string/app_name" android:configChanges="fontScale|keyboard|keyboardHidden|locale|mnc|mcc|navigation|orientation|screenLayout|screenSize|smallestScreenSize|uiMode|touchscreen">
          <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
          </intent-filter>
        </activity>
        <activity android:name="com.unity3d.player.UnityPlayerActivity" android:launchMode="singleTask" android:label="@string/app_name" android:configChanges="fontScale|keyboard|keyboardHidden|locale|mnc|mcc|navigation|orientation|screenLayout|screenSize|smallestScreenSize|uiMode|touchscreen">
        </activity>
        <activity android:name="com.unity3d.player.UnityPlayerNativeActivity" android:launchMode="singleTask" android:label="@string/app_name" android:configChanges="fontScale|keyboard|keyboardHidden|locale|mnc|mcc|navigation|orientation|screenLayout|screenSize|smallestScreenSize|uiMode|touchscreen">
          <meta-data android:name="unityplayer.ForwardNativeEventsToDalvik" android:value="true" />
        </activity>
        <activity android:name="com.vungle.publisher.FullScreenAdActivity" android:configChanges="keyboardHidden|orientation|screenSize" android:theme="@android:style/Theme.NoTitleBar.Fullscreen" />
        <service android:name="com.vungle.publisher.VungleService" android:exported="false" />
        <meta-data android:name="com.google.android.gms.version" android:value="@integer/google_play_services_version" />
      </application>
      <uses-permission android:name="android.permission.INTERNET" />
      <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
      <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
      <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    </manifest>
    
