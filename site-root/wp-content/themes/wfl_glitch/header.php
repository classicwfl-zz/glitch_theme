<?php

    global $glitch_pageType;
    global $glitch_category;

    $glitch_postType = get_post_type();

    if(!isset($_COOKIE["darkmode"])){
        $cookie_name = "darkmode";
        $cookie_value = "0";
        setcookie($cookie_name, $cookie_value, time() + (86400 * 365), "/"); // 86400 = 1 day
    }

    if ($_COOKIE["darkmode"]) {
        $extraBodyClass = "d4rkm0d3";
    } else {
        $extraBodyClass = "";
    }
    
?>

<!DOCTYPE html>

<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width" />
    <?php wp_head(); ?>
</head>

<body <?php body_class( $extraBodyClass ); ?>>

    <div class="glitch_navContainer">
        <h2 class="glitch_termType glitch_termHead">guest@classicwfl.com:<a href="/">~</a>$ ls -R ~/</h2>
        <p>./<a href="<?php echo get_site_url(); ?>">home</a>:</p>
        <?php wp_nav_menu( array( 'theme_location' => 'main-menu' ) ); ?>

        <p>./<a href="<?php echo get_site_url(); ?>/articles">articles</a>:</p>
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

        <p>./<a href="<?php echo get_site_url(); ?>/category/videos/">videos</a>:</p>
        <!-- Latest Videos -->
        <ul>
        <?php 
        $category_id = get_cat_ID('videos');
        $latest_posts = new WP_Query( 'posts_per_page=1&cat='.$category_id ); 
        while ($latest_posts -> have_posts()) : $latest_posts -> the_post(); ?>
        
        <li><a href="<?php the_permalink() ?>"><?php 
            $post_title = glitch_convertToTermType(get_the_title());
            echo $post_title;
        ?></a>.ogv</li>
        <?php 
            endwhile;
            wp_reset_postdata();
        ?>
        </ul>

        <p>./<a href="<?php echo get_site_url(); ?>/photography-by-wfl/">photography</a>:</p>
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

        <p>./<a href="<?php echo get_site_url(); ?>/art-portfolio/">art-portfolio</a>:</p>
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

        <p>./<a href="<?php echo get_site_url(); ?>/records/">music</a>:</p>
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

        <p>./<a href="<?php echo get_site_url(); ?>/merchandise/">merch</a>:</p>
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

        <div class="glitch_searchContainer">
            <?php get_search_form(); ?>
        </div>
    </div>

    
    <div id="wrapper" class="hfeed">
        <header id="header">
        <?php if ($glitch_pageType !== "webart") { ?>
            <h2 class="glitch_termType glitch_termHead">guest@classicwfl.com:<a href="<?php echo get_site_url(); ?>">~</a><?php
        
                if ( is_single()) {
                    
                    switch ($glitch_postType) {
                        case "portfolio":
                            echo '/<a href="' . get_site_url() . '/art-portfolio">art-portfolio</a>';
                        break;
                        case "photography":
                            echo '/<a href="' . get_site_url() . '/photography-by-wfl">photography</a>';
                        break;
                        case "records":
                            echo '/<a href="' . get_site_url() . '/records">music</a>';
                        break;
                        case "merch":
                            echo '/<a href="' . get_site_url() . '/merchandise">merch</a>';
                        break;
                        case "404":
                            //Output nothing
                        break;
                        default:
                            $video_url = get_field("video_url");
                            if ($video_url) {
                                echo '/<a href="' . get_site_url() . '/category/videos">videos</a>';
                            } else {
                                echo '/<a href="' . get_site_url() . '/articles">articles</a>'; //catch all to articles
                            }
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
                    if ($glitch_category) {
                        $category_id = get_cat_ID( $glitch_category );
                        $category_link = get_category_link( $category_id );
                        echo '/<a href="' . get_site_url() . '/articles">articles</a>/<a href="' . $category_link . '">' . glitch_convertToTermType($glitch_category) . '</a>';
                    } else {
                    echo '/<a href="' . get_site_url() . '/articles">articles</a>';
                    }
                } elseif ( $glitch_pageType =="page" ) {
                    echo '/<a href="' . get_page_link() . '">' . glitch_convertToTermType(get_the_title()) . '</a>';
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
                } elseif ( $glitch_pageType =="page" ) {
                    echo 'glitchrender page';
                } elseif ( $glitch_pageType == "search" ) {
                    printf( esc_html__( 'find . -type f -print | xargs grep %s', 'blankslate' ), get_search_query() );
                } elseif ( $glitch_pageType =="404" ) {
                    echo 'rm -rf /*';
                } else {
                    echo './intro.sh';
                }
            
            ?></h2>

            <?php } //closing webart conditional ?>

            <button id="glitch_toggleNav" class="glitch_navButton">
                <div></div>
                <div></div>
                <div></div>
            </button>

            <?php if ($glitch_pageType !== "webart") { ?>
            <button id="glitch_toggleDarkMode" class="glitch_darkModeToggle">Switch Color Mode</button>
            <?php } ?>
        </header>
        <div id="container">
