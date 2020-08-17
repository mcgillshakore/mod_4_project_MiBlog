class CreateBlogs < ActiveRecord::Migration[6.0]
  def change
    create_table :blogs do |t|
      t.integer :user_id
      t.string :image_url
      t.string :title
      t.string :content

      t.timestamps
    end
  end
end
