<template>
    <div class="home">
        <div class="dashboard">
            <FriendsList class="dashboard__friends" />
            <div class="dashboard__profile">
                <router-view></router-view>
            </div>
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
    gap: 10px;

    &__friends,
    &__profile {
        flex: 1;
    }
}
</style>
