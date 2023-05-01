class MessagesController < ApplicationController
    def index
        messages = Message.all

        if messages
            render json: { data: messages }
        end
    end

    def show
        messages = Message.all
        message = messages[rand(messages.length - 1)]

        if message
            render json: { data: message }
        end
    end
end
