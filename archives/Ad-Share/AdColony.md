## AdColony 

+ [package github]（https://github.com/AdColony/AdColony-Unity-SDK）


	// App ID
    appId= "app185a7e71e1714831a49ec7";
    // Video zones
    zoneString = "vz06e8c32a037749699e7050";

	if(AdColony.IsVideoAvailable(zoneString))
    {
        Debug.Log(this.gameObject.name + " triggered playing a video ad.");
        AdColony.ShowVideoAd(zoneString);
    }
    else{
        
    }

## AndroidManifest


	<?xml version="1.0" encoding="utf-8"?>
    <manifest xmlns:android="http://schemas.android.com/apk/res/android"
          package="com.jirbo.unitytest"
          android:versionCode="1"
          android:versionName="1.0">
        <!-- TODO: Replace the 'package' value above to reflect your app's package id. -->
    
        <!-- NOTE: Adjust minSDKVersion and targetSdkVersion as desired. -->
        <uses-sdk android:minSdkVersion="10" android:targetSdkVersion="19" />
    
        <!-- NOTE: You must have at least these four permissions for AdColony. -->
        <uses-permission android:name="android.permission.INTERNET" />
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    
        <application android:label="@string/app_name" android:icon="@drawable/app_icon" android:hardwareAccelerated="true">
            <activity android:name="com.unity3d.player.UnityPlayerNativeActivity"
                      android:configChanges="keyboardHidden|orientation|screenSize"
                      android:label="@string/app_name">
                <intent-filter>
                    <action android:name="android.intent.action.MAIN" />
                    <category android:name="android.intent.category.LAUNCHER" />
                </intent-filter>
    
                <!-- <meta-data android:name="unityplayer.UnityActivity" android:value="true" /> -->
                <meta-data android:name="unityplayer.ForwardNativeEventsToDalvik" android:value="true" />
            </activity>
    
            <!-- NOTE: You must include these three activity specifications for AdColony. -->
            <activity android:name="com.jirbo.adcolony.AdColonyOverlay"
              android:configChanges="keyboardHidden|orientation|screenSize"
              android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />
            <activity android:name="com.jirbo.adcolony.AdColonyFullscreen"
              android:configChanges="keyboardHidden|orientation|screenSize"
              android:theme="@android:style/Theme.Black.NoTitleBar.Fullscreen" />
            <activity android:name="com.jirbo.adcolony.AdColonyBrowser"
              android:configChanges="keyboardHidden|orientation|screenSize"
              android:theme="@android:style/Theme.Black.NoTitleBar.Fullscreen" />
    
        </application>
    </manifest>
