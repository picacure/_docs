
## 前言

zero 坐在餐桌前，机械的重复“夹菜 -> 咀嚼 -> 吞咽”的动作序列，脸上用无形的大字写着：我心不在焉。在他的对面坐着 Solmyr ，慢条斯理的吃着他那份午餐，维持着他一贯很有修养的形象 ——— 或者按照 zero 这些熟悉他本质的人的说法：假象。
“怎么了 zero ？胃口不好么？”，基本填饱肚子之后，Solmyr 觉得似乎应该关心一下他的学徒了。
“呃，没什么，只是 …… Solmyr ，C++ 为什么不支持垃圾收集呢？（注：垃圾收集是一种机制，保证动态分配了的内存块会自动释放，Java 等语言支持这一机制。）”
Solmyr 叹了口气，用一种平静的眼神盯着 zero ：“是不是在 BBS 上和人吵 C++ 和 Java 哪个更好？而且吵输了？我早告诉过你，这种争论再无聊不过了。”
“呃 …… 是”，zero 不得不承认 ——— Solmyr 的眼神虽然一点也不锐利，但是却莫名其妙的让 zero 产生了微微的恐惧感。
“而且，谁告诉你 C++ 不支持垃圾收集的？”
“啊！Solmyr 你不是开玩笑吧？！”
“zero 你得转变一下观念。我问你，C++ 支不支持可以动态改变大小的数组？”
“这 …… 好象也没有吧？”
“那 vector 是什么东西？”
“呃 ……”
“支持一种特性，并不是说非得把这个特性加到语法里去，我们也可以选择用现有的语言机制实现一个库来支持这个特征。以垃圾收集为例，这里我们的任务是要保证每一个被动态分配的内存块都能够被释放，也就是说 ……”，Solmyr 不知从哪里找出了一张纸、一支笔，写到：
int* p = new int； // 1 delete p； // 2
“也就是说，对于每一个 1 ，我们要保证有一个 2 被调用，1 和 2 必须成对出现。我来问你，C++ 中有什么东西是由语言本身保证一定成对出现的？”
“……”，zero 露出了努力搜索记忆的表情，不过很明显一无所获。
“提示一下，和类的创建有关。”
“哦！构造函数与析构函数！”
“正确。可惜普通指针没有构造函数与析构函数，所以我们必须要写一个类来加一层包装，最简单的就象这样：”


	class my_intptr
    {
    public:
        int* m_p;
        my_intptr(int* p){ m_p = p; }
        ~my_intptr(){ delete m_p; }
    };
    …………
    my_intptr pi(new int);
    *(pi.m_p) = 10;
    …………


“这里我们可以放心的使用 my_intptr ，不用担心内存泄漏的问题：一旦 pi 这个变量被销毁，我们知道 pi.p 指向的内存块一定会被释放。不过如果每次使用 my_intptr 都得去访问它的成员未免太麻烦了。为此，可以给这个类加上重载的 * 运算符：”

	class my_intptr
    {
    private:
        int* m_p;
    public:
        my_intptr(int* p){ m_p = p; }
        ~my_intptr(){ delete m_p; }
        int& operator*(){ return *m_p; }
    };
    …………
    my_intptr pi;
    *pi = 10;
    int a = *pi;
    …………

“现在是不是看起来 my_intptr 就像是一个真正的指针了？正因为如此，这种技术被称为智能指针。现在我问你，这个类还缺少哪些东西？”
zero 皱着眉头，眼睛一眨一眨，看上去就像一台慢速电脑正在辛苦的往它的硬盘上拷贝文件。良久，zero 抬起头来，不太确定的说：“是不是还缺少一个拷贝构造函数和一个赋值运算符？”
“说说为什么。”，Solmyr 显然不打算就这样放过 zero.
“因为 …… 我记得没错的话 …… 《50 诫 》（注：指《Effective C++ 2/e》一书）中提到过，如果你的类里面有指针指向动态分配的内存，那么一定要为它写一个拷贝构造函数和一个赋值运算符 …… 因为 …… 否则的话，一旦你做了赋值，会导致两个对象的指针指向同一块内存。对了！如果是上面的类，这样一来会导致同一个指针被 delete 两次！”
“正确。那么我们应该怎样来实现呢？”
“这简单，我们用 memcpy 把目标指针指向的内存中的内容拷贝过来。”
“如果我们的智能指针指向一个类的对象怎么办？注意，类的对象中可能有指针，不能用 memcpy.”
“那 …… 我们用拷贝构造的办法。”
“如果我们的智能指针指向的对象不能拷贝构造怎么办？它可能有一个私有的拷贝构造函数。”
“那 ……”，zero 顿了一顿，决定老实承认，“我不知道。”
“问题在哪你知道么？在于你没有把智能指针看作指针。想象一下，如果我们对一个指针做赋值，它的含义是什么？”
“呃，我明白了，在这种情况下，应该想办法让两个智能指针指向同一个对象 …… 可是 Solmyr ，这样以来岂不是仍然要对同一个对象删除两遍？”
“是的，我们得想办法解决这个问题，办法不只一种。比较好的一种是为每个指针维护一个引用计数值，每次赋值或者拷贝构造，就让计数值加一，这意味着指向这个内存块的智能指针又多了一个；而每有一个智能指针被销毁，就让计数值减一，这意味着指向这个内存块的智能指针少了一个；一旦计数值为 0 ，就释放内存块。象这样：”


	class my_intptr
    {
    private:
        int* m_p;
        int* m_count;
    public:
        my_intptr(int* p)
        {
            m_p = p;
            m_count = new int; // 初始化计数值为 1
            *m_count = 1;
        }
        my_intptr(const my_intptr& rhs) // 拷贝构造函数
        {
            m_p = rhs.m_p; // 指向同一块内存
            m_count = rhs.m_count; // 使用同一个计数值
            (*m_count)++; // 计数值加 1
        }
        ~my_intptr()
        {
            (*m_count)--; // 计数值减 1
            if( *m_count == 0 ) // 已经没有别的指针指向该内存块了
            {
                delete m_p;
                delete m_count;
            }
        }
        my_intptr& operator=(const my_intptr& rhs)
        {
            if( m_p == rhs.m_p ) // 首先判断是否本来就指向同一内存块
                return *this; // 是则直接返回

            m_p = rhs.m_p; // 指向同一块内存
            m_count = rhs.m_count; // 使用同一个计数值
            (*m_count)++; // 计数值加 1
            return *(rhs.mp);
        }
        …………
    };

