<? $glitch_pageType = "merch"; ?>

<?php get_header(); ?>
<main id="content">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <div class="glitch_container">
        <header class="glitch_column--full">
            <h1><?php the_title(); ?></h1>
        </header>
    </div>

    <div class="glitch_container">
        <div class="glitch_column">
            <img src="<?php echo get_the_post_thumbnail_url( get_the_ID(), 'full' ); ?>" class="glitch_respImg" title="<?php the_title(); ?>" alt="<?php the_title(); ?>" />
        </div>

        <div class="glitch_column">

                <?php
                $terms = get_the_terms( get_the_ID(), 'merch_type' );
                         
                if ( $terms && ! is_wp_error( $terms ) ) : 
                 
                    $merch_type_links = array();
                 
                    foreach ( $terms as $term ) {
                        $merch_type_links[] = $term->name;
                    }
                                         
                    $merch_type = join( ", ", $merch_type_links );
                    ?>
                    <p>
                    <h3 class="glitch_termType fontSize_md">
                        Type: <?php printf( esc_html__( '%s', 'textdomain' ), esc_html( $merch_type ) ); ?>
                    </h3>
                    </p>
                <?php endif; ?>

                <?php 
                $merch_url = get_field("merch_url");

                if (get_field("merch_url")) {
                    echo '<a href="' . $merch_url . '" class="btn btn-primary">Buy It</a>';
                }
                ?>
            <?php 
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