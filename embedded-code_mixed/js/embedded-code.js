
//＜ソースコード内を書込み可能にする。＞
//code要素にcontenteditableを属性を自動で付与するプログラム
function contentEditable() {    //関数定義
  const code = $('.prettyprint');   //.prettyprintクラスを定数codeに代入する。
  code.attr({   //.prettyprintを持つ要素に以下の属性="値"を代入する。
    contenteditable: true,    //contenteditable="true" →　編集を可能にする。
    spellcheck: false,    //spellcheck="false" →　編集を可能にする。
  });
}

window.onload = () => contentEditable();    //windowのロード時に実行するイベント。
                                            //引数()なしで、関数contentEditableを実行して、戻り値をwindow.onloadに格納する。


//＜Escape＞
// (function() {
//   let obj = document.getElementsByClassName('s-code');
//   for (let i = 0; i < obj.length; i++) {
//     let after = obj[i].innerHTML.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/!--\?/g, '&#063;').replace(/\?--/g, '&#063;');
//     obj[i].innerHTML = after;
//   }
// })();
