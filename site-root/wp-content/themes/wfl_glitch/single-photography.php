<? $glitch_pageType = "photography"; ?>

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
                $terms = get_the_terms( get_the_ID(), 'subject' );
                         
                if ( $terms && ! is_wp_error( $terms ) ) : 
                 
                    $subject_links = array();
                 
                    foreach ( $terms as $term ) {
                        $subject_links[] = $term->name;
                    }
                                         
                    $subject = join( ", ", $subject_links );
                    ?>
                 
                    <h3 class="glitch_termType fontSize_md">
                        Subject: <?php printf( esc_html__( '%s', 'textdomain' ), esc_html( $subject ) ); ?>
                    </h3>
                <?php endif; ?>
            

                <p class="glitch_termType fontSize_md">Date: <?php echo get_the_date(); ?></p>

                <?php 
                $print_url = get_field("print_url");

                if (get_field("has_print")) {
                    echo '<a href="' . $print_url . '" class="btn btn-primary">Get Prints</a>';
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