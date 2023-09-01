export declare namespace iParams {
    type iAddNewChat = {
        title: string
    }

    type iDeleteChat = {
        chatId: number
    }

    type iAddUserToChat = {
        users: number[],
        chatId: number
    }

    type iDeleteUsersFromChat = {
        users: number[],
        chatId: number
    }
}
