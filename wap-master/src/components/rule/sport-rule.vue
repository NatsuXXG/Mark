<template>
    <div>
        <sport-home-head :typetitle="typetitle" :linkName="''"></sport-home-head>

        <div class="Tnav">
            <div class="select">
                <ul class="nav">
                    <li @click="activeBall(1,1,$event)" class="active"> 足球</li>
                    <li  @click="activeBall(2,12,$event)">篮球</li>
                    <li  @click="activeBall(3,13,$event)"> 网球</li>
                    <li  @click="activeBall(4,14,$event)">排球</li>
                    <li  @click="activeBall(5,15,$event)">棒球</li>
                </ul>
            </div>
            <ul class="nav" v-if="ifS==1">
                <li @click="activeLink($event,1)" class="active"> 足球投注名词</li>
                <li @click="activeLink($event,2)">足球赛果认定</li>
                <li @click="activeLink($event,3)"> 独赢</li>
                <li @click="activeLink($event,4)">让球</li>
                <li @click="activeLink($event,5)">大小球</li>
                <li @click="activeLink($event,6)">上半场</li>
                <li @click="activeLink($event,7)">滚球</li>
                <li @click="activeLink($event,8)">波胆</li>
                <li @click="activeLink($event,9)">入球数</li>
                <li @click="activeLink($event,10)">半全场</li>
                <li @click="activeLink($event,11)">综合过关</li>
            </ul>
        </div>
        <!--这里是规则内容-->
        <!--足球-->
        <div class="rule-box">
            <!--足球投注名词-->
            <div class="sport-rule-1" v-if="ifr==1">
                <div class="topic">
                    足球投注名词定义
                </div>
                <div class="rule-content">
                    <p> 1、	指定球赛： 指本公司对一场足球正式赛事，双方以主队、客队或中立球场，于法定比赛时间内将进行比赛，网站有正式公布球赛赔率并提供下注之赛事。</p>
                    <p> 2、	足球投注：指以本公司所核发之会员账号、会员密码登入后之所有足球下注行为，当密码账号经系统确认有效登入后之所有投注行为将视为有效投注。</p>
                    <p> 3、	下注状况：指本公司对下注者在进行下注时，计算机数据库所纪录的下注时间、场次、队伍与当时下注的盘口赔率状况，本公司仅以会员 "下注状况的内容" 为计算结果之依据。</p>
                    <p> 4、	投注币别：指投注者登入投注系统后，所告知之目前法定货币。</p>
                    <p>
                        5、	法定时间：在指定球赛中上半场比赛时间为 45分钟 、全场比赛时间为 90分钟 ，加上球证裁定的伤停补时或因其它因素而引起的补时，称之为法定比赛时间， 但不包括加时、互射十二码决胜负或重赛 。</p>
                    <p>
                        6、	伤停补时：若因球赛进行中遇换人、选手受伤、点球、或选手犯规等情形而影响球赛正常进行时，主审会将身上的定时器按暂停，累计所有的暂停时间后，于赛完法定时间上下半场45分钟后，分别进行补时。</p>
                    <p>7、	半场赛果：指一场球赛在打完上半场法定时间后，由球证裁定之最终比数。</p>
                    <p> 8、	全场赛果：指一场球赛在打完全场法定时间后，由球证裁定之最终比数。</p>
                    <p> 9、	射门进球：指球证裁定一场球赛的法定比赛时间内球队所踢进龙门的每1分。</p>
                    <p> 10、	乌龙球 ：指由一名队员踢入自己球场龙门得分的入球，其仍算有效进球。</p>
                    <p> 11、	让球调整 ：指两个比赛队伍在实力不同时，强队做出让球于弱队的球数调整，让球将永远显示在强队。</p>
                    <p>
                        12、	无效球赛 ：所有比赛都必须在预定日期内进行，否则投注无效。若该场赛事在比赛前被「延赛」(延后日期)或「停赛」(取消比赛)，则对该场赛事之投注都将被视为 "无效或不予计算" 。</p>
                    <p class="red">退回注金 ： 指当一场比赛经判定为无效球赛时，所有注单将视同无效，公司将退回注金(连串投注以赔率﹝1﹞计算)。</p>
                </div>
            </div>
            <div class="sport-rule-2" v-if="ifr==2">
                <div class="topic">
                    足球基本认定
                </div>
                <div class="rule-content">
                    <p>1、	所有足球投注之赛果认定皆以本公司所订定之规则为准。</p>
                    <p>2、	所有比赛都必须在预定日期或法定时间内进行，否则投注无效。若该场赛事因故取消或中止，则该场球赛视为无效比赛，公司将退回注金(各项连串投注以赔率 ﹝1﹞ 计算)。 </p>
                    <p>3、	如球赛提前举行，则在球赛开打时间后所接受之投注均为无效( 滚球盘除外 )。</p>
                    <p>4、	下注时请务必了解各项投注玩法之 单场单注之最高、最低投注金额 与 最高派彩规定。 各投注赛果认定 </p>
                    <div class="bottomic" @click="showMic($event)">
                        让分
                    </div>
                    <div class="bottomic-content s">
                        A. 投注时，如正确选中一场球赛经让分调整后的胜方队伍，将可赢得派彩金额。若在让分条件为平手下和局，或调整让分后和局，则依据该投注分盘计算之。 如依联盟裁定最终赛事以和局结束，注单仍视为有效。
                        B. 其赛果只包含全场的法定时间， 不包含延长赛与PK赛之比分
                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        高低分
                    </div>
                    <div class="bottomic-content s">
                        A.投注时，如正确选中高分盘或低分盘，将可赢得派彩金额，若赛事结果之总得分，恰好等于高低分分盘，则依据该投注分盘计算之。
                        B.其赛果只包含全场的法定时间， 不包含延长赛与PK赛之比分
                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        独赢
                    </div>
                    <div class="bottomic-content s">
                        A.投注(主客和)时，如正确选中一场球赛的胜方队伍或和局，将可赢得派彩金额。
                        B.其赛果只包含全场的法定时间， 不包含延长赛与PK赛之比分
                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        单 / 双
                    </div>
                    <div class="bottomic-content s">
                        投注时，如正确选中一场球赛的总得分为单或是双时，将可赢得派彩金额。
                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        上、下半场
                    </div>
                    <div class="bottomic-content s">
                        投注上、下半场时，若无法打完其法定时间，则其注单将视为无效。例如： 比赛于下半场第8分钟腰斩 ，投注在 上半场之注单仍然有效 ，投注在下半场则为无效之注单。
                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        混合过关
                    </div>
                    <div class="bottomic-content s">
                        A.投注让分过关时，其选择队伍必须全数胜出，方可赢得派彩金额。当比赛经判定为无效赛事，或赛果经让分调整后为和局时，则该场赛事之赔率以 (1) 计算。
                        B. 每注的最高派彩金额上限为人民币20万元整。
                        C．让球过关中，如果是输一半按乘以0.5计算，如果是赢一半按(1+赔率/2)计算，如是是赛事取消或中断，赔率按[1]计算。
                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        滚球
                    </div>
                    <div class="bottomic-content s">
                        投注指定赛事之滚球让分(高低分)时，如正确选中经让分调整后的胜方队伍(高分或是低分)，将可赢得派彩金额。若在调整让分(高低分)后和局，则依据该投注分盘计算之。
                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        波胆
                    </div>
                    <div class="bottomic-content s">
                        A.选择波胆投注时，如正确选中一场球赛之最终正确比数，即可赢得派彩金额。
                        B. 每注的最高派彩金额上限为人民币20万元整。
                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        入球数
                    </div>
                    <div class="bottomic-content s">
                        每一项入球数投注，如正确选中一场球赛的总入球数，将可赢得派彩彩金额。
                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        半全场
                    </div>
                    <div class="bottomic-content s">
                        A.每一项半全场投注，如正确选中一场球赛的上半场及全场之主客和赛果胜负，将可赢得派彩金额。
                        B. 每注的最高派彩金额上限为人民币20万元整。
                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        延长赛
                    </div>
                    <div class="bottomic-content s">
                        A. 投注在赛事的延长赛， 若无法打完其法定时间(上、下半场各15分钟)，则其注单将视为无效 。
                        B. 延长赛的赛果， 不包含正规赛事(90分钟)之比分 。
                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        PK 赛
                    </div>
                    <div class="bottomic-content s">
                        PK赛的赛果，以 PK赛 总比分为准 (不含90分钟以及延长赛之比分) 。
                    </div>
                </div>

            </div>
            <div class="sport-rule-3" v-if="ifr==3">
                <div class="topic">
                    足球独赢玩法介绍
                </div>
                <div class="rule-content">
                    <p>1、玩法介绍： 在指定球赛中，两队以 互不让分(PK) 的方式进行比赛，预测主队胜出、和局或客队胜出之投注方式。</p>
                    <p>2、交易方式： 投注者可就一场球赛的主队或客队或和局之目前赔率点选下注。 下注前请点选更新键，以取得最新的赔率 。</p>
                    <p>3、派彩资格： 交易独赢时(主客)，如赛果公布后正确选中一场球赛的胜方队伍或局，将可赢得交易派彩。</p>
                    <p>4、派彩范例： 以主场曼联迎战客场阿仙奴为例。</p>
                    <div class="bottomic" @click="showMic($event)">
                        足球独赢之表现方式与派彩范例
                    </div>
                    <div class="bottomic-content s">
                        <table class="tab_bg" cellspacing="0" cellpadding="0" width="100%" align="center" border="1">
                            <tbody>
                            <tr align="center" bgcolor="#555555" style="color:#FFF">
                                <td> 时间 </td>
                                <td width="36%"> 主客队伍 </td>
                                <td width="14%"> 独赢</td>
                                <td width="13%"> 让球</td>
                                <td width="11%"> 大小</td>
                                <td width="8%"> 单双</td>
                            </tr>
                            <tr bgcolor="#cccccc">
                                <td colspan="6"><div align="center"> </div>
                                    <div align="center"> </div>
                                    <div align="center"> </div>
                                    <div align="center"> </div>
                                    <div align="center"> 英超</div></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td width="7%" rowspan="2" class="rule"><p class="eng-12" style="line-height: 13pt; letter-spacing: 1pt" align="center"> 04-01<br>
                                    20:05p </p></td>
                                <td class="rule"><table width="100%" cellpadding="2" cellspacing="0">
                                    <tbody><tr>
                                        <td class="font_bk_12"><span class="eng_12"><span class="font_blue">曼联</span><font color="#ff0000" class="place">[主]</font> </span></td>
                                    </tr>
                                    <tr>
                                        <td> 阿仙奴 </td>
                                    </tr>
                                    </tbody></table></td>
                                <td bgcolor="#FFFFFF"><table width="100%" border="0" cellpadding="0" cellspacing="0" class="red_eng_b">
                                    <tbody>
                                    <tr>
                                        <td align="center"><div align="center"> <span class="style11"><font color="#ff0000">1.66</font></span></div></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><span class="style11"><font color="#ff0000">1.88</font></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td bgcolor="#FFFFFF"><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="45%"><div align="center" class="font_blue"> 一球</div></td>
                                        <td width="55%" align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.920</font></span> <span class="rule"></span></td>
                                    </tr>
                                    <tr>
                                        <td><div align="center"> </div></td>
                                        <td align="center" class="red_eng_b"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">60 </font></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="40%" align="center" class="rule"><span class="font_blue">二球半</span></td>
                                        <td class="rule" width="24%"><div class="style15" align="center"> 大</div></td>
                                        <td width="36%" align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.850</font></span></td>
                                    </tr>
                                    <tr>
                                        <td class="rule">&nbsp;</td>
                                        <td class="rule"><div class="style15" align="center"> <span class="style26">小</span></div></td>
                                        <td align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.950</font></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td align="center" class="font_blue"> 单</td>
                                        <td align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.930</font></span> <span class="rule"></span></td>
                                    </tr>
                                    <tr>
                                        <td width="29%"><div class="eng-12" align="center"> <font class="font_blue" color="#0000ff">双 </font> </div></td>
                                        <td width="71%" align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.930</font></span> <span class="rule"></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td class="rule"><table width="100%" cellpadding="2" cellspacing="0">
                                    <tbody><tr>
                                        <td> 和局 </td>
                                    </tr>
                                    </tbody></table></td>
                                <td bgcolor="#FFFFFF"><table width="100%" border="0" cellpadding="0" cellspacing="0" class="red_eng_b">
                                    <tbody>
                                    <tr>
                                        <td align="center"><div align="center"> <span class="style11"><font color="#ff0000">3.20</font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td bgcolor="#FFFFFF">&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            </tbody>
                        </table>
                        <!--/***************************************************************-->
                        <br>
                        <table class="tab_bg" cellspacing="0" cellpadding="0" border="1" width="100%" align="center">
                           <thead>
                           <tr bgcolor="#555555">
                               <th width="14%" height="20px">赛果比数 </th>
                               <th colspan="3">以上表目前之赔率交易，交易金额为$1000</th>
                           </tr>
                           </thead>
                            <tbody>
                            <tr>
                                <td width="14%" rowspan="3" class="red_eng_b"><div align="center"> <span class="odd-red"><font color="#ff0000">2:0</font><font color="#ff0000"></font></span><font color="#ff0000">(主胜)</font> </div></td>
                                <td width="14%" rowspan="3" class="rule"><div align="center"> <font color="#000000">输赢结果</font> </div></td>
                                <td width="20%" class="rule"><div align="center"> <font color="#000000">交易曼联</font> </div></td>
                                <td width="52%" class="rule"><p align="left" class="font_blue" style="line-height: 13pt; letter-spacing: 1pt"> 可赢金额=(1,000X1.660)-1,000(本金)= $660 </p></td>
                            </tr>
                            <tr >
                                <td width="20%" class="rule"><div align="center"> <font color="#000000">交易阿仙奴</font> </div></td>
                                <td width="52%" class="rule"><p style="line-height: 13pt; letter-spacing: 1pt" align="left"> <font color="#ff0000">输付金额 $1,000</font> </p></td>
                            </tr>
                            <tr>
                                <td width="20%"class="rule"><div align="center"> <font color="#000000">交易和局</font> </div></td>
                                <td width="52%" class="rule"><p style="line-height: 13pt; letter-spacing: 1pt" align="left"> <font color="#ff0000">输付金额 $1,000</font> </p></td>
                            </tr>
                            <tr>
                                <td rowspan="3"class="red_eng_b"><div align="center"> <span class="odd-red"><font color="#ff0000">0:1</font></span><font color="#ff0000">(客胜)</font> </div></td>
                                <td rowspan="3"class="rule"><div align="center"> 输赢结果 </div></td>
                                <td width="20%"class="rule"><div align="center"> <font color="#000000">交易曼联</font> </div></td>
                                <td width="52%" class="rule"><p style="line-height: 13pt; letter-spacing: 1pt" align="left"> <font color="#ff0000">输付金额 $1,000 </font> </p></td>
                            </tr>
                            <tr>
                                <td width="20%"class="rule"><div align="center"> <font color="#000000">交易阿仙奴</font> </div></td>
                                <td width="52%"class="rule"><p align="left" class="font_blue" style="line-height: 13pt; letter-spacing: 1pt"> 可赢金额=(1,000X1.880)-1,000(本金)= $880 </p></td>
                            </tr>
                            <tr>
                                <td width="20%"class="rule"><div align="center"> <font color="#000000">交易和局</font> </div></td>
                                <td width="52%" class="rule"><p style="line-height: 13pt; letter-spacing: 1pt" align="left"> <font color="#ff0000">输付金额 $1,000 </font> </p></td>
                            </tr>
                            <tr>
                                <td rowspan="3"class="red_eng_b"><div align="center"> <span class="odd-red"><font color="#ff0000">1:1</font></span><font color="#ff0000">(和局)</font> </div></td>
                                <td rowspan="3" class="rule"><div align="center"> 输赢结果 </div></td>
                                <td width="20%"  class="rule"><div align="center"> <font color="#000000">交易曼联</font> </div></td>
                                <td width="52%"  class="rule"><p style="line-height: 13pt; letter-spacing: 1pt" align="left"> <font color="#ff0000">输付金额 $1,000 </font> </p></td>
                            </tr>
                            <tr>
                                <td width="20%" class="rule"><div align="center"> <font color="#000000">交易阿仙奴</font> </div></td>
                                <td width="52%"class="rule"><p style="line-height: 13pt; letter-spacing: 1pt" align="left"> <font color="#ff0000">输付金额 $1,000 </font> </p></td>
                            </tr>
                            <tr>
                                <td width="20%" class="rule"><div align="center"> <font color="#000000">交易和局</font> </div></td>
                                <td width="52%" class="rule"><p align="left" class="font_blue" style="line-height: 13pt; letter-spacing: 1pt"> 可赢金额=(1,000X3.20)-1,000(本金)=$2,200 </p></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div class="sport-rule-4" v-if="ifr==4">
                <div class="topic">
                    足球让球玩法介绍
                </div>
                <div class="rule-content">
                    <p>1、玩法介绍 ： 在指定球赛中，预测两队经(分盘调整)后，选择主队胜出或客队胜出之投注方式。</p>
                    <p>2、交易方式 ： 投注者可就一场球赛的主队或客队之目前分盘点选下注。 下注前请点选更新键，以取得最新的分盘 。</p>
                    <div class="bottomic"  @click="showMic($event)">
                        分盘表示
                    </div>
                    <div class="bottomic-content s">
                        <table class="tab_bg" cellspacing="1" cellpadding="2" width="100%" align="center" border="1">
                            <tbody>
                            <tr align="center" bgcolor="#555555" style="color:#FFF">
                                <td height="19" colspan="2" class="font_w"> 足球让球之表现方式 </td>
                            </tr>
                            <tr bgcolor="#cccccc">
                                <td><div align="center"> 各种分盘口表示 </div></td>
                                <td width="74%"><div align="center"> 下注状况 </div></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td width="26%" align="center" class="eng_12"><div align="center">
                                    <p class="eng_12" style="line-height: 13pt; letter-spacing: 1pt"> 一球</p>
                                </div></td>
                                <td height="22" class="eng_12"> 表示强队赢弱队1分时两队平手，2分全赢。 </td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td width="26%" align="center" class="eng_12"> 一球半 </td>
                                <td class="eng_12"> 表示强队赢弱队1分时押强队输，2分全赢。 </td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td align="center" class="eng_12"> 半球/一球</td>
                                <td class="red-12"> 表示强队赢弱队1分时押强队赢50%，2分全赢。 </td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td width="26%" align="center" class="eng_12"> 一球/一球半 </td>
                                <td class="red-12"> 表示强队赢弱队1分时押强队 输50% ，2分全赢。 </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        派彩范例
                    </div>
                    <div class="bottomic-content s">
                        <table class="tab_bg" cellspacing="1" cellpadding="1" width="100%" align="center" border="1">
                            <tbody>
                            <tr align="center" bgcolor="#555555" style="color:#FFF">
                                <td> 时间 </td>
                                <td width="36%"> 主客队伍 </td>
                                <td width="14%"> 独赢</td>
                                <td width="13%"> 让球</td>
                                <td width="11%"> 大小</td>
                                <td width="8%"> 单双</td>
                            </tr>
                            <tr bgcolor="#cccccc">
                                <td colspan="6"><div align="center"> 英超</div></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td width="7%" rowspan="2" class="rule"><p class="eng-12" style="line-height: 13pt; letter-spacing: 1pt" align="center"> 04-01<br>
                                    20:05p </p></td>
                                <td class="rule"><table width="100%" cellpadding="2" cellspacing="0">
                                    <tbody><tr>
                                        <td class="font_bk_12"><span class="eng_12"><span class="font_blue">曼联</span><font color="#ff0000" class="place">[主]</font> </span></td>
                                    </tr>
                                    <tr>
                                        <td> 阿仙奴 </td>
                                    </tr>
                                    </tbody></table></td>
                                <td bgcolor="#FFFFFF"><table width="100%" border="0" cellpadding="0" cellspacing="0" class="red_eng_b">
                                    <tbody>
                                    <tr>
                                        <td align="center"><div align="center"> <span class="style11"><font color="#ff0000">1.66</font></span></div></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><span class="style11"><font color="#ff0000">1.88</font></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td bgcolor="#FFFFFF"><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="45%"><div align="center" class="font_blue"> 一球</div></td>
                                        <td width="55%" align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.920</font></span> <span class="rule"></span></td>
                                    </tr>
                                    <tr>
                                        <td><div align="center"> </div></td>
                                        <td align="center" class="red_eng_b"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">60 </font></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="40%" align="center" class="rule"><span class="font_blue">二球半</span></td>
                                        <td class="rule" width="24%"><div class="style15" align="center"> 大</div></td>
                                        <td width="36%" align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.850</font></span></td>
                                    </tr>
                                    <tr>
                                        <td class="rule">&nbsp;</td>
                                        <td class="rule"><div class="style15" align="center"> <span class="style26">小</span></div></td>
                                        <td align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.950</font></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td align="center" class="font_blue"> 单</td>
                                        <td align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.930</font></span> <span class="rule"></span></td>
                                    </tr>
                                    <tr>
                                        <td width="29%"><div class="eng-12" align="center"> <font class="font_blue" color="#0000ff">双 </font> </div></td>
                                        <td width="71%" align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.930</font></span> <span class="rule"></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td class="rule"><table width="100%" cellpadding="2" cellspacing="0">
                                    <tbody><tr>
                                        <td> 和局 </td>
                                    </tr>
                                    </tbody></table></td>
                                <td bgcolor="#FFFFFF"><table width="100%" border="0" cellpadding="0" cellspacing="0" class="red_eng_b">
                                    <tbody>
                                    <tr>
                                        <td align="center"><div align="center"> <span class="style11"><font color="#ff0000">3.20</font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td bgcolor="#FFFFFF">&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            </tbody>
                        </table>
                        <br>
                        <table class="tab_bg" cellspacing="1" cellpadding="0" width="100%" align="center" border="1">
                            <tbody>
                            <tr bgcolor="#555555">
                                <td width="14%"><div align="center"> <font color="#ffffff">赛果比数</font> </div></td>
                                <td colspan="3"><div align="center"> <font color="#ffffff">以上表目前之赔率交易，交易金额为$1000</font> </div></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td width="14%" rowspan="2" class="red_eng_b"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <span class="odd-red"><font color="#ff0000">2:0</font><font color="#ff0000"></font></span><font color="#ff0000">(主胜)</font> </p>
                                </div></td>
                                <td width="14%" rowspan="2" class="rule"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <font color="#000000">输赢结果</font> </p>
                                </div></td>
                                <td width="20%" class="rule"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <font color="#000000">交易曼联</font> </p>
                                </div></td>
                                <td width="52%" class="rule"><p align="left" class="font_blue" style="line-height: 13pt; letter-spacing: 1pt"> 可赢金额=(1,000X0.920)= $920</p></td>
                            </tr>
                            <tr bgcolor="#3b3b3b">
                                <td width="20%" bgcolor="#ffffff" class="rule"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <font color="#000000">交易阿仙奴</font> </p>
                                </div></td>
                                <td width="52%" bgcolor="#ffffff" class="rule"><p style="line-height: 13pt; letter-spacing: 1pt" align="left"> <font color="#ff0000">输付金额 $1,000</font> </p></td>
                            </tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff" class="red_eng_b"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <span class="odd-red"><font color="#ff0000">0:1</font></span><font color="#ff0000">(客胜)</font> </p>
                                </div></td>
                                <td rowspan="2" bgcolor="#ffffff" class="rule"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> 输赢结果 </p>
                                </div></td>
                                <td width="20%" bgcolor="#ffffff" class="rule"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <font color="#000000">交易曼联</font> </p>
                                </div></td>
                                <td width="52%" bgcolor="#ffffff" class="rule"><p style="line-height: 13pt; letter-spacing: 1pt" align="left"> <font color="#ff0000">输付金额 $1,000 </font> </p></td>
                            </tr>
                            <tr>
                                <td width="20%" bgcolor="#ffffff" class="rule"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <font color="#000000">交易阿仙奴</font> </p>
                                </div></td>
                                <td width="52%" bgcolor="#ffffff" class="rule"><p align="left" class="font_blue" style="line-height: 13pt; letter-spacing: 1pt"> 可赢金额=(1,000X0.960= $960</p></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <div class="sport-rule-5" v-if="ifr==5">
                <div class="topic">
                    足球大小盘玩法介绍
                </div>
                <div class="rule-content">
                    <p>1、玩法介绍： 在指定球赛中，预测两队总入球数为 大球盘 或 小球盘 之投注方式，若全场总入球数 大 于该场比赛的大球盘则下注大球盘胜出，若全场总入球数 小 于该场比赛的小球盘，则下注小球盘胜出。</p>
                    <p>2、交易方式： 投注者可就一场球赛选择大球盘或小球盘之目前赔率点选下注， 下注前请点选更新键，以取得最新的分盘 。</p>
                    <div class="bottomic"  @click="showMic($event)">
                        分盘表现
                    </div>
                    <div class="bottomic-content s">
                        <table class="tab_bg" cellspacing="1" cellpadding="2" width="100%" align="center" border="1">
                            <tbody>
                            <tr align="center" bgcolor="#555555">
                                <td height="19" colspan="2" class="font_w" style="color:#FFF"> 足球大小球之表现方式</td>
                            </tr>
                            <tr bgcolor="#cccccc">
                                <td><div align="center"> 各种分盘口表示 </div></td>
                                <td width="74%"><div align="center"> 下注状况 </div></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td width="26%" align="center" class="eng_12"><div align="center">
                                    <p class="eng_12" style="line-height: 13pt; letter-spacing: 1pt"> 2平</p>
                                </div></td>
                                <td height="22" class="eng_12"> 表示两队得分总和2分时押高(低)分注金退回，3分全赢。</td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td width="26%" align="center" class="eng_12"> 2输</td>
                                <td class="eng_12"> 表示两队得分总和2分时押高分输，3分全赢。</td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td align="center" class="eng_12"> 2+50</td>
                                <td class="red-12"> 表示两队得分总和2分时押高分赢50%，3分全赢。</td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td width="26%" align="center" class="eng_12"> 2-50</td>
                                <td class="red-12"> 表示两队得分总和2分时押高分 输50% ，3分全赢。</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        派彩范例 ： 以主场曼联迎战客场阿仙奴为例
                    </div>
                    <div class="bottomic-content s">
                        <table class="tab_bg" cellspacing="1" cellpadding="1" width="100%" align="center" border="1">
                            <tbody>
                            <tr align="center" bgcolor="#555555" style="color:#FFF">
                                <td> 时间 </td>
                                <td width="26%"> 主客队伍 </td>
                                <td width="21%"> 独赢</td>
                                <td width="14%"> 让球</td>
                                <td width="19%"> 大小</td>
                                <td width="10%"> 单双</td>
                            </tr>
                            <tr bgcolor="#cccccc" style="color:#000">
                                <td colspan="6"><div align="center"> 英超</div></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td width="10%" rowspan="2" class="rule"><p class="eng-12" style="line-height: 13pt; letter-spacing: 1pt" align="center"> 04-01<br>
                                    20:05p </p></td>
                                <td class="rule"><table width="100%" cellpadding="2" cellspacing="0">
                                    <tbody><tr>
                                        <td class="font_bk_12"><span class="eng_12"><span class="font_blue">曼联</span><font color="#ff0000" class="place">[主]</font> </span></td>
                                    </tr>
                                    <tr>
                                        <td> 阿仙奴 </td>
                                    </tr>
                                    </tbody></table></td>
                                <td bgcolor="#FFFFFF"><table width="100%" border="0" cellpadding="0" cellspacing="0" class="red_eng_b">
                                    <tbody>
                                    <tr>
                                        <td align="center"><div align="center"> <span class="style11"><font color="#ff0000">1.66</font></span></div></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><span class="style11"><font color="#ff0000">1.88</font></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td bgcolor="#FFFFFF"><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="45%"><div align="center" class="font_blue"> 一球</div></td>
                                        <td width="55%" align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.920</font></span> <span class="rule"></span></td>
                                    </tr>
                                    <tr>
                                        <td><div align="center"> </div></td>
                                        <td align="center" class="red_eng_b"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">60 </font></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="40%" align="center" class="rule"><span class="font_blue">二球半</span></td>
                                        <td class="rule" width="24%"><div class="style15" align="center"> 大</div></td>
                                        <td width="36%" align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.850</font></span></td>
                                    </tr>
                                    <tr>
                                        <td class="rule">&nbsp;</td>
                                        <td class="rule"><div class="style15" align="center"> <span class="style26">小</span></div></td>
                                        <td align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.950</font></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td align="center" class="font_blue"> 单</td>
                                        <td align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.930</font></span> <span class="rule"></span></td>
                                    </tr>
                                    <tr>
                                        <td width="29%"><div class="eng-12" align="center"> <font class="font_blue" color="#0000ff">双 </font> </div></td>
                                        <td width="71%" align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.930</font></span> <span class="rule"></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td class="rule"><table width="100%" cellpadding="2" cellspacing="0">
                                    <tbody><tr>
                                        <td> 和局 </td>
                                    </tr>
                                    </tbody></table></td>
                                <td bgcolor="#FFFFFF"><table width="100%" border="0" cellpadding="0" cellspacing="0" class="red_eng_b">
                                    <tbody>
                                    <tr>
                                        <td align="center"><div align="center"> <span class="style11"><font color="#ff0000">3.20</font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td bgcolor="#FFFFFF">&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            </tbody>
                        </table>
                        <br>
                        <table class="tab_bg" cellspacing="1" cellpadding="0" width="100%" align="center" border="1">
                            <tbody>
                            <tr bgcolor="#555555">
                                <td width="14%"><div align="center"> <font color="#ffffff">赛果比数</font> </div></td>
                                <td colspan="3"><div align="center"> <font color="#ffffff">以上表目前之赔率交易，交易金额为$1000</font> </div></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td width="14%" rowspan="2" class="red_eng_b"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <span class="style11"><font color="#ff0000">3</font></span><span class="odd-red"><font color="#ff0000">:0</font></span><font color="#ff0000">(大盘)</font> </p>
                                </div></td>
                                <td width="14%" rowspan="2"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <font color="#000000">输赢结果</font> </p>
                                </div></td>
                                <td width="17%" class="eng_12"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <font color="#000000">交易大盘</font></p>
                                </div></td>
                                <td width="55%" class="eng_12"><p align="left" class="font_blue" style="line-height: 13pt; letter-spacing: 1pt"> 可赢金额=(1,000X0.850)= $850</p></td>
                            </tr>
                            <tr bgcolor="#3b3b3b">
                                <td width="17%" bgcolor="#ffffff" class="eng_12"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <font color="#000000">交易小盘</font></p>
                                </div></td>
                                <td width="55%" bgcolor="#ffffff" class="eng_12"><p align="left" class="place" style="line-height: 13pt; letter-spacing: 1pt"> <font color="#ff0000">输付金额 $1,000</font> </p></td>
                            </tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff" class="red_eng_b"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <span class="style11"><font color="#ff0000">1</font></span><span class="odd-red"><font color="#ff0000">:1</font></span><font color="#ff0000">(小盘)</font> </p>
                                </div></td>
                                <td bgcolor="#ffffff" rowspan="2"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> 输赢结果 </p>
                                </div></td>
                                <td width="17%" bgcolor="#ffffff" class="eng_12"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <font color="#000000">交易大盘</font></p>
                                </div></td>
                                <td width="55%" bgcolor="#ffffff" class="eng_12"><p align="left" class="place" style="line-height: 13pt; letter-spacing: 1pt"> <font color="#ff0000">输付金额 $1,000 </font> </p></td>
                            </tr>
                            <tr>
                                <td width="17%" bgcolor="#ffffff" class="eng_12"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <font color="#000000">交易小盘</font></p>
                                </div></td>
                                <td width="55%" bgcolor="#ffffff" class="eng_12"><p align="left" class="font_blue" style="line-height: 13pt; letter-spacing: 1pt"> 可赢金额=(1,000X0.950= $950</p></td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <div class="sport-rule-6" v-if="ifr==6">
                <div class="topic">
                    足球上半场玩法介绍
                </div>
                <div class="rule-content">
                    <p>1、玩法介绍 ： 在指定球赛中，独赢、让球、大小球以上半场45分钟之法定时间(含伤停加时时间)赛果为准的交易方式。</p>
                    <p>2、交易方式 ： 交易者可就一场球赛选择独赢、让球、大小球之目前赔率点选交易，交易前请点选更新键，以取得最新的赔率。</p>
                    <p>3、派彩资格 ： 同全场独赢、让球、大小球之规则。</p>
                    <p>4、派彩范例 ： 以主场曼联迎战客场阿仙奴为例。</p>
                    <div class="bottomic-content show">
                        <table class="tab_bg" cellspacing="1" cellpadding="1" width="100%" align="center" border="1">
                            <tbody>
                            <tr align="center" bgcolor="#555555" style="color:#FFF">
                                <td> 时间 </td>
                                <td width="26%"> 主客队伍 </td>
                                <td width="21%"> 独赢</td>
                                <td width="14%"> 让球</td>
                                <td width="19%"> 大小</td>
                                <td width="10%"> 单双</td>
                            </tr>
                            <tr bgcolor="#cccccc" style="color:#000">
                                <td colspan="6"><div align="center"> 英超</div></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td width="10%" rowspan="2" class="rule"><p class="eng-12" style="line-height: 13pt; letter-spacing: 1pt" align="center"> 04-01<br>
                                    20:05p </p></td>
                                <td class="rule"><table width="100%" cellpadding="2" cellspacing="0">
                                    <tbody><tr>
                                        <td class="font_bk_12"><span class="eng_12"><span class="font_blue">曼联</span><font color="#ff0000" class="place">[主]</font> </span></td>
                                    </tr>
                                    <tr>
                                        <td> 阿仙奴 </td>
                                    </tr>
                                    </tbody></table></td>
                                <td bgcolor="#FFFFFF"><table width="100%" border="0" cellpadding="0" cellspacing="0" class="red_eng_b">
                                    <tbody>
                                    <tr>
                                        <td align="center"><div align="center"> <span class="style11"><font color="#ff0000">1.66</font></span></div></td>
                                    </tr>
                                    <tr>
                                        <td align="center"><span class="style11"><font color="#ff0000">1.88</font></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td bgcolor="#FFFFFF"><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="45%"><div align="center" class="font_blue"> 一球</div></td>
                                        <td width="55%" align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.920</font></span> <span class="rule"></span></td>
                                    </tr>
                                    <tr>
                                        <td><div align="center"> </div></td>
                                        <td align="center" class="red_eng_b"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">60 </font></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="40%" align="center" class="rule"><span class="font_blue">二球</span></td>
                                        <td class="rule" width="24%"><div class="style15" align="center"> 大</div></td>
                                        <td width="36%" align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.850</font></span></td>
                                    </tr>
                                    <tr>
                                        <td class="rule">&nbsp;</td>
                                        <td class="rule"><div class="style15" align="center"> <span class="style26">小</span></div></td>
                                        <td align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.950</font></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td align="center" class="font_blue"> 单</td>
                                        <td align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.930</font></span> <span class="rule"></span></td>
                                    </tr>
                                    <tr>
                                        <td width="29%"><div class="eng-12" align="center"> <font class="font_blue" color="#0000ff">双 </font> </div></td>
                                        <td width="71%" align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.930</font></span> <span class="rule"></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td class="rule"><table width="100%" cellpadding="2" cellspacing="0" class="tab_bg">
                                    <tbody><tr>
                                        <td> 和局 </td>
                                    </tr>
                                    </tbody></table></td>
                                <td bgcolor="#FFFFFF"><table width="100%" border="0" cellpadding="0" cellspacing="0" class="red_eng_b">
                                    <tbody>
                                    <tr>
                                        <td align="center"><div align="center"> <span class="style11"><font color="#ff0000">3.20</font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td bgcolor="#FFFFFF">&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                            </tr>
                            </tbody>
                        </table>
                        <br>
                        <table class="tab_bg" cellspacing="1" cellpadding="2" width="100%" border="1">
                            <tbody>
                            <tr bgcolor="#555555" style="color:#FFF">
                                <td colspan="4"><div align="center"> 上半场独赢交易与派彩范例 </div></td>
                            </tr>
                            <tr bgcolor="#CCCCCC">
                                <td width="15%"><div align="center"> 比赛结果 </div></td>
                                <td><div align="center"> 结果 </div></td>
                                <td colspan="2"><p class="font_w" align="center"> 以上表独赢目前之赔率交易，交易金额为$1000 </p></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td rowspan="3"><div align="center">
                                    <p class="red_eng_b" style="line-height: 13pt; letter-spacing: 1pt"> <span class="style11"><font color="#ff0000">2</font></span><span class="odd-red"><font color="#ff0000">:</font></span><span class="style11"><font color="#ff0000">0</font></span> </p>
                                </div></td>
                                <td class="font_blue" width="17%" rowspan="3"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> 主场胜 </p>
                                </div></td>
                                <td width="17%" class="font_blue"><p style="line-height: 13pt; letter-spacing: 1pt"> <font color="#000000">交易曼联</font></p></td>
                                <td width="51%" class="font_blue"><p> 可赢金额=(1,000X1.66)-1,000(本金)=$660</p></td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff" class="font_blue"><font color="#000000">交易阿仙奴</font></td>
                                <td bgcolor="#ffffff" class="font_blue"><p class="lost_money"> 输付金额 $1,000 </p></td>
                            </tr>
                            <tr>
                                <td width="17%" bgcolor="#ffffff" class="font_blue"><p style="line-height: 13pt; letter-spacing: 1pt"> <font color="#000000">交易和局</font> </p></td>
                                <td width="51%" bgcolor="#ffffff" class="font_blue"><p> <span class="lost_money">输付金额 $1,000 </span> </p></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td rowspan="3"><div align="center">
                                    <p class="red_eng_b" style="line-height: 13pt; letter-spacing: 1pt"> <span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">:</font></span><span class="style11"><font color="#ff0000">1</font></span> </p>
                                </div></td>
                                <td class="font_blue" rowspan="3"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> 客场胜 </p>
                                </div></td>
                                <td class="font_blue"><font color="#000000">交易曼联</font></td>
                                <td class="font_blue"><span class="style13">输付金额 $1,000 </span></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td width="17%" class="font_blue"><p style="line-height: 13pt; letter-spacing: 1pt"> <font color="#000000">交易阿仙奴</font></p></td>
                                <td width="51%" class="font_blue"><p> 可赢金额=(1,000X1.88)-1,000(本金)= $880</p></td>
                            </tr>
                            <tr>
                                <td width="17%" bgcolor="#ffffff" class="font_blue"><p style="line-height: 13pt; letter-spacing: 1pt"> <font color="#000000">交易和局</font> </p></td>
                                <td width="51%" bgcolor="#ffffff" class="font_blue"><p style="line-height: 13pt; letter-spacing: 1pt"> <span class="lost_money">输付金额 $1,000 </span> </p></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td rowspan="3"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <span class="style11"><font color="#ff0000">1</font></span><span class="odd-red"><font color="#ff0000">:1</font></span> </p>
                                </div></td>
                                <td class="font_blue" rowspan="3"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> 和局 </p>
                                </div></td>
                                <td class="font_blue"><font color="#000000">交易曼联</font></td>
                                <td class="font_blue"><span class="lost_money">输付金额 $1,000 </span></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td width="17%" class="font_blue"><p style="line-height: 13pt; letter-spacing: 1pt"> <font color="#000000">交易阿仙奴</font></p></td>
                                <td width="51%" class="font_blue"><p style="line-height: 13pt; letter-spacing: 1pt"> <span class="lost_money">输付金额 $1,000 </span> </p></td>
                            </tr>
                            <tr>
                                <td width="17%" bgcolor="#ffffff" class="font_blue"><p style="line-height: 13pt; letter-spacing: 1pt"> <font color="#000000">交易和局</font> </p></td>
                                <td width="51%" bgcolor="#ffffff" class="font_blue"><p> 可赢金额=(1,000X3.20)-1,000(本金)=$2,200</p></td>
                            </tr>
                            </tbody>
                        </table>
                        <br>
                        <table class="tab_bg" cellspacing="1" cellpadding="2" width="100%" align="center" border="1">
                            <tbody>
                            <tr bgcolor="#555555" style="color:#FFF">
                                <td colspan="4"><div align="center"> 上半场让球交易与派彩范例 </div></td>
                            </tr>
                            <tr bgcolor="#cccccc">
                                <td width="15%"><div align="center"> <font color="#000000">比赛结果</font> </div></td>
                                <td><div align="center"> 结果 </div></td>
                                <td colspan="2" align="center"> 以曼联让"一球"对阿仙奴为目前交易时之让分交易金额为 $1,000 </td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td rowspan="2" class="red_eng_b"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <span class="style11"><font color="#ff0000">3</font></span><span class="odd-red"><font color="#ff0000">:</font></span><span class="style11"><font color="#ff0000">0</font></span></p>
                                </div></td>
                                <td class="font_12_bk" width="17%" rowspan="2"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> 主场胜 </p>
                                </div></td>
                                <td width="17%" class="font_12_bk"><font color="#000000">交易曼联</font></td>
                                <td width="51%" class="eng_12"><p align="left" class="font_blue"> 可赢金额 = (1,000X0.920)=$920</p></td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff" class="font_12_bk"><font color="#000000">交易阿仙奴</font></td>
                                <td bgcolor="#ffffff" class="eng_12"><p align="left"> <span class="lost_money">输付金额 $1,000 </span> </p></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td rowspan="2" class="red_eng_b"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">:</font></span><span class="style11"><font color="#ff0000">1</font></span></p>
                                </div></td>
                                <td class="font_12_bk" rowspan="2"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> 客场胜 </p>
                                </div></td>
                                <td class="font_12_bk"><font color="#000000">交易曼联</font></td>
                                <td class="eng_12"><p align="left"> <span class="lost_money">输付金额 $1,000 </span> </p></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td width="17%" class="font_12_bk"><font color="#000000">交易阿仙奴</font></td>
                                <td width="51%" class="eng_12"><p align="left"> <span class="font_blue">可赢金额 = (1,000X0.960)=$960</span></p></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td rowspan="2" class="red_eng_b"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <span class="style11"><font color="#ff0000">2</font></span><span class="odd-red"><font color="#ff0000">:1</font></span> </p>
                                </div></td>
                                <td class="font_12_bk" rowspan="2"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> 和局 </p>
                                </div></td>
                                <td class="font_12_bk"><font color="#000000">交易曼联</font></td>
                                <td class="eng_12"><p align="left"> 和局退回交易 </p></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td width="17%" class="font_12_bk"><font color="#000000">交易阿仙奴</font></td>
                                <td width="51%" class="eng_12"><p align="left"> 和局退回交易 </p></td>
                            </tr>
                            </tbody>
                        </table>
                        <br>
                        <table class="tab_bg" cellspacing="1" cellpadding="2" width="100%" align="center" border="1">
                            <tbody>
                            <tr bgcolor="#555555" style="color:#FFF">
                                <td colspan="4"><div align="center"> 上半场大小盘交易与派彩范例 </div></td>
                            </tr>
                            <tr bgcolor="#cccccc">
                                <td width="15%"><div align="center"> 比赛结果 </div></td>
                                <td><div align="center"> 入球总数 </div></td>
                                <td colspan="2" align="center"> 以上表目前大2小2之分盘及赔率交易，交易金额为 $ 1000 </td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td rowspan="2" class="red_eng_b"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">:</font></span><span class="style11"><font color="#ff0000">1</font></span> </p>
                                </div></td>
                                <td class="bet_left_water" width="17%" rowspan="2"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> 1 </p>
                                </div></td>
                                <td width="17%" class="eng_12"><p style="line-height: 13pt; letter-spacing: 1pt" align="left"> <font color="#000000">交易大2</font></p></td>
                                <td width="51%" class="eng_12"><p style="line-height: 13pt; letter-spacing: 1pt" align="left"> <font color="#ff0000">输付金额 $1,000 </font> </p></td>
                            </tr>
                            <tr>
                                <td width="17%" bgcolor="#ffffff" class="eng_12"><p style="line-height: 13pt; letter-spacing: 1pt" align="left"> <font color="#000000">交易小</font><font color="#000000">2</font></p></td>
                                <td width="51%" bgcolor="#ffffff" class="eng_12"><p align="left" class="font_blue"> 可赢金额=(1,000X0.950)= $950</p></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td rowspan="2" class="red_eng_b"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <span class="odd-red"><font color="#ff0000">2:</font></span><span class="style11"><font color="#ff0000">0</font></span> </p>
                                </div></td>
                                <td class="bet_left_water" rowspan="2"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> 2 </p>
                                </div></td>
                                <td width="17%" class="eng_12"><p style="line-height: 13pt; letter-spacing: 1pt" align="left"> <font color="#000000">交易大2</font></p></td>
                                <td width="51%" class="eng_12"><p> 和局退回交易 </p></td>
                            </tr>
                            <tr>
                                <td width="17%" bgcolor="#ffffff" class="eng_12"><p style="line-height: 13pt; letter-spacing: 1pt" align="left"> <font color="#000000">交易小</font><font color="#000000">2</font></p></td>
                                <td width="51%" bgcolor="#ffffff" class="eng_12"><p> 和局退回交易 </p></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td rowspan="2" class="red_eng_b"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <span class="odd-red"><font color="#ff0000">2:1</font></span> </p>
                                </div></td>
                                <td class="bet_left_water" rowspan="2"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> 3 </p>
                                </div></td>
                                <td width="17%" class="eng_12"><p style="line-height: 13pt; letter-spacing: 1pt" align="left"> <font color="#000000">交易大2</font></p></td>
                                <td width="51%" class="eng_12"><p align="left" class="font_blue" style="line-height: 13pt; letter-spacing: 1pt"> 可赢金额=(1,000X0.850)= $850</p></td>
                            </tr>
                            <tr>
                                <td width="17%" bgcolor="#ffffff" class="eng_12"><p style="line-height: 13pt; letter-spacing: 1pt" align="left"> <font color="#000000">交易小2</font></p></td>
                                <td width="51%" bgcolor="#ffffff" class="eng_12"><p style="line-height: 13pt; letter-spacing: 1pt" align="left"> <font color="#ff0000">输付金额 $1,000 </font> </p></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div class="sport-rule-7" v-if="ifr==7">
                <div class="topic">
                    滚球让球玩法介绍
                </div>
                <div class="rule-content">
                    <p>1、玩法介绍 ： 又偁滚球让球，在指定球赛进行中接受交易 ，球赛进行时预测两队经(让球调整)后，选择主队或客队胜出之交易方式，交易时以当时之 基础分(目前比数) 为依据， 重新计算入球比数 ，且接受交易至该场球赛滚球盘结束。</p>
                    <p>2、交易方式 ： 交易者可就一场球赛的主队或客队之目前赔率点选交易。交易前请点选更新键，以取得最新的赔率。</p>
                    <p>3、派彩资格 ： 交易滚球让球时，如正确选中一场球赛经让球调整后的胜方队伍，将可赢得派彩彩金，若在让球条件为平手下局或调整让分后局，则退回全部交易。</p>
                    <p>4、派彩范例 ： 以主场曼联迎战客场阿仙奴为例。</p>
                    <div class="bottomic"  @click="showMic($event)">
                        单注注单与分注注单之交易分配
                    </div>
                    <div class="bottomic-content s">
                        <table class="tab_bg" cellspacing="1" cellpadding="2" width="100%" align="center" border="1">
                            <tbody>
                            <tr align="center" bgcolor="#555555" style="color:#FFF">
                                <td><span class="style4">单注让球</span></td>
                                <td><span class="style4">分注让球</span></td>
                            </tr>
                            <tr bgcolor="#ffffff" class="font_12_bk">
                                <td width="49%"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> 当强队让弱队，开出「一个」让球球盘 </p>
                                </div></td>
                                <td width="51%"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> 当强队让弱队，开出「二个」让球球盘 </p>
                                </div></td>
                            </tr>
                            <tr bgcolor="#ffffff" class="font_12_bk">
                                <td width="49%"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> 如 ： 让一球 <span class="eng_12">(1) </span> </p>
                                </div></td>
                                <td width="51%"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> 如：让半球 / 一球 <span class="eng_12">(0.5/1) </span> </p>
                                </div></td>
                            </tr>
                            <tr align="center" bgcolor="#555555" style="color:#FFF">
                                <td> 交易金额分配 </td>
                                <td> 交易金额分配 </td>
                            </tr>
                            <tr bgcolor="#ffffff" class="font_12_bk">
                                <td width="49%"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> 将全数被交易在让 " 一球 " 的球盘上 </p>
                                </div></td>
                                <td width="51%"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> 将被平分为两份，一半金额交易在让 " 半球 " 的球盘上，<br>
                                        而另一半金额则交易在让 " 一球 " 的球盘上 </p>
                                </div></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        让球盘口与派彩范例
                    </div>
                    <div class="bottomic-content s">
                        <table class="tab_bg" cellspacing="1" cellpadding="2" width="100%" align="center" border="1">
                            <tbody>
                            <tr align="center" bgcolor="#555555" style="color:#FFF">
                                <td height="22" colspan="3"> 英国超级联赛</td>
                            </tr>
                            <tr align="center" bgcolor="#cccccc" class="font_12_bk">
                                <td height="22" colspan="3"> 全场 </td>
                            </tr>
                            <tr align="center" bgcolor="#ffffff" class="font_12_bk">
                                <td> 时间 </td>
                                <td width="47%" height="22"> 主客队伍 </td>
                                <td width="41%"> 滚球让球</td>
                            </tr>
                            <tr bgcolor="#ffffff" class="font_12_bk">
                                <td width="12%" align="center" class="eng-12"> 08/01<br>
                                    20:05 </td>
                                <td><table width="100%" cellpadding="2" cellspacing="0">
                                    <tbody><tr>
                                        <td class="font_bk_12"><span class="eng_12"><span class="font_blue">曼联</span><font color="#ff0000" class="place">[主]</font> </span></td>
                                    </tr>
                                    <tr>
                                        <td> 阿仙奴 </td>
                                    </tr>
                                    </tbody></table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="45%"><div align="center" class="font_blue"> 二球</div></td>
                                        <td width="55%" align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.920</font></span> <span class="rule"></span></td>
                                    </tr>
                                    <tr>
                                        <td><div align="center"> </div></td>
                                        <td align="center" class="red_eng_b"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">60 </font></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                            </tr>
                            </tbody>
                        </table>
                        <br>
                        <table class="tab_bg" cellspacing="1" cellpadding="2" width="100%" align="center" border="1">
                            <tbody>
                            <tr bgcolor="#555555">
                                <td colspan="5"><div align="center"> 交易与派彩范例-滚球让球 </div></td>
                            </tr>
                            <tr bgcolor="#3b3b3b">
                                <td width="13%" bgcolor="#cccccc"><div align="center"> 目前比数</div></td>
                                <td width="13%" bgcolor="#cccccc"><div align="center"> 交易状况 </div></td>
                                <td colspan="3" bgcolor="#cccccc"><div align="center"> 以曼联让"一球"对阿仙奴为目前交易时之让分交易 $1,000 </div></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td class="bet_left_water" rowspan="2"><div align="center"> 1:1</div></td>
                                <td align="left" class="font_12_bk"><div align="center">
                                    <p style="line-height: 13pt; letter-spacing: 1pt"> <font color="#000000">交易曼联</font> </p>
                                </div></td>
                                <td class="bet_left_water" width="9%" rowspan="2"><p style="line-height: 13pt; letter-spacing: 1pt" align="center"> 2:1</p></td>
                                <td width="14%" rowspan="2" align="center" bgcolor="#ffffff" class="font_12_bk"><p style="line-height: 13pt; letter-spacing: 1pt" align="center"> 输赢结果 </p></td>
                                <td width="51%" class="eng_12"><p align="left" class="font_blue" style="line-height: 13pt; letter-spacing: 1pt"> 可赢金额 = (1,000X0.960)= $960</p></td>
                            </tr>
                            <tr>
                                <td align="center" bgcolor="#ffffff" class="font_12_bk"><font color="#000000">交易阿仙奴</font></td>
                                <td width="51%" bgcolor="#ffffff" class="eng_12"><p style="line-height: 13pt; letter-spacing: 1pt" align="left"> <font color="#ff0000">输付金额 $1,000 </font> </p></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td class="bet_left_water" rowspan="2"> 1:1<p></p></td>
                                <td rowspan="2"><div align="center">
                                    <p class="lost_money" style="line-height: 13pt; letter-spacing: 1pt"> <span class="red_eng_b"><font color="#ff0000">2:3</font></span><font color="#ff0000" class="red-12">(客胜)</font> </p>
                                </div></td>
                                <td class="bet_left_water" rowspan="2"><p style="line-height: 13pt; letter-spacing: 1pt" align="center"> 1:1</p></td>
                                <td width="14%" rowspan="2" align="center" bgcolor="#ffffff" class="font_12_bk"><p style="line-height: 13pt; letter-spacing: 1pt" align="center"> 输赢结果 </p></td>
                                <td width="51%" class="eng_12"><p style="line-height: 13pt; letter-spacing: 1pt" align="left"> <font color="#ff0000">输付金额 $1,000 </font> </p></td>
                            </tr>
                            <tr>
                                <td width="51%" bgcolor="#ffffff" class="eng_12"><p align="left" class="font_blue" style="line-height: 13pt; letter-spacing: 1pt"> 可赢金额 = (1,000X0.940)= $940</p></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        滚球交易规则
                    </div>
                    <div class="bottomic-content s">
                        <p>1、所有已被系统确认为有效的走地交易单，如因赔率、盘口、走地比分错误或其他种种因素，本公司将保留上述相关交易为无效交易单的权利。</p>
                        <p>2、所有走地赛事的进球时间,将以本公司裁定为主，所有进球时间上的争议均不受理会。(例：其他相关网站提供之讯息)。</p>
                        <p>3、在某些特殊情况下，本公司会在无预警之情况下取消预定要进行的滚球盘口。(例：卫星收讯不良等因素)</p>
                        <p>4、针对因现场直播延迟或其他因素而导致在入球后进行交易的交易单，本公司将保留相关交易为无效交易单的权利。</p>
                        <p>5、滚球赛事上的技术问题(如软件、线路或其他无可预知的因素，导致比数或赔率无法更新等问题)所有进球后的相关交易将视为「无效」。</p>
                        <p>6、计时器：滚球比赛时间显示只供会员参考之用，如比赛时间有所误差，我们概不对此负责。</p>
                        <p>7、会员在滚球时候，如果赛场中出现危险球，会员的注单照常接受， 危险球的定义是：</p>
                        <br>
                        <p> 1.角球</p>
                        <p> 2.12码罚球</p>
                        <p>3.自由球(攻方在守方禁区附近的自由球)</p>
                        <p>4.掷入球(攻方靠近守方禁区的掷入球)</p>
                        <p> 5.A队向B队禁区附近进攻(或是B队在A队的禁区附近进攻)</p>
                        <p>•但在以下的状况，会员所下注注单将会被取消，而会员所下注的金额将会全数退回</p>
                        <p> ○进球</p>
                        <p>○红卡</p>
                        <p>系統判斷进球前30秒之所有注單视为危险单将予以删单.</p>
                    </div>
                </div>
            </div>
            <div class="sport-rule-8" v-if="ifr==8">
                <div class="topic">
                    足球波胆玩法介绍
                </div>
                <div class="rule-content">
                    <p>1、玩法介绍 ： 在指定球赛中，预测球赛的最终正确比数。如A胜B，比数3：0或B胜A，比数3：0； 其它 是指非表格所列之比分；如最终赛果不是表格所列之比分，则下注 其它 之会员赢得派彩。</p>
                    <p>2、交易方式 ： 投注者可就一场球赛选择最终主队胜出比数、客队胜出比数或和局比数之目前赔率点选其中一项下注， 下注前请点选更新键，以取得最新的赔率 。</p>
                    <p>3、派彩资格 ： 同全场独赢、让球、大小球之规则。</p>
                    <p>4、派彩范例 ： 以主场曼联迎战客场阿仙奴为例。</p>
                    <p>5、波膽其他規則是："其它"是指非表格上所表示之比分。如最终赛果不是表格上所列的比分，即交易"其它"的会员胜。</p>
                    <div class="bottomic-content show" style="padding-left: 0">
                        <table width="100%" cellpadding="1" cellspacing="1" border="1" class="tab_bg">
                            <tbody><tr bgcolor="#555555" style="color:#FFF">
                                <td width="46" height="18" align="center"> 时间 </td>
                                <td width="328" align="center"> 主客队伍 </td>
                                <td width="28" align="center"> 1:0</td>
                                <td width="28" align="center"> 2:0</td>
                                <td width="28" align="center"> 2:1</td>
                                <td width="28" align="center"> 3:1</td>
                                <td width="28" align="center"> 3:2</td>
                                <td width="28" align="center"> 4:0</td>
                                <td width="28" align="center"> 4:1</td>
                                <td width="30" align="center"> 4:2</td>
                                <td width="29" align="center"> 4:3</td>
                                <td width="33" align="center"> 0:0</td>
                                <td width="30" align="center"> 1:1</td>
                                <td width="31" align="center"> 2:2</td>
                                <td width="31" align="center"> 3:3</td>
                                <td width="31" align="center"> 4:4</td>
                                <td width="47" align="center"> 5up</td>
                            </tr>
                            <tr bgcolor="#cccccc" class="eng_12">
                                <td height="18" colspan="17" align="center"> 英格兰超级联赛 </td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td rowspan="2" align="center" class="eng_12"><table width="45" border="0" align="left" cellpadding="0" cellspacing="0">
                                    <tbody><tr>
                                        <td width="100%" align="center" class="eng_12_bk"> 06-02</td>
                                    </tr>
                                    <tr>
                                        <td align="center" class="eng_12_bk"> 08:05p</td>
                                    </tr>
                                    </tbody></table></td>
                                <td rowspan="2"><table width="100%" cellpadding="1" cellspacing="0">
                                    <tbody><tr>
                                        <td><span class="team_down">阿仙奴</span><span class="place"> [主]</span></td>
                                    </tr>
                                    <tr>
                                        <td><span class="team_up">曼联</span></td>
                                    </tr>
                                    </tbody></table></td>
                                <td align="center" class="odds_red"><span class="red_eng_b"><strong>10</strong></span></td>
                                <td align="center" class="odds_red"><span class="red_eng_b">20</span></td>
                                <td align="center" class="odds_red"><span class="red_eng_b"><strong>18</strong></span></td>
                                <td align="center" class="odds_red"><span class="red_eng_b"><strong>68</strong></span></td>
                                <td align="center" class="odds_red"><span class="red_eng_b"><strong>51</strong></span></td>
                                <td align="center" class="odds_red"><span class="red_eng_b"><strong>51</strong></span></td>
                                <td align="center" class="odds_red"><span class="red_eng_b"><strong>91</strong></span></td>
                                <td align="center" class="odds_red"><span class="red_eng_b"><strong>81</strong></span></td>
                                <td align="center" class="odds_red"><span class="red_eng_b"><strong>81</strong></span></td>
                                <td rowspan="2" align="center" class="odds_red"><span class="red_eng_b"><strong>6.5</strong></span></td>
                                <td rowspan="2" align="center" class="odds_red"><span class="red_eng_b"><strong>6.0</strong></span></td>
                                <td rowspan="2" align="center" class="odds_red"><span class="red_eng_b"><strong>13.0</strong></span></td>
                                <td rowspan="2" align="center" class="odds_red"><span class="red_eng_b"><strong>51</strong></span></td>
                                <td rowspan="2" align="center" class="odds_red"><span class="red_eng_b"><strong>91</strong></span></td>
                                <td align="center" class="odds_red"><span class="red_eng_b"><strong>45</strong></span></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td align="center" class="odds_red"><span class="red_eng_b"><strong>7</strong></span></td>
                                <td align="center" class="odds_red"><span class="red_eng_b"><strong>8</strong></span></td>
                                <td align="center" class="odds_red"><span class="red_eng_b"><strong>8</strong></span></td>
                                <td align="center" class="odds_red"><span class="red_eng_b"><strong>13</strong></span></td>
                                <td align="center" class="odds_red"><span class="red_eng_b"><strong>13</strong></span></td>
                                <td align="center" class="odds_red"><span class="red_eng_b"><strong>28</strong></span></td>
                                <td align="center" class="odds_red"><span class="red_eng_b"><strong>38</strong></span></td>
                                <td align="center" class="odds_red"><span class="red_eng_b"><strong>43</strong></span></td>
                                <td align="center" class="odds_red"><span class="red_eng_b"><strong>81</strong></span></td>
                                <td align="center" class="odds_red"><span class="red_eng_b"><strong>45</strong></span></td>
                            </tr>
                            </tbody></table>
                    </div>
                </div>
            </div>
            <div class="sport-rule-9" v-if="ifr==9">
                <div class="topic">
                    足球入球数玩法介绍
                </div>
                <div class="rule-content">
                <p>1、玩法介绍 ：	在指定球赛中，预测球赛的最终的总入球数。 (一)单 / 双盘： (1)入球单数：即全场总入球数为 单数 (2)入球双数：即全场总入球数为 双数或零 (二) 总入球数</p>
                <p>2、投注方式 ：	单数，双数，0～1球 ， 2～3球 ， 4～6球 ， 7球或以上 。下注前请点选更新键，以取得最新的赔率。</p>
                <p>3、派彩资格 ：	每一项入球数投注，如正确选中一场球赛的总入球数，将可赢得派彩彩金。</p>
                <p>4、入球数投注与派彩范例 ： 以主场巴塞隆那迎战客场皇家马德里为例。</p>
                    <div class="bottomic-content show">
                        <table border="1" cellspacing="1" cellpadding="0"  width="100%" class="tab_bg">
                            <tbody><tr>
                                <td colspan="8" bgcolor="#555555" style="color:#FFF" height="22px">西班牙甲组联赛 </td>
                            </tr>
                            <tr bgcolor="#CCCCCC">
                                <td width="10%">时间 </td>
                                <td width="17%">主客队伍 </td>
                                <td width="13%">单 </td>
                                <td width="11%">双 </td>
                                <td width="13%">0-1 </td>
                                <td width="12%">2-3 </td>
                                <td width="12%">4-6 </td>
                                <td width="12%">&gt;=7 </td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td rowspan="2">8/17<br>
                                    8 ：05 </td>
                                <td>巴塞隆那[主] </td>
                                <td rowspan="2">0.850</td>
                                <td rowspan="2">0.950</td>
                                <td rowspan="2">2.60</td>
                                <td rowspan="2">1.83</td>
                                <td rowspan="2">3.60</td>
                                <td rowspan="2">35.00</td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td>皇家马德里 </td>
                            </tr>
                            </tbody></table>
                        <br>
                        <table border="1" cellspacing="1" cellpadding="0" width="100%" class="tab_bg">
                            <tbody><tr bgcolor="#555555" style="color:#FFF">
                                <td width="53"><p>比赛结果 </p></td>
                                <td width="49"><p>总入球数 </p></td>
                                <td width="53"><p>单/双 </p></td>
                                <td colspan="3"><p>以上表目前之赔率，下注$1,000 </p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td rowspan="4">0：1<p></p></td>
                                <td rowspan="4">1<p></p></td>
                                <td rowspan="4">单 <p></p></td>
                                <td width="58" rowspan="4">输赢结果 <p></p></td>
                                <td width="57"><p>下注 单 </p></td>
                                <td width="253"><p>可赢金额 = (1,000X0.850)= $850</p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td><p>下注 双 </p></td>
                                <td><p>输付金额 = $1,000</p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td><p>下注 0-1</p></td>
                                <td><p>可赢金额 = 1,000X2.60=$2,600</p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td><p>下注 2-3</p></td>
                                <td><p>输付金额 = $1,000</p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td rowspan="4">2：0<p></p></td>
                                <td rowspan="4">2<p></p></td>
                                <td rowspan="4">双 <p></p></td>
                                <td rowspan="4">输赢结果 <p></p></td>
                                <td><p>下注单 </p></td>
                                <td><p>输付金额 = $1,000</p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td><p>下注双 </p></td>
                                <td><p>可赢金额 = (1,000X0.950)=$950</p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td><p>下注 0-1</p></td>
                                <td><p>输付金额 = $1,000</p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td><p>下注 2-3</p></td>
                                <td><p>可赢金额 = 1,000X1.83=$1830</p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td rowspan="4">0：0<p></p></td>
                                <td rowspan="4">0<p></p></td>
                                <td rowspan="4">双 <p></p></td>
                                <td rowspan="4">输赢结果 <p></p></td>
                                <td><p>下注单 </p></td>
                                <td><p>输付金额 = $1,000</p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td><p>下注双 </p></td>
                                <td><p>可赢金额 = (1,000X0.950)=$950</p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td><p>下注 0-1</p></td>
                                <td><p>可赢金额 = 1,000X2.6=$2,600</p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td><p>下注 2-3</p></td>
                                <td><p>输付金额 = $1,000</p></td>
                            </tr>
                            </tbody></table>
                    </div>
                </div>
            </div>
            <div class="sport-rule-10" v-if="ifr==10">
                <div class="topic">
                    足球半全场玩法介绍
                </div>
                <div class="rule-content">
                    <p>1、玩法介绍 ：	在指定球赛中，两队以互不让分的方式预测球赛上半场及全场之主客和赛果胜负，如遇中立场之比赛，以上方球队主场球队。</p>
                    <p>2、投注方式 ：	共有以下9种半全场赛果可供选择： 主/主、 主/客、主/和、客/主、客/客、客/和、和/主、和/客、和/和 ，「主」代表主队胜，「和」代表和局，而「客」代表客队胜。</p>
                    <p>3、派彩资格 ：	每一项半全场投注，如正确选中一场球赛的上半场及全场之主客和赛果胜负，将可赢得派彩彩金。下注前请点选更新键，以取得最新的赔率。</p>
                    <p>4、半全场投注与派彩范例 ：以主场巴塞隆那迎战客场皇家马德里为例。</p>
                    <div class="bottomic-content show">
                        <table border="1" cellspacing="1" cellpadding="0" width="100%" class="tab_bg">
                            <tbody><tr bgcolor="#555555" style="color:#FFF" height="22px">
                                <td colspan="11">西班牙甲组联赛 </td>
                            </tr>
                            <tr bgcolor="#CCCCCC">
                                <td width="12%">时间 </td>
                                <td width="18%">主客队伍 </td>
                                <td>主/主 </td>
                                <td>主/客 </td>
                                <td>主/和 </td>
                                <td>客/主 </td>
                                <td>客/客 </td>
                                <td>客/和 </td>
                                <td>和/主 </td>
                                <td>和/客 </td>
                                <td>和/和 </td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td rowspan="2">8/17<br>
                                    8 ：05 </td>
                                <td>巴塞隆那[主] </td>
                                <td rowspan="2">8</td>
                                <td rowspan="2">9</td>
                                <td rowspan="2">11</td>
                                <td rowspan="2">21</td>
                                <td rowspan="2">18</td>
                                <td rowspan="2">25</td>
                                <td rowspan="2">51</td>
                                <td rowspan="2">41</td>
                                <td rowspan="2">65</td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td>皇家马德里 </td>
                            </tr>
                            </tbody></table>
                        <br>
                        <table border="1" cellspacing="1" cellpadding="0" width="100%" class="tab_bg">
                            <tbody><tr bgcolor="#555555" style="color:#FFF" height="22px">
                                <td width="65">上半场比数 </td>
                                <td width="67">全场比数 </td>
                                <td colspan="3">以上表目前之赔率下注，下注金额为 $ 1000 </td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td rowspan="2">1：0(主胜)</td>
                                <td rowspan="2">2：0(主胜)</td>
                                <td width="51" rowspan="2">输赢结果 </td>
                                <td width="65">下注主/主 </td>
                                <td width="266">可赢金额 = 1,000X8=$8,000</td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td>下注其它 </td>
                                <td>输付金额 = $1,000</td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td rowspan="2">1：0(主胜)</td>
                                <td rowspan="2">1：2(客胜)</td>
                                <td rowspan="2">输赢结果 </td>
                                <td>下注主/客 </td>
                                <td>可赢金额 = 1,000X9=$9,000</td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td>下注其它 </td>
                                <td>输付金额 = $1,000</td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td rowspan="2">1：0(主胜)</td>
                                <td rowspan="2">1：1(和局)</td>
                                <td rowspan="2">输赢结果 </td>
                                <td>下注主/和 </td>
                                <td>可赢金额 = 1,000X11=$11,000</td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td>下注其它 </td>
                                <td>输付金额 = $1,000</td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td rowspan="2">0：1(客胜)</td>
                                <td rowspan="2">2：1(主胜)</td>
                                <td rowspan="2">输赢结果 </td>
                                <td>下注客/主 </td>
                                <td>可赢金额 = 1,000X21=$21,000</td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td>下注其它 </td>
                                <td>输付金额 = $1,000</td>
                            </tr>
                            </tbody></table>
                    </div>
                </div>
            </div>
            <div class="sport-rule-11" v-if="ifr==11">
                <div class="topic">
                    足球混合过关
                </div>
                <div class="rule-content">
                    <p>1、玩法介绍 ：	在指定球赛中，可对赛事之独赢、让球或大小球玩法选择其一与其它赛事之独赢、让球或大小球玩法相互连串过关之投注方式。</p>
                    <p>2、投注方式 ：	投注者可依目前之分盘点选(主队,客队,独赢、让球或大小球)并下注两场至十场。同一场赛事不得互碰（在同一张注单中投注2次以上），否则一律视为无效注单。混合过关之盘口非固定分盘，下注前请点选更新键，以取得最新的分盘。</p>
                    <p>3、派彩资格 ：	下注混合过关时，其选择队伍必须全数胜出，方可赢得派彩金额。 当比赛经判定 为无效球赛或赛果经让分调整后为和局时，则该场球赛之赔率以1计算。</p>
                    <p>4、混合过关投注与派彩范例 ：以下表为例</p>
                    <div class="bottomic-content show">
                        <table border="1" cellspacing="1" cellpadding="0" width="100%" class="tab_bg">
                            <tbody><tr bgcolor="#555555" style="color:#FFF; height:22px;">
                                <td>时间 </td>
                                <td>队伍名称 </td>
                                <td>独赢 </td>
                                <td>让球 </td>
                                <td>大小球 </td>
                            </tr>
                            <tr>
                                <td colspan="5" bgcolor="#CCCCCC">英格兰超级联赛 全场 </td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td width="50" rowspan="3"><p align="center">8/9<br>
                                    12：00</p></td>
                                <td nowrap="nowrap"><p>阿士东维拉 [主] </p></td>
                                <td><p>1.13 </p></td>
                                <td nowrap="nowrap"><p>0.900 </p></td>
                                <td nowrap="nowrap"><p>0.900 大2</p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td><p>阿仙奴 </p></td>
                                <td><p>0.54 </p></td>
                                <td nowrap="nowrap"><p>0.900 一球半 </p></td>
                                <td><p>0.900 小2</p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td><p>和局 </p></td>
                                <td><p>2.26 </p></td>
                                <td><p>&nbsp;</p></td>
                                <td><p>&nbsp;</p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td rowspan="3"><p align="center">8/9<br>
                                    12：00</p></td>
                                <td><p>曼联 [主] </p></td>
                                <td><p>0.52 </p></td>
                                <td nowrap="nowrap"><p>0.900 半球 </p></td>
                                <td nowrap="nowrap"><p>0.900 大1/1.5</p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td nowrap="nowrap"><p>米杜士堡 </p></td>
                                <td><p>1.10 </p></td>
                                <td><p>0.900 </p></td>
                                <td><p>0.900 小1/1.5</p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td><p>和局 </p></td>
                                <td><p>2.57 </p></td>
                                <td><p>&nbsp;</p></td>
                                <td><p>&nbsp;</p></td>
                            </tr>
                            <tr>
                                <td colspan="5" bgcolor="#CCCCCC">德国甲组联赛</td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td rowspan="3"><p align="center">8/9<br>
                                    12：00</p></td>
                                <td nowrap="nowrap"><p>杜伊斯堡 [主] </p></td>
                                <td><p>&nbsp;</p></td>
                                <td nowrap="nowrap"><p>0.900 半球/一球 </p></td>
                                <td nowrap="nowrap"><p>0.900 大0.5/1</p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td><p>汉诺威 </p></td>
                                <td><p>&nbsp;</p></td>
                                <td><p>0.900 </p></td>
                                <td><p>0.900 小0.5/1</p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td><p>和局 </p></td>
                                <td><p>&nbsp;</p></td>
                                <td><p>&nbsp;</p></td>
                                <td><p>&nbsp;</p></td>
                            </tr>
                            </tbody></table>
                        <br>
                        <table border="1" cellspacing="1" cellpadding="0" width="100%" class="tab_bg">
                            <tbody><tr bgcolor="#555555" style="color:#FFF; height:22px;">
                                <td width="167">主队 </td>
                                <td width="151">比赛结果 </td>
                                <td width="192">客队 </td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td><p align="center">阿士东维拉[主] </p></td>
                                <td><p align="center">3 ：1</p></td>
                                <td><p align="center">阿仙奴 </p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td><p align="center">曼联[主] </p></td>
                                <td><p align="center">1 ：0</p></td>
                                <td><p align="center">米杜士堡 </p></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td><p align="center">杜伊斯堡 [主] </p></td>
                                <td><p align="center">1：0</p></td>
                                <td><p align="center">汉诺威 </p></td>
                            </tr>
                            </tbody></table>
                    </div>
                    <p>以上表目前之赔率下注，下注金额为 $ 1,000</p>
                    <p>下注状况(一)下注阿士东维拉(独赢)、曼联(让球)、杜伊斯堡(大球)</p>
                    <p>可赢金额 = (1,000X(1+1.13)X(1+0.9)X(1+(0.9/2)))-1000(本金) = $4,868</p>
                    <p>下注状况(二)下注阿士东维拉(独赢)、米杜士堡(让球)、杜伊斯堡(大球)</p>
                    <p>输付金额 = $1,000</p>
                    <p class="red">备注：本娱乐城所有的混合过关最高的赔款金额是¥200，000.</p>
                </div>
            </div>
            <!--篮球-->
            <div class="sport-rule-11" v-if="ifr==12">
                <div class="topic">
                    篮球玩法介绍
                </div>
                <div class="rule-content">
                    <p>1、让分结果 = 投注金额 * 赔率 * 分洞</p>
                    <p>2、大小结果 = 投注金额 * 赔率 * 分洞</p>
                    <p>3、独赢结果 = 投注金额 * 赔率</p>
                    <p>4、 单双结果 = 投注金额 * 赔率</p>
                    <p>5、 过关注单中的任何一场比赛，如果联盟裁定比赛延期或取消，此过关注单仍视为有效，但是该场比赛不予计算，所下之关数将递减（4关降为3关，3关降为2关，2关降为单式）。　　
                        ※同一场赛事不得互碰（在同一张注单中投注2次以上），否则一律视为无效注单。
                        让球过关中，如果是输一半按乘以0.5计算，如果是赢一半按(1+赔率/2)计算，如是是赛事取消或中断，赔率按[1]计 算。</p>
                    <div class="bottomic-content-s show">
                        <table cellspacing="1" cellpadding="1" width="100%" align="center" border="1" class="b_tab">
                            <tbody>
                            <tr bgcolor="#555555">
                                <td height="21" colspan="6" align="center" class="bold_write">美国职篮</td>
                            </tr>
                            <tr bgcolor="#CCCCCC">
                                <td>
                                    <div align="center" class="font_12">时间 </div></td>
                                <td width="29%">
                                    <div align="center" class="font_12">主客队伍 </div></td>
                                <td width="12%">
                                    <div align="center" class="font_12">独赢</div></td>
                                <td width="17%">
                                    <div align="center" class="font_12">让分</div></td>
                                <td width="17%">
                                    <div align="center" class="font_12">大小</div></td>
                                <td width="16%">
                                    <div align="center" class="font_12">单双</div></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td class="eng-12"><div align="center">08/01<br>
                                    20:05 </div></td>
                                <td class="eng-12"><table width="100%" cellpadding="2" cellspacing="0">
                                    <tbody><tr>
                                        <td><span class="eng_12">底特律活塞</span></td>
                                    </tr>
                                    <tr>
                                        <td class="eng-blue">圣安东尼奥马刺 [主]</td>
                                    </tr>
                                    </tbody></table></td>
                                <td bgcolor="#FFFF99"><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div align="center"><span class="odd-red">0.900</span></div></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div align="center" class="odd-red">0.900</div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="49%">
                                            <div align="center"></div></td>
                                        <td width="51%" class="red_eng_b"><div align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.940</font></span> </div></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="style25" align="center">2+50</div></td>
                                        <td class="red_eng_b"><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">40</font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td class="eng-12" width="53%">
                                            <div class="style15" align="center">大186.5</div></td>
                                        <td width="47%"><div align="center"><span class="style11"><font color="#ff0000">0.900</font></span> </div></td>
                                    </tr>
                                    <tr>
                                        <td class="eng-12">
                                            <div class="style15" align="center"><span class="style26">小186.5</span></div></td>
                                        <td><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0</font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="49%">
                                            <div class="style25" align="center">单</div></td>
                                        <td width="51%"><span class="style11"><font color="#ff0000">0.900</font></span> </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div align="center" class="eng-blue">双</div></td>
                                        <td><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0</font></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td class="eng-12"><div align="center">08/01<br>
                                    20:05 </div></td>
                                <td class="eng-12"><table width="100%" cellpadding="2" cellspacing="0">
                                    <tbody><tr>
                                        <td><span class="eng_12">西雅图超音速</span></td>
                                    </tr>
                                    <tr>
                                        <td class="eng-blue">迈阿密热火 [主]</td>
                                    </tr>
                                    </tbody></table></td>
                                <td bgcolor="#FFFF99"><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div align="center"><span class="odd-red">0.900</span></div></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div align="center" class="odd-red">0.900</div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="49%">
                                            <div align="center"></div></td>
                                        <td width="51%" class="red_eng_b"><div align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.940</font></span> </div></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="style25" align="center">平手</div></td>
                                        <td class="red_eng_b"><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">40</font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td class="eng-12" width="53%">
                                            <div class="style15" align="center">大192</div></td>
                                        <td width="47%"><div align="center"><span class="style11"><font color="#ff0000">0.900</font></span> </div></td>
                                    </tr>
                                    <tr>
                                        <td class="eng-12">
                                            <div class="style15" align="center"><span class="style26">小192</span></div></td>
                                        <td><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0</font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="49%">
                                            <div class="style25" align="center">单</div></td>
                                        <td width="51%"><span class="style11"><font color="#ff0000">0.900</font></span> </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div align="center" class="eng-blue">双</div></td>
                                        <td><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0</font></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td class="eng-12" width="9%">
                                    <p class="eng-12" style="LINE-HEIGHT: 13pt; LETTER-SPACING: 1pt" align="center">08/01<br>
                                        20:05 </p></td>
                                <td class="eng-12"><table width="100%" cellpadding="2" cellspacing="0">
                                    <tbody><tr>
                                        <td><span class="eng_12">印第安纳溜马</span></td>
                                    </tr>
                                    <tr>
                                        <td class="eng-blue">达拉斯小牛 [主]</td>
                                    </tr>
                                    </tbody></table></td>
                                <td bgcolor="#FFFF99"><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div align="center"><span class="odd-red">0.900</span></div></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div align="center" class="odd-red">0.900</div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td>
                                    <table cellspacing="0" cellpadding="0" width="100%" border="0">
                                        <tbody>
                                        <tr>
                                            <td width="49%">
                                                <div align="center"></div></td>
                                            <td width="51%" class="red_eng_b"><div align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.940</font></span> </div></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="style25" align="center">平手</div></td>
                                            <td class="red_eng_b"><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">40</font></span></div></td>
                                        </tr>
                                        </tbody>
                                    </table></td>
                                <td>
                                    <table cellspacing="0" cellpadding="0" width="100%" border="0">
                                        <tbody>
                                        <tr>
                                            <td class="eng-12" width="53%">
                                                <div class="style15" align="center">大190</div></td>
                                            <td width="47%"><div align="center"><span class="style11"><font color="#ff0000">0.900</font></span> </div></td>
                                        </tr>
                                        <tr>
                                            <td class="eng-12">
                                                <div class="style15" align="center"><span class="style26">小190</span></div></td>
                                            <td><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0</font></span></div></td>
                                        </tr>
                                        </tbody>
                                    </table></td>
                                <td>
                                    <table cellspacing="0" cellpadding="0" width="100%" border="0">
                                        <tbody>
                                        <tr>
                                            <td width="49%">
                                                <div class="style25" align="center">单</div></td>
                                            <td width="51%"><span class="style11"><font color="#ff0000">0.900</font></span> </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div align="center" class="eng-blue">双</div></td>
                                            <td><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0</font></span></td>
                                        </tr>
                                        </tbody>
                                    </table></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        独赢投注范例
                    </div>
                    <div class="bottomic-content">
                        <table class="b_tab" cellspacing="1" cellpadding="1" width="100%" align="center" border="1">
                            <tbody>
                            <tr bgcolor="#666666">
                                <td height="19" colspan="5"><div align="center" class="bold_write">独赢投注范例</div></td>
                            </tr>
                            <tr bgcolor="#666666">
                                <td width="10%"><div align="center" class="font_12">范例</div></td>
                                <td width="17%">
                                    <div align="center">
                                        <font color="#ffffff">比赛结果</font>
                                    </div></td>
                                <td colspan="3">
                                    <div align="center">
                                        <font color="#ffffff">以上表目前之赔率交易，交易金额为$1000</font>
                                    </div></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td width="10%" rowspan="2"><div align="center">范例(一)</div></td>
                                <td width="17%" rowspan="2">
                                    <p align="center" style="LINE-HEIGHT: 13pt; LETTER-SPACING: 1pt">马刺<span class="eng-blue">[主]</span>vs活塞 </p></td>
                                <td width="10%" rowspan="2" class="red_eng_b">
                                    <p align="center" style="LINE-HEIGHT: 13pt; LETTER-SPACING: 1pt; color: #990000;">95 : 93 </p></td>
                                <td>
                                    <p align="left" class="rule-12" style="LINE-HEIGHT: 13pt; LETTER-SPACING: 1pt">投注马刺1000元</p></td>
                                <td width="44%"><font color="#000000" class="font_12_bk">可赢金额<span class="eng-blue">=(1,000X0.9</span>00<span class="eng-blue">)=</span><span class="style34">900</span><span class="eng-blue">元</span></font> </td>
                            </tr>
                            <tr bgcolor="#3b3b3b">
                                <td width="19%" bgcolor="#ffffff">
                                    <p align="left" class="rule-12" style="LINE-HEIGHT: 13pt; LETTER-SPACING: 1pt">投注活塞1000元 </p></td>
                                <td width="44%" bgcolor="#ffffff"><span class="red-12"><font color="#ff0000">输付金额</font><font color="#000000">=(1,000X-1)=</font></span><span class="style26"><font color="#000000">-1000</font></span><span class="red-12"><font color="#000000">元</font> </span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        让分投注范例
                    </div>
                    <div class="bottomic-content">
                        <table class="b_tab" cellspacing="1" cellpadding="1" width="100%" align="center" border="1">
                            <tbody>
                            <tr bgcolor="#555555">
                                <td height="19" colspan="5"><div align="center" class="bold_write">让分投注范例<a name="bookmark2"></a></div></td>
                            </tr>
                            <tr bgcolor="#666666">
                                <td align="center"><span class="font_12">范例</span></td>
                                <td><div align="center"><font color="#ffffff">比赛结果</font></div></td>
                                <td colspan="3" class="style32"><div align="center"><font color="#ffffff">以上表目前之赔率交易，交易金额为$1000</font> </div></td>
                            </tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">范例(一)</div></td>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">马刺<span class="eng-blue">[主]</span>vs活塞 </div></td>
                                <td rowspan="2" bgcolor="#ffffff" class="red_eng_b"><div align="center">95 : 93 </div></td>
                                <td bgcolor="#ffffff"><span class="rule-12">投注马刺1000元</span></td>
                                <td width="44%" bgcolor="#ffffff">
                                    <p style="LINE-HEIGHT: 13pt; LETTER-SPACING: 1pt" align="left"><font color="#000000">可赢金额<span class="eng-blue">=(1,000X0.94 * 50%)=470元</span></font> </p></td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff"><span class="rule-12">投注活塞1000元 </span></td>
                                <td width="44%" bgcolor="#ffffff">
                                    <p align="left" class="red-12" style="LINE-HEIGHT: 13pt; LETTER-SPACING: 1pt"><font color="#ff0000">输付金额</font><font color="#000000">=(1,000X-1 * 50%)=500元</font> </p></td>
                            </tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">范例(二)</div></td>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">热火<span class="eng-blue">[主]</span>vs超音速</div></td>
                                <td rowspan="2" bgcolor="#ffffff" class="red_eng_b"><div align="center">103 : 89 </div></td>
                                <td bgcolor="#ffffff"><font color="#000000"><span class="red">投注</span>热火<span class="red">1000元</span></font> </td>
                                <td bgcolor="#ffffff"><font color="#000000">可赢金额<span class="eng-blue">=(1,000X0.94)=940元</span></font> </td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff"><font color="#000000"><span class="red">投注</span></font>超音速<span class="red">1000元</span></td>
                                <td bgcolor="#ffffff"><span class="red-12"><font color="#ff0000">输付金额</font>=(1,000X-1= -1,000<font color="#000000">元</font> </span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        大小投注范例
                    </div>
                    <div class="bottomic-content">
                        <table class="b_tab" cellspacing="1" cellpadding="1" width="100%" align="center" border="1">
                            <tbody>
                            <tr bgcolor="#555555">
                                <td height="21" colspan="5" class="bold_write" align="center">大小投注范例<a name="bookmark3"></a></td>
                            </tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">范例(一)</div></td>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">马刺<span class="eng-blue">[主]</span>vs活塞</div></td>
                                <td rowspan="2" bgcolor="#ffffff" class="red_eng_b"><div align="center">95 : 93 </div></td>
                                <td bgcolor="#ffffff" class="rule-12"> 大186.5　1000元 </td>
                                <td bgcolor="#ffffff" class="eng_12"> <font color="#000000" class="font_12_bk">可赢金额<span class="eng-blue">=</span></font><span class="blue">1000 * 0.9 = 900元 </span></td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff"> <span class="rule-12">小186.5　1000元 </span></td>
                                <td bgcolor="#ffffff" class="eng_12"><span class="red-12"><font color="#ff0000">输付金额</font><font color="#000000">=</font></span><span class="red"> 1000 * -1 = -1000元 </span></td>
                            </tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">范例(二)</div></td>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">热火<span class="eng-blue">[主]</span>vs超音速</div></td>
                                <td rowspan="2" bgcolor="#ffffff" class="red_eng_b"><div align="center">103 : 89</div></td>
                                <td bgcolor="#ffffff" class="rule-12"> 大192 　1000元 </td>
                                <td bgcolor="#ffffff">退回注金 </td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff" class="rule-12"> 小192 　1000元 </td>
                                <td bgcolor="#ffffff">退回注金 </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        单双投注范例
                    </div>
                    <div class="bottomic-content">
                        <table class="b_tab" cellspacing="1" cellpadding="1" width="100%" align="center" border="1">
                            <tbody>
                            <tr bgcolor="#555555">
                                <td height="20" colspan="5" class="bold_write"><div align="center">单双投注范例<a name="bookmark4"></a></div></td>
                            </tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">范例(一)</div></td>
                                <td rowspan="2" bgcolor="#ffffff">
                                    <div align="center">马刺 vs 活塞 </div></td>
                                <td rowspan="2" bgcolor="#ffffff" class="red_eng_b"><div align="center">95 : 93 </div></td>
                                <td bgcolor="#ffffff"> 　双<span class="blue"> 　1000元 </span></td>
                                <td bgcolor="#ffffff" class="eng_12"> <font color="#000000" class="font_12_bk">可赢金额<span class="eng-blue">=</span></font><span class="blue">1000 * 0.9 = 900元 </span></td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff"> 　单<span class="blue"> 　1000元 </span></td>
                                <td bgcolor="#ffffff"><span class="red-12"><font color="#ff0000">输付金额</font></span> <span class="red-12"><font color="#000000">=(1,000X-1)=</font></span><span class="style26"><font color="#000000">-1000</font></span><span class="red-12"><font color="#000000">元</font> </span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        过关投注范例
                    </div>
                    <div class="bottomic-content">
                        <table class="b_tab" cellspacing="1" cellpadding="1" width="100%" align="center" border="1">
                            <tbody>
                            <tr bgcolor="#555555">
                                <td height="22" colspan="5" class="bold_write"><div align="center">过关投注范例<a name="bookmark5"></a></div></td>
                            </tr>
                            <tr>
                                <td colspan="5" bgcolor="#ffffff"><p>※过关注单中的任何一场比赛，如果联盟裁定比赛延期或取消，此过关注单仍视为有效，但是该场比赛不予计算，所下之关数将递减（4关降为3关，3关降为2关，2关降为单式）。　　<br>
                                    ※同一场赛事不得互碰（在同一张注单中投注2次以上），否则一律视为无效注单。<br>让球过关中，如果是输一半按乘以0.5计算，如果是赢一半按(1+赔率/2)计算，如是是赛事取消或中断，赔率按[1]计 算。</p></td>
                            </tr>
                            </tbody>
                        </table>
                        <p class="red">本娱乐城所有的混合过关最高的赔款金额是¥200，000.</p>
                        <table class="b_tab" cellspacing="1" cellpadding="1" width="100%" align="center" border="1">
                            <tbody>
                            <tr bgcolor="#555555">
                                <td height="23" colspan="6" class="bold_write" align="center">美国职篮</td>
                            </tr>
                            <tr bgcolor="#999999">
                                <td>
                                    <div align="center" class="font_12">时间 </div></td>
                                <td width="29%">
                                    <div align="center" class="font_12">主客队伍 </div></td>
                                <td width="12%">
                                    <div align="center" class="font_12">独赢</div></td>
                                <td width="17%">
                                    <div align="center" class="font_12">让分</div></td>
                                <td width="19%">
                                    <div align="center" class="font_12">大小</div></td>
                                <td width="14%">
                                    <div align="center" class="font_12">单双</div></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td class="eng-12"><div align="center">08/01<br>
                                    20:05 </div></td>
                                <td class="eng-12"><table width="100%" cellpadding="2" cellspacing="0">
                                    <tbody><tr>
                                        <td><span class="eng_12">底特律活塞</span></td>
                                    </tr>
                                    <tr>
                                        <td class="eng-blue">圣安东尼奥马刺 [主]</td>
                                    </tr>
                                    </tbody></table></td>
                                <td bgcolor="#FFFF99"><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div align="center"><span class="odd-red">0.900<img src="images/par-1.gif" width="14" height="14"></span></div></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div align="center" class="odd-red">0.900<img src="images/par-1.gif" width="14" height="14"></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="49%">
                                            <div align="center"></div></td>
                                        <td width="51%" class="red_eng_b"><div align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.940<span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></font></span> </div></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="style25" align="center">2+50</div></td>
                                        <td class="red_eng_b"><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">40<span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td class="eng-12" width="53%">
                                            <div class="style15" align="center">大186.5</div></td>
                                        <td width="47%"><div align="center"><span class="style11"><font color="#ff0000">0.900</font></span> <span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></div></td>
                                    </tr>
                                    <tr>
                                        <td class="eng-12">
                                            <div class="style15" align="center"><span class="style26">小186.5</span></div></td>
                                        <td><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0<img src="images/par-1.gif" width="14" height="14"></font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="40%">
                                            <div class="style25" align="center">单</div></td>
                                        <td width="60%"><span class="style11"><font color="#ff0000">0.900</font></span> <span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div align="center" class="eng-blue">双</div></td>
                                        <td><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0<img src="images/par-1.gif" width="14" height="14"></font></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td class="eng-12"><div align="center">08/01<br>
                                    20:05 </div></td>
                                <td class="eng-12"><table width="100%" cellpadding="2" cellspacing="0">
                                    <tbody><tr>
                                        <td><span class="eng_12">西雅图超音速</span></td>
                                    </tr>
                                    <tr>
                                        <td class="eng-blue">迈阿密热火 [主]</td>
                                    </tr>
                                    </tbody></table></td>
                                <td bgcolor="#FFFF99"><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div align="center"><span class="odd-red">0.900<img src="images/par-1.gif" width="14" height="14"></span></div></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div align="center" class="odd-red">0.900<img src="images/par-1.gif" width="14" height="14"></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="49%">
                                            <div align="center"></div></td>
                                        <td width="51%" class="red_eng_b"><div align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.940</font></span> <span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></div></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="style25" align="center">平手</div></td>
                                        <td class="red_eng_b"><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">40<span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td class="eng-12" width="53%">
                                            <div class="style15" align="center">大192</div></td>
                                        <td width="47%"><div align="center"><span class="style11"><font color="#ff0000">0.900</font></span> <span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></div></td>
                                    </tr>
                                    <tr>
                                        <td class="eng-12">
                                            <div class="style15" align="center"><span class="style26">小192</span></div></td>
                                        <td><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0<img src="images/par-1.gif" width="14" height="14"></font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="40%">
                                            <div class="style25" align="center">单</div></td>
                                        <td width="60%"><span class="style11"><font color="#ff0000">0.900</font></span> <span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div align="center" class="eng-blue">双</div></td>
                                        <td><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0<img src="images/par-1.gif" width="14" height="14"></font></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td class="eng-12" width="9%">
                                    <p class="eng-12" style="LINE-HEIGHT: 13pt; LETTER-SPACING: 1pt" align="center">08/01<br>
                                        20:05 </p></td>
                                <td class="eng-12"><table width="100%" cellpadding="2" cellspacing="0">
                                    <tbody><tr>
                                        <td><span class="eng_12">印第安纳溜马</span></td>
                                    </tr>
                                    <tr>
                                        <td class="eng-blue">达拉斯小牛 [主]</td>
                                    </tr>
                                    </tbody></table></td>
                                <td bgcolor="#FFFF99"><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div align="center"><span class="odd-red">0.900<img src="images/par-1.gif" width="14" height="14"></span></div></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div align="center" class="odd-red">0.900<img src="images/par-1.gif" width="14" height="14"></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td>
                                    <table cellspacing="0" cellpadding="0" width="100%" border="0">
                                        <tbody>
                                        <tr>
                                            <td width="49%">
                                                <div align="center"></div></td>
                                            <td width="51%" class="red_eng_b"><div align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.940</font></span> <span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></div></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="style25" align="center">平手</div></td>
                                            <td class="red_eng_b"><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">40<span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></font></span></div></td>
                                        </tr>
                                        </tbody>
                                    </table></td>
                                <td>
                                    <table cellspacing="0" cellpadding="0" width="100%" border="0">
                                        <tbody>
                                        <tr>
                                            <td class="eng-12" width="53%">
                                                <div class="style15" align="center">大190</div></td>
                                            <td width="47%"><div align="center"><span class="style11"><font color="#ff0000">0.900</font></span> <span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></div></td>
                                        </tr>
                                        <tr>
                                            <td class="eng-12">
                                                <div class="style15" align="center"><span class="style26">小190</span></div></td>
                                            <td><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0<img src="images/par-1.gif" width="14" height="14"></font></span></div></td>
                                        </tr>
                                        </tbody>
                                    </table></td>
                                <td>
                                    <table cellspacing="0" cellpadding="0" width="100%" border="0">
                                        <tbody>
                                        <tr>
                                            <td width="39%">
                                                <div class="style25" align="center">单</div></td>
                                            <td width="61%"><span class="style11"><font color="#ff0000">0.900</font></span> <span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div align="center" class="eng-blue">双</div></td>
                                            <td><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0<img src="images/par-1.gif" width="14" height="14"></font></span></td>
                                        </tr>
                                        </tbody>
                                    </table></td>
                            </tr>
                            </tbody>
                        </table>
                        <br>
                        <table width="100%" border="1" cellpadding="1" cellspacing="1" class="b_tab">
                            <tbody><tr bgcolor="#555555"><td align="center" class="bold_write">比赛结果</td></tr>
                            <tr bgcolor="#FFFFFF">
                                <td><div align="left">马刺 (主) vs 活塞：<span class="red_eng_b"> 95 比 93 </span></div></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td><div align="left">热火 (主) vs 超音速： <span class="red_eng_b">103 比 89 </span></div></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td><div align="left">小牛 (主) vs 溜马： <span class="red_eng_b">85 比 89 </span></div></td>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                            </tbody></table>
                        <br>
                        <table width="100%" border="1" cellpadding="1" cellspacing="1" class="b_tab">
                            <tbody>
                            <tr bgcolor="#555555">
                                <td height="19" colspan="5" class="bold_write"><div align="center">过关投注范例</div></td>
                            </tr>
                            <tr bgcolor="#666666">
                                <td width="16%"><div align="center"><span class="font_12">范例</span></div></td>
                                <td width="13%"><div align="center"><font color="#ffffff">比赛结果</font></div></td>
                                <td width="71%" colspan="3" class="style32"><div align="center"><font color="#ffffff">以上表目前之赔率交易，交易金额为$1000</font> </div></td>
                            </tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">范例(一)</div></td>
                                <td height="20" colspan="4" bgcolor="#ffffff">
                                    <div align="left">投注 马刺(让分)+热火(让分)+溜马(让分)，1000元 </div></td>
                            </tr>
                            <tr>
                                <td colspan="4" bgcolor="#ffffff">
                                    <p align="left" class="red-12" style="LINE-HEIGHT: 13pt; LETTER-SPACING: 1pt"> → 赢 1000 * (1+(0.9*50%)) * (1+0.9) * (1+0.9) - 1000 = 4234元 </p></td>
                            </tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">范例(二)</div></td>
                                <td height="19" colspan="4" bgcolor="#ffffff"><div align="center"></div>
                                    <div align="left">投注 活塞(让分)+热火(让分)+溜马(让分)，1000元 </div></td>
                            </tr>
                            <tr>
                                <td height="19" colspan="4" bgcolor="#ffffff"> → 赢 1000 * (1+(-1*50%)) * (1+0.9) * (1+0.9) - 1000 = 805元 </td>
                            </tr>
                            <tr><td height="19" colspan="4" bgcolor="#ffffff">
                            </td>
                            </tr>
                            </tbody></table>

                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        上/下半场投注范例
                    </div>
                    <div class="bottomic-content">

                        <table width="100%" border="1" cellpadding="1" cellspacing="1" class="b_tab">
                            <tbody>
                            <tr bgcolor="#555555">
                                <td height="21" colspan="5" align="center" class="bold_write"> 上/下半场投注范例<a name="bookmark6"></a></td>
                            </tr>
                            <tr align="left">
                                <td height="24" colspan="5" bgcolor="#ffffff">　
                                    派彩方式与 "全场单式" 相同。 </td>
                            </tr>
                            <tr align="left">
                                <td height="24" colspan="5" bgcolor="#ffffff">　 ※上半场以指定球赛的 第一、二节之比数总合 为准。 </td>
                            </tr>
                            <tr align="left">
                                <td height="24" colspan="5" bgcolor="#ffffff"> 　
                                    ※下半场以指定球赛的 第三、四节(含延长加时)之比数总合 为准。 </td>
                            </tr>
                            </tbody></table>

                    </div>
                    <div class="bottomic"  @click="showMic($event)">
                        走地投注范例
                    </div>
                    <div class="bottomic-content">
                        <table class="b_tab" cellspacing="1" cellpadding="1" width="100%" align="center" border="1">
                            <tbody>
                            <tr align="center" bgcolor="#555555">
                                <td height="20" colspan="5" class="bold_write"><div align="center">走地投注范例<a name="bookmark7"></a></div></td>
                            </tr>
                            <tr align="left">
                                <td height="21" colspan="5" bgcolor="#ffffff"> 　
                                    在指定球赛进行中接受下注，派彩方式与 "全场单式" 相同。 </td>
                            </tr>
                            <tr align="left">
                                <td height="21" colspan="5" bgcolor="#ffffff">　
                                    ※上半场走地以指定球赛的 第一、二节之比数总合 为准。 </td>
                            </tr>
                            <tr align="left">
                                <td height="22" colspan="5" bgcolor="#ffffff">　
                                    ※下半场走地以指定球赛的 第三、四节(含延长加时)之比数总合 为准。 　 　 　 　 　 　 　 　 　 　 　 　 　 </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!--网球-->
            <div class="sport-rule-11" v-if="ifr==13">
                <div class="topic">
                    网球玩法介绍
                </div>
                <div class="rule-content">
                    <p>1、讓分結果 = 投注金額 * 賠率 * 分洞</p>
                    <p>2、大小結果 = 投注金額 * 賠率 * 分洞</p>
                    <p>3、獨贏結果 = 投注金額 * 賠率</p>
                    <p>4、單雙結果 = 投注金額 * 賠率</p>
                    <table cellspacing="1" cellpadding="1" width="100%" align="center" border="1" class="b_tab">
                        <tbody>
                        <tr bgcolor="#555555">
                            <td height="21" colspan="6" align="center" class="bold_write">WTA溫布尔顿网球公开赛</td>
                        </tr>
                        <tr bgcolor="#CCCCCC">
                            <td>
                                <div align="center" class="font_12">時間 </div></td>
                            <td width="29%">
                                <div align="center" class="font_12">主客隊伍 </div></td>
                            <td width="12%">
                                <div align="center" class="font_12">獨贏</div></td>
                            <td width="17%">
                                <div align="center" class="font_12">讓分</div></td>
                            <td width="17%">
                                <div align="center" class="font_12">大小</div></td>
                            <td width="16%">
                                <div align="center" class="font_12">單雙</div></td>
                        </tr>
                        <tr bgcolor="#ffffff">
                            <td class="eng-12"><div align="center">08/01<br>
                                20:05 </div></td>
                            <td class="eng-12"><table width="100%" cellpadding="2" cellspacing="0">
                                <tbody><tr>
                                    <td><span class="eng_12">拉德万思卡</span></td>
                                </tr>
                                <tr>
                                    <td class="eng-blue">威廉姆斯
                                        [主]</td>
                                </tr>
                                </tbody></table></td>
                            <td bgcolor="#FFFF99"><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                <tbody>
                                <tr>
                                    <td>
                                        <div align="center"><span class="odd-red">0.900</span></div></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div align="center" class="odd-red">0.900</div></td>
                                </tr>
                                </tbody>
                            </table></td>
                            <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                <tbody>
                                <tr>
                                    <td width="49%">
                                        <div align="center"></div></td>
                                    <td width="51%" class="red_eng_b"><div align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.940</font></span> </div></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="style25" align="center">2+50</div></td>
                                    <td class="red_eng_b"><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">40</font></span></div></td>
                                </tr>
                                </tbody>
                            </table></td>
                            <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                <tbody>
                                <tr>
                                    <td class="eng-12" width="53%">
                                        <div class="style15" align="center">大186.5</div></td>
                                    <td width="47%"><div align="center"><span class="style11"><font color="#ff0000">0.900</font></span> </div></td>
                                </tr>
                                <tr>
                                    <td class="eng-12">
                                        <div class="style15" align="center"><span class="style26">小186.5</span></div></td>
                                    <td><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0</font></span></div></td>
                                </tr>
                                </tbody>
                            </table></td>
                            <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                <tbody>
                                <tr>
                                    <td width="49%">
                                        <div class="style25" align="center">單</div></td>
                                    <td width="51%"><span class="style11"><font color="#ff0000">0.900</font></span> </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div align="center" class="eng-blue">雙</div></td>
                                    <td><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0</font></span></td>
                                </tr>
                                </tbody>
                            </table></td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="bottomic" @click="showMic($event)">
                        网球交易规则
                    </div>
                    <div class="bottomic-content">
                        <p>1、所有网球交易均以比赛开打最终完场的比数为最终结果，若其后由任何体育纪律委员会新裁判，而更改之赛果均不予以计算。 ·如果其中一个球员在没有完赛前被夺取参赛资格，所有交易此场赛事的交易单无效。
                        </p>
                        <p>2、如果球员在一场赛事未完前就退出比赛，所有交易在此球员的交易单都被视为无效。</p>
                        <p>3、如果原定比赛场地更换，所有交易单将被视为无效</p>
                        <p>4、所有网球交易均以比赛开打后最终完场的比数为最终结果，若其后由任何体育纪律委员会重新裁决，而更改之赛果均不予计算。</p>
                        <p>5、若赛事延迟或暂停，所有投注仍然有效如果赛事完成。</p>
                        <p>6、在单场/局的比赛交易中，法定的场/局数必须完成，交易方为有效；假如法定的局数没有完成或更改，相关交易无效。</p>
                        <p>7、如比赛在法定时间提前进行，在比赛开始前的交易仍然有效。在比赛开始后的所有交易均视为无效。
                            网球四大公开赛（澳洲网球公开赛、美国网球公开赛、法国网球公开赛、温布顿网球公开赛），赛果计算方式：</p>
                        <p>&nbsp;&nbsp;男子组比赛五盘中先赢三盘之球员，为胜方。</p>
                        <p>&nbsp;&nbsp;女子组比赛三盘中先赢二盘之球员，为胜方。</p>
                    </div>
                    <div class="bottomic" @click="showMic($event)">
                       独赢投注范例
                    </div>
                    <div class="bottomic-content">
                        <table cellspacing="1" cellpadding="1" width="100%" align="center" border="1" class="b_tab">
                            <tbody>
                            <tr bgcolor="#666666">
                                <td height="19" colspan="5"><div align="center" class="bold_write">独赢投注范例</div></td>
                            </tr>
                            <tr bgcolor="#666666">
                                <td width="10%"><div align="center" class="font_12">範例</div></td>
                                <td width="17%">
                                    <div align="center">
                                        <font color="#ffffff">比賽結果</font>
                                    </div></td>
                                <td colspan="3">
                                    <div align="center">
                                        <font color="#ffffff">以上表目前之賠率交易，交易金額為$1000</font>
                                    </div></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td width="10%" rowspan="2"><div align="center">範例(一)</div></td>
                                <td width="17%" rowspan="2">
                                    <p align="center" style="LINE-HEIGHT: 13pt; LETTER-SPACING: 1pt">威廉姆斯<span class="eng-blue">[主]</span>vs拉德万思卡 </p></td>
                                <td width="10%" rowspan="2" class="red_eng_b">
                                    <p align="center" style="LINE-HEIGHT: 13pt; LETTER-SPACING: 1pt; color: #990000;">95 : 93 </p></td>
                                <td>
                                    <p align="left" class="rule-12" style="LINE-HEIGHT: 13pt; LETTER-SPACING: 1pt">投注威廉姆斯1000元</p></td>
                                <td width="44%"><font color="#000000" class="font_12_bk">可贏金額<span class="eng-blue">=(1,000X0.9</span>00<span class="eng-blue">)=</span><span class="style34">900</span><span class="eng-blue">元</span></font> </td>
                            </tr>
                            <tr bgcolor="#3b3b3b">
                                <td width="19%" bgcolor="#ffffff">
                                    <p align="left" class="rule-12" style="LINE-HEIGHT: 13pt; LETTER-SPACING: 1pt">投注拉德万思卡1000元 </p></td>
                                <td width="44%" bgcolor="#ffffff"><span class="red-12"><font color="#ff0000">輸付金額</font><font color="#000000">=(1,000X-1)=</font></span><span class="style26"><font color="#000000">-1000</font></span><span class="red-12"><font color="#000000">元</font> </span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="bottomic" @click="showMic($event)">
                        让分投注范例
                    </div>
                    <div class="bottomic-content">
                        <table cellspacing="1" cellpadding="1" width="100%" align="center" border="1" class="b_tab">
                            <tbody>
                            <tr bgcolor="#555555">
                                <td height="19" colspan="5"><div align="center" class="bold_write">让分投注范例<a name="bookmark2"></a></div></td>
                            </tr>
                            <tr bgcolor="#666666">
                                <td align="center"><span class="font_12">範例</span></td>
                                <td><div align="center"><font color="#ffffff">比賽結果</font></div></td>
                                <td colspan="3" class="style32"><div align="center"><font color="#ffffff">以上表目前之賠率交易，交易金額為$1000</font> </div></td>
                            </tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">範例(一)</div></td>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">威廉姆斯<span class="eng-blue">[主]</span>vs拉德万思卡 </div></td>
                                <td rowspan="2" bgcolor="#ffffff" class="red_eng_b"><div align="center">95 : 93 </div></td>
                                <td bgcolor="#ffffff"><span class="rule-12">投注威廉姆斯1000元</span></td>
                                <td width="44%" bgcolor="#ffffff">
                                    <p style="LINE-HEIGHT: 13pt; LETTER-SPACING: 1pt" align="left"><font color="#000000">可贏金額<span class="eng-blue">=(1,000X0.94 * 50%)=470元</span></font> </p></td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff"><span class="rule-12">投注拉德万思卡1000元 </span></td>
                                <td width="44%" bgcolor="#ffffff">
                                    <p align="left" class="red-12" style="LINE-HEIGHT: 13pt; LETTER-SPACING: 1pt"><font color="#ff0000">輸付金額</font><font color="#000000">=(1,000X-1 * 50%)=500元</font> </p></td>
                            </tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">範例(二)</div></td>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">布萊恩<span class="eng-blue">[主]</span>vs雷蒙</div></td>
                                <td rowspan="2" bgcolor="#ffffff" class="red_eng_b"><div align="center">103 : 89 </div></td>
                                <td bgcolor="#ffffff"><font color="#000000"><span class="red">投注</span>布萊恩<span class="red">1000元</span></font> </td>
                                <td bgcolor="#ffffff"><font color="#000000">可贏金額<span class="eng-blue">=(1,000X0.94)=940元</span></font> </td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff"><font color="#000000"><span class="red">投注</span></font>雷蒙<span class="red">1000元</span></td>
                                <td bgcolor="#ffffff"><span class="red-12"><font color="#ff0000">輸付金額</font>=(1,000X-1= -1,000<font color="#000000">元</font> </span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="bottomic" @click="showMic($event)">
                        大小投注范例
                    </div>
                    <div class="bottomic-content">
                        <table cellspacing="1" cellpadding="1" width="100%" align="center" border="1" class="b_tab">
                            <tbody>
                            <tr bgcolor="#555555">
                                <td height="21" colspan="5" class="bold_write" align="center">大小投注范例<a name="bookmark3"></a></td>
                            </tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">範例(一)</div></td>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">威廉姆斯<span class="eng-blue">[主]</span>vs拉德万思卡</div></td>
                                <td rowspan="2" bgcolor="#ffffff" class="red_eng_b"><div align="center">95 : 93 </div></td>
                                <td bgcolor="#ffffff" class="rule-12"> 大186.5　1000元 </td>
                                <td bgcolor="#ffffff" class="eng_12"> <font color="#000000" class="font_12_bk">可贏金額<span class="eng-blue">=</span></font><span class="blue">1000 * 0.9 = 900元 </span></td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff"> <span class="rule-12">小186.5　1000元 </span></td>
                                <td bgcolor="#ffffff" class="eng_12"><span class="red-12"><font color="#ff0000">輸付金額</font><font color="#000000">=</font></span><span class="red"> 1000 * -1 = -1000元 </span></td>
                            </tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">範例(二)</div></td>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">布萊恩<span class="eng-blue">[主]</span>vs雷蒙</div></td>
                                <td rowspan="2" bgcolor="#ffffff" class="red_eng_b"><div align="center">103 : 89</div></td>
                                <td bgcolor="#ffffff" class="rule-12"> 大192 　1000元 </td>
                                <td bgcolor="#ffffff">退回注金 </td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff" class="rule-12"> 小192 　1000元 </td>
                                <td bgcolor="#ffffff">退回注金 </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="bottomic" @click="showMic($event)">
                        单双投注范例
                    </div>
                    <div class="bottomic-content">
                        <table cellspacing="1" cellpadding="1" width="100%" align="center" border="1" class="b_tab">
                            <tbody>
                            <tr bgcolor="#555555">
                                <td height="21" colspan="5" class="bold_write" align="center">单双投注范例<a name="bookmark3"></a></td>
                            </tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">範例(一)</div></td>
                                <td rowspan="2" bgcolor="#ffffff">
                                    <div align="center">威廉姆斯 vs 拉德万思卡 </div></td>
                                <td rowspan="2" bgcolor="#ffffff" class="red_eng_b"><div align="center">95 : 93 </div></td>
                                <td bgcolor="#ffffff"> 　雙<span class="blue"> 　1000元 </span></td>
                                <td bgcolor="#ffffff" class="eng_12"> <font color="#000000" class="font_12_bk">可贏金額<span class="eng-blue">=</span></font><span class="blue">1000 * 0.9 = 900元 </span></td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff"> 　單<span class="blue"> 　1000元 </span></td>
                                <td bgcolor="#ffffff"><span class="red-12"><font color="#ff0000">輸付金額</font></span> <span class="red-12"><font color="#000000">=(1,000X-1)=</font></span><span class="style26"><font color="#000000">-1000</font></span><span class="red-12"><font color="#000000">元</font> </span></td>
                            </tr>

                            </tbody>
                        </table>
                    </div>
            </div>
            </div>
            <!--排球-->
            <div class="sport-rule-11" v-if="ifr==14">
                <div class="topic">
                    排球交易规则
                </div>
                <div class="rule-content">
                  <p>1、排球比赛交易一般是以全场时间为依据，不包括加时比赛（除非有特别说明）。如果赛事委员会宣布重新比赛，该场球赛的交易均视为无效。</p>
                  <p>2、如果延迟比赛在12小时内重开，交易则视为有效。如果延迟比赛在12小时内未能重开 ，则该场交易视为无效。</p>
                  <p>3、交易的所有种类（除过关外）在不足法定时间内被终止，因气候、场地等客观因素使比赛开始时间较原定比赛延迟超过12小时，或取消，则该场交易视为无效，交易金额可退回。</p>
                  <p>4、在过关交易中，如果比赛终止或延迟，过关仍然有效，惟赔率以1计算。</p>
                  <p>5、如比赛在法定时间提前进行，在比赛开始前的交易仍然有效，在比赛开始后的所有交易均视为无效。（滚球交易另作别论）。</p>
                </div>
            </div>
            <!--棒球-->
            <div class="sport-rule-11" v-if="ifr==15">
                <div class="topic">
                    棒球玩法介绍
                </div>
                <div class="rule-content">
                    <p>1、 让分结果 = 投注金额 * 赔率 * 分洞</p>
                    <p>2、 大小结果 = 投注金额 * 赔率 * 分洞</p>
                    <p>3、 独赢结果 = 投注金额 * 赔率</p>
                    <p>4、 单双结果 = 投注金额 * 赔率</p>
                    <table class="b_tab" cellspacing="1" cellpadding="1" width="100%" align="center" border="1">
                        <tbody>
                        <tr bgcolor="#333333">
                            <td height="21" colspan="6"><div align="center" class="font_12">美国职棒MLB</div></td>
                        </tr>
                        <tr bgcolor="#555555">
                            <td>
                                <div align="center" class="font_12">时间 </div></td>
                            <td width="29%">
                                <div align="center" class="font_12">主客队伍 </div></td>
                            <td width="14%">
                                <div align="center"><span class="font_12">让分</span></div></td>
                            <td width="15%">
                                <div align="center" class="font_12">大小</div></td>
                            <td width="15%">
                                <div align="center" class="font_12">独赢</div></td>
                            <td width="18%">
                                <div align="center" class="font_12">一输二赢</div></td>
                        </tr>
                        <tr bgcolor="#ffffff">
                            <td class="eng-12"><div align="center">08/01<br>
                                20:05 </div></td>
                            <td class="eng-12"><table width="100%" cellpadding="2" cellspacing="0">
                                <tbody><tr>
                                    <td><span class="eng_12">西雅图水手</span></td>
                                </tr>
                                <tr>
                                    <td class="eng-blue">多伦多蓝鸟 [主]</td>
                                </tr>
                                </tbody></table></td>
                            <td bgcolor="#FFFFFF"><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                <tbody>
                                <tr>
                                    <td width="49%">
                                        <div align="center"></div></td>
                                    <td width="51%" class="red_eng_b"><div align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.940</font></span> </div></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="style25" align="center">2+50</div></td>
                                    <td class="red_eng_b"><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">40</font></span></div></td>
                                </tr>
                                </tbody>
                            </table></td>
                            <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                <tbody>
                                <tr>
                                    <td class="eng-12" width="53%">
                                        <div class="style15" align="center">大9.5</div></td>
                                    <td width="47%"><div align="center"><span class="style11"><font color="#ff0000">0.900</font></span> </div></td>
                                </tr>
                                <tr>
                                    <td class="eng-12">
                                        <div class="style15" align="center"><span class="style26">小9.5</span></div></td>
                                    <td><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0</font></span></div></td>
                                </tr>
                                </tbody>
                            </table></td>
                            <td><table width="88%" border="0" align="center" cellpadding="0" cellspacing="0">
                                <tbody>
                                <tr>
                                    <td width="51%"><div align="center"><span class="style11"><font color="#ff0000">0.900</font></span> </div></td>
                                </tr>
                                <tr>
                                    <td><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0</font></span></div></td>
                                </tr>
                                </tbody>
                            </table></td>
                            <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                <tbody>
                                <tr>
                                    <td width="49%">
                                        <div class="style25" align="center"></div></td>
                                    <td width="51%"><span class="style11"><font color="#ff0000">0.900</font></span> </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div align="center" class="eng-blue">一输</div></td>
                                    <td><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0</font></span></td>
                                </tr>
                                </tbody>
                            </table></td>
                        </tr>
                        <tr bgcolor="#ffffff">
                            <td class="eng-12"><div align="center">08/01<br>
                                20:05 </div></td>
                            <td class="eng-12"><table width="100%" cellpadding="2" cellspacing="0">
                                <tbody><tr>
                                    <td><span class="eng_12">洛杉机天使</span></td>
                                </tr>
                                <tr>
                                    <td class="eng-blue">波士顿红袜 [主]</td>
                                </tr>
                                </tbody></table></td>
                            <td bgcolor="#FFFFFF"><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                <tbody>
                                <tr>
                                    <td width="49%">
                                        <div align="center"></div></td>
                                    <td width="51%" class="red_eng_b"><div align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.940</font></span> </div></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="style25" align="center">平手</div></td>
                                    <td class="red_eng_b"><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">40</font></span></div></td>
                                </tr>
                                </tbody>
                            </table></td>
                            <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                <tbody>
                                <tr>
                                    <td class="eng-12" width="53%">
                                        <div class="style15" align="center">大9</div></td>
                                    <td width="47%"><div align="center"><span class="style11"><font color="#ff0000">0.900</font></span> </div></td>
                                </tr>
                                <tr>
                                    <td class="eng-12">
                                        <div class="style15" align="center"><span class="style26">小9</span></div></td>
                                    <td><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0</font></span></div></td>
                                </tr>
                                </tbody>
                            </table></td>
                            <td><table width="88%" border="0" align="center" cellpadding="0" cellspacing="0">
                                <tbody>
                                <tr>
                                    <td width="51%"><div align="center"><span class="style11"><font color="#ff0000">0.900</font></span> </div></td>
                                </tr>
                                <tr>
                                    <td><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0</font></span></div></td>
                                </tr>
                                </tbody>
                            </table></td>
                            <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                <tbody>
                                <tr>
                                    <td width="49%">
                                        <div class="style25" align="center"></div></td>
                                    <td width="51%"><span class="style11"><font color="#ff0000">0.900</font></span> </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div align="center" class="eng-blue">一输</div></td>
                                    <td><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0</font></span></td>
                                </tr>
                                </tbody>
                            </table></td>
                        </tr>
                        <tr bgcolor="#ffffff">
                            <td class="eng-12" width="9%">
                                <p class="eng-12" style="LINE-HEIGHT: 13pt; LETTER-SPACING: 1pt" align="center">08/01<br>
                                    20:05 </p></td>
                            <td class="eng-12"><table width="100%" cellpadding="2" cellspacing="0">
                                <tbody><tr>
                                    <td><span class="eng_12">堪萨斯皇家</span></td>
                                </tr>
                                <tr>
                                    <td class="eng-blue">纽约洋基 [主]</td>
                                </tr>
                                </tbody></table></td>
                            <td bgcolor="#FFFFFF"><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                <tbody>
                                <tr>
                                    <td width="49%">
                                        <div align="center"></div></td>
                                    <td width="51%" class="red_eng_b"><div align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.940</font></span> </div></td>
                                </tr>
                                <tr>
                                    <td>
                                        <div class="style25" align="center">平手</div></td>
                                    <td class="red_eng_b"><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">40</font></span></div></td>
                                </tr>
                                </tbody>
                            </table></td>
                            <td>
                                <table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td class="eng-12" width="53%">
                                            <div class="style15" align="center">大9</div></td>
                                        <td width="47%"><div align="center"><span class="style11"><font color="#ff0000">0.900</font></span> </div></td>
                                    </tr>
                                    <tr>
                                        <td class="eng-12">
                                            <div class="style15" align="center"><span class="style26">小9</span></div></td>
                                        <td><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0</font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                            <td>
                                <table width="88%" border="0" align="center" cellpadding="0" cellspacing="0">
                                    <tbody>
                                    <tr>
                                        <td width="51%"><div align="center"><span class="style11"><font color="#ff0000">0.900</font></span> </div></td>
                                    </tr>
                                    <tr>
                                        <td><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0</font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                            <td>
                                <table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="49%">
                                            <div class="style25" align="center"></div></td>
                                        <td width="51%"><span class="style11"><font color="#ff0000">0.900</font></span> </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div align="center" class="eng-blue">一输</div></td>
                                        <td><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0</font></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                        </tr>
                        </tbody>
                    </table>
                    <table width="100%" cellpadding="1" cellspacing="1"border="1" class="b_tab">
                        <tbody><tr bgcolor="#333333"><td class="bold_write" align="center">比赛结果</td></tr>
                        <tr bgcolor="#FFFFFF">
                            <td> 蓝鸟 (主) vs 水手： 6 比 4 </td>
                        </tr>
                        <tr bgcolor="#FFFFFF">
                            <td>红袜 (主) vs 天使： 6 比 3 </td>
                        </tr>
                        <tr bgcolor="#FFFFFF">
                            <td>洋基 (主) vs 皇家： 3 比 1 </td>
                        </tr>
                        </tbody></table>
                    <div class="bottomic" @click="showMic($event)">
                        让分投注范例
                    </div>
                    <div class="bottomic-content">
                        <table width="100%"  border="1" cellpadding="1" cellspacing="1" class="b_tab">
                            <tbody><tr bgcolor="#333333"><td class="bold_write" align="center" colspan="5">让分投注范例</td></tr>

                            <tr bgcolor="#555555">
                                <td width="10%"><span class="font_12">范例</span></td>
                                <td width="17%"><div align="center"><font color="#ffffff">比赛结果</font></div></td>
                                <td colspan="3" class="style32"><div align="center"><font color="#ffffff">以上表目前之赔率交易，交易金额为$1000</font> </div></td>
                            </tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">范例(一)</div></td>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center"> 蓝鸟 (主) vs 水手 </div></td>
                                <td width="10%" rowspan="2" bgcolor="#ffffff" class="red_eng_b"><div align="center"> 6 : 4 </div></td>
                                <td width="19%" bgcolor="#ffffff" class="eng_12"> <div align="center">投注 蓝鸟 1000元 </div></td>
                                <td width="44%" bgcolor="#ffffff">
                                    <p style="LINE-HEIGHT: 13pt; LETTER-SPACING: 1pt" align="left"><font color="#000000">可赢金额<span class="eng-blue">=(1,000X0.94 * 50%)=470元</span></font> </p></td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff" class="eng_12"> <div align="center">投注 水手 1000元 </div></td>
                                <td width="44%" bgcolor="#ffffff">
                                    <p align="left" class="red-12" style="LINE-HEIGHT: 13pt; LETTER-SPACING: 1pt"><font color="#ff0000">输付金额</font><font color="#000000">=(1,000X-1 * 50%)=500元</font> </p></td>
                            </tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">范例(二)</div></td>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center"> 红袜 (主) vs 天使</div></td>
                                <td rowspan="2" bgcolor="#ffffff" class="red_eng_b"><div align="center">6 : 3 </div></td>
                                <td bgcolor="#ffffff" class="eng_12"> <div align="center">投注 红袜 1000元 </div></td>
                                <td bgcolor="#ffffff"><font color="#000000">可赢金额<span class="eng-blue">=(1,000X0.94)=940元</span></font> </td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff" class="eng_12"> <div align="center">投注 天使 1000元 </div></td>
                                <td bgcolor="#ffffff"><span class="red-12"><font color="#ff0000">输付金额</font>=(1,000X-1= -1,000<font color="#000000">元</font> </span></td>
                            </tr>
                            </tbody></table>
                    </div>
                    <div class="bottomic" @click="showMic($event)">
                        大小投注范例
                    </div>
                    <div class="bottomic-content">
                        <table width="100%" border="1" cellpadding="1" cellspacing="1" class="b_tab">
                            <tbody><tr bgcolor="#333333"><td class="bold_write" align="center" colspan="5">大小投注范例</td></tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">范例(一)</div></td>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">蓝鸟 (主) vs 水手</div></td>
                                <td rowspan="2" bgcolor="#ffffff" class="red_eng_b"><div align="center"> 6 : 4 </div></td>
                                <td bgcolor="#ffffff" class="eng_12"> <div align="center">大9.5　1000元 </div></td>
                                <td bgcolor="#ffffff" class="eng_12"> <font color="#000000" class="font_12_bk">可赢金额<span class="eng-blue">=</span></font>1000 * 0.9 = 900元 </td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff"> <div align="center"><span class="eng_12">小9.5　1000元 </span></div></td>
                                <td bgcolor="#ffffff" class="eng_12"><span class="red-12"><font color="#ff0000">输付金额</font><font color="#000000">=</font></span> 1000 * -1 = -1000元 </td>
                            </tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">范例(二)</div></td>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">红袜 (主) vs 天使</div></td>
                                <td rowspan="2" bgcolor="#ffffff" class="red_eng_b"><div align="center">6 : 3 </div></td>
                                <td bgcolor="#ffffff" class="eng_12"> <div align="center">大9　1000元 </div></td>
                                <td bgcolor="#ffffff">退回注金 </td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff" class="eng_12"> <div align="center">小9　1000元</div></td>
                                <td bgcolor="#ffffff">退回注金 </td>
                            </tr>


                            </tbody></table>
                    </div>
                    <div class="bottomic" @click="showMic($event)">
                        独赢投注范例
                    </div>
                    <div class="bottomic-content">
                        <table width="100%" cellpadding="1" cellspacing="1" border="1" class="b_tab">
                            <tbody><tr bgcolor="#333333"><td class="bold_write" align="center" colspan="5">独赢投注范例</td></tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">范例(一)</div></td>
                                <td rowspan="2" bgcolor="#ffffff">
                                    <div align="center">蓝鸟 (主) vs 水手 </div></td>
                                <td rowspan="2" bgcolor="#ffffff" class="red_eng_b"><div align="center">6 : 4 </div></td>
                                <td bgcolor="#ffffff"><div align="center">投注 蓝鸟 1000元</div></td>
                                <td bgcolor="#ffffff" class="eng_12"><font color="#000000" class="font_12_bk">可赢金额<span class="eng-blue">=</span></font>1000 * 0.9 = 900元 </td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff"><div align="center">投注 水手 1000元</div></td>
                                <td bgcolor="#ffffff" class="eng_12"><span class="red-12"><font color="#ff0000">输付金额</font><font color="#000000">=</font></span> 1000 * -1 = -1000元 </td>
                            </tr></tbody></table>
                    </div>
                    <div class="bottomic" @click="showMic($event)">
                        一输二赢投注范例
                    </div>
                    <div class="bottomic-content">
                        <table width="100%" cellpadding="1" cellspacing="1" border="1" class="b_tab">
                            <tbody><tr bgcolor="#333333"><td class="bold_write" align="center" colspan="5">一输二赢投注范例</td></tr>
                            <tr bgcolor="#FFFFFF">
                                <td height="22" rowspan="2"><div align="center">范例(一)</div></td>
                                <td height="22" rowspan="2"><div align="center">蓝鸟 (主) vs 水手 </div></td>
                                <td height="22" rowspan="2" class="odd-red"><div align="center" class="red_eng_b">6 : 4 </div></td>
                                <td height="10" class="eng_12"><div align="center">投注 蓝鸟 1000元</div></td>
                                <td height="10"><span class="eng_12"><font color="#000000" class="font_12_bk">可赢金额<span class="eng-blue">=</span></font>1000 * 0.9 = 900元 </span></td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td height="11" class="eng_12"><div align="center">投注 水手 1000元 </div></td>
                                <td height="11"><span class="eng_12"><span class="red-12"><font color="#ff0000">输付金额</font><font color="#000000">=</font></span> 1000 * -1 = -1000元 </span></td>
                            </tr></tbody></table>
                    </div>
                    <div class="bottomic" @click="showMic($event)">
                        过关投注范例
                    </div>
                    <div class="bottomic-content">
                        <table width="100%" cellpadding="1" border="1" cellspacing="1" class="b_tab">
                            <tbody><tr bgcolor="#333333"><td class="bold_write" align="center" colspan="5">过关投注范例</td></tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff"><ol class="no_style"><li><span class="red">※</span>过关注单中的任何一场比赛，如果联盟裁定比赛延期或取消，此过关注单仍视为有效，但是该场比赛不予计算，所下之关数将递减（4关降为3关，3关降为2关，2关降为单式）。</li><li>
                                    <span class="red">※</span>同一场赛事不得互碰（在同一张注单中投注2次以上），否则一律视为无效注单。 </li></ol></td>
                            </tr>

                            </tbody></table>
                        <table width="100%" cellpadding="1" border="1" cellspacing="1" class="b_tab">
                            <tbody><tr bgcolor="#333333"><td class="bold_write" align="center" colspan="6">美国职棒MLB

                            </td></tr>
                            <tr bgcolor="#555555">
                                <td>
                                    <div align="center" class="font_12">时间 </div></td>
                                <td width="26%">
                                    <div align="center" class="font_12">主客队伍 </div></td>
                                <td width="17%">
                                    <div align="center"><span class="font_12">让分</span></div></td>
                                <td width="17%">
                                    <div align="center" class="font_12">大小</div></td>
                                <td width="14%">
                                    <div align="center" class="font_12">独赢</div></td>
                                <td width="17%">
                                    <div align="center" class="font_12">一输二赢</div></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td class="eng-12"><div align="center">08/01<br>
                                    20:05 </div></td>
                                <td class="eng-12"><table width="100%" cellpadding="2" cellspacing="0">
                                    <tbody><tr>
                                        <td><span class="eng_12">西雅图水手</span></td>
                                    </tr>
                                    <tr>
                                        <td class="eng-blue">多伦多蓝鸟 [主]</td>
                                    </tr>
                                    </tbody></table></td>
                                <td bgcolor="#FFFFFF"><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="49%">
                                            <div align="center"></div></td>
                                        <td width="51%" class="red_eng_b"><div align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.940</font></span><span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span> </div></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="style25" align="center">2+50</div></td>
                                        <td class="red_eng_b"><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">40<span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td class="eng-12" width="53%">
                                            <div class="style15" align="center">大9.5</div></td>
                                        <td width="47%"><div align="center"><span class="style11"><font color="#ff0000">0.900<span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></font></span> </div></td>
                                    </tr>
                                    <tr>
                                        <td class="eng-12">
                                            <div class="style15" align="center"><span class="style26">小9.5</span></div></td>
                                        <td><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0<img src="images/par-1.gif" width="14" height="14"></font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table width="88%" border="0" align="center" cellpadding="0" cellspacing="0">
                                    <tbody>
                                    <tr>
                                        <td width="51%"><div align="center"><span class="style11"><font color="#ff0000">0.900</font></span> <span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></div></td>
                                    </tr>
                                    <tr>
                                        <td><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0<img src="images/par-1.gif" width="14" height="14"></font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="49%">
                                            <div class="style25" align="center"></div></td>
                                        <td width="51%"><span class="style11"><font color="#ff0000">0.900</font></span> <span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div align="center" class="eng-blue">一输</div></td>
                                        <td><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0<img src="images/par-1.gif" width="14" height="14"></font></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td class="eng-12"><div align="center">08/01<br>
                                    20:05 </div></td>
                                <td class="eng-12"><table width="100%" cellpadding="2" cellspacing="0">
                                    <tbody><tr>
                                        <td><span class="eng_12">洛杉机天使</span></td>
                                    </tr>
                                    <tr>
                                        <td class="eng-blue">波士顿红袜 [主]</td>
                                    </tr>
                                    </tbody></table></td>
                                <td bgcolor="#FFFFFF"><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="49%">
                                            <div align="center"></div></td>
                                        <td width="51%" class="red_eng_b"><div align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.940</font></span><span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span> </div></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="style25" align="center">平手</div></td>
                                        <td class="red_eng_b"><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">40<span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td class="eng-12" width="53%">
                                            <div class="style15" align="center">大9</div></td>
                                        <td width="47%"><div align="center"><span class="style11"><font color="#ff0000">0.900</font></span> <span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></div></td>
                                    </tr>
                                    <tr>
                                        <td class="eng-12">
                                            <div class="style15" align="center"><span class="style26">小9</span></div></td>
                                        <td><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0<img src="images/par-1.gif" width="14" height="14"></font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table width="88%" border="0" align="center" cellpadding="0" cellspacing="0">
                                    <tbody>
                                    <tr>
                                        <td width="51%"><div align="center"><span class="style11"><font color="#ff0000">0.900</font></span> <span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></div></td>
                                    </tr>
                                    <tr>
                                        <td><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0<img src="images/par-1.gif" width="14" height="14"></font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="49%">
                                            <div class="style25" align="center"></div></td>
                                        <td width="51%"><span class="style11"><font color="#ff0000">0.900</font></span> <span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div align="center" class="eng-blue">一输</div></td>
                                        <td><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0<img src="images/par-1.gif" width="14" height="14"></font></span></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                            </tr>
                            <tr bgcolor="#ffffff">
                                <td class="eng-12" width="9%">
                                    <p class="eng-12" style="LINE-HEIGHT: 13pt; LETTER-SPACING: 1pt" align="center">08/01<br>
                                        20:05 </p></td>
                                <td class="eng-12"><table width="100%" cellpadding="2" cellspacing="0">
                                    <tbody><tr>
                                        <td><span class="eng_12">堪萨斯皇家</span></td>
                                    </tr>
                                    <tr>
                                        <td class="eng-blue">纽约洋基 [主]</td>
                                    </tr>
                                    </tbody></table></td>
                                <td bgcolor="#FFFFFF"><table cellspacing="0" cellpadding="0" width="100%" border="0">
                                    <tbody>
                                    <tr>
                                        <td width="49%">
                                            <div align="center"></div></td>
                                        <td width="51%" class="red_eng_b"><div align="center" class="red_eng_b"><span class="style11"><font color="#ff0000">0.940<span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></font></span> </div></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="style25" align="center">平手</div></td>
                                        <td class="red_eng_b"><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">40<span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></font></span></div></td>
                                    </tr>
                                    </tbody>
                                </table></td>
                                <td>
                                    <table cellspacing="0" cellpadding="0" width="100%" border="0">
                                        <tbody>
                                        <tr>
                                            <td class="eng-12" width="53%">
                                                <div class="style15" align="center">大9</div></td>
                                            <td width="47%"><div align="center"><span class="style11"><font color="#ff0000">0.900</font></span> <span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></div></td>
                                        </tr>
                                        <tr>
                                            <td class="eng-12">
                                                <div class="style15" align="center"><span class="style26">小9</span></div></td>
                                            <td><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0<img src="images/par-1.gif" width="14" height="14"></font></span></div></td>
                                        </tr>
                                        </tbody>
                                    </table></td>
                                <td>
                                    <table width="88%" border="0" align="center" cellpadding="0" cellspacing="0">
                                        <tbody>
                                        <tr>
                                            <td width="51%"><div align="center"><span class="style11"><font color="#ff0000">0.900</font></span> <span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></div></td>
                                        </tr>
                                        <tr>
                                            <td><div align="center"><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0<img src="images/par-1.gif" width="14" height="14"></font></span></div></td>
                                        </tr>
                                        </tbody>
                                    </table></td>
                                <td>
                                    <table cellspacing="0" cellpadding="0" width="100%" border="0">
                                        <tbody>
                                        <tr>
                                            <td width="49%">
                                                <div class="style25" align="center"></div></td>
                                            <td width="51%"><span class="style11"><font color="#ff0000">0.900</font></span> <span class="odd-red"><img src="images/par-1.gif" width="14" height="14"></span></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div align="center" class="eng-blue">一输</div></td>
                                            <td><span class="odd-red"><font color="#ff0000">0.9</font></span><span class="style11"><font color="#ff0000">0</font></span><span class="odd-red"><font color="#ff0000">0<img src="images/par-1.gif" width="14" height="14"></font></span></td>
                                        </tr>
                                        </tbody>
                                    </table></td>
                            </tr>
                            </tbody>
                        </table>
                        <table width="100%" cellpadding="1" border="1" cellspacing="1" class="b_tab">
                            <tbody><tr bgcolor="#333333"><td class="bold_write" align="center">比赛结果</td></tr>
                            <tr bgcolor="#FFFFFF">
                                <td> 蓝鸟 (主) vs 水手： 6 比 4 </td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td>红袜 (主) vs 天使： 6 比 3 </td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                                <td>洋基 (主) vs 皇家： 3 比 1 </td>
                            </tr>
                            </tbody></table>
                        <table width="100%" cellpadding="1" cellspacing="1" border="1" class="b_tab">
                            <tbody><tr bgcolor="#333333"><td class="bold_write" align="center" colspan="5">过关投注范例</td></tr>
                            <tr>
                                <td width="13%" rowspan="2" bgcolor="#ffffff"><div align="center">范例(一)</div></td>
                                <td width="87%" height="20" colspan="4" bgcolor="#ffffff">
                                    <div align="left"> 投注 蓝鸟(让分)+红袜(让分)+洋基(让分)，1000元 </div></td>
                            </tr>
                            <tr>
                                <td colspan="4" bgcolor="#ffffff">
                                    <p align="left" class="red-12" style="LINE-HEIGHT: 13pt; LETTER-SPACING: 1pt"> → 赢 1000 * (1+(0.9*50%)) * (1+0.9) * (1+0.9) - 1000 = 4234元 </p></td>
                            </tr>
                            <tr>
                                <td rowspan="2" bgcolor="#ffffff"><div align="center">范例(二)</div></td>
                                <td height="19" colspan="4" bgcolor="#ffffff"><div align="center"></div>
                                    <div align="left"> 投注 水手(让分)+红袜(让分)+洋基(让分)，1000元 </div></td>
                            </tr>
                            <tr>
                                <td height="19" colspan="4" bgcolor="#ffffff"> → 赢 1000 * (1+(-1*50%)) * (1+0.9) * (1+0.9) - 1000 = 805元 </td>
                            </tr></tbody></table>
                        <p class="red">备注：本娱乐城所有的混合过关最高的赔款金额是¥200，000.</p>
                    </div>
                    <div class="bottomic" @click="showMic($event)">
                        走地投注范例
                    </div>
                    <div class="bottomic-content">
                        <table width="100%" cellpadding="1" cellspacing="1" border="1" class="b_tab">
                            <tbody><tr bgcolor="#333333"><td class="bold_write" align="center" colspan="5">走地投注范例</td></tr>
                            <tr align="left">
                                <td height="21" colspan="5" bgcolor="#ffffff"> 　
                                    在指定球赛进行中接受下注，派彩方式与 "全场单式" 相同。 </td>
                            </tr>
                            <tr align="left">
                                <td height="21" colspan="5" bgcolor="#ffffff">　
                                    <span class="red">※</span> 走地让分：派彩方式与 "让分" 相同。 </td>
                            </tr>
                            <tr align="left">
                                <td height="22" colspan="5" bgcolor="#ffffff">　
                                    <span class="red">※</span>走地大小：派彩方式与 "大小" 相同。 </td>
                            </tr></tbody></table>
                    </div>
                </div>
            </div>
        </div>

        <home-footer></home-footer>
    </div>
</template>

<script>
    import sportHomeHead from '@/components/sport/sport-home-head/sport-home-head'
    import homeFooter from '@/components/home-footer/home-footer'
    export default {
        data () {
            return {
                typetitle: '体育规则',
                ifr: 1, // 根据数字显示规则
                ifS:1,// 玩法分类

            }
        },
        components: {
            sportHomeHead,
            homeFooter
        },
        methods: {
            activeLink(e, rule){
                var r = [];
                var n = e.currentTarget.parentNode.firstChild;
                for (; n; n = n.nextSibling) {
                    if (n.nodeType === 1 && n !== e) {
                        r.push(n);
                    }
                }
                r.forEach(function (v, i) {
                    v.classList.remove('active');
                })
                e.currentTarget.classList.add('active');
                this.ifr = rule;
                let act = document.querySelector('.bottomic-content.show');
                if(act)act.classList.remove('show')
                let aft = document.querySelector('.bottomic.after');
                if(aft)aft.classList.remove('after')
            },
            // 切换赛事的玩法
            activeBall(b,m,e){
                let r = [];
                let n = e.currentTarget.parentNode.firstChild;
                for (; n; n = n.nextSibling) {
                    if (n.nodeType === 1 && n !== e) {
                        r.push(n);
                    }
                }
                r.forEach(function (v, i) {
                    v.classList.remove('active');
                })
                e.currentTarget.classList.add('active');
                this.ifS = b;
                this.ifr = m;
            },
            // 点击后显示规则的下级内容
            showMic(e){
                let even = e.currentTarget;
                let chlid = even.nextSibling.nextSibling;
                if(chlid.className.indexOf('show')>-1){
                    chlid.classList.remove('show')
                    even.classList.remove('after')
                }else{
                    let act = document.querySelector('.bottomic-content.show');
                    let aft = document.querySelector('.bottomic.after');
                    if(act)act.classList.remove('show')
                      chlid.classList.add('show')
                    if(aft)aft.classList.remove('after')
                        even.classList.add('after')
                }
            },
        }
    }
</script>
<style scoped>
    .nav {
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        text-align: left;
        line-height: .46rem;
        height: .8rem;
        border-bottom: 1px solid #eee;
    }

    .nav > li.active {
        color: #f0ad4e;
        border-bottom: 2px solid #f0ad4e;
    }

    .nav > li {
        display: inline-block;
        padding: 0 .22rem 0.08rem;
        text-align: center;
        font-size: .32rem;

    }
    /*规则内容*/
    body{
        background-color: #f5f5f9;
    }
    .topic {
        font-size: 0.32rem;
        padding: .3rem .2rem
    }
    .bottomic{
        font-size: 0.32rem;
        padding: .26rem .6rem  .2rem .2rem;
        border-bottom: 1px solid #e5e5e5;
        background: #fff;
        position: relative;
    }
    .bottomic-content{
        font-size: 0.26rem;
        padding: .26rem .2rem;
        border-bottom: 1px solid #e5e5e5;
        background: #fff;
        overflow-x: auto;
        display: none;
    }
    .bottomic-content-s{
        font-size: 0.26rem;
        padding: .26rem .2rem;
        border-bottom: 1px solid #e5e5e5;
        background: #fff;
    }
    .bottomic-content.show{
        display: block;
    }
    .rule-content {
        font-size: .26rem;
        background-color: #f5f5f9;
        color: #666;
        margin-bottom: .8rem;
    }
    .rule-content>p{
        padding: .1rem;
        padding-left: .2rem;
    }
    .red{
        color: #ea8538;
    }
    thead th{
        color: #fff;
    }
    .bottomic:after{
        content: '';
        background: url("../../assets/rule-bottom.png") no-repeat;
        background-size: 100%;
        width: .3rem;
        height: .3rem;
        display: block;
        position: absolute;
        right: .3rem;
        top: .3rem;
        /*z-index: 5;*/
        /*overflow: hidden;*/
    }
    .bottomic.after:after{
        background: url("../../assets/rule-top.png") no-repeat;
        background-size: 100%;
    }
    .bold_write{
        color: #fff;
    }
    .font_12{
        color: #fff;
    }
</style>
