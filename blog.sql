/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 100137
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 100137
File Encoding         : 65001

Date: 2019-02-14 08:02:55
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of blog
-- ----------------------------
INSERT INTO `blog` VALUES ('1', '> 帮朋友公司做了点东西，他说有很多bug，我一看，基本问题都是浏览器兼容引起的，而electron内带Chromium内核，正好一直想尝试下electron,所以研究了一波。这里只是简单的使用electron作为壳，把自己的项目嵌进去，更多深入研究以后再来。\n\n### 打包自己的项目\n这里没啥说的自己的项目打包下来,类似下面\n![dist](https://www.yangyuetao.cn/img/20190131/1.png)\n\n### 快速开始electron↵> 上手electron，官方提供了一个非常好的快速上手实例\\\"electron-quick-start\\\"。\n+ git clone https://github.com/electron/electron-quick-start↵+ cd electron-quick-start↵+ npm install\n+ + 把自己的项目拷进去↵![dist](https://www.yangyuetao.cn/img/20190131/2.png)\n+ + npm run start就启动起来了↵+ npm run packager就打包出来了↵↵↵### 热更新↵+ 因为Chromium的缘故，即使很小的项目打包出来也有120M左右，如果给客户使用，不可能每次有点改动就让客户重新安装，显然我们需要热更新。\n+ + 热更新的原理：每次启动程序我们就去拿本地的版本号和服务器上的版本号做对比，如果不一致就去请求资源，下载下来更新本地文件。\n+ 首先我们观察打包出来的文件，发现原始文件都放在resources/app下面的', 'title', ' 帮朋友公司做了点东西，他说有很多bug，我一看，基本问题都是浏览器兼容引起的，而electron内带Chromium内核，正好一直想尝试下electron,所以研究了一波。这里只是简单的使用electron作为壳，把自己的项目嵌进去，更多深入研究以后再来。', '1549093484', '1549093484', null);
INSERT INTO `blog` VALUES ('2', '> 帮朋友公司做了点东西，他说有很多bug，我一看，基本问题都是浏览器兼容引起的，而electron内带Chromium内核，正好一直想尝试下electron,所以研究了一波。这里只是简单的使用electron作为壳，把自己的项目嵌进去，更多深入研究以后再来。\n\n### 打包自己的项目\n这里没啥说的自己的项目打包下来,类似下面\n![dist](https://www.yangyuetao.cn/img/20190131/1.png)\n\n### 快速开始electron↵> 上手electron，官方提供了一个非常好的快速上手实例\\\"electron-quick-start\\\"。\n+ git clone https://github.com/electron/electron-quick-start↵+ cd electron-quick-start↵+ npm install\n+ + 把自己的项目拷进去↵![dist](https://www.yangyuetao.cn/img/20190131/2.png)\n+ + npm run start就启动起来了↵+ npm run packager就打包出来了↵↵↵### 热更新↵+ 因为Chromium的缘故，即使很小的项目打包出来也有120M左右，如果给客户使用，不可能每次有点改动就让客户重新安装，显然我们需要热更新。\n+ + 热更新的原理：每次启动程序我们就去拿本地的版本号和服务器上的版本号做对比，如果不一致就去请求资源，下载下来更新本地文件。\n+ 首先我们观察打包出来的文件，发现原始文件都放在resources/app下面的', 'title', ' 帮朋友公司做了点东西，他说有很多bug，我一看，基本问题都是浏览器兼容引起的，而electron内带Chromium内核，正好一直想尝试下electron,所以研究了一波。这里只是简单的使用electron作为壳，把自己的项目嵌进去，更多深入研究以后再来。', '1549094041', '1549094041', null);

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
INSERT INTO `blog_category` VALUES ('1', '1');
INSERT INTO `blog_category` VALUES ('1', '3');
INSERT INTO `blog_category` VALUES ('1', '2');
INSERT INTO `blog_category` VALUES ('2', '4');
INSERT INTO `blog_category` VALUES ('2', '6');

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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

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

-- ----------------------------
-- Table structure for collections
-- ----------------------------
DROP TABLE IF EXISTS `collections`;
CREATE TABLE `collections` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `summary` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `type_id` int(11) NOT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  `delete_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of collections
-- ----------------------------
INSERT INTO `collections` VALUES ('1', '墨刀', '墨刀', 'http://', '2', '1549189285', '1549189285', null);
INSERT INTO `collections` VALUES ('2', '墨刀', '墨刀', 'http://', '1', '1549189321', '1549189321', null);

-- ----------------------------
-- Table structure for type
-- ----------------------------
DROP TABLE IF EXISTS `type`;
CREATE TABLE `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `create_time` int(11) DEFAULT NULL,
  `update_time` int(11) DEFAULT NULL,
  `delete_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of type
-- ----------------------------
INSERT INTO `type` VALUES ('1', '设计', null, null, null);
INSERT INTO `type` VALUES ('2', '前端', null, null, null);
INSERT INTO `type` VALUES ('3', '工具', null, null, null);

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
