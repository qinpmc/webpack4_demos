## ES6����

### 1 ������װ

- 1. Webpack ���� Babel ����������ģ��
npm i -D babel-core babel-loader 

- 2. �����������ѡ��ͬ�� Plugins �� Presets
npm i -D babel-preset-env

ע�⣺���ϰ�װ��babel-core babel-loader  ���ܴ��ڰ汾���಻���ݵ����⣺
����webpack�����з��� babel-loader@8 �� babel/core@6 �����ݡ�

Error: Cannot find module '@babel/core'
babel-loader@8 requires Babel 7.x (the package '@babel/core'). 
If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.

ж��babel-loader�󣬰�װbabel-loader@7��
npm install babel-loader@7   

### 2  webpack.config.js ˵��

```
module.exports = {
  // JS ִ������ļ�
  entry: './main.js',
  output: {
    // ������������ģ��ϲ������һ�� bundle.js �ļ�
    filename: 'bundle.js',
    // ����ļ����ŵ� dist Ŀ¼��
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ]
  },
  devtool: 'source-map' // ��� source-map ����ֱ�ӵ��� ES6 Դ��
};
```
