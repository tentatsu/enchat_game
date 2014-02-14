enchat_game
===========

enchat.jsを使ったゲームをなんとなーく公開中
暇な人、このゲームを訳わからん方向にグレードアップして行きませんか～？
基本的に著作権フリーなのでどういう風に使ってもらっても構いません。
ただ、masterへのpushはやめてね♥

branch作成→プルリクエスト頂ければバグ無ければ100%反映しまーすｗ


# githubを使った開発

## githubの準備
  - githubアカウントを作る 
  - SSHキーを設定する
  - アイコンを付けよう！

## SourceTreeをインストール
 - インストール
 - [http://www.sourcetreeapp.com/](http://www.sourcetreeapp.com/)
 - [http://kawaz.hatenadiary.jp/entry/2013/04/03/002509](http://kawaz.hatenadiary.jp/entry/2013/04/03/002509)
 - [http://qiita.com/booyan@github/private/10d571cea349d7d5bd07](http://qiita.com/booyan@github/private/10d571cea349d7d5bd07)

## SourceTreeの設定必ずやること！
  - ツール＞オプション＞全般  
    + SSHクライアントの設定＞SSHキーに秘密鍵を設定する  
  - ツール＞オプション＞git  
　  + プッシュするブランチを「current」に設定する  

## 開発の簡単な流れ

 **githubでやる**

 1. issueを発行する

 **SourceTreeでやる**

 1. 対象のリポジトリをcloneする  
 （左上のボタン）
 1. 開発する内容が分かりやすい名前でbranchを作成する  
 （issue_#5_professional_bugfix_branchとか）
 1. 上記で作ったブランチをダブルクリックする
 1. 開発する
 1. git addする  
 （ファイルステータスタブを押して対象を上にドラッグ＆ドロップ）
 1. git commitする  
 (左上のコミットボタン)
 1. git pushする  
 (右上のプッシュ↑ボタン)
 1. プルリクエストする  
 (ブランチを右クリックでメニュー一番下にある「プルリクエストする」を選ぶ)

**githubでやる（勝手に移動します）**

 1. プルリクエストにissue番号を書いて、補足があればそれも書く。
 1. あとは、そのリポジトリ管理者に連絡してください。大声とかで。




