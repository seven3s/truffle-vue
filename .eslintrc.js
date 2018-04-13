/**
 * @Author: 花夏 <huaxia>
 * @Date:   2018-03-16T15:07:38+08:00
 * @Email:  huaxia@huar.love
 * @Project:
 * @Filename: .eslintrc.js
 * @Last modified by:   huaxia
 * @Last modified time: 2018-03-16T15:08:05+08:00
 * @Copyright: Copyright (c) 2018 by huarxia. All Rights Reserved.
 */
// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 多余的感叹号转布尔型
    'no-extra-boolean-cast': 0,
    'indent': [ 'error', 4, {
        // swicth case 缩进
        "SwitchCase": 1,
        // foo
        //   .bar
        //   .baz(); 这样的缩进
        "MemberExpression": 1
    }],
    // 末尾分号
    "semi": [2, "always"],
    // function 括号前不要有空格
    "space-before-function-paren": ["error", "never"],
    // 规定在一元操作符前后是否需要加空格，单词类操作符需要加，而非单词类操作符不用加
    "space-infix-ops": 2,
    // "lines-around-comment": ["error", {
    //     // 注释前空行
    //     "beforeBlockComment": false,
    //     // 禁止在块级注释之后有一空行
    //     "afterBlockComment": false,
    //     // 要求在行级注释之前有一空行
    //     "beforeLineComment": true,
    //     // 禁止在行级注释之后有一空行
    //     "afterLineComment": false
    // }],
    // 要求类内填充空行
    "padded-blocks": ["error", { "classes": "always" }],
    // 禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [2, false],
    // 空行最多不能超过2行
    "no-multiple-empty-lines": [1, {"max": 3}],
    // 规定是否需要在代码注释起始符// or /*后面至少紧跟一个空格
    "spaced-comment": [2, "always", { "markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!", ","] }],
    // 在switch语句中禁止重复的case
    "no-duplicate-case": 2,
    // 必须使用全等=== 和完全不等!==
    "eqeqeq": 2,
    // 保证了在和null比较时使用===和!==，而不能够使用==和!=
    "no-eq-null": 2,
    // 禁止使用eval函数
    "no-eval": 2,
    // 禁止使用new Function(); 语句。
    "no-new-func": 2,
    // 禁止使用new创建String,Number, and Boolean实例
    "no-new-wrappers": 2,
    // 禁止和自身作比较
    "no-self-compare": 2,
    // 禁止可能导致结果不明确的逗号操作符
    "no-sequences": 2,
    // 不要使用with语句
    "no-with": 2,
    // 在使用parseInt()方法时，必须要传递第二个参数来帮助解析。
    "radix": 2,
    // 禁止使用delete删除var声明的变量
    "no-delete-var": 2,
    // 声明变量时禁止覆盖JavaScript中的一些保留关键字
    // 比如NaN、Infinity、undefined、eval、arguments等。
    "no-shadow-restricted-names": 2,
    // 禁止使用未被定义的变量，除非已在配置文件的global中进行了说明。
    "no-undef": 2,
    // 禁止初始化变量为undefined
    "no-undef-init": 2,
    // 禁止把undefined作为变量名
    "no-undefined": 0,
    // 不允许定义的变量在后面的代码中没有被使用到
    "no-unused-vars": 2,
    // 函数参数不能重复
    "no-dupe-args": 2,
    // 强制驼峰法命名
    "camelcase": 2,
    // 逗号风格，换行时在行首还是行尾
    "comma-style": [2, "last"],
    // 必须使用 if(){} 中的{}
    "curly": [2, "all"],
    // 字符串最大长度
    "max-len": [0, 120, 4],
    // 函数最多只能有4个参数
    "max-params": [0, 4],
    // 不允许连续声明
    "one-var": ["error", "never"],
    // 换行时运算符在行尾还是行首
    "operator-linebreak": [2, "before"],
    // 建议使用单引号
    "quotes": [1, "single"],
    // 禁用行尾空格
    "no-trailing-spaces": 2,
    // 强制文件末尾使用换行
    "eol-last": ["error", "always"],
    //  要求花括号内有空格 (除了 {})
    "object-curly-spacing": ["error", "never"],
    // 强制圆括号内没有空格 (默认)
    // foo( (1 + 2) );
    // foo( (1 + 2), 1);
    // "space-in-parens": ["error", "never", { "exceptions": ["()"] }],
    // 强制数组括号内的空格的一致性
    "array-bracket-spacing": 2,
    // 强制在单行块内的空格的一致性
    // function foo() {return true;}
    // if (foo) {bar = 0;}
    "block-spacing": ["error", "never"],
    // 该规则要求指定的节点使用 JSDoc 注释
    "require-jsdoc": ["error", {
        "require": {
            "FunctionDeclaration": true,
            "MethodDefinition": true,
            "ClassDeclaration": true
        }
    }],
    // 必须符合jsdoc注释
    "valid-jsdoc": ["error", {"requireReturn": false }],
    // 每个文件最大行数
    "max-lines": ["error", {
        // 最大300行
        "max": 500,
        // 忽略空白行
        "skipComments": true,
        // 忽略注释
        "skipBlankLines": true
    }],
    // 强制在Javascript中使用特定的括号风格
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "handle-callback-err": ["error", "err"],
    "no-new": 0
  }
}
