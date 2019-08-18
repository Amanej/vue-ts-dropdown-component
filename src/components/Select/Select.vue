<template>
    <div class="dropdown" :class="{'showOptions': show}">
        
        <p v-if="!selectedOption.name" class="selected" @click="toggleOptions">Choose an item</p>
        <p v-if="selectedOption.name" class="selected itemSelected" @click="toggleOptions">{{selectedOption.name}}</p>

        <ul>
            <li 
                v-for="option in options" 
                :key="option.id"
                @click="selectOption(option)"
            >{{option.name}}</li>
        </ul>
    </div>
</template>

<script src="./Select.ts" lang="ts"></script>

<style scoped lang="scss">
div.dropdown {
    width: 400px;
    p.selected {
        background: red;
        padding: 8px;
        border-radius: 4px;
        box-shadow: 1px 1px 2px #0000007a;
    }
    ul {
        display: none;
        list-style: none;
        padding-left: 0;
        li {
            padding: 8px;
            -webkit-box-shadow: 1px 1px 2px #0000007a;
            box-shadow: 0px 0px 2px #0000007a;
            border: 1px solid #a0a0a0;
            border-bottom: none;
            box-shadow: none;
            margin-bottom: 0;
            &:last-child {
                border-bottom: 1px solid #a0a0a0;
            }
        }
    }
    &.showOptions {
        ul {
            display: block;
        }
    }
}
</style>