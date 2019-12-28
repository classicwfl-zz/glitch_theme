<?php
/* Template Name: Featured Projects Page Template */
?>

<?php 
    $glitch_pageType = "page"; 
    get_header(); 
?>
<main id="content">
    <div class="glitch_pageHead">
        <header class="header">
            <h1 class="entry-title"><?php echo get_field("h1"); ?></h1>
            <h2><?php echo get_field("h2") ?></h2>
        </header>
    </div>

    <!--Featured Project -->
    <?php 
    //Here's how this works:
    //This will grab the category name and description (so make sure they are actually filled out) for the categories listed in the custom field, and then perform a loop for the selected post categories.
    $projects = explode(",", get_field("projects"));

    foreach ($projects as $project) {
        $project_title = get_cat_name($project);
        $project_desc = category_description($project);
    ?>
    <div class="glitch_container">
        <div class="glitch_column--full">
            <h3><?php echo $project_title; ?></h3>
            <?php echo $project_desc; ?>
            <?php 
            $args = array(
                'category__in'              => $project,
                'posts_per_page'         => '50',
            );
    
            $project_posts = new WP_Query( $args ); 
            while ($project_posts -> have_posts()) : $project_posts -> the_post(); ?>
            <div class="glitch_postListItem">
                <div class="glitch_postListTitle"><h2 class="glitch_termType fontSize_md fontWeight_norm font_lowercase"><a href="<?php echo esc_url(get_permalink()) ?>"><?php echo glitch_convertToTermType(get_the_title()); ?></a>.odf</h2></div>
                <div class="glitch_postListDate"><span class="glitch_tabOver glitch_termType"><?php the_date() ?></span></div>
            </div>
            <?php endwhile; wp_reset_postdata(); ?>
        </div>
    </div>

    <?php } ?>
    <!--/Featured Project -->


</main>
<?php get_footer(); ?>