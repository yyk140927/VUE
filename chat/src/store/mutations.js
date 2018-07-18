import Vue from 'vue'
import * as types from './mutation-types'

export default {
    [types.RECEIVE_ALL](state, { messages }) {
        let latestMessage;
        messages.forEach(message => {
                // 如果没有则创建一个新的会话
                if (!state.threads[message.threadID]) {
                    createThread(state, message.threadID, message.threadName)
                }
                // 标记未读消息
                if (!latestMessage || message.timestamp > latestMessage.timestamp) {
                    latestMessage = message
                }
                // 添加消息
                addMessage(state, message)
            })
            // 将初始会话设置为带有最新消息的会话
        setCurrentThread(state, latestMessage.threadID)
    },

    [types.RECEIVE_MESSAGE](state, { message }) {
        addMessage(state, message)
    },

    [types.SWITCH_THREAD](state, { id }) {
        setCurrentThread(state, id)
    }
}

function createThread(state, id, name) {
    Vue.set(state.threads, id, {
        id,
        name,
        messages: [],
        lastMessage: null
    })
}

function addMessage(state, message) {
    // 添加消息之前添加一个未读标记
    message.isRead = message.threadID === state.currentThreadID
        // 添加到会话
    const thread = state.threads[message.threadID]
    if (!thread.messages.some(id => id === message.id)) {
        thread.messages.push(message.id)
        thread.lastMessage = message
    }
    // 添加到消息队列
    Vue.set(state.messages, message.id, message)
}

function setCurrentThread(state, id) {
    state.currentThreadID = id
    if (!state.threads[id]) {
        debugger
    }
    // 标记为已读
    state.threads[id].lastMessage.isRead = true
}