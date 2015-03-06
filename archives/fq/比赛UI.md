## 避免接口过多,职责过多.

![Alt text](../archives/fq/images/2014-10-27-01.JPG)




+ LRaceController.js  跨过RaceUIView 访问到RacingUIView，RaceEndView，RaceCountDownView三个接口

```
_uiView = new GameObject("UI").AddComponent<RaceUIView>();
_uiView.transform.localPosition = new Vector3(0, 0, 0);
//_uiView.racingUI.createplayers(networkcenter.instance.roominfo.players);
//_uiView.racingUI.CreatePlayers();
//_uiView.endView.onClickBack=delegate() {
//    NetworkCenter.Instance.LeaveRoomSync();
//};
```



+ RacingUIView.js

```
Sprite avatar=SpriteAssetManager.GetAvatarByID(players[i].Info.AvatarID);
RacingProgressView.ItemInfo info=new RacingProgressView.ItemInfo(avatar,i,0f,i==0);
infos.Add(info);
_uidToIndex.Add(players[i].Info.UserID,i);
```



+ RacingUIController.js 只和 RacingUIView做了关联
    
![RacingUIController.js 只和 RacingUIView做了关联](../archives/fq/images/2014-10-27-02.JPG)


	
	
+ AvatarView 改造成通用SpriteView？？




+ 去掉RacingUIView

![Alt text](../archives/fq/images/2014-11-13-01.png)




![Alt text](../archives/fq/images/2014-11-13-02.png)



>> 在LRController里 做一次数据的重组，UI需要的数据，和CarAssembly，LCar本身定义的数据不是整齐对应，需要做一次数据重组.

+ 进一步，从LRController里面分离出LCarSync,用于比赛赛车之间的车位置，转动信息的同步。

