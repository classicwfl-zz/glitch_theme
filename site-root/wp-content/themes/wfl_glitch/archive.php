<?php 
    $glitch_pageType = "articles"; 
    get_header(); 
?>
<main id="content">
    <div class="glitch_pageHead">
        <header class="header">
            <h1 class="entry-title">Articles &amp; More</h1>
        </header>
    </div>
    <div class="glitch_container">
        <div class="glitch_column--full">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <div class="glitch_postListItem">
                <div class="glitch_postListTitle"><h2 class="glitch_termType fontSize_md fontWeight_norm font_lowercase"><a href="<?php echo esc_url(get_permalink()) ?>"><?php echo glitch_convertToTermType(get_the_title()); ?></a>.odf</h2></div>
                <div class="glitch_postListDate"><span class="glitch_tabOver glitch_termType"><?php echo get_the_date(); ?></span></div>
            </div>
        <?php endwhile; endif; ?>
        <?php get_template_part( 'nav', 'below' ); ?>
        </div>
    </div>

</main>
<?php get_footer(); ?>