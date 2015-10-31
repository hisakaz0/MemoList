title: rails devise
==========
date: 2015-11-01 00:18
tags: []
categories: []
- - -

### Rails::gem::Devise::EnableOriginalView

Deviseではデフォルトの場合、プリセットのビューファイルが使用される。
けれども、みためが要求される場合は既製品なんて使えません。
そこで、カスタムなビューを作りましょう。

```bash
# original viewを有効に
vi config/initializers/devise.rb
config.scoped_views = true
rails g devise:views <model> # 今回はmodelはusersにしました
```

- [Ruby - DeviseでViewをカスタマイズする - Qiita](http://qiita.com/lassy423/items/c364e3746975c83189aa)


### Rails Devise Msg

railsのflash msgとは別にdeviseでerror msgのhelperが用意されている.
superを使うとレコードが更新出来なかったので上のflashを使いました.
- [Rails - devise専用エラーをbootstrap3のエラーと同様に表示する - Qiita](http://qiita.com/inodev/items/d61539b86968f1274ef8)

### update with password
deviseでpasswordを使って更新する場合は`update_with_password`ってヘルパーさんを使えば良いらしい.
けれども, 上手くイカなかったから`valid_password?`ってのを使ってみた.
引数は`:current_password`,`:password_confirm`,`:password`のいずれかだった気がする.
返り値はbooleanだからあとはテキトウにやってくれ.

```ruby
  def update
    @user = User.find_by_id(current_user)
    if @user.valid_password?(params[:user][:current_password])
      @user.update(user_params)
      redirect_to root_path
    else
      redirect_to edit_user_registration_path, alert: 'Current password is invalid!'
    end
    # super
  end
```

- [Method: Devise::Models::DatabaseAuthenticatable#update_with_password — Documentation for plataformatec/devise (master)](http://www.rubydoc.info/github/plataformatec/devise/Devise%2FModels%2FDatabaseAuthenticatable%3Aupdate_with_password)
- [deviseのユーザーupdateで入力があった場合のみpasswordを更新する](http://fuzzydevelopment.net/devise-update-655.html)


### devise error msg

sign-in(log-in, session#new)でのエラーメッセージは
`notice`と`alert`で管理されている.

sign-up(registration#new)でのエラーメッセージは
`devise_error_messageses!`で管理されている.

- [Override devise_error_messages! for views · plataformatec/devise Wiki](https://github.com/plataformatec/devise/wiki/Override-devise_error_messages!-for-views)

どうしてか, messagesの中に同じの2つあって困る...

### cancel my account
```html
<h3>Cancel my account</h3>

<p>Unhappy?</p>
<%= button_to "Cancel my account", registration_path(resource_name),
   data: { confirm: "Are you sure?" }, method: :delete, class:"mdl-button mdl-js-button" %>
```