“其他部分没有什么太大变化，我不费事了。现在想象一下我们怎样使用这种智能指针？”，Solmyr 放下了笔，再次拿起了筷子，有些惋惜的发现他爱吃的肉丸子已经冷了。
zero 想象着，有些迟疑。“我们 …… 可以用 new int 表达式作为构造函数的参数来构造一个智能指针，然后 …… 然后我们可以任意的赋值，”，他开始抓住了思路，越说越快，“任意的用已经存在的智能指针来构造新的智能指针，智能指针的赋值运算符、拷贝构造函数和析构会保证计数值始终等于指向该内存块的智能指针数。”zero 似乎明白了他看到了怎样的功能，开始激动起来：“然后一旦计数值为 0 被分配的内存块就会释放！也就是说 …… 有指针指向内存块，它就不释放，一旦没有，它就自动释放！太棒了！我们只要一开始正确的初始化智能指针，就可以象普通指针那样使用它，而且完全不用担心内存释放的问题！太棒了！”zero 激动的大叫：“这就是垃圾收集！Solmyr ！我们在饭桌上实现了一个垃圾收集器！”
Solmyr 很明显没有分享 zero 的激动：“我在吃饭，你能不能不要大叫‘饭桌上实现了一个垃圾收集器’这种倒胃口的话？”顿了一顿，Solmyr 带着他招牌式的坏笑，以一种可恶的口吻说道：“而且请注意一下自己的形象。”
“嗯？”，zero 回过神来，发现自己不知什么时候站了起来，而整个餐厅里的人都在看着他嘿嘿偷笑，这让他感觉自己像个傻瓜。
zero 红着脸坐下，压低了声音问 Solmyr ：“不过 Solmyr ，这确实是一个的垃圾收集机制啊，只要我们把这个类改成 …… 嗯 …… 改成模板类，象这样：”zero 抓过了纸笔，写到：

	template
    class my_ptr
    {
    private:
        T* m_p;
        int* m_count;
        …………
    };


“它不就能支持任意类型的指针了吗？我们就可以把它用在任何地方。”
Solmyr 摇了摇头：“不，你把问题想的太简单了。对于简单的类型，这个类确实可以处理的很好，但实际情况是很复杂的。考虑一个典型情况：类 Derived 是类 Base 的派生类，我们希望这样赋值：”

	Base* pb；
    Derived pd；
    …………
    pb = pd；

“你倒说说看，这种情况，怎样改用上面这个智能指针来处理？”
“……”，zero 沉默了。
“要实现一个完整的垃圾收集机制并不容易，因为有许多细节要考虑。”，Solmyr 开始总结了，“不过，基本思路就是上面说的这些。值得庆幸的是，目前已经有了一个相当成熟的‘引用计数’智能指针，boost：：shared_ptr. 大多数情况下，我们都可以使用它。另外，除了智能指针之外，还有一些技术也能够帮助我们避开释放内存的问题，比如内存池。但是，关键在于 ——— ”
Solmyr 再度用那种平静的眼神盯着 zero ：
“身为 C/C++ 程序员，必须有创造力。那种躺在语言机制上不思进取的人，那种必须要靠语法强制才知道怎样编程的人，那种没有别人告诉他该干什么就无所适从的人，不适合这门语言。”


