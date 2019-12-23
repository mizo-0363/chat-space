## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name              |string|null: false, unique: true, index: true|
|email             |string|null: false, default: ""|
|encrypted_password|string|null: false, default: ""|

### Association
- has_many :group_users
- has_many :groups, through: :group_users
- has_many :messages

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :group_users
- has_many :users, through: :group_users
- has_many :messages

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|content|string|---|
|image  |string|---|
|group|references|null: false, foreign_key: true|
|user |references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user