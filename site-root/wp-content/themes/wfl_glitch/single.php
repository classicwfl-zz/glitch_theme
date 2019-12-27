<?php get_header(); ?>
<main id="content">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <div class="glitch_container">
        <header class="glitch_column glitch_postHead<?php 
            if ( has_post_thumbnail() ) {
                ?>" style="background-image: url('<?php echo get_the_post_thumbnail_url( get_the_ID(), 'full' ); ?>');"<?php
            } else {
                echo ' glitch_noPhoto"';
            }
        ?>>
            <h1><?php the_title(); ?></h1>

            <div class="glitch_metaInfo">
                <h3>Categories:</h3>
                <ul>
                <?php
                $categories = wp_get_post_categories( get_the_ID() );
                foreach($categories as $c){
                    $cat = get_category( $c );
                    //get the name of the category
                    $cat_id = get_cat_ID( $cat->name );
                    //make a list item containing a link to the category
                    echo '<li><a href="'.get_category_link($cat_id).'">'.$cat->name.'</a></li>';
                }
                ?>
                </ul>

                <p>Date: <?php echo get_the_date(); ?></p>
            </div>
        </header>
        <div class="glitch_column">
            <?php 

                $video_url = get_field("video_url");
                if ($video_url) {
                    ?><div class="ytvideo"><?php echo wp_oembed_get($video_url); ?></div><?php
                }

                $content = apply_filters( 'the_content', get_the_content() );
                echo $content;
            ?>
        </div>
    </div>

    <div class="glitch_container">
        <footer class="footer glitch_postFooter">
            <?php get_template_part( 'nav', 'below-single' ); ?>
        </footer>
    </div>

    <?php endwhile; endif; ?>

    
</main>

<?php get_footer(); ?>