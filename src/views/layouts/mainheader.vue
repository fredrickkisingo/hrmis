<template>
  <div>
    <header>

      <!-- Header -->
      <div class="header">
      
       <header-logo />
        
       <toggle />

       <headerlist />
        
       <a id="mobile_btn" class="mobile_btn" href="#sidebar"><i class="fa fa-bars"></i></a>
        
       <!-- Header Menu -->
        
       <ul class="nav user-menu">
        
       <search />
        
       <notifications />
        
       <headerend />

       </ul>

       <!-- Mobile Menu -->
        <div class="dropdown mobile-user-menu">
          <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
          <div class="dropdown-menu dropdown-menu-right">
            <router-link class="dropdown-item" to="/profile">My Profile</router-link>
            <router-link class="dropdown-item" to="/settings">Settings</router-link>
            <router-link class="dropdown-item" to="/login">Logout</router-link>
          </div>
        </div>
        <!-- /Mobile Menu -->

      </div>
      <!-- /Header -->
    </header>
  </div>
</template>
<script>
  export default {
    mounted() {
       // Variables declarations
    var $wrapper = $('.main-wrapper');
      $('body').append('<div class="sidebar-overlay"></div>');
    $(document).on('click', '#mobile_btn', function() {
    $wrapper.toggleClass('slide-nav');
    $('.sidebar-overlay').toggleClass('opened');
    $('html').addClass('menu-opened');
    $('#task_window').removeClass('opened');
    return false;
    });
    $(".sidebar-overlay").on("click", function () {
    $('html').removeClass('menu-opened');
    $(this).removeClass('opened');
    $wrapper.removeClass('slide-nav');
    $('.sidebar-overlay').removeClass('opened');
    $('#task_window').removeClass('opened');
    });
      $(document).on('click', '.top-nav-search .responsive-search', function() {
    $('.top-nav-search').toggleClass('active');
    });
    $('.sidebar-menu ul li:not(.submenu) a').click(function () {
        $("html").removeClass('menu-opened');
        $(".sidebar-overlay").removeClass('opened');
    });
    $(document).on('click', '#toggle_btn', function() {
    if($('body').hasClass('mini-sidebar')) {
      $('body').removeClass('mini-sidebar');
      $('.subdrop + ul').slideDown();
    } else {
      $('body').addClass('mini-sidebar');
      $('.subdrop + ul').slideUp();
    }
    return false;
  });
  $(document).on('mouseover', function(e) {
    e.stopPropagation();
    if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
      var targ = $(e.target).closest('.sidebar').length;
      if(targ) {
        $('body').addClass('expand-menu');
        $('.subdrop + ul').slideDown();
      } else {
        $('body').removeClass('expand-menu');
        $('.subdrop + ul').slideUp();
      }
      return false;
    }
  });
    }
  };
</script>