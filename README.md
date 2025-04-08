# Fa(c∀e)Script
※これは最新版Facescriptではありません！

- [これが残っている経緯](#これが残っている経緯)
- [現在の状況](#現在の状況)
- [2025版と2023版の名前の違い](#2025版と2023版の名前の違い)
- [構文](#構文)
- [怪しい構文](#怪しい構文)
  
## これが残っている経緯
もともとo-ukiの旧アカウントで作られていてこのアカウントに共有されていましたが、o-ukiの旧アカウントが消えたため、こちらにのみ残っている状態となりました。

## 現在の状況
2年前の作っていた当時のやり取りを見ましたが、for文の作り方がわかりませんでした。
誰か助けてください。
ちなみに開発者も覚えてません（詰み）

## 2025版と2023版の名前の違い
2025年版(最新)はFa(c_e)Script、2023年版(旧)はFa(c∀e)Scriptと区別できます。

## 構文
/('n')	数値の値。nの箇所には任意の値を。	/('7')


/('<Text')	文字の値。Textの箇所には任意の値を。	/('<Hello!')


(°O°)Val	値を出力する。Valの箇所に入力した値が出力されます。	(°O°)/('<foo!')


(-#-)Text	何もない。Textの箇所には自由に文字を書いて、メモとして使ったりしよう。	(-#-)Banana! Banana!


\\(°∀°)q(Name)pVal	変数を作る。Nameの箇所には変数名、Valの箇所には代入する値を。	\\(°∀°)q(delicious)p/('<banana')


:Dd(Name)bVal	変数の再代入をする。Nameの箇所には変数名、Valの箇所には再代入する値を。	:Dd(delicious)b/('<apple')


d('Name')b	変数内の値を使う。Nameの箇所には使う変数名を。	d('delicious')b


=(x+=+y)	足し算。xとyにはそれぞれ任意の値を。	=(/('6')+=+/('3'))


=(x-=-y)	引き算。xとyにはそれぞれ任意の値を。	=(/('6')-=-/('3'))


=(x*=*y)	掛け算。xとyにはそれぞれ任意の値を。	=(/('6')*=*/('3'))


=(x/=/y)	割り算。xとyにはそれぞれ任意の値を。スラッシュだらけで混乱するよね。	=(/('6')/=//('3'))


(O.O)Val	小数点切り捨て。xには任意の値を。	(O.O)/('2.5')


(*n*)x?=?y	乱数。xには最小値、yには最大値を。	(*n*)/('1')?=?/('3')


## 怪しい構文

Fa(c∀e)ScriptEditorの説明欄には書かれていないがFa(c∀e)Scriptのマニュアルには書かれているので謎です。


(((° Д°)(x))　for文。xには回数を。ソースコード内でも発見できたのでほぼ確実に存在する。


(((;;° Д°))(x)　無限ループ。xには実行間隔を。上と同じ状況。


('?')d(条件式)　if文。動作確認済み。


(;oДp) x　一時停止。xには間隔を。古い動画を見る限りミリ秒指定だと推測される。リリースされたと書いてあったので確実に存在する。ソースコードでも確認済み


\\(° Д°)/q(関数名)p\\(引数)/　関数作成。構文は誕生したが実装されていないと思われる。

q('関数名')p\\(引数)/　関数実行。上と同じ状況。

(・-・)?説明　インプット。ソースコードを見た感じ存在する。

iVal　インプットをしたときに値が代入される変数。上と同じ状況。

比較演算((x=_=y),(x>_>y),(x<_<y))　条件式。動作確認済み。
