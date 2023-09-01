export type User = {
    id: number,
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    avatar: string
    email: string,
    phone: string
}

export type ChatUser = {
    first_name: string,
    second_name: string,
    display_name: string,
    login: string,
    avatar: string,
}

export type LastMessage = {
    content: string,
    id: number,
    time: string,
    user: ChatUser
}

export type ChatListItem = {
    avatar: string,
    created_by: number,
    id: number,
    last_message: LastMessage,
    title: string,
    unread_count: number
}

export type Message = {
    id: number,
    user_id: number,
    chat_id: number,
    type: string,
    time: string,
    content: string,
    is_read: boolean,
    file: string
}
