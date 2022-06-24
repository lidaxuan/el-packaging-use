module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  // rules: {
  //   'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  //   'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  // }
  rules: {
    "no-array-constructor": 2, //禁止使用数组构造器
    "no-bitwise": 1, //禁止使用按位运算符
    "no-caller": 1, //禁止使用arguments.caller或arguments.callee
    "no-catch-shadow": 2, //禁止catch子句参数与外部作用域变量同名
    "no-class-assign": 2, //禁止给类赋值
    "no-cond-assign": 2, //禁止在条件表达式中使用赋值语句
    "no-const-assign": 2, //禁止修改const声明的变量
    "no-constant-condition": 2, //禁止在条件中使用常量表达式 if(true) if(1)
    "no-delete-var": 2, //不能对var声明的变量使用delete操作符
    "no-div-regex": 1, //不能使用看起来像除法的正则表达式/=foo/
    "no-dupe-keys": 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
    "no-dupe-args": 2, //函数参数不能重复
    "no-duplicate-case": 2, //switch中的case标签不能重复
    "no-else-return": 2, //如果if语句里面有return,后面不能跟else语句
    "no-empty": 2, //块语句中的内容不能为空
    "no-empty-character-class": 2, //正则表达式中的[]内容不能为空
    "no-eq-null": 2, //禁止对null使用==或!=运算符
    "no-eval": 1, //禁止使用eval
    "no-ex-assign": 2, //禁止给catch语句中的异常参数赋值
    "no-extend-native": 2, //禁止扩展native对象
    "no-extra-bind": 2, //禁止不必要的函数绑定
    "no-extra-boolean-cast": 2, //禁止不必要的bool转换
    "no-extra-parens": 2, //禁止非必要的括号
    "no-extra-semi": 2, //禁止多余的冒号
    "no-fallthrough": 1, //禁止switch穿透
    "no-floating-decimal": 2, //禁止省略浮点数中的0 .5 3.
    "no-func-assign": 2, //禁止重复的函数声明
    "no-implied-eval": 2, //禁止使用隐式eval
    "no-inline-comments": 0, //禁止行内备注   --需要确认
    "no-inner-declarations": [2, "functions"], //禁止在块语句中使用声明（变量或函数）
    "no-invalid-regexp": 2, //禁止无效的正则表达式
    "no-irregular-whitespace": 2, //不能有不规则的空格
    "no-iterator": 2, //禁止使用__iterator__ 属性
    "no-label-var": 2, //label名不能与var声明的变量名相同
    "no-labels": 2, //禁止标签声明  --待确认
    "no-lonely-if": 0, //禁止else语句内只有if语句
    "no-loop-func": 1, //禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
    "no-mixed-spaces-and-tabs": [2, false], //禁止混用tab和空格
    "no-multi-spaces": 1, //不能用多余的空格
    "no-multi-str": 2, //字符串不能用\换行
    "no-multiple-empty-lines": [1, { max: 2 }], //空行最多不能超过2行
    "no-native-reassign": 2, //不能重写native对象
    "no-negated-in-lhs": 2, //in 操作符的左边不能有!
    "no-new": 1, //禁止在使用new构造一个实例后不赋值
    "no-obj-calls": 2, //不能调用内置的全局对象，比如Math() JSON()
    "no-octal": 2, //禁止使用八进制数字
    "no-octal-escape": 2, //禁止使用八进制转义序列
    "no-param-reassign": 0, //禁止给参数重新赋值
    "no-proto": 2, //禁止使用__proto__属性
    "no-redeclare": 2, //禁止重复声明变量
    "no-regex-spaces": 2, //禁止在正则表达式字面量中使用多个空格 /foo bar/
    "no-return-assign": 1, //return 语句中不能有赋值表达式
    "no-self-compare": 2, //不能比较自身
    "no-shadow": 0, //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
    "no-shadow-restricted-names":0, //严格模式中规定的限制标识符不能作为声明时的变量名使用
    "no-spaced-func": 2, //函数调用时 函数名与()之间不能有空格
    "no-sparse-arrays": 2, //禁止稀疏数组， [1,,2]
    "no-trailing-spaces": 1, //一行结束后面不要有空格
    "no-throw-literal": 2, //禁止抛出字面量错误 throw "error";
    "no-undef": 1, //不能有未定义的变量
    "no-undef-init": 2, //变量初始化时不能直接给它赋值为undefined
    "no-undefined": 0, //不能使用undefined
    "no-unexpected-multiline": 2, //避免多行表达式
    "no-unneeded-ternary": 2, //禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
    "no-unreachable": 2, //不能有无法执行的代码
    "no-unused-expressions": 0, //禁止无用的表达式
    "no-unused-vars": [0, { vars: "all", args: "after-used" }], //不能有声明后未被使用的变量或参数
    "no-use-before-define": 2, //未定义前不能使用
    "no-useless-call": 2, //禁止不必要的call和apply
    "no-void": 2, //禁用void操作符
    "no-var": 0, //禁用var，用let和const代替
    "no-warning-comments": [
      0,
      { terms: ["todo", "fixme", "xxx"], location: "start" },
    ], //不能有警告备注
    "no-with": 2, //禁用with

    "array-bracket-spacing": [2, "never"], //是否允许非空数组里面有多余的空格
    "brace-style": [1, "1tbs"], //大括号风格
    "callback-return": 0, //避免多次调用回调什么的
    camelcase: 2, //强制驼峰法命名
    "comma-dangle": [2, "never"], //对象字面量项尾不能有逗号
    "comma-style": [2, "last"], //逗号风格，换行时在行首还是行尾
    curly: [2, "all"], //必须使用 if(){} 中的{}
    "default-case": 2, //switch语句最后必须有default
    eqeqeq: 2, //必须使用全等
    // "indent": [2, 4], //缩进风格
    "new-cap": 0, //函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
    "new-parens": 2, //new时必须加小括号
    "one-var": 0, //连续声明
    "operator-linebreak": [2, "after"], //换行时运算符在行尾还是行首
    quotes: [2, "double"], //引号类型 `` "" ''
    radix: 2, //parseInt必须指定第二个参数
    semi: [2, "always"], //语句强制分号结尾
    "use-isnan": 2, //禁止比较时使用NaN，只能用isNaN()
    "valid-typeof": 2, //必须使用合法的typeof的值
    "vars-on-top": 2, //var必须放在作用域顶部
    "wrap-iife": [2, "inside"], //立即执行函数表达式的小括号风格
  },
};
