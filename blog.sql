/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 100130
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 100130
File Encoding         : 65001

Date: 2019-03-05 11:23:04
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for blog
-- ----------------------------
DROP TABLE IF EXISTS `blog`;
CREATE TABLE `blog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
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
INSERT INTO `blog` VALUES ('3', '> 整理了一下在 `Javascript` 中的一些常用设计模式，由于 `Javascript ` 语言的特性与其他语言不同（没有类，弱类型），所以在实现上也有不同 \n\n# Javascript 设计模式\n\n## SOLID五大设计原则\n\n- S - 单一职责原则;\n- O - 开放封闭原则\n- L - 李氏置换原则\n- I - 接口独立原则\n- D - 依赖导致原则\n\n### S - 单一职责原则\n\n- 一个程序只做好一件事\n- 如果功能过于复杂就拆分开，每个部分保持独立\n\n### O - 开放封闭原则\n\n- 对扩展开放，对修改封闭\n- 增加需求时，扩展新代码，而非修改已有代码\n- 软件设计的终极目标\n\n### L - 李氏置换原则\n\n- 子类能覆盖父类\n- 父类能出现的地方子类就能出现\n- JS中使用较少（弱类型，继承使用较少）\n\n### I - 接口独立原则\n\n- 保持接口的单一独立，避免出现“胖接口”\n- JS中没有接口（typescript例外），使用较少\n- 类似于单一职责原则，这里更关注接口\n\n### D - 依赖导致原则\n\n- 面向接口编程，依赖于抽象而不依赖于具体\n- 使用方只关注接口而不关注具体类的实现\n- JS中使用较少（没有接口&弱类型）\n\n***\n\n## 设计模式\n\n1. [工厂模式](#工厂模式)\n2. [单例模式](#单例模式)\n3. [适配器模式](#适配器模式)\n4. [装饰器模式](#装饰器模式)\n5. [代理模式](#代理模式)\n6. [外观模式](#外观模式)\n7. [观察者模式](#观察者模式)\n8. [迭代器模式](#迭代器模式)\n9. [状态模式](#状态模式)\n10. [其他设计模式](#其他设计模式)\n\n***\n\n### 工厂模式\n\n- 将 `new` 操作单独封装\n- 遇到 `new` 时，就要考虑是否该使用工厂模式\n\n```javascript\nclass JQuery{\n  constrctor(selector){\n    let slice = Array.prototype.slice\n    let dom = slice.call(document.querySelectorAll(selector))\n    let len = dom ? dom.length : 0\n    for(let i = 0; i < len; i++){\n      this[i] = dom[i]\n    }\n    this.length = len\n    this.selector = selector || \'\'\n  }\n  append(node){}\n  ...api\n}\n\nwindow.$ = function (selector){\n  return new JQuery(selector)\n}\n```\n\n***\n\n### 单例模式\n\n- 系统中被唯一使用\n- 一个类只有一个实例\n\n```javascript\nclass SingleObject {\n  login () {\n    console.log(\'login\')\n  }\n}\n\nSingleObject.getInstance = (function () {\n  let instance\n  return function () {\n    if (!instance) {\n      instance = new SingleObject()\n    }\n    return instance\n  }\n})()\n\nlet obj1 = SingleObject.getInstance()\nobj1.login()\n\nlet obj2 = SingleObject.getInstance()\nobj2.login()\n\nconsole.log(obj1 === obj2)\n```\n***\n\n### 适配器模式\n\n- 旧接口格式和使用者不兼容\n- 中间加一个适配转换接口\n\n```javascript\nclass Adaptee {\n  specificRequest () {\n    return \'德国标准插头\'\n  }\n}\n\nclass Target {\n  constructor () {\n    this.adaptee = new Adaptee()\n  }\n\n  request () {\n    let info = this.adaptee.specificRequest()\n    return `${info} - 转换器 - 中国标准插头`\n  }\n}\n\nlet target = new Target()\nlet res = target.request()\nconsole.log(res)\n```\n\n***\n\n### 装饰器模式\n\n- 为对象添加新功能\n- 不改变其原有的结构\n\n```javascript\nclass Circle {\n  draw () {\n    console.log(\'画一个圆形\')\n  }\n}\n\nclass Decorator {\n  constructor (circle) {\n    this.circle = circle\n  }\n  draw () {\n    this.circle.draw()\n    this.setRedBorder(circle)\n  }\n  setRedBorder (circle) {\n    console.log(\'设置红色边框\')\n  }\n}\n\nlet circle = new Circle()\ncircle.draw()\nconsole.log(\'~~~~~\');\n\nlet dec = new Decorator(circle)\ndec.draw()\n```\n***\n\n### 代理模式\n\n- 使用者无权访问目标对象\n- 中间加代理，通过代理授权和控制\n\n```javascript\nclass ReadImg {\n  constructor (fileName) {\n    this.fileName = fileName\n    this.loadFromDisk()\n  }\n  display () {\n    console.log(\'display... \' + this.fileName)\n  }\n  loadFromDisk () {\n    console.log(\'loading... \' + this.fileName)\n  }\n}\n\nclass ProxyImg {\n  constructor (fileName) {\n    this.realImg = new ReadImg(fileName)\n  }\n  display () {\n    this.realImg.display()\n  }\n}\n\nconst proxyImg = new ProxyImg(\'1.png\')\nproxyImg.display()\n```\n***\n\n### 外观模式\n\n- 为子系统中的一组接口提供了一个高层接口\n- 使用者使用这个高层接口\n\n```javascript\nfunction bindEvent(elem,type,selector,fn){\n  if(fn == null){\n    if = selector\n    selector = null\n  }\n  // ...\n}\n\n// 调用\nbindEvent(elem,\'click\',\'#div\',fn)\nbindEvent(elem,\'click\',fn)\n```\n\n***\n\n### 观察者模式\n\n- 发布&订阅\n- 一对多\n\n```javascript\n// 主题，保存状态，状态变化之后出发所有观察者对象\nclass Subject {\n  constructor () {\n    this.state = 0\n    this.observers = []\n  }\n  getState () {\n    return this.state\n  }\n  setState (state) {\n    this.state = state\n    this.notifyAllObservers()\n  }\n  notifyAllObservers () {\n    this.observers.forEach(observer => {\n      observer.update()\n    })\n  }\n  attach (observer) {\n    this.observers.push(observer)\n  }\n}\n\n// 观察者\nclass Observer {\n  constructor (name, subject) {\n    this.name = name\n    this.subject = subject\n    this.subject.attach(this)\n  }\n  update () {\n    console.log(`${this.name} update, state: ${this.subject.getState()}`)\n  }\n}\n\nlet s = new Subject()\nlet o1 = new Observer(\'o1\', s)\nlet o2 = new Observer(\'o2\', s)\nlet o3 = new Observer(\'o3\', s)\n\ns.setState(1)\ns.setState(2)\ns.setState(3)\n```\n***\n\n### 迭代器模式\n\n- `顺序` 访问一个集合\n- 使用者无需知道集合的内部结构（封装）\n\n```javascript\nclass Iterator {\n  constructor (container) {\n    this.list = container.list\n    this.index = 0\n  }\n  next () {\n    if (this.hasNext()) {\n      return this.list[this.index++]\n    }\n    return null\n  }\n  hasNext () {\n    return this.index < this.list.length\n  }\n}\n\nclass Container {\n  constructor (list) {\n    this.list = list\n  }\n  getIterator () {\n    return new Iterator(this)\n  }\n}\n\nlet arr = [1, 2, 3, 4, 5, 6]\nlet container = new Container(arr)\nlet iterator = container.getIterator()\nwhile (iterator.hasNext()) {\n  console.log(iterator.next())\n}\n```\n\n***\n\n### 状态模式\n\n- 一个对象有状态变化\n- 每次状态变化都会触发一个逻辑\n- 不能总用 if...else 来控制\n\n```javascript\n// 状态\nclass State{\n  constructor (color) {\n    this.color = color\n  }\n  handle (context) {\n    console.log(`turn to ${this.color} light`)\n    context.setState(this)\n  }\n}\n\n// 主体\nclass Context{\n  constructor () {\n    this.state = null\n  }\n  getState () {\n    return  this.state\n  }\n  setState (state) {\n    this.state = state\n  }\n}\n\nlet context = new Context()\n\nlet green = new State(\'green\')\nlet yellow = new State(\'yellow\')\nlet red = new State(\'red\')\n\ngreen.handle(context)\nconsole.log(context.getState())\n\nyellow.handle(context)\nconsole.log(context.getState())\n\nred.handle(context)\nconsole.log(context.getState())\n```\n\n***\n\n### 其他设计模式\n\n- 原型模式\n  - clone自己，生成一个新对象\n  - java默认有clone接口，不用自己实现\n\n- 桥接模式\n  - 用于把抽象化与实现化解耦\n  - 使得二者可以独立变化\n  - （未找到JS中的经典应用）\n\n- 组合模式\n  - 生成树形结构，表示“整体-部分”关系\n  - 让整体和部分都具有一直的操作方式\n\n- 享元模式\n  - 共享内存（主要考虑内存，而非效率）\n  - 相同的数据，共享使用\n  - （JS中未找到经典应用场景）\n\n- 策略模式\n  - 不同策略分开处理\n  - 避免出现大量if...else 或者 switch...case\n  - （JS中未找到经典应用场景）\n\n- 模板方法模式\n  ```javascript\n  class Foo{\n    handle(){\n      handle1()\n      handle2()\n      handle3()\n    }\n    handle1(){ console.log(\'1\') }\n    handle2(){ console.log(\'2\') }\n    handle3(){ console.log(\'1\') }\n  }\n  ```\n\n- 职责链模式\n  - 一步操作可能分为多个职责角色来完成\n  - 把这些角色都分开，然后用一个链串起来\n  - 将发起者和各个处理者进行隔离\n  ```javascript\n  class Action {\n    constructor(name){\n      this.name = name\n      this.nextAction = null\n    }\n    setNextAction(action){\n      this.nextAction = action\n    }\n    handle(){\n      console.log(`${this.name}` 审批)\n      if(this.nextAction != null){\n        this.nextAction.handle()\n      }\n    }\n  }\n\n  let a1 = new Action(\'组长\')\n  let a2 = new Action(\'经理\')\n  let a3 = new Action(\'总监\')\n  a1.setNextAction(a2)\n  a2.setNextAction(a3)\n  a1.handle()\n  ```\n\n- 命令模式\n  - 发送者 -> 命令对象 -> 接受者\n  ```javascript\n  // 接受者\n  class Receiver{\n    exec(){\n      console.log(\'执行\')\n    }\n  }\n  // 命令者\n  class Command{\n    constructor(receiver){\n      this.receiver = receiver\n    }\n    cmd(){\n      console.log(\'执行命令\')\n      this.receiver.exec()\n    }\n  }\n  // 触发者\n  class Invoker{\n    constructor(command){\n      this.command = command\n    }\n    invoke(){\n      console.log(\'开始\')\n      this.command.cmd()\n    }\n  }\n  let soldier = new Receiver()\n  let trumpeter = new Command(soldier)\n  let general = new Invoker(trumpeter)\n  general.invoke()\n  ```\n\n- 备忘录模式\n  - 随时记录一个对象的状态变化\n  - 随时可以恢复之前的某个状态（如撤销功能）\n  - 未找到JS中经典应用，除了一些工具（如编辑器）\n\n- 中介者模式\n  ```javascript\n  class A {\n    constructor(){\n      this.number = 0\n    }\n    setNumber(num,m){\n      this.number = num\n      if(m){\n        m.setB()\n      }\n    }\n  }\n  class B {\n    constructor(){\n      this.number = 0\n    }\n    setNumber(num,m){\n      this.number = num\n      if(m){\n        m.setA()\n      }\n    }\n  }\n\n  class Mediator{\n    constructor(a,b){\n      this.a = a\n      this.b = b\n    }\n    setA(){\n      let number = this.b.number\n      this.a.setNumber(number/100)\n    }\n    setB(){\n      let number = this.a.number\n      this.b.setNumber(number*100)\n    }\n  }\n\n  let a = new A()\n  let b = new B()\n  let m = new Mediator(a,b)\n  a.setNumber(100,m)\n  console.log(a.number,b.number)\n  b.setNumber(100,m)\n  console.log(a.number,b.number)\n  ```\n\n- 访问者模式\n  - 讲数据操作和数据结构进行分离\n  - 使用场景不多\n\n- 解释器模式\n  - 描述语言语法如何定义，如何解释和编译\n  - 用于专业场景', 'Javascript 设计模式', ' 整理了一下在 `Javascript` 中的一些常用设计模式，由于 `Javascript ` 语言的特性与其他语言不同（没有类，弱类型），所以在实现上也有不同 ', '1551670492', '1551755678', null);

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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

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
INSERT INTO `category` VALUES ('10', '0', 'Mysql', '1551752746', '1551752746', null);
INSERT INTO `category` VALUES ('11', '0', 'mongodb', '1551755012', '1551755012', null);

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
