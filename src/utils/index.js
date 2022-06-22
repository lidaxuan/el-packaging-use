/*
 * @Description: utils
 * @Author: 李大玄
 * @Date: 2022-06-22 10:02:10
 * @FilePath: /el-packaging-use/src/utils/index.js
 * @LastEditors: 李大玄
 * @LastEditTime: 2022-06-22 10:16:21
 */
class Utils {
  // 全局设置
  serRootStyle(root, val, style) {
    let roots = document.querySelector(":" + root);
    return roots.style.setProperty(val, style);
  }

  // 锚点初始化
  goAnchorInit() {
    let layoutMain = document.getElementById("layout-main");
    if (layoutMain.scrollTop != null) {
      layoutMain.scrollTop = 0;
    }
  }

  // 锚点
  goAnchor(selector) {
    this.goAnchorInit();
    let anchor = document.querySelector(selector);
    anchor.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  }

  // 唯一id
  guid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        let r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  // js电话号码正则校验--座机和手机号
  // 移动 134(1349除外）135 136 137 138 139
  // 联通： 130 131 132 155 156 185 186  145
  // 电信：133 153 177 180 181 189
  // 固话 400-1001-1111： /^([0-9]{3,4}-)?[0-9]{3,4}-[0-9]{3,4}$/
  // 固话 0379-10011111：/^([0-9]{3,4}-)?[0-9]{7,8}$/
  checkTel(value) {
    let isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/,
      isMob =
        /^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
    if (isMob.test(value) || isPhone.test(value)) {
      return true;
    }
    return false;
  }

  // 密码校验 两种以上字符   （字母、数字、大写字母、特殊字符）
  check_password($val) {
    let reg2 = /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{6,20}$/;
    return reg2.test($val);
  }

  getModule(ks, value, modules, i, len) {
    modules = modules || {};
    if (i < len) {
      if (i == len - 1) {
        // 最后一层，赋值
        modules[ks[len - 1]] = value;
      } else {
        let m = {};
        // 在父级模块，是否存在对象
        if (modules[ks[i]] && modules[ks[i]]["modules"]) {
          m = modules[ks[i]]["modules"];
        } else if (modules[ks[i]]) {
          let pm = modules[ks[i]];
          m = pm["modules"];
          pm["namespaced"] = true;
        } else {
          let pm = modules[ks[i]] || {};
          modules[ks[i]] = pm;
          pm["modules"] = m;
          pm["namespaced"] = true;
        }

        i++;

        this.getModule(ks, value, m, i, len);
      }
    }
    return modules;
  }

  // 判断icon后缀css、js
  addLinkArr(srcArr) {
    let arr = srcArr;
    arr.forEach((item) => {
      // console.log(item.match('.css'))
      if (/\.(?:css)$/.test(item)) {
        this.addCssByLink(item);
      } else if (item.match(".css")) {
        this.addCssByLink(item);
      } else if (/\.(?:js)$/.test(item)) {
        this.addJsByScript(item);
      }
    });
  }

  addCssByLink(url) {
    let doc = document,
      link = doc.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", url);
    let heads = doc.getElementsByTagName("head");
    if (heads.length) {
      heads[0].appendChild(link);
    } else {
      doc.documentElement.appendChild(link);
    }
  }

  addJsByScript(url) {
    const s = document.createElement("script");
    s.type = "module";
    s.src = url;
    document.body.appendChild(s);
  }

  // 读取文件  正则后缀
  readFile(modulesFiles) {
    const modules = {};
    modulesFiles.keys().map((name) => {
      // 获取文件配置
      const componentConfig = modulesFiles(name),
        // 将被注册的组件名字,对获取的文件名进行处理
        componentName = name
          .replace(/^\.\/_/, "")
          .replace(/\.\w+$/, "")
          .split("./")
          .join("");
      modules[componentName] = componentConfig.default || componentConfig;
    });
    return modules;
  }
}

export const getWidth = function (arr) {
  const list = [].concat(arr);
  let span = document.createElement('span');
  for (let i = 0; i < list.length; i++) {
    span.innerText = `${list[i].before || ''}${list[i].label}${list[i].after || ''}`;
    document.body.appendChild(span);
    list[i].minWidth = (Math.floor(span.getBoundingClientRect().width) || 80) + 80; // 可能还有边距/边框等值，需要根据实际情况加上

    if (!list[i]['align']) {
      list[i]['align'] = 'center';
    }
    if (list[i]['show-overflow-tooltip'] != false && !list[i]['show-overflow-tooltip']) {
      list[i]['show-overflow-tooltip'] = true;
    }
  }
  document.body.removeChild(span);
  return list;
}

// 级联数据根据id 取出name
export const getCascName = (list, id, name, children, fid) => {
  for (let i = 0; i < list.length; i++) {
    let a = list[i]
    if (a[id] === fid) {
      return a[name]
    } else {
      if (a[children] && a[children].length > 0) {
        let res = getCascName(a[children], id, name, children, fid)
        if (res) {
          return res
        }
      }
    }
  }
}

// 导出
export function excelFun(name, res) {
  if (res) {
    const aLink = document.createElement("a");
    let blob = new Blob([res], { type: "application/vnd.ms-excel;charset=utf-8" })
    aLink.href = URL.createObjectURL(blob)//this.$moment(new Date()).format("YYYYMMDDHHmmss")
    aLink.setAttribute('download', name + dateFormats("YYYY-mm-dd HH-MM-SS", new Date()) + '.xls') // 设置下载文件名称
    aLink.click();
  } else {
    //    this.$message.error('失败');
  }
}

export default new Utils();
