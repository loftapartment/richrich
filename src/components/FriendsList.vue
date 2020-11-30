<template>
    <div class="friends-list">
        <v-card class="mx-auto">
            <v-toolbar color="pink" dark>
                <v-toolbar-title>Friends</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>mdi-account-plus-outline</v-icon>
                </v-btn>
            </v-toolbar>
            <v-list three-line>
                <template v-for="(friend, index) in friends">
                    <v-list-item :key="friend.title" @click="$router.push({ name: 'Profile', params: { id: friend.id } }, () => {})">
                        <v-list-item-avatar>
                            <v-img :src="friend.avatar"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>{{ friend.name }}</v-list-item-title>
                            <v-list-item-subtitle>NTD {{ friend.amount_owed }}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider v-if="index < friends.length - 1" :key="index" inset></v-divider>
                </template>
            </v-list>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {
        friends() {
            return this.$store.state.users;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>