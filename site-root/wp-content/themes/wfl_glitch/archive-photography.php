<?php 
    $glitch_pageType = "photography"; 
    get_header(); 
?>
<main id="content">
    <div class="glitch_pageHead">
        <header class="header">
            <h1 class="entry-title">Photography</h1>
        </header>
    </div>
    <div class="glitch_container">
        
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <a href="<?php echo esc_url(get_permalink()) ?>" class="glitch_imageListItem" style="background-image: url('<?php 
                $thumb_url = wp_get_attachment_url( get_post_thumbnail_id(get_the_ID()), 'thumbnail' );
                echo $thumb_url;
            ?>');">
                <div class="glitch_imageListTitle"><h2 class="glitch_termType fontSize_md fontWeight_norm font_lowercase"><?php echo glitch_convertToTermType(get_the_title()); ?>.jpg</h2></div>
            </a>
        <?php endwhile; endif; ?>

        <div class="glitch_column--full">
        <?php get_template_part( 'nav', 'below' ); ?>
        </div>
    </div>

</main>
<?php get_footer(); ?>