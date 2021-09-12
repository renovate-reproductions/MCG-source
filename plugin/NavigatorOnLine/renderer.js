window.addEventListener("online",
   new Notification("[ステータス] オンライン", {
      body: "インターネットに接続されていることを検知しました。",
   })
);
// 環境やプラグインの影響によって動作が異なり、接続しているのに接続していない表示されてしまう現象を防ぐためにコメントアウトしています。
/*
window.addEventListener("offline",
   // オフラインになったときの処理
   new Notification("[ステータス] オフライン", {
      body: "インターネットに接続されていないことを検知しました。",
   })
);
//*/
window.addEventListener("online", event => {
   // オンラインになったときの処理
   new Notification("[ステータス] オフライン --> オンライン", {
      body: "インターネットに接続が完了されたことを検知しました。",
   });
});

window.addEventListener("offline", event => {
   // オフラインになったときの処理
   new Notification("[ステータス] オンライン --> オフライン", {
      body: "インターネットに接続が遮断されたことを検知しました。",
   });
});
