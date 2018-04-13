# 关于loader使用方法

首先引入 `import restFullLoader from 'src/common/loader.js';`

其中引入了jq的promise,其中常用到 

`then/done` 执行完成

`fail ` 执行失败

另外还有 `always` 无论完成还是失败都会执行到

> 1.GET

```
restFullLoader.requestGET(url, opt)
              .then((res)=> {
                  // to do sth
              });
```

> 2.POST

```
restFullLoader.requestPOST(url, opt)
              .then((res)=> {
                  // to do sth
              });
```

> 3.DELETE

```
restFullLoader.requestDELETE(url, opt)
              .then((res)=> {
                  // to do sth
              });
```

> 4.PUT

```
restFullLoader.requestPUT(url, opt)
              .then((res)=> {
                  // to do sth
              });
```
