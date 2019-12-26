<!DOCTYPE html>

<?php

    global $glitch_pageType;
    $glitch_postType = get_post_type();

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

        <p>./<a href="/art-portfolio/">art-portfolio</a>:</p>
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
            <h2 class="glitch_termType glitch_termHead">guest@classicwfl.com:<a href="<?php echo get_site_url(); ?>">~</a><?php
        
                if ( is_single()) {
                    
                    switch ($glitch_postType) {
                        case "articles":
                            echo '/<a href="' . get_site_url() . '/articles">articles</a>';
                        break;
                        case "portfolio":
                            echo '/<a href="' . get_site_url() . '/art-portfolio">art-portfolio</a>';
                        break;
                        case "photography":
                            echo '/<a href="' . get_site_url() . '/photography-by-wfl">photography</a>';
                        break;
                        case "records":
                            echo '/<a href="' . get_site_url() . '/records">records</a>';
                        break;
                        case "merch":
                            echo '/<a href="' . get_site_url() . '/merchandise">merch</a>';
                        break;
                        case "video":
                            echo '/<a href="' . get_site_url() . '/video">video</a>';
                        break;
                    }
                    
                } elseif ( $glitch_pageType == "portfolio" ) {
                    echo '/<a href="' . get_site_url() . '/art-portfolio">art-portfolio</a>';
                } elseif ( $glitch_pageType == "photography" ) {
                        echo '/<a href="' . get_site_url() . '/photography-by-wfl">photography</a>';
                } elseif ( $glitch_pageType == "merch" ) {
                    echo '/<a href="' . get_site_url() . '/merchandise">merch</a>';
                } elseif ( $glitch_pageType == "records" ) {
                    echo '/<a href="' . get_site_url() . '/records">music</a>';
                } elseif ( $glitch_pageType == "articles" ) {
                    echo '/<a href="' . get_site_url() . '/articles">articles</a>';
                }
            
            ?>$ <?php
        
                if (is_single()) {
                    $term_title = glitch_convertToTermType(get_the_title());
                    echo 'glitchRender ' . $term_title . '</a>';

                    switch ($glitch_postType) {
                        case "post":
                            echo '.odf';
                        break;
                        case "portfolio":
                            echo '.jpg';
                        break;
                        case "photography":
                            echo '.jpg';
                        break;
                        case "records":
                            echo '.ogg';
                        break;
                        case "merch":
                            echo '.pdf';
                        break;
                        case "video":
                            echo '.mp4';
                        break;
                    }
                } elseif ( $glitch_pageType == "articles" ) { 
                    echo 'ls -l | less';
                } elseif ( $glitch_pageType == "portfolio" || $glitch_pageType == "photography" || $glitch_pageType == "merch" || $glitch_pageType == "records" ) {
                    echo 'ls -l | glitchRenderImages';
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