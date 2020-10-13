<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld :msg="msg" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
    components: {
        HelloWorld,
    },
})
class Home extends Vue {
    private msg: string = 'Welcome to Your Vue.js + TypeScript App';
}

export default Home;
</script>
