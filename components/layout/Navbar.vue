<template>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <nuxt-link class="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">Remlex Tech</div>
        </nuxt-link>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
            <nuxt-link class="nav-link" :to="({name: 'dashboard'})">
                <i class="fas fa-fw fa-chart-area"></i>
                <span>Dashboard</span>
            </nuxt-link>
        </li>
        <li class="nav-item">
            <nuxt-link class="nav-link" :to="({name: 'dashboard'})">
                <i class="fas fa-fw fa-users"></i>
                <span>All Lists</span>
            </nuxt-link>
        </li>
    </ul>
</template>

<script>
export default {
    
}
</script>