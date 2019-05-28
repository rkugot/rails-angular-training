class CreateExpenses < ActiveRecord::Migration[5.2]
  def change
    create_table :expenses do |t|
      t.string :date
      t.string :title
      t.string :category
      t.decimal :amount, precision: 5, scale: 2
      t.string :currency
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
