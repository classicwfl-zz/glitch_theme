<!DOCTYPE html>

<?php

    global $glitch_pageType;

    if(!isset($_COOKIE["darkmode"])){
        $cookie_name = "darkmode";
        $cookie_value = "0";
        setcookie($cookie_name, $cookie_value, time() + (86400 * 365), "/", "localhost:5010"); // 86400 = 1 day
    }

    if ($_COOKIE["darkmode"]) {
        $extraBodyClass = "d4rkm0d3";
    } else {
        $extraBodyClass = "";
    }
    
?>

<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width" />
    <?php wp_head(); ?>
</head>

<body <?php body_class( $extraBodyClass ); ?>>

    <div class="glitch_navContainer">
        <h2 class="glitch_termType glitch_termHead">guest@classicwfl.com:<a href="/">~</a>$ ls -R ~/</h2>
        <p>./<a href="/">home</a>:</p>
        <?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>

        <p>./<a href="/articles">articles</a>:</p>
        <!-- Latest Posts -->
        <ul>
        <?php $latest_posts = new WP_Query( 'posts_per_page=1' ); 
        while ($latest_posts -> have_posts()) : $latest_posts -> the_post(); ?>
        
        <li><a href="<?php the_permalink() ?>"><?php 
            $post_title = glitch_convertToTermType(get_the_title());
            echo $post_title;
        ?></a>.odf</li>
        <?php 
            endwhile;
            wp_reset_postdata();
        ?>
        </ul>

        <p>./<a href="/photography-by-wfl/">photography</a>:</p>
        <!-- Latest Photo -->
        <ul>
        <?php 
        $args = array(
            'post_type'              => array( 'photography' ),
            'posts_per_page'         => '1',
        );

        $latest_photo = new WP_Query( $args ); 
        while ($latest_photo -> have_posts()) : $latest_photo -> the_post(); ?>
        
        <li><a href="<?php the_permalink() ?>"><?php 
            $post_title = glitch_convertToTermType(get_the_title());
            echo $post_title;
        ?></a>.jpg</li>
        <?php 
            endwhile;
            wp_reset_postdata();
        ?>
        </ul>

        <p>./<a href="/art-portfolio/">art</a>:</p>
        <!-- Latest Art -->
        <ul>
        <?php 
        $args = array(
            'post_type'              => array( 'portfolio' ),
            'posts_per_page'         => '1',
        );

        $latest_photo = new WP_Query( $args ); 
        while ($latest_photo -> have_posts()) : $latest_photo -> the_post(); ?>
        
        <li><a href="<?php the_permalink() ?>"><?php 
            $post_title = glitch_convertToTermType(get_the_title());
            echo $post_title;
        ?></a>.jpg</li>
        <?php 
            endwhile;
            wp_reset_postdata();
        ?>
        </ul>

        <p>./<a href="/records/">music</a>:</p>
        <!-- Latest Record -->
        <ul>
        <?php 
        $args = array(
            'post_type'              => array( 'records' ),
            'posts_per_page'         => '1',
        );

        $latest_photo = new WP_Query( $args ); 
        while ($latest_photo -> have_posts()) : $latest_photo -> the_post(); ?>
        
        <li><a href="<?php the_permalink() ?>"><?php 
            $post_title = glitch_convertToTermType(get_the_title());
            echo $post_title;
        ?></a>.ogg</li>
        <?php 
            endwhile;
            wp_reset_postdata();
        ?>
        </ul>

        <p>./<a href="/merchandise/">merch</a>:</p>
        <!-- Latest Merch -->
        <ul>
        <?php 
        $args = array(
            'post_type'              => array( 'merch' ),
            'posts_per_page'         => '1',
        );

        $latest_photo = new WP_Query( $args ); 
        while ($latest_photo -> have_posts()) : $latest_photo -> the_post(); ?>
        
        <li><a href="<?php the_permalink() ?>"><?php 
            $post_title = glitch_convertToTermType(get_the_title());
            echo $post_title;
        ?></a>.pdf</li>
        <?php 
            endwhile;
            wp_reset_postdata();
        ?>
        </ul>
    </div>

    <div id="wrapper" class="hfeed">
        <header id="header">
            <h2 class="glitch_termType glitch_termHead">guest@classicwfl.com:<a href="/">~</a><?php
        
                if ( is_single() || $glitch_pageType == "articles" ) {
                    echo '/<a href="/articles">articles</a>';
                }
            
            ?>$ <?php
        
                if (is_single()) {
                    $term_title = glitch_convertToTermType(get_the_title());
                    echo 'glitchRenderDoc ' . $term_title . '</a>.odf';
                } elseif ( $glitch_pageType == "articles" ) { 
                    echo 'ls -l | less';
                } else {
                    echo './intro.sh';
                }
            
            ?></h2>

            <button id="glitch_toggleNav" class="glitch_navButton">
                <div></div>
                <div></div>
                <div></div>
            </button>
            <button id="glitch_toggleDarkMode" class="glitch_darkModeToggle">Switch Color Mode</button>
        </header>
        <div id="container">