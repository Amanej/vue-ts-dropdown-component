<template>
    <div>
        <p>Here will be the select component</p>
        <ul>
            <li v-for="option in options" :key="option.id">{{option.name}}</li>
        </ul>
    </div>
</template>

<script src="./Select.ts" lang="ts"></script>