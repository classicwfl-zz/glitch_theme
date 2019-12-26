<?php get_header(); ?>
<main id="content">
    <div class="glitch_container">
        <header class="header">
            <h1 class="entry-title"><?php single_term_title(); ?></h1>
            <div class="archive-meta"><?php if ( '' != the_archive_description() ) { echo esc_html( the_archive_description() ); } ?></div>
        </header>
    </div>
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <h2><a href="<?php echo esc_url(get_permalink()) ?>"><?php echo get_the_title(); ?></a> TEST</h2>
    <?php endwhile; endif; ?>
    <?php get_template_part( 'nav', 'below' ); ?>
</main>
<?php get_sidebar(); ?>
<?php get_footer(); ?>