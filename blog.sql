/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 100130
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 100130
File Encoding         : 65001

Date: 2019-03-04 11:59:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for blog
-- ----------------------------
DROP TABLE IF EXISTS `blog`;
CREATE TABLE `blog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(1000) NOT NULL,
  `title` varchar(100) NOT NULL,
  `gist` varchar(255) NOT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  `delete_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of blog
-- ----------------------------
INSERT INTO `blog` VALUES ('3', '> 整理了一下在 `Javascript` 中的一些常用设计模式，由于 `Javascript ` 语言的特性与其他语言不同（没有类，弱类型），所以在实现上也有不同 \n\n# Javascript 设计模式\n\n## SOLID五大设计原则\n\n- S - 单一职责原则;\n- O - 开放封闭原则\n- L - 李氏置换原则\n- I - 接口独立原则\n- D - 依赖导致原则\n\n### S - 单一职责原则\n\n- 一个程序只做好一件事\n- 如果功能过于复杂就拆分开，每个部分保持独立\n\n### O - 开放封闭原则\n\n- 对扩展开放，对修改封闭\n- 增加需求时，扩展新代码，而非修改已有代码\n- 软件设计的终极目标\n\n### L - 李氏置换原则\n\n- 子类能覆盖父类\n- 父类能出现的地方子类就能出现\n- JS中使用较少（弱类型，继承使用较少）\n\n### I - 接口独立原则\n\n- 保持接口的单一独立，避免出现“胖接口”\n- JS中没有接口（typescript例外），使用较少\n- 类似于单一职责原则，这里更关注接口\n\n### D - 依赖导致原则\n\n- 面向接口编程，依赖于抽象而不依赖于具体\n- 使用方只关注接口而不关注具体类的实现\n- JS中使用较少（没有接口&弱类型）\n\n***\n\n## 设计模式\n\n1. [工厂模式](#工厂模式)\n2. [单例模式](#单例模式)\n3. [适配器模式](#适配器模式)\n4. [装饰器模式](#装饰器模式)\n5. [代理模式](#代理模式)\n6. [外观模式](#外观模式)\n7. [观察者模式](#观察者模式)\n8. [迭代器模式](#迭代器模式)\n9. [状态模式](#状态模式)\n10. [其他设计模式](#其他设计模式)\n\n***\n\n### 工厂模式\n\n- 将 `new` 操作单独封装\n- 遇到 `new` 时，就要考虑是否该使用工厂模式\n\n```javascript\nclass JQuery{\n  constrctor(selector){\n    let slice = Array.prototype.slice\n    let dom = slice.call(document.querySelectorAll(selector))\n    let len = dom ? dom.length : 0\n    for(let i ', 'Javascript 设计模式', ' 整理了一下在 `Javascript` 中的一些常用设计模式，由于 `Javascript ` 语言的特性与其他语言不同（没有类，弱类型），所以在实现上也有不同 ', '1551670492', '1551670492', null);

-- ----------------------------
-- Table structure for blog_category
-- ----------------------------
DROP TABLE IF EXISTS `blog_category`;
CREATE TABLE `blog_category` (
  `blog_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of blog_category
-- ----------------------------
INSERT INTO `blog_category` VALUES ('3', '5');
INSERT INTO `blog_category` VALUES ('3', '2');

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  `delete_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '0', 'it', null, null, null);
INSERT INTO `category` VALUES ('2', '0', 'js', null, null, null);
INSERT INTO `category` VALUES ('3', '0', 'php', null, null, null);
INSERT INTO `category` VALUES ('4', '0', 'node', null, null, null);
INSERT INTO `category` VALUES ('5', '0', '前端', null, null, null);
INSERT INTO `category` VALUES ('6', '0', '互联网', null, null, null);
INSERT INTO `category` VALUES ('7', '0', 'java', '1549084714', '1549084714', null);
INSERT INTO `category` VALUES ('8', '0', 'python', '1550713607', '1550713607', null);
INSERT INTO `category` VALUES ('9', '0', 'ui', '1551494953', '1551494953', null);

-- ----------------------------
-- Table structure for collections
-- ----------------------------
DROP TABLE IF EXISTS `collections`;
CREATE TABLE `collections` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `summary` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  `delete_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of collections
-- ----------------------------

-- ----------------------------
-- Table structure for demo
-- ----------------------------
DROP TABLE IF EXISTS `demo`;
CREATE TABLE `demo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL DEFAULT '0',
  `summary` varchar(255) NOT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  `delete_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of demo
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(64) NOT NULL,
  `nickname` varchar(50) NOT NULL,
  `update_time` int(11) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `delete_time` int(11) DEFAULT NULL,
  `ip` varchar(50) DEFAULT NULL,
  `scope` int(11) NOT NULL DEFAULT '16',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('23', 'tusix', '202cb962ac59075b964b07152d234b70', 'tusix', '1548763317', '1548763317', null, '127.0.0.1', '32');
