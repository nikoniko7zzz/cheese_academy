//document.querySelector(クラス名):クラス名から要素を選択するやつ
const hambarger = document.querySelector('hanmberger_menu');
const list = document.querySelector('list');
const list_li = document.querySelector('list_li');

//ハンバーガーメニューに対してイベントをつける
hambarger.addEventListener('click', () => {
  //toggle('クラス名):クラス名があれば削除。なければ追加する
  list.classList.toggle('open');
})