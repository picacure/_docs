# 对应文件.

	Script/User/CarAssembly.cs

# 已有数据结构

	//com.feelingtouch.littlerace
    enum MoneyType{
         gold,          //高级
         cash,          //低级
    }

    //com.ft.lr.car
    enum Series{
         B,
         A,
         S
    }
	enum CarAttributeType {
		MaxSpeed = 0,
		Accelerate = 1,
		Handling = 2,
		Weight = 3,
	}
	enum DecorationType {
		Color = 0,
		Decal = 1,
		Tire = 2,
		Soplier = 3,
		CarLamp = 4,
		Nitrogen = 5,
	}


## 单例
	CarDataObject:
    id:int       
    series:Series            
    name:string          
    
    GetBuyCost(MoneyType m):int     买车花多少        
    waitTime:int     取车花多少时间
    
    GetAttributeMaxLevel(CarAttributeType  type):int               每个属性最大可升等级
    GetAttributeValue(CarAttributeType  type，int level):float     各属性各等级的数值（level=0为基础数值）
    GetUpgradeCost(CarAttributeType  type,int level,MoneyType mType):int    升到某级的花费（高级或低级）
    GetUpgradeWaitTime(CarAttributeType  type,int level):int                    升级type属性到level级等待多少时间
    
    GetDecorationChoice(DecorationType type):List<int>                        type类型装饰有哪些选择，id
    GetDecorationCost(int id,MoneyType type):int                                        装饰价格
    
    GetEvolveCost(MoneyType type):int                                          进阶结果
    GetEvolveWaitTime():int                                        进阶等待时间                            
    
