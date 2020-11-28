<template>
    <div class="home">
        <h1>Home</h1>
        <FriendsList />
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
