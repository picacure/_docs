#抽奖模板规范（Mtop接口，coming...）

## 接口

    mtop.wlp.award.doAward

## 输入

    ename: 活动类型

## 输出

    {
       "api" : "mtop.wlp.award.doAward",
       "v" : "2.0",
       "ret" :
       [
          "SUCCESS::调用成功"
       ],
       "data" :
       {
          "name" : "33yuan",
          "rank" : "2",
          "type" : "1",
          "couponFee" : "10"
       }
    }

+ name:
+ rank:
+ type: 1：红包，2：淘金币，3：店铺优惠券，4：集分宝，5：虚拟奖品
+ couponFee：


## 输出业务伪码表示

    if(type == 1){    //红包
        name = "";
        rank = "";
        couponFee＝ "";
    }
    if(type == 2){   //淘金币
        name = "";
        rank = "";
        amount = "";
    }
    if(type ==3)//店铺优惠券
    {
        name = "";
        rank = "";
    }
    if(type == 4)//集分宝
    {
        name = "";
        rank = "";
        amount = ""
    }
    if(type == 5)//虚拟奖品
    {
        name = "";
        rank = "";
    }



