# crypto

Visit the [API documentation](http://whnpm.cestc.cn/registry) for a list of all methods available.

## Install

```bash
npm install @cestc/crypto --save
```

## Quick Start

```js
import { encryptByDES, decryptByDES } from '@cestc/crypto'; 
// options(fileName: require:true 指定项目中需要压缩的文件名, outputName: require:false, 指定压缩包名)
encryptByDES('message') // 加密
decryptByDES('ciphertext') // 解密
```
