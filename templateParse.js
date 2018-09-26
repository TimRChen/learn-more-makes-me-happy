// 解：
String.prototype.render = function (obj) {
  let res = this.toString()
  Object.keys(obj).forEach(name => {
    const val = obj[name];
    if (typeof val === 'object') {
      Object.keys(val).forEach(childName => {
        const regExp = new RegExp(`\\\${${name}.${childName}}`);
        res = res.replace(regExp, val[childName]);
      });
    } else {
      const regExp = new RegExp(`\\\${${name}}`);
      res = res.replace(regExp, val);
    }
  });
  return res;
};

/**
 * 
 * 阿里笔试题
 * 
 * 给 String 对象添加一个render(obj)方法，
 * 实现将字符串中特定字符串替换为obj的对应属性。
 * 
 */

let greeting = 'My name is ${name}, age ${age}, I am a ${job.jobName}, my job level is ${job.jobLevel}';

let employee = {
  name: 'XiaoMing',
  age: 11,
  job: {
    jobName: 'designer',
    jobLevel: 'senior'
  }
};

let result = greeting.render(employee);

console.log(result); // My name is XiaoMing, age 11, I am a designer

