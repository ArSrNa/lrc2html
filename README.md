# ArLRC To HTML-纯前端原生带歌词音乐播放器

#### 介绍
纯前端，轻量，使用方便嗷

#### 安装教程

1.  在您的HTML代码里添加一段
````html
<script src="https://cdn.jsdelivr.net/gh/ArSrNa/arlrc2html/js/arlrc2html.js"></script>
````

2. 用法：HTML里添加一段

````js
var json = {"time":"00:19.54","timeout":20 ,"lrc":"いつまでも忘れない　best of my love"},{......}
arlrcGenerate(json,'音视频控件id','显示时间的控件ID','显示歌词的控件ID')
//这里的json就是你的歌词json变量，要求看下面
````

3. json格式要求
````json
{"time":"00:19.54","timeout":20 ,"lrc":"いつまでも忘れない　best of my love"},
{"time":"lrc时间","timeout":时间秒数 ,"lrc":"歌词内容"},
````
| 对象      | 释义    | 类型          |
|---------|-------|-------------|
| time    | lrc时间 | string      |
| timeout | 时间秒数  | number(K∈R) |
| lrc     | 歌词内容  | string      |

参见：[Ar-Sr-Na | 【教程】纯前端做一个歌词显示的音乐播放器](https://cloud.tencent.com/developer/article/1826702)


#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

此致
Ar-Sr-Na云计算项目- Ar-Sr-Na
