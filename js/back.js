
// 画像をランダムに配置し、1秒後に消す関数
function spawnRandomImage() {
  const img = document.createElement('img');  // <img>要素を作成
  img.src = "../img/hanabi.gif" + new Date().getTime();  // ランダムで表示する画像のパス

  // 画像のサイズ
  img.width = 50;  // 幅を指定
  img.height = 50; // 高さを指定

  // ランダムな位置を計算
  const randomX = Math.random() * (window.innerWidth - img.width);  // 横幅
  const randomY = Math.random() * (window.innerHeight - img.height);  // 縦幅

  // CSSで位置を指定
  img.style.position = 'absolute';
  img.style.left = `${randomX}px`;
  img.style.top = `${randomY}px`;

  // bodyに画像を追加
  document.body.appendChild(img);

  // 1秒後に画像を消す
  setTimeout(() => {
    img.remove();  // 画像を削除
  }, 5000);
}
  

// ランダム画像を出す間隔（例：0.5秒ごとに表示）
setInterval(spawnRandomImage, 3000);