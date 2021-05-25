<!--
 * @Author: tangzhicheng
 * @Date: 2021-03-03 09:39:14
 * @LastEditors: tangzhicheng
 * @LastEditTime: 2021-03-30 14:41:42
 * @Description: file content
-->

# 技术设计

## 表设计

### users 用户信息表

| key            | value         | remarks     |
| -------------- | ------------- | ----------- |
| id             | INT           | -           |
| username       | VARCHART(24)  | -           |
| password       | VARCHART(24)  | -           |
| sex            | INT(0, 1)     | -           |
| address_id     | INT           | 地址信息 id |
| qq_number      | VARCHART(20)  | -           |
| wx_number      | VARCHART(30)  | -           |
| borthday       | DATE          | -           |
| introduce      | VARCHART(300) | -           |
| music_label_id | INT           | 音乐标签 id |

### address 地址信息表

| key           | value        | remarks |
| ------------- | ------------ | ------- |
| id            | INT          | -       |
| province      | VARCHART(50) | -       |
| province_code | INT          | -       |
| city          | VARCHART(50) | -       |
| city_code     | INT          | -       |
| area          | VARCHART(50) | -       |
| area_code     | INT          | -       |

### music_labels 音乐标签表

| key    | value        | remarks                     |
| ------ | ------------ | --------------------------- |
| id     | INT          | -                           |
| labels | VARCHART(60) | 音乐标签，每个不超过 5 个字 |

### blogs 博客表

| key            | value        | remarks |
| -------------- | ------------ | ------- |
| id             | INT          | -       |
| username       | VARCHART(24) | -       |
| title          | VARCHART(50) | -       |
| content        | TEXT         | -       |
| user_id        | INT          | -       |
| music_label_id | INT          | -       |
| visit_count    | INT          | -       |
| likes          | INT          | -       |

### comments 评论

| key       | value         | remarks |
| --------- | ------------- | ------- |
| id        | INT           | -       |
| parent_id | INT           | -       |
| user_id   | INT           | -       |
| username  | VARCHART(24)  | -       |
| content   | VARCHART(400) | -       |

## 技术实现

### 登录注册
