<? $glitch_pageType = "records"; ?>

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
                <h3>Project:</h3>
                <?php
                $terms = get_the_terms( get_the_ID(), 'project' );
                         
                if ( $terms && ! is_wp_error( $terms ) ) : 
                 
                    $project_links = array();
                 
                    foreach ( $terms as $term ) {
                        $project_links[] = $term->name;
                    }
                                         
                    $project = join( ", ", $project_links );
                    ?>
                 
                    <p class="glitch_termType fontSize_md">
                        <?php printf( esc_html__( '%s', 'textdomain' ), esc_html( $project ) ); ?>
                    </p>
                <?php endif; ?>

                <p>Date: <?php echo get_the_date(); ?></p>
            </div>
        </header>
        <div class="glitch_column">
            <?php 
                $amazon_url = get_field("amazon_url");
                $itunes_url = get_field("itunes_url");
                $download_file = get_field("download_file");

                if (get_field("amazon_url")) {
                    echo '<a href="' . $amazon_url . '" class="btn btn-primary">Get On Amazon</a>';
                }

                if (get_field("itunes_url")) {
                    echo '<a href="' . $itunes_url . '" class="btn btn-primary">Get On iTunes</a>';
                }

                if (get_field("free_download")) {
                    echo '<a href="' . $download_file . '" class="btn">Free Download</a>';
                }
            ?>

            
            <div class="glitch_trackList">
            <h4>Track listing:</h4>
            <?php
                the_field("track_listing");
            ?>
            </div>

            <h4>Description</h4>
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