<template>
    <div id="app">
        <b-navbar
            class="app__header"
            toggleable="lg"
            type="dark"
            variant="info"
        >
            <b-navbar-brand
                to="/"
                class="header__brand"
            >
                RichRich
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse
                id="nav-collapse"
                is-nav
                class="header__collapse"
            >
                <b-navbar-nav class="header__collapse__link">
                    <b-nav-item to="/">
                        Home
                    </b-nav-item>

                    <b-nav-item to="/about">
                        About
                    </b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown
                        text="Lang"
                        right
                    >
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template v-slot:button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <router-view class="app__page" />
    </div>
</template>

<style lang="scss">
#app {
    display: flex;
    flex-direction: column;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100vh;
}

.app__page {
    flex: auto;
    overflow: auto;
}
</style>
