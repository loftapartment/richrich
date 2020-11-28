<template>
    <div class="home">
        <h1>Home</h1>
        <div class="dashboard">
            <FriendsList class="dashboard__friends" />
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import FriendsList from '@/components/FriendsList';

export default {
    name: 'Home',
    components: {
        FriendsList,
    },
};
</script>

<style lang="scss" scoped>
.dashboard {
    display: flex;

    &__friends {
        flex: 1;
    }
}
</style>
