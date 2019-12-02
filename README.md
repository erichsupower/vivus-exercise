# vivus.js

[線上 demo site](http://maxwellito.github.io/vivus)
[Vivus Instant - 線上 svg 動畫測試工具](https://maxwellito.github.io/vivus-instant/)

## 開始使用一：Inline SVG

```HTML
<svg id="my-svg">
  <path...>
  <path...>
  <path...>
</svg>

<script>
  new Vivus('my-svg', {duration: 200}, myCallback);
</script>
```

## 開始使用二：Dynamic load

```HTML
<!-- 方法一 -->

<object id="my-svg" type="image/svg+xml" data="link/to/my.svg"></object>

<script>
  new Vivus('my-svg', { duration: 200 }, myCallback);
</script>
```
```HTML
<!-- 方法二 -->

<div id="my-div"></div>

<script>
  new Vivus('my-div', { duration: 200, file: 'link/to/my.svg' }, myCallback);
</script>
```

|   |   |   |
|---|---|---|
|   |   |   |
|   |   |   |
|   |   |   |