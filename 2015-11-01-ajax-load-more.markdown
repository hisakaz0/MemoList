title: ajax load more
==========
date: 2015-11-01 00:37
tags: []
categories: []
- - -

### pagelessを使わないajaxで新しい/古いpostを取ってくる(良くわからないものはやめとく)

buttonを使って __Get More Posts!!!__(今回はuser).
更新や古いpostがないときのアクションは書いてないですので,ｶﾞﾝﾊﾞﾘﾏｽ!!!!

__dbの整理__
```
volume: 20
order : desc

     . . .
     |  may newer  |
1000 +-------------+
     | first load  |
 981 +-------------+ last_id
 980 +-------------+ last_id - 1
     | second load |
 961 +-------------+ last_id - volume
```
最新のポストが一番欲しいから, `GET MORE!!!`を押すと古いポストが得られる感じに.
更新も同じように.
__controller.rb__
```ruby
def index
  volume = 20
  if ( params[:first_id] != nil ) # !== nil はエラーだからねっ!!!!
    more_older # call more_older method
  elsif ( params[:last_id] != nil )
    more_newer
  else
    @users = User.order('id desc').limit(volume)
  end
end

def more_users
  volume = 20
  from   = params[:last_id].to_i - volume
  to     = params[:last_id].to_i - 1
  @users = User.order('id desc').where(id: [from..to])
  render 'users/more_older.js.erb'
end

def more_newer
  volume = 20
  id     = params[:last_id]
  @users = User.where("id > ?", id).limit(volume)
  @users = @users.reverse!
  render 'users/more_newer.js.erb'
end
```    

__more_older.js.erb__
```javascript
$('ajax-response-wrapper').append("<%= j render partial: 'posts', collections: @users %>")
```

__more_newer.js.erb__
```javascript
$('ajax-response-wrapper').prepend... /*ry*/
```

__\_posts.html.erb__
```eruby
<% @users.each do |u| %>
  <%= u.name %>
<% end %>
```

__index.html.erb__
```html
<%= form_tag({controller: 'users', action: 'index'}, remote: true, method: "GET") do %>
  <%= hidden_field_tag "first_id" %> <!-- or last_id -->
  <%= button_tag "More Older", id: "more_older" %> <!-- or more_newer -->
<% end %>
```

__idを更新するやつー__
```javascript
fuction setLastId() {
  // ajax-response-wrapper内のtr要素の最初, そのidを取得
  var last_id = $('#ajax-response-wrapper tr:first-child').attr('id');
  // hidden input element to post last_id
  var ele = document.getElementById('last_id');
  // set value
  ele.setAttribute('value', last_id);
}

var more_newer_button = document.getElementById('more_newer');
// I don't know how to use third argument
// ボタンを押した時にsetLastIdはfireする
more_newer_button.addEventListener('click', setLastId, false);
```
}

- [モデル(model) - - Railsドキュメント](http://railsdoc.com/model#%E5%8F%96%E5%BE%97%E3%81%97%E3%81%9F%E5%80%A4%E3%82%92%E4%B8%A6%E3%81%B3%E6%9B%BF%E3%81%88(order/reorder))
- [Railsでよく使うけと忘れてしまいがちなテクニックたち | 田村倉庫](http://www.tamurasouko.com/?p=1909)
- [Rails - ActiveRecordでBETWEEN - Qiita](http://qiita.com/umanoda/items/b7e2eeee52712f289f6e)
- [Ruby on RailsのAjax処理のおさらい - Qiita](http://qiita.com/ka215/items/dfa602f1ccc652cf2888)


### pageless jquery plugin

endless scrollを実現する奴(エンドレススクロールに関しては色々言い方があって,ちょっとずつ意味が違うと思う)

__使用例__

```javascript
$('#ajax-response-wrapper').pageless({
  url: '/users',
  method: 'GET',
  lodingMsg: 'Now loading'
});
```
