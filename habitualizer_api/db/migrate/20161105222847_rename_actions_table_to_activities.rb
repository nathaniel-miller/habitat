class RenameActionsTableToActivities < ActiveRecord::Migration[5.0]
  def change
    rename_table :actions, :activities
  end
end
