---
title: Grid - 栅格
sidebarDepth: 0
---
# Grid

## 预览
通过基础的 24 分栏栅格，迅速简便地创建布局。

<grid-demo/>

## 使用方法
```html
<div class="grid-wrapper">
  <z-row class="row">
    <z-col class="item" span="24">col-24</z-col>
  </z-row>
  <z-row>
    <z-col class="item" span="12">col-12</z-col>
    <z-col class="item" span="12">col-12</z-col>
  </z-row>
  <z-row class="row">
    <z-col class="item" span="8">col-8</z-col>
    <z-col class="item" span="8">col-8</z-col>
    <z-col class="item" span="8">col-8</z-col>
  </z-row>
  <z-row class="row">
    <z-col class="item" span="6">col-6</z-col>
    <z-col class="item" span="6">col-6</z-col>
    <z-col class="item" span="6">col-6</z-col>
    <z-col class="item" span="6">col-6</z-col>
  </z-row>
</div>

<style>
  .grid-wrapper{
    background: #3eaf7c;
  }
  .row{ 
    padding: 8px;
  }
  .item { 
    text-align: center;
    line-height: 36px;
    color: #fff;
    border-radius: 4px;
  }
  &:nth-child(odd){ 
    background: #3eaf7c; 
  }
  &:nth-child(even){ 
    background: lighten(#3eaf7c,20%);
    color: black; 
  }
</style>
```


## 预览
混合布局

## 使用方法
```html
<div class="align-wrapper">
  <z-row class="row" align="left" gutter="30">
    <z-col class="item" span="8">left</z-col>
    <z-col class="item" span="8">left</z-col>
  </z-row>
  <z-row class="row" align="center" gutter="20">
    <z-col class="item" span="8">center</z-col>
    <z-col class="item" span="8">center</z-col>
  </z-row>
  <z-row class="row" align="right" gutter="10">
    <z-col class="item" span="8">right</z-col>
    <z-col class="item" span="8">right</z-col>
  </z-row>
</div>

<style>
  .grid-wrapper{
    background: #3eaf7c;
  }
  .row{ 
    padding: 8px;
  }
  .item { 
    text-align: center;
    line-height: 36px;
    color: #fff;
    border-radius: 4px;
  }
  &:nth-child(odd){ 
    background: #3eaf7c; 
  }
  &:nth-child(even){ 
    background: lighten(#3eaf7c,20%);
    color: black; 
  }
</style>
```


## 预览
响应式布局

## 使用方法
```html
<div class="response-wrapper">
  <z-row class="row">
    <z-col class="item"
          span="24"
          :ipad="{span:8}"
          :narrow-pc="{span:4}"
          :pc="{span: 2}"
          :wide-pc="{span:1}">
          col
    </z-col>
    <z-col class="item"
          span="24"
          :ipad="{span:16}"
          :narrow-pc="{span:20}"
          :pc="{span: 20,offset:2}"
          :wide-pc="{span:21}">
          col
    </z-col>
  </z-row>
</div>

<style>
  .grid-wrapper{
    background: #3eaf7c;
  }
  .row{ 
    padding: 8px;
  }
  .item { 
    text-align: center;
    line-height: 36px;
    color: #fff;
    border-radius: 4px;
  }
  &:nth-child(odd){ 
    background: #3eaf7c; 
  }
  &:nth-child(even){ 
    background: lighten(#3eaf7c,20%);
    color: black; 
  }
</style>
```

## Row选项
| 参数    | 说明       | 类型    | 可选值           | 默认值 |
| ------- |:-----------|:--------|:-----------------|:------|
| gutter  | 栅格间隔   | number  |-                 |-      |
| align   | 排版方式   | string  |left/center/right |left   |


## Col选项
| 参数     | 说明                                | 类型    | 可选值 | 默认值 |
| -------- |:------------------------------------|:--------|:------|:------|
| span     | 栅格占据列数                         | number |-      |-      |
| offset   | 栅格左侧的间隔格数                   | number |-       |-   |
| ipad     | >576px 响应式栅格数或者栅格属性对象  | number |-       |false  |
| narrowPc | >768px 响应式栅格数或者栅格属性对象  | number |-       |false  |
| pc       | >992px 响应式栅格数或者栅格属性对象  | number |-       |false  |
| widePc   | >1200px 响应式栅格数或者栅格属性对象 | number |-       |false  |