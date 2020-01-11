<?php 
    $glitch_pageType = "search"; 
    get_header(); 
?>
<main id="content">
    <div class="glitch_pageHead">
        <header class="header">
            <h1 class="entry-title"><?php printf( esc_html__( 'Search: %s', 'blankslate' ), get_search_query() ); ?></h1>
        </header>
    </div>
    <div class="glitch_container">
        <div class="glitch_column--full">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
            <div class="glitch_postListItem">
                <div class="glitch_postListTitle"><h2 class="glitch_termType fontSize_md fontWeight_norm font_lowercase"><a href="<?php echo esc_url(get_permalink()) ?>"><?php echo glitch_convertToTermType(get_the_title()); ?></a>.odf</h2></div>
                <div class="glitch_postListDate"><span class="glitch_tabOver glitch_termType"><?php echo get_the_date(); ?></span></div>
            </div>
        <?php endwhile; ?>
        <?php else : ?>
        <h2 class="glitch_termType fontSizeXl center">[no-results; try another search]</h2>
        <?php endif; ?>
        <?php get_template_part( 'nav', 'below' ); ?>
        </div>
    </div>

</main>
<?php get_footer(); ?>

