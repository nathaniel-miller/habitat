class Habit < ApplicationRecord
  belongs_to :user
  has_many :cues
  has_many :experiments
  has_one :reward

  attr_accessor :cues_attributes, :rewards_attributes, :activities_attributes

end
