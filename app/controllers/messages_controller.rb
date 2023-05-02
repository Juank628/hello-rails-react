class MessagesController < ApplicationController
  def index
    messages = Message.all

    return unless messages

    render json: { data: messages }
  end

  def show
    messages = Message.all
    message = messages[rand(messages.length - 1)]

    return unless message

    render json: { data: message }
  end
end
