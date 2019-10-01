<template>
        <header class="header-section">
      <div class="container ">
        <div class="header-warp">
          <!-- Site Logo -->
          <a href="defi.wtf" class="site-logo">
            <img src="src/assets/img/logo.png" alt="" />
          </a>
          <!-- Site Menu -->
          <div class="responsive-switch"><i class="fa fa-bars"></i></div>
          <nav class="site-menu">
            <div class="sm-close"><i class="ti-close"></i></div>
            <ul class="menu-list">
              <li><a href="/#home">Home</a></li>
              <li><a href="/#Agenda">Agenda</a></li>
              <li><a href="/#billboard">Billboard</a></li>
              <li><a href="/#location">Location</a></li>
              <li><router-link to="/about">Vote</router-link> </li>
              <li><router-link to="/billboard">Billboard</router-link></li>
              <li>
              <router-link to="/stuffs">Stuffs</router-link>   
              </li>
              <li>
                <router-link to="/login">Login</router-link>          
                </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
</template>